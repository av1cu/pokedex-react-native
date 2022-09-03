import { configureStore } from '@reduxjs/toolkit';
import main from './reducer';

export const store = configureStore({
  reducer: {
    main: main,
  },
});
