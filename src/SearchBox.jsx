import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY; 
    
    const getWeatherInfo = async () =>{
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
       const data = await response.json();

       let result = {
           city : city,
           temp : data.main.temp,
           tempMin : data.main.temp_min,
           tempMax : data.main.temp_max,
           humidity : data.main.humidity,
           feelsLike : data.main.feels_like,
           weather : data.weather[0].description

       }
       console.log(result);
       return result;
    }

    const handleCity = (event)=>{
        setCity(event.target.value);
    };

    const handleSubmit =async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
      let newinfo =  await getWeatherInfo();
      updateInfo(newinfo);
    };


  return (
    <>
      <form className="SearchBox" onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={handleCity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </>
  );
};