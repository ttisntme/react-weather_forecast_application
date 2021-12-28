import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';
// import {Route, HashRouter, Routes} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";

const api = {
  key: "eb576274c447b166a7c6ee2688deb2c9",
  base: "https://pro.openweathermap.org/data/2.5/"
}

function checkDay(d) {  
  return () => {    // return a arrow function ! and we give the return function to the onclick
    console.log("in check function,d=" + d);
    localStorage.removeItem('day');
    localStorage.setItem('day', d);
  };
}

function Home() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  var c = "none";

  const search = evt => {
    console.log("in search function");
    if (evt.key === "Enter") {
      c = document.getElementById("inputCity").value;
      localStorage.removeItem('city');
      localStorage.setItem('city', c);
      console.log("input city: " + c);

      fetch(`${api.base}forecast/daily?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d, i) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[(d.getDay() + i)%7];
    let date = d.getDate() + i;
    let month = months[d.getMonth()];
    if(date > 30) {
      date = date - 30;
      month = months[(d.getMonth() + 1)%12];
    }
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  var buttonStyle = {
    backgroundColor:  "#bebebe",
    // color: "#ffffff"
  };


  return (
    <div className={(typeof weather.list != "undefined") ? ((weather.list[0].temp.eve > 16) ? 'app warm' : 'app') : 'app'}>
      <main>

      
      <div className="search-box">
        <input 
          id = "inputCity"
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      {(typeof weather.list != "undefined") ? (
      
      <div>
        
        <div className="location-box">
          <div className="location">{weather.city.name}, {weather.city.country}</div>
        </div>
        <div className="title">
          Weather Forecast 
          <br></br>
          In Next 5 Days
        </div>
        <br></br>
        <div className="date">{dateBuilder(new Date(), 1)}</div>

        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.list[0].temp.min)}°c  ~ {Math.round(weather.list[0].temp.max)}°c 
          </div>
          <div className="weather">{weather.list[0].weather[0].main}</div>
          <div className={(typeof weather.list != "undefined") ? ((weather.list[0].weather[0].main === "Rain") ? 'no rain' : ((weather.list[0].weather[0].main === "Clouds") ? 'no clouds' : ((weather.list[0].weather[0].main === "Snow") ? 'no snow' : ((weather.list[0].weather[0].main === "Clear") ? 'no clear' : 'no')))) : 'no'}>
          </div>
          <div>
            {/* <Button style={buttonStyle} onClick={handleClickTo1}>Day1 detail forecast</Button> */}
            {/* <ul className = 'header'>
              <li><NavLink to = "/day1">toDay1</NavLink></li>
            </ul> */}
            <Button style={buttonStyle} onClick={checkDay(1)}>
              <Link to="/oneDay">Day1 weather detail</Link>
            </Button>
          </div>
        </div>
         
        <br></br><br></br>
        <div className="date">{dateBuilder(new Date(), 2)}</div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.list[1].temp.min)}°c  ~ {Math.round(weather.list[1].temp.max)}°c 
          </div>
          <div className="weather">{weather.list[1].weather[0].main}</div>
          <div className={(typeof weather.list != "undefined") ? ((weather.list[1].weather[0].main === "Rain") ? 'no rain' : ((weather.list[1].weather[0].main === "Clouds") ? 'no clouds' : ((weather.list[1].weather[0].main === "Snow") ? 'no snow' : ((weather.list[1].weather[0].main === "Clear") ? 'no clear' : 'no')))) : 'no'}>
          </div>
          <div>
            <Button style={buttonStyle} onClick={checkDay(2)}>
              <Link to="/oneDay">Day2 weather detail</Link>
            </Button>
          </div>
        </div>

        <br></br><br></br><br></br>
        <div className="date">{dateBuilder(new Date(), 3)}</div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.list[2].temp.min)}°c  ~ {Math.round(weather.list[2].temp.max)}°c 
          </div>
          <div className="weather">{weather.list[2].weather[0].main}</div>
          <div className={(typeof weather.list != "undefined") ? ((weather.list[2].weather[0].main === "Rain") ? 'no rain' : ((weather.list[2].weather[0].main === "Clouds") ? 'no clouds' : ((weather.list[2].weather[0].main === "Snow") ? 'no snow' : ((weather.list[2].weather[0].main === "Clear") ? 'no clear' : 'no')))) : 'no'}>
          </div>
          <div>
            <Button style={buttonStyle} onClick={checkDay(3)}>
              <Link to="/oneDay">Day3 weather detail</Link>
            </Button>
          </div>
        </div>

        <br></br><br></br><br></br>
        <div className="date">{dateBuilder(new Date(), 4)}</div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.list[3].temp.min)}°c  ~ {Math.round(weather.list[3].temp.max)}°c 
          </div>
          <div className="weather">{weather.list[3].weather[0].main}</div>
          <div className={(typeof weather.list != "undefined") ? ((weather.list[3].weather[0].main === "Rain") ? 'no rain' : ((weather.list[3].weather[0].main === "Clouds") ? 'no clouds' : ((weather.list[3].weather[0].main === "Snow") ? 'no snow' : ((weather.list[3].weather[0].main === "Clear") ? 'no clear' : 'no')))) : 'no'}>
          </div>
          <div>
            <Button style={buttonStyle} onClick={checkDay(4)}>
              <Link to="/oneDay">Day4 weather detail</Link>
            </Button>
          </div>
        </div>

        <br></br><br></br><br></br>
        <div className="date">{dateBuilder(new Date(), 5)}</div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.list[4].temp.min)}°c  ~ {Math.round(weather.list[4].temp.max)}°c 
          </div>
          <div className="weather">{weather.list[4].weather[0].main}</div>
          <div className={(typeof weather.list != "undefined") ? ((weather.list[4].weather[0].main === "Rain") ? 'no rain' : ((weather.list[4].weather[0].main === "Clouds") ? 'no clouds' : ((weather.list[4].weather[0].main === "Snow") ? 'no snow' : ((weather.list[4].weather[0].main === "Clear") ? 'no clear' : 'no')))) : 'no'}>
          </div>
          <div>
            <Button style={buttonStyle} onClick={checkDay(5)}>
              <Link to="/day5">Day5 weather detail</Link>
            </Button>
          </div>
        </div>


      </div>
      ) : ('')}

      </main>
    </div>
  );
}



export default Home;