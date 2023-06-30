import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecipeDetailsPage: React.FC = () => {
  const { dishName } = useParams<{ dishName: string }>();
  const dishes = useSelector((state: RootState) => state.dish.dishes);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home');
  };

  const dish = dishes.find((dish) => dish.name === dishName);

  if (!dish) {
    return <Typography variant="h6">Recipe not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{dish.name}</Typography>
      <Typography variant="body1">{dish.recipe}</Typography>
      <Button variant="outlined" color="primary" onClick={handleGoBack} style={{ marginTop: '20px' }}>
        Go Back
      </Button>
    </div>
  );
};

export default RecipeDetailsPage;