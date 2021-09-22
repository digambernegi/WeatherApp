import React ,{ useEffect} from 'react';


const Results = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  }) => {
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeatheState("wi-cloudy");
            break;
          case "Fog":
            setWeatheState("wi-fog");
            break;
          case "Clear":
            setWeatheState("wi-day-sunny");
            break;
          case "Windy":
            setWeatheState("wi-dust");
            break;

            case "Mist":
            setWeatheState("wi-sleet");
            break;


          case "Rain":
              setWeatheState("wi-rain");
              break;

          case "Dust":
            setWeatheState("wi-dust");
            break;

            case "Haze":
              setWeatheState("wi-day-haze");
              break;
          case "Storm":
              setWeatheState("wi-sandstorm");
              break;

          default:
            setWeatheState("wi-day-sunny");
            break;
        }
      }
    }, [weathermood]);
/*
    let seconds = sunset; */
    let date = new Date();
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
                      <article className="box">
                    <div className="icon">
                    {<i className={`wi ${weatherState}`}></i>}
                    </div>

            <div className="weather_info">
                    <div className="temperature">
                    <span>{temp}&deg;</span>
            </div>

            <div className="discription">
                    <div className="weather_condition">{weathermood}</div>
                    <div className="place">{name},{country}</div>
            </div>
            </div>

            <div className="date">
            {new Date().toLocaleDateString()}
            </div>



            <div className="colum">
                <div className="temp_info">
                <div className="two_fold">
                <p><i className="wi wi-sunset"></i></p>
                <p className="left_side">{timeStr}<br/>Sunset</p>
                </div>

                <div className="two_fold">
                <p><i className="wi wi-humidity"></i></p>
                <p className="left_side">{humidity} <br/>Humidity</p>
                </div>
                </div>

                <div className="weather_extra">
                <div className="two_fold">
                <p><i className={"wi wi-barometer"}></i></p>
                <p className="left_side">{pressure} <br/>Pressure</p>
                </div>

                <div className="two_fold">
                <p><i className="wi wi-strong-wind"></i></p>
                <p className="left_side">{speed} <br/>Speed</p>
                </div>

                </div>

                </div>


        </article>
        </>
    )
}

export default Results;
