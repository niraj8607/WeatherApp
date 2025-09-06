import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    
    const Image_INIT = "https://images.unsplash.com/photo-1641907173012-5bb6850079e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXIlMjBjbGVhbnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1699932489226-d738c32a1490?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";
    // let info = {
    //     city : "Delhi",
    //     feelslike : 24.84,
    //     temp : 25.5,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidity : 47,
    //     weather : "haze"
    // }
    return(
        <div className="InfoBox">
        <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"div"}>
          <p>Temperature = {info.temp}&deg;C </p>
          <p>Humidity = {info.humidity} </p>
          <p>Min Temp ={info.tempMin}&deg;C </p>
          <p>Max Temp = {info.tempMax}&deg;C </p>
          <p>The weather can be described as  {info.weather} and feels like {`${info.feelslike}°C`}</p>
        </Typography>
      </CardContent>
      </Card>
            </div>
        </div>

        
    );
};