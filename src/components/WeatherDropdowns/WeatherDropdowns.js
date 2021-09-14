import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-dropdown/style.css';

import { CITIES_OPTIONS, COUNRY_SELECT_OPTIONS } from '../../constants';
import DropDown from '../DropDown/DropDown';
import styles from './WeatherDropdowns.module.scss';
import { getWeatherIfNotExist, selectCity, selectCountry, setCity, setCountry } from '../../slices/WeatherSlice';

export default function WeatherDropdowns() {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const city = useSelector(selectCity);

  const onSelectCountry = ({ value }) => {
    if(country !== value) {
      dispatch(setCountry(value));
      dispatch(setCity(null));
    };
  };

  const onSelectCity = ({ value }) => {
    dispatch(setCity(value));
  }

  useEffect(() => {
    if(country && city) {
      dispatch(getWeatherIfNotExist(country, city));
    }
  }, [dispatch, country, city])

  return (
    <div className={styles.dropdownsContainer}>
      <DropDown options={COUNRY_SELECT_OPTIONS} value={country} onChange={onSelectCountry} />
      <DropDown options={CITIES_OPTIONS[country] || []} value={city} onChange={onSelectCity} />
  </div>
  );
};
