// actions/appDataActions.js
import { createAction } from '@reduxjs/toolkit';

// Buat tindakan Redux untuk menyimpan appData
export const setAppData = createAction('appData/set', (data) => ({
  payload: data,
}));
