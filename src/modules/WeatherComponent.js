import React from 'react'
import styled from 'styled-components'

const WeatherInfoIcon={
  sunrise:'/icons/temp.svg',
  sunset:'/icons/temp.svg',
  humidity:'/icons/humidity.svg',
  wind:'/icons/wind.svg',
  pressure:'/icons/pressure.svg',
}
const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50d": "/icons/mist.svg",
  "50n": "/icons/mist.svg",
};

const WeatherCondition=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:30px auto;
`
const Condition=styled.span`

font-size:25px;
align-items:center;
justify-content:center;
margin:20px auto;
& span{
    font-size:40px;
}
`
const WeatherLogo=styled.img`
width:100px;
height:100px;
margin:10px auto;
`
const Location=styled.span`
font-size:30px;
font-weight:bold;
margin-bottom:5px;
`
const WeatherInfo=styled.span`
font-size:20px;
font-weight:bold;
margin:5px;
text-align:start;
width:90%;
`

const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  margin-top:-15px;
  padding:20px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const {name, value} = props;
  return (
      <InfoContainer>
          <InfoIcon src={WeatherInfoIcon[name]}/>
          <InfoLabel>
              {value}
              <span>{name}</span>
          </InfoLabel>
      </InfoContainer>
  );
};

export default function WeatherComponent(props) {
  const{weather}=props;
  const isDay=weather?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
}
  return (
    <>
    <WeatherCondition>
    <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />  
    </WeatherCondition>
    <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
    <WeatherInfo>Weather Info:-</WeatherInfo>
    <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
    </>
  )
}
