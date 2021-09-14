import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CITIES_OPTIONS, COUNRY_SELECT_OPTIONS, OPEN_WEATHER_API_KEY } from '../constants';

const initialState = {
  country: COUNRY_SELECT_OPTIONS[0].value,
  city: '',
  allWeather: {},
};

export const getWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({country, city}) => {
    const cords = CITIES_OPTIONS[country].find(({value})=> value === city).coords;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cords.lat}&lon=${cords.lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
    .then(response => response.json());
    return {city, response};
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, {payload: {city, response}}) => {
        state.allWeather[city] = response;
      });
    },
  },
);

export const { setCountry, setCity } = weatherSlice.actions;

export const selectCountry = (state) => state.weather.country;
export const selectCity = (state) => state.weather.city;
export const selectAllWeather = (state) => state.weather.allWeather;

export const getWeatherIfNotExist = (country, city) => (dispatch, getState) => {
  const weather = selectAllWeather(getState());
  if (!weather?.[city]) {
    dispatch(getWeather({country, city}));
  }
};

export default weatherSlice.reducer;
