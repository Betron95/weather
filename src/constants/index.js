export const BELARUS_COUNTRY_CODE = 'by';
export const RUSSIA_COUNTRY_CODE = 'ru';

export const COUNRY_SELECT_OPTIONS = [
  { value: BELARUS_COUNTRY_CODE, label: 'Belarus' },
  { value: RUSSIA_COUNTRY_CODE, label: 'Russia' },
]


export const BELARUS_CITIES_OPTIONS = [
  { value: '625144', label: 'Minsk', coords: {
    "lon": 27.566668,
    "lat": 53.900002
  } },
  { value: '618806', label: 'Zhlobin', coords: {
    "lon": 30.024,
    "lat": 52.892601
  } },
]

export const RUSSIA_CITIES_OPTIONS = [
  { value: '524894', label: 'Moscow', coords: {
    "lon": 37.615555,
    "lat": 55.75222
  }},
  { value: '511196', label: 'Perm', coords: {
    "lon": 56.285519,
    "lat": 58.01741
  }},
]

export const CITIES_OPTIONS = {
  [BELARUS_COUNTRY_CODE]: BELARUS_CITIES_OPTIONS,
  [RUSSIA_COUNTRY_CODE]: RUSSIA_CITIES_OPTIONS,
};

export const OPEN_WEATHER_API_KEY = '9e1de8c8b618208c91eb788b101b84d7';