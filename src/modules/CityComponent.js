import React from 'react'
import styled from 'styled-components'

/*const CityComponent=styled.div`
display:flex;
flex-direction:column;
`*/
const WeatherLogo=styled.img`
width:200px;
height:200px;
margin:10px;
`
const Name=styled.span`
font-size:1.5rem;
font-weight:bold;
margin-top:40px;
margin-bottom:20px;
`
const SearchBox=styled.form`
& input{
font-size:20px;
border:2px solid black;
border-radius:20px;
}
& button{
  background-color:black;
color:white;
border-radius:20px;
margin:10px;
font-size:1.5rem;
cursor:pointer;
&:hover{
    transform:translate(1.05px,1.05px);
    box-shadow:0px 5px 6px 0px grey;
}
}
`

const CityComponent = (props) => {
  const{updateCity,fetchWeather}=props;
  return (
    <>
     <WeatherLogo src="/icons/perfect-day.svg" />  
     <Name>Enter your city name</Name>
     <SearchBox onSubmit={fetchWeather}>
     <input type="text" placeholder='City' onChange={(e)=>updateCity(e.target.value)}></input>
     <button type="submit">Search</button>
     </SearchBox>
    </>
  )
}

export default CityComponent