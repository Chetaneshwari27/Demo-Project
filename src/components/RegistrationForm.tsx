//---------------------------------------------------------------------
//-------------------local and session choice----------------

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Container, Typography, FormControlLabel, Switch } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Navbar = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '10px',
});

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: "'Caveat', cursive",
});

const StyledTypography = styled(Typography)({
  marginBottom: '1rem',
  fontFamily: "'Caveat', cursive",
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const StyledButton = styled(Button)({
  width: '150px',
  fontFamily: "'Caveat', cursive",
  backgroundColor:"salmon",

});

interface RegistrationFormProps {
  onLogin: () => void;
}

interface RegistrationFormState {
  username: string;
  email: string;
  password: string;
  useLocalStorage: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegistrationFormState>({
    username: '',
    email: '',
    password: '',
    useLocalStorage: true, // Default to local storage
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const storage = formData.useLocalStorage ? localStorage : sessionStorage;
      storage.setItem('registrationData', JSON.stringify(formData));
      onLogin();
      navigate('/login');
    } catch (error) {
      console.log('Registration failed:', error);
    }
  };

  return (
    <StyledContainer>
      <Navbar>
        <FastfoodIcon/>
      </Navbar>
      <h1 style={{ fontWeight: 'bold', textShadow: '2px 2px grey' }}>
        Oops! Seems like you are not registered. Please register first.
      </h1>
      <StyledTypography variant="h4">
        Registration<TagFacesIcon />
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Username" name="username" value={formData.username} onChange={handleChange} />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Switch
              checked={formData.useLocalStorage}
              onChange={handleChange}
              name="useLocalStorage"
              color="primary"
            />
          }
          label="Use Local Storage"
        />
        <StyledButton variant="contained" type="submit">
          Register
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default RegistrationForm;
//-------------------------------------------------------------------------------------

//----------------------------with cookies---------------------------
// import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { styled } from '@mui/system';
// import { TextField, Button, Container, Typography, FormControlLabel, Switch } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../store/authSlice';
// import { useNavigate } from 'react-router-dom';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import { SetCookies } from './cookies';

// const StyledContainer = styled(Container)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   fontFamily: "'Caveat', cursive",
// });

// const StyledTypography = styled(Typography)({
//   marginBottom: '1rem',
//   fontFamily: "'Caveat', cursive",
// });

// const StyledForm = styled('form')({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1rem',
// });

// const StyledButton = styled(Button)({
//   width: '150px',
//   fontFamily: "'Caveat', cursive",
//   backgroundColor: 'salmon',
// });

// interface RegistrationFormProps {
//   onLogin: () => void;
// }

// interface RegistrationFormState {
//   username: string;
//   email: string;
//   password: string;
//   storageOption: 'local' | 'session' | 'cookie';
// }

// const RegistrationForm: React.FC<RegistrationFormProps> = ({ onLogin }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState<RegistrationFormState>({
//     username: '',
//     email: '',
//     password: '',
//     storageOption: 'local',
//   });

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;
//     setFormData((prevState) => ({ ...prevState, [name]: newValue }));
//   };

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     try {
//       const { username, email, password, storageOption } = formData;
//       const registrationData = { username, email, password };

//       switch (storageOption) {
//         case 'local':
//           localStorage.setItem('registrationData', JSON.stringify(registrationData));
//           break;
//         case 'session':
//           sessionStorage.setItem('registrationData', JSON.stringify(registrationData));
//           break;
//         case 'cookie':
//           SetCookies({ name: 'registrationData', value: JSON.stringify(registrationData) });
//           break;
//       }
//       onLogin();
//       navigate('/login');
//     } catch (error) {
//       console.log('Registration failed:', error);
//     }
//   };

//   return (
//     <StyledContainer>
//       <h1 style={{ fontWeight: 'bold', textShadow: '2px 2px grey' }}>
//         Oops! Seems like you are not registered. Please register first.
//       </h1>
//       <StyledTypography variant="h4">
//         Registration<TagFacesIcon />
//       </StyledTypography>
//       <StyledForm onSubmit={handleSubmit}>
//         <TextField label="Username" name="username" value={formData.username} onChange={handleChange} />
//         <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
//         <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
//         <FormControlLabel
//           control={
//             <Switch
//               defaultChecked={formData.storageOption === 'cookie'}
//               onChange={handleChange}
//               name="storageOption"
//               value="cookie"
//               color="primary"
//             />
//           }
//           label="Use Cookies"
//         />
//         <StyledButton variant="contained" type="submit">
//           Register
//         </StyledButton>
//       </StyledForm>
//     </StyledContainer>
//   );
// };

// export default RegistrationForm;