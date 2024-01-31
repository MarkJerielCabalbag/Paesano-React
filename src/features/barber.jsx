import { configureStore, createSlice } from "@reduxjs/toolkit";
import book from "../pages/book/book";
const initialState = {
  value: {
    barbers: [],
    user: [],
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    chooseBarber: (state, action) => {
      const selectedBarber = book.find(
        (barber) => barber.id === action.payload
      );
      state.value.barbers.push({ ...book, selectedBarber });
    },
    resetBarbers: (state) => {
      state.value.barbers = initialState.value.barbers;
    },
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInformation: (state, action) => {
      state.value.barbers.push([state.value.user, ...action.payload]);
    },
  },
});

export const { chooseBarber, resetBarbers } = bookSlice.actions;
export const { addInformation } = userSlice.actions;
export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    user: userSlice.reducer,
  },
});
