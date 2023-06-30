import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dishesData } from '../utils/dishes';

export interface Dish {
  name: string;
  image: string;
  recipe: string;
}

export interface DishState {
  dishes: Dish[];
}

const initialState: DishState = {
  dishes: dishesData,
};

const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {},
});

export default dishSlice.reducer;
