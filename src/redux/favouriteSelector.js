import { createSelector } from '@reduxjs/toolkit';

const selectFav = state => state.fav;

export const selectFavArr = createSelector(selectFav, fav => fav.favourites);
export const selectFavIsLoading = createSelector(
  selectFav,
  fav => fav.isLoading
);
export const selectFavError = createSelector(selectFav, fav => fav.error);
export const selectFavId = createSelector(selectFav, fav => fav.isFavourite);
