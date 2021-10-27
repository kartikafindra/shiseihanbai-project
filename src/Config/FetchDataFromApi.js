import axios from 'axios';
export async function fetchDataFromAPI() {
  let data = await axios.get(
    'https://script.google.com/macros/s/AKfycbzv0oZrg2-tfgsCV74iNI0KrOfNoVn8YI6dHJPWTr-xKqJ47E0p/exec'
  );

  return data.data
}