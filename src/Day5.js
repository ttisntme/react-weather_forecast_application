import React from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core';

const api = {
    key: "d8341e3dee8305f4d3cb8cedee62b3d9",
    // base: "https://pro.openweathermap.org/data/2.5/"
    base: "https://api.openweathermap.org/data/2.5/"
  }

function Day5() {
    var city = localStorage.getItem('city');
    const num = localStorage.getItem('day') - '0';
    console.log("city: " + city + ",  day: " + num);

    const [weather, setWeather] = useState({});

    const goFetch = () => {
        //    fetch(`${api.base}forecast/hourly?q=${city}&units=metric&APPID=${api.key}`)
           fetch(`${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result);
            console.log(result);
            }); 
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
        backgroundColor:  "white",
        color: "#000"
    };

    return(
            <div className="app">
            <main>
                Hourly Weather Forecast In One Day
                <div className="date">{dateBuilder(new Date(), num)}</div>

                <div>
                    <Button style={buttonStyle} onClick={goFetch}>Refresh </Button>
                </div>
                {(typeof weather.list != "undefined") ? (
                <div>
                    
                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[0 + (num-1)*8].dt_txt} {weather.list[0 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[0 + (num-1)*8].main.temp_min}??c  ~ {weather.list[0 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[1 + (num-1)*8].dt_txt} {weather.list[1 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[1 + (num-1)*8].main.temp_min}??c  ~ {weather.list[1 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[2 + (num-1)*8].dt_txt} {weather.list[2 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[2 + (num-1)*8].main.temp_min}??c  ~ {weather.list[2 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[3 + (num-1)*8].dt_txt} {weather.list[3 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[3 + (num-1)*8].main.temp_min}??c  ~ {weather.list[3 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[4 + (num-1)*8].dt_txt} {weather.list[4 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[4 + (num-1)*8].main.temp_min}??c  ~ {weather.list[4 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[5 + (num-1)*8].dt_txt} {weather.list[5 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[5 + (num-1)*8].main.temp_min}??c  ~ {weather.list[5 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[6 + (num-1)*8].dt_txt} {weather.list[6 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[6 + (num-1)*8].main.temp_min}??c  ~ {weather.list[6 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>

                    <div className="weather-box-hour">
                        <div className="info-hour">{weather.list[7 + (num-1)*8].dt_txt} {weather.list[7 + (num-1)*8].weather[0].main}</div>
                        <div className="temp-hour">
                            {weather.list[7 + (num-1)*8].main.temp_min}??c  ~ {weather.list[7 + (num-1)*8].main.temp_max}??c 
                        </div>
                    </div>


                </div>
                ) : ('')}

            </main>
        </div>
    )
}

export default Day5;