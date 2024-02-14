import React from 'react'
import axios from 'axios'

export default function Weather() {
    const [weather, setWeather] = React.useState(null)
    return (
        <div>
            <div>
                Weather
            </div>
            <input type="text" />
            <button onClick={() => {
                axios.get('https://api.weather.gov/gridpoints/OKX/33,34/forecast')
                    .then(response => {
                        setWeather(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            }>
                Get Weather
            </button>

            <div>
                {weather ? <div>
                    <h2>{weather.properties.periods[0].name}</h2>
                    <p>{weather.properties.periods[0].detailedForecast}</p>
                </div> : null}
            </div>
        </div >
    )
}
