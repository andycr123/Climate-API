import { useCalculateCelcius } from "../../Hooks/useCalculateCelcius";
import "./index.css";
export const WeatherInterface = ({ weatherData }) => {
    const { celcius: celciusTemp } = useCalculateCelcius(weatherData?.main?.temp);

    return (
        <div className="weatherbox">
            <div className="weatherbox-information">
            <span className="title">Weather API</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/984/984585.png" className="image"></img>
                    <div className="weatherbox-information__principal">
                        <span className="weatherbox-information__temperature">
                            {celciusTemp}<span className="temperature-icon">°</span>
                        </span>
                        <span className="weatherbox-information__cityname">
                            {weatherData?.name}
                        </span>
                    </div>

                    <div className="weatherbox-information__secondary">

                        <div className="weatherbox-information__labels">
                            <label htmlFor="weatherbox-information__wind-speed">Wind Speed</label>
                            <label htmlFor="weatherbox-information__humidity">Humidity</label>
                            <label htmlFor="weatherbox-information__pressure">Pressure</label>
                        </div>
                        <div className="weatherbox-information__spans">
                            <span className='weatherbox-information__wind-speed'>{weatherData?.wind?.speed}<span className="windspeed-icon">KM/H</span> </span>
                            <span className='weatherbox-information__humidity'>{weatherData?.main?.humidity}<span className="humidity-icon">%</span></span>
                            <span className='weatherbox-information__pressure'>{weatherData?.main?.pressure}</span>
                        </div>
                </div>
            </div>
        </div>
    );
};