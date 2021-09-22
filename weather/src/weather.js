import React,{useState,useEffect} from 'react';
import './weather.css';
import Results from './results.js';


const Weather = () => {

    const [searchValue,setSearchValue]=useState("Delhi");
    const[tempInfo,setTempInfo]=useState({});

    const fetchInfo= async () =>{
    try {
        let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=217626d5b55dbfba9b917830137178b7`;

        const res = await fetch(url);
        const data = await res.json();

        const {temp,humidity,pressure} = data.main;
        const{main : weathermood } = data.weather[0];
        const{name} = data;
        const{speed} = data.wind;
        const{country,sunset} = data.sys;

        const tempResult={
            temp,humidity,pressure,weathermood,name,speed,country,sunset,
        };
        setTempInfo(tempResult);
        } catch (error) {
        console.log(error)
        }
        };

    useEffect(() => { fetchInfo();});


    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" className="searchloc" placeholder="Enter location" autoFocus id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <button className="btn" onClick={fetchInfo}>Search</button>
            </div>

            <Results {...tempInfo}/>
        </div>
        </>
    )
}



export default Weather;
