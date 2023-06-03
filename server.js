const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // You can change the port number if needed

app.use(express.json());

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the weather API');
});

app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;

    // Fetch weather data for each city
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=992fa6aff2ea48bea7243807230306&q=${city}`
        );
        const temperature = response.data.current.temp_c;
        return {
          city,
          temperature: `${temperature}C`,
        };
      })
    );

    res.json(weatherData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
