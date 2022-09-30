import axios from 'axios';
import { useState, useEffect } from 'react'

const Weather = (props) => {

    const [weather, setWeather] = 
        useState(
            {
            "latitude": 0,
            "longitude": 0,
            "generationtime_ms": 0,
            "utc_offset_seconds": 0,
            "timezone": "",
            "timezone_abbreviation": "",
            "elevation": 0,
            "current_weather":
            { 
                "temperature": 0,
                "windspeed": 0,
                "winddirection": 0,
                "weathercode": 0,
                "time": ""
            },
            "hourly_units": 
            {
                "time": "",
                "temperature_2m": ""
            },
            "hourly": {
                "time":[]
            }

        })
    
    useEffect(() => {
        let lat = props.country.capitalInfo.latlng[0]
        let lon = props.country.capitalInfo.latlng[1]
        console.log(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&hourly=temperature_2m`)
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&hourly=temperature_2m`)
        .then(res => {
            console.log(res.data)
            setWeather(res.data)
            console.log(weather)
    })
    .catch(err => console.log(err))
    }, [])

    return ( 
            <div>
            <h2>Weather in {props.country.capital}</h2>

            <div>Temperature {weather.current_weather.temperature} {weather.hourly_units.temperature_2m}</div>
            <div>Wind speed {weather.current_weather.windspeed} km/h</div>
            
        </div>
        )
}

export default Weather

/*
    public class Weather
    {
        public float latitude { get; set; }
        public float longitude { get; set; }
        public float generationtime_ms { get; set; }
        public int utc_offset_seconds { get; set; }
        public string timezone { get; set; }
        public string timezone_abbreviation { get; set; }
        public float elevation { get; set; }
        public Current_Weather current_weather { get; set; }
        public Hourly_Units hourly_units { get; set; }
        public Hourly hourly { get; set; }
    }

    public class Current_Weather
    {
        public float temperature { get; set; }
        public float windspeed { get; set; }
        public float winddirection { get; set; }
        public float weathercode { get; set; }
        public string time { get; set; }
    }

    public class Hourly_Units
    {
        public string time { get; set; }
        public string temperature_2m { get; set; }
    }

    public class Hourly
    {
        public string[] time { get; set; }
        public float[] temperature_2m { get; set; }
    }

}
*/