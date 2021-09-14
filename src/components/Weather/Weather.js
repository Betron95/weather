import { useMemo } from 'react';
import 'react-dropdown/style.css';
import { useSelector } from 'react-redux';
import { selectCity, selectAllWeather } from '../../slices/WeatherSlice';
import styles from './Weather.module.scss'

export default function Weather() {
  const city = useSelector(selectCity);
  const allWeather = useSelector(selectAllWeather);
  const weatherForSelectedCityByHours = allWeather?.[city]?.hourly;
  const currentHour = new Date().getHours();
  const endOfDay = useMemo(() => {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0,0,0,0);
    return date;
  }, [])

  return (
    <>
    {weatherForSelectedCityByHours && 
      <div className={styles.weatherContainer}>
        {weatherForSelectedCityByHours.filter(({dt}) => new Date(dt * 1000).getTime() < endOfDay).map(({dt, temp, weather}) => 
          <div className={styles.weatherItem} key={dt}>
            {new Date(dt * 1000).getHours()} <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />{weather[0].main}
            <span>{Math.round(temp)}°C</span>
          </div>
        )}
      </div>
    }
    </>
  );
};
