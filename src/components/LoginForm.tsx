// //-------------------with local and session choice----------------

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from '@mui/system';
import { TextField, Button, Container, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  height: '90vh',
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
  backgroundColor: "salmon",
});

interface LoginFormProps {
  onLogin: () => void;
}

interface LoginFormState {
  username: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormState>({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const storedData = formData.rememberMe ? localStorage.getItem('registrationData') : sessionStorage.getItem('registrationData');
      const registrationData = storedData ? JSON.parse(storedData) : null;
      if (
        registrationData &&
        formData.username === registrationData.username &&
        formData.password === registrationData.password
      ) {
        onLogin();
        toast.success('Login successfully');
        navigate('/home');
      } 
      else if(registrationData && 
        formData.username === registrationData.username &&
        formData.password !== registrationData.password){
          toast.info('Wrong password')
          navigate('/login')
        }
      else {
        toast.error('Invalid username or password');
        navigate('/register');
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
  };
  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <StyledContainer>
      <Navbar>
        <FastfoodIcon />
      </Navbar>
      <h1 style={{ fontWeight: 'bold', textShadow: '2px 2px grey' }}>
        Hello user! Please login to explore the Recipes
      </h1>
      <StyledTypography variant="h4">
        Login<TagFacesIcon />
      </StyledTypography>
      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Username" name="username" value={formData.username} onChange={handleChange} style={{}} />
        <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox checked={formData.rememberMe} onChange={handleChange} name="rememberMe" />}
          label="Remember me"
        />
        <StyledButton variant="contained" type="submit">
          Login
        </StyledButton>
        <StyledTypography variant='h5'>New to my Recipes</StyledTypography>
        <StyledButton onClick={handleRegister} style={{ color: "white" }}>Register now</StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginForm;

//-------------------------------------------------------------------------------------
//-----------------------------cookies-----------------------------------------
// import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { styled } from '@mui/system';
// import { TextField, Button, Container, Typography, FormControlLabel, Checkbox } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../store/authSlice';
// import { useNavigate } from 'react-router-dom';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GetCookies } from './cookies';

// const StyledContainer = styled(Container)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '90vh',
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

// interface LoginFormProps {
//   onLogin: () => void;
// }

// interface LoginFormState {
//   username: string;
//   password: string;
//   storageOption: 'local' | 'session' | 'cookie';
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState<LoginFormState>({
//     username: '',
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
//       const { username, password, storageOption } = formData;
//       let storedData = null;

//       switch (storageOption) {
//         case 'local':
//           storedData = localStorage.getItem('registrationData');
//           break;
//         case 'session':
//           storedData = sessionStorage.getItem('registrationData');
//           break;
//         case 'cookie':
//           storedData = GetCookies('registrationData');
//           break;
//       }

//       const registrationData = storedData ? JSON.parse(storedData) : null;

//       if (registrationData && username === registrationData.username && password === registrationData.password) {
//         onLogin();
//         toast.success('Login successful');
//         navigate('/home');
//       } else {
//         toast.error('Invalid username or password');
//         navigate('/register');
//       }
//     } catch (error) {
//       console.log('Login failed:', error);
//     }
//   };

//   return (
//     <StyledContainer>
//       <h1 style={{ fontWeight: 'bold', textShadow: '2px 2px grey' }}>
//         Hello user! Please login to explore the Recipes
//       </h1>
//       <StyledTypography variant="h4">
//         Login<TagFacesIcon />
//       </StyledTypography>
//       <StyledForm onSubmit={handleSubmit}>
//         <TextField label="Username" name="username" value={formData.username} onChange={handleChange} />
//         <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
//         <FormControlLabel
//           control={
//             <Checkbox
//               defaultChecked={formData.storageOption === 'cookie'}
//               onChange={handleChange}
//               name="storageOption"
//               value="cookie"
//             />
//           }
//           label="Remember me (Cookie)"
//         />
//         <StyledButton variant="contained" type="submit">
//           Login
//         </StyledButton>
//       </StyledForm>
//     </StyledContainer>
//   );
// };

// export default LoginForm;