# weather_api
node.js weather api

Weather API
This is a simple Node.js server that fetches real-time weather data for multiple cities using an external weather API. It exposes a /getWeather endpoint that accepts the names of multiple cities as input and responds with the real-time weather results.

Requirements
Node.js (v12 or higher)
npm (Node Package Manager)
Installation
Clone the repository:
bash
Copy code
git clone <repository_url>
Navigate to the project directory:
bash
Copy code
cd weather-api
Install the dependencies:
Copy code
npm install
Configuration
Obtain an API key from a weather API provider (e.g., WeatherAPI).
Replace the placeholder <YOUR_API_KEY> in the code with your actual API key.
Usage
Start the server:
sql
Copy code
npm start
The server will start running on http://localhost:3000.

Send a POST request to the /getWeather endpoint with the list of cities in the request body. For example, using cURL:
json
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"cities":["toronto","mumbai","london"]}' http://localhost:3000/getWeather
Replace http://localhost:3000 with the appropriate URL if your server is running on a different address or port.

The server will fetch the real-time weather data for each city and respond with the weather results in JSON format.
API Endpoint
POST /getWeather: Fetches real-time weather data for multiple cities.

Request Body:
json
Copy code
{
  "cities": ["toronto", "mumbai", "london"]
}
Response Body:
css
Copy code
[  {    "city": "toronto",    "temperature": "24C"  },  {    "city": "mumbai",    "temperature": "34C"  },  {    "city": "london",    "temperature": "14C"  }]
License
This project is licensed under the MIT License.

Feel free to adjust the formatting and content of the README according to your needs. Let me know if there's anything else I can help you with
