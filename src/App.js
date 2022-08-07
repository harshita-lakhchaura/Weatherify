import React,{useState} from 'react';
import './App.css';
import Axios from 'axios';
import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent';



const Container=styled.div`
display:flex;
flex-direction:column;
margin:auto;
margin-top:15px;
align-items:center;
box-shadow:0px 5px 6px 0px black;
padding:20px 10px;
border-radius:20px;
width:500px;
height:500px;
font-family: 'Roboto Condensed', sans-serif;
background-color:white;
`

const AppLabel=styled.span`
color:black;
font-size:3.5rem;
font-weight:bold;
padding:20px;
`

function App() {
  const[city,updateCity]=useState();
  const[weather,updateWeather]=useState();

  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response= await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19fe116b00cc254128a99eef580c7327`)
    updateWeather(response.data);
  }
  return (
    <Container>
      <AppLabel>Weatherify</AppLabel>
      {weather?(<WeatherComponent weather={weather} city={city}/>):(<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>)}
    </Container>
  );
}

export default App;
