import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const cities = ['Bengaluru', 'Chennai', 'Mumbai', 'Hyderabad', 'ramagundam', 'karimnagar'];

  const handleCities = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    
      .then(response => {
        
        return response.json();
      })
      .then(data => {
        console.log(data);
        const kelvin = data.main.temp;
        const degrees = kelvin - 273.15;
        setWeather(`Temperature at ${city}: ${Math.round(degrees)}°C`);
      })
      .catch(error => {
        console.log(error);
      });
    setCity('');
  };

  return (
    <div>
      <h2><center>Welcome To Weather Application</center></h2>
      <div>
        <center>
          <form onSubmit={handleCities}>
            <select onChange={(e) => setCity(e.target.value)} value={city}>
              <option value="">Select city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input type="submit" value="Get Temperature" />
          </form>
        </center>
      </div>
      <div>
        <h3>{weather}</h3>
  
      </div>
    </div>
  );
};
export default  Weather;


