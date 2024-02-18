import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.cars;

export const selectAllCarsArr = createSelector(selectCars, car => car.allCars);
export const selectCarsIsLoading = createSelector(
  selectCars,
  cars => cars.isLoading
);
export const selectCarsError = createSelector(selectCars, cars => cars.error);
