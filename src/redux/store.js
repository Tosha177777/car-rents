import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favReducer } from './favouriteReducer';
import { catalogReducer } from './catalogReducer';

const favConfig = {
  key: 'fav',
  version: 1,
  storage,
  whitelist: ['favourites'],
};

const catalogConfig = {
  key: 'catalog',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  catalog: persistReducer(catalogConfig, catalogReducer),
  fav: persistReducer(favConfig, favReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);
export { persistor, store };
