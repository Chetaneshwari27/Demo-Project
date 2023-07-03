import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

interface Dish {
  name: string;
  image: string;
  recipe: string;
}

interface RecipeDetailsPageProps {
  dishes: Dish[];
}

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({ dishes }) => {
  const { dishName } = useParams();
  const navigate=useNavigate()

  // Find the dish with the matching dishName
  const dish = dishes.find((dish) => dish.name === dishName);
  const handleGoBack=()=>{
    navigate('/home')
  }

  if (!dish) {
    return <div>Sorry, the dish could not be found.</div>;
  }

  return (
    <div>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{backgroundColor:"salmon"}} onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Caveat', cursive", }}>
            Go Back
          </Typography>
        </Toolbar>
      </AppBar>
    <div style={{ display: 'flex' , alignItems:"center", marginTop:"0"}}>
      <div style={{ flex: '0 0 500px', marginLeft: '100px' }}>
        <h2>{dish.name}</h2>
        <img src={dish.image} alt={dish.name} />
      </div>
      <div>
        <h2>Recipe Details</h2>
        <p>{dish.recipe}</p>
      </div>
    </div>
    </div>
  );
};

export default RecipeDetailsPage;
