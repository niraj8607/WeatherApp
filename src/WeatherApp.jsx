import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const[weatherInfo,setweatherInfo] = useState({
        city : "Wanderland",
        feelslike : 24.84,
        temp : 25.5,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze"
    });

     let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
     };


    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App by Niraj Kumar</h1>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info = {weatherInfo}/>

        </div>
    )
}