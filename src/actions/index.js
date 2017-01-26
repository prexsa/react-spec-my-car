import axios from 'axios';

const API_KEY = '';
const ROOT_URL = 'https://api.edmunds.com/api/vehicle/v2/styles/100481925?view=full&fmt=json&api_key=g5zmftujebdv66cbendfjygd'

export const FETCH_CAR = 'FETCH_CAR';

export function fetchCar(car) {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_CAR,
    payload: request
  }
}