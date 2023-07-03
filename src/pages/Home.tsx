// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
// import { Grid, Typography, Card, CardMedia, CardContent, Button, TextField } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import { Link } from 'react-router-dom';

// interface DishPageProps {
//   onLogout: () => void;
// }

// const DishPage: React.FC<DishPageProps> = ({ onLogout }) => {
//   const dishes = useSelector((state: RootState) => state.dish.dishes);
//   const [expandedDish, setExpandedDish] = useState<string | null>(null);
//   const [searchText, setSearchText] = useState<string>('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     toast.info('Logged Out');
//     navigate('/login');
//   };

//   const handleToggleExpand = (dishName: string) => {
//     setExpandedDish((prevState) => (prevState === dishName ? null : dishName));
//   };

//   const handleSearch = () => {
//     // Filter the dishes based on the search text
//     const matchedDish = dishes.find((dish) =>
//       dish.name.toLowerCase().includes(searchText.toLowerCase())
//     );

//     // Set the matched dish as the only dish to display
//     setExpandedDish(matchedDish ? matchedDish.name : null);
//   };

//   const card = {
//     marginBottom: '40px',
//     height: '250px',
//     fontFamily: "'Caveat', cursive",
//     backgroundColor: "#FB966E",
//     width: "300px",
//     textAlign: "center",
//     boxShadow: '10px 5px 5px #a55233',
//   };
//   const button = {
//     height: "25px",
//     marginTop: "0.3rem",
//     fontFamily: "'Caveat', cursive",
//     backgroundColor: "salmon",
//     borderColor: "white",
//     color: "white",
//   }
//   const searchButton = {
//     backgroundColor: "salmon",
//     borderColor: "white",
//     color: "white",
//     fontFamily: "'Caveat', cursive",
//     marginTop: "15px",
//     height: "25px",
//   }
//   const navbar = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'transparent',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     padding: '10px',
//   }

//   const displayedDishes = searchText ? [dishes.find((dish) => dish.name === expandedDish)].filter(Boolean) : dishes;

//   return (
//     <div>
//       <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', }}>
//         <div>
//           <FastfoodIcon />
//         </div>
//         <Button variant="contained" onClick={handleLogout} style={{ backgroundColor: "salmon", width: "70px", fontFamily: "'Caveat', cursive" }}>Logout</Button>
//       </div>
//       <div style={{ paddingTop: '50px', paddingLeft: "40px" }}>
//         <h1 style={{ textAlign: "center" }}>Welcome to my Recipe Page</h1>
//         <TextField
//           label="Search Recipe"
//           variant="outlined"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           style={{ marginBottom: '20px', borderColor: "salmon", marginLeft: "400px" }}
//         />
//         <Button variant="contained" color="primary" onClick={handleSearch} sx={searchButton}>
//           Search
//         </Button>
//         <Grid container spacing={2}>
//           {displayedDishes.map((dish, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={card}>
//                 <CardMedia component="img" height="150" image={dish?.image} alt={dish?.name} />
//                 <CardContent>
//                   <Typography variant="h5" component="div" style={{ fontFamily: "'Caveat', cursive" }}>
//                     {dish?.name}
//                   </Typography>
//                   {expandedDish === dish?.name && (
//                     <Typography variant="body2" color="text.secondary" style={{ fontFamily: "'Caveat', cursive" }}>
//                       {dish?.recipe}
//                     </Typography>
//                   )}
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     onClick={() => handleToggleExpand(dish?.name || '')}
//                     sx={button}
//                   >
//                     View Recipe
//                   </Button>
//                 </CardContent>
//                 {expandedDish === dish?.name && (
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary" style={{ fontFamily: "'Caveat', cursive" }}>
//                       {dish?.recipe}
//                     </Typography>
//                   </CardContent>
//                 )}
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default DishPage;

//-----------------------------------------------

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Grid, Typography, Card, CardMedia, CardContent, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';

interface DishPageProps {
  onLogout: () => void;
}

const DishPage: React.FC<DishPageProps> = ({ onLogout }) => {
  const dishes = useSelector((state: RootState) => state.dish.dishes);
  const [expandedDish, setExpandedDish] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    toast.info('Logged Out');
    navigate('/login');
  };

  const handleToggleExpand = (dishName: string) => {
    setExpandedDish((prevState) => (prevState === dishName ? null : dishName));
  };

  const handleSearch = () => {
    // Filter the dishes based on the search text
    const matchedDish = dishes.find((dish) =>
      dish.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Set the matched dish as the only dish to display
    setExpandedDish(matchedDish ? matchedDish.name : null);
  };

  const card = {
    marginBottom: '40px',
    height: '250px',
    fontFamily: "'Caveat', cursive",
    backgroundColor: "#FB966E",
    width: "300px",
    textAlign: "center",
    boxShadow: '10px 5px 5px #a55233',
  };
  const button = {
    height: "25px",
    marginTop: "0.3rem",
    fontFamily: "'Caveat', cursive",
    backgroundColor: "salmon",
    borderColor: "white",
    color: "white",
  }
  const searchButton = {
    backgroundColor: "salmon",
    borderColor: "white",
    color: "white",
    fontFamily: "'Caveat', cursive",
    marginTop: "15px",
    height: "25px",
  }
  const navbar = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
  }

  const displayedDishes = searchText ? [dishes.find((dish) => dish.name === expandedDish)].filter(Boolean) : dishes;

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', }}>
        <div>
          <FastfoodIcon />
        </div>
        <Button variant="contained" onClick={handleLogout} style={{ backgroundColor: "salmon", width: "70px", fontFamily: "'Caveat', cursive" }}>Logout</Button>
      </div>
      <div style={{ paddingTop: '50px', paddingLeft: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Welcome to my Recipe Page</h1>
        <TextField
          label="Search Recipe"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ marginBottom: '20px', borderColor: "salmon", marginLeft: "400px" }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} sx={searchButton}>
          Search
        </Button>
        <Grid container spacing={2}>
          {displayedDishes.map((dish, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to={`/recipes/${dish?.name}`} style={{ textDecoration: 'none' }}>
                <Card sx={card}>
                  <CardMedia component="img" height="150" image={dish?.image} alt={dish?.name} />
                  <CardContent>
                    <Typography variant="h5" component="div" style={{ fontFamily: "'Caveat', cursive" }}>
                      {dish?.name}
                    </Typography>
                    <Button variant="outlined" color="primary" sx={button}>
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

      </div>
    </div>
  );
};

export default DishPage;