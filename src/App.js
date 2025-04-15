import React from 'react';
import './App.css';
import CityList from './components/CityList/CityList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      citiesToRequest: ['Vienna', 'Kyiv', 'Batumi', 'Horlivka'],
      //cities:[],
     cities:[
      {
        "app_temp": 17.1,
        "aqi": 50,
        "city_name": "Kiev",
        "clouds": 83,
        "country_code": "UA",
        "datetime": "2025-04-15:11",
        "dewpt": -2.6,
        "dhi": 108,
        "dni": 859,
        "elev_angle": 42.46,
        "ghi": 681,
        "gust": 4.6,
        "h_angle": 30,
        "lat": 50.45466,
        "lon": 30.5238,
        "ob_time": "2025-04-15 11:48",
        "pod": "d",
        "precip": 0,
        "pres": 1006,
        "rh": 26,
        "slp": 1024,
        "snow": 0,
        "solar_rad": 391.9,
        "sources": [
            "analysis",
            "radar",
            "satellite"
        ],
        "state_code": "12",
        "station": "E0036",
        "sunrise": "03:01",
        "sunset": "16:52",
        "temp": 17.1,
        "timezone": "Europe/Kyiv",
        "ts": 1744717707,
        "uv": 2,
        "vis": 16,
        "weather": {
            "code": 803,
            "icon": "c03d",
            "description": "Broken clouds"
        },
        "wind_cdir": "S",
        "wind_cdir_full": "south",
        "wind_dir": 188,
        "wind_spd": 4.6
      },
      {
        "app_temp": 17.8,
        "aqi": 42,
        "city_name": "Vienna",
        "clouds": 96,
        "country_code": "AT",
        "datetime": "2025-04-15:11",
        "dewpt": 11.9,
        "dhi": 115,
        "dni": 899,
        "elev_angle": 51.79,
        "ghi": 814,
        "gust": 14.9,
        "h_angle": 15,
        "lat": 48.20849,
        "lon": 16.37208,
        "ob_time": "2025-04-15 11:42",
        "pod": "d",
        "precip": 0,
        "pres": 981,
        "rh": 67,
        "slp": 1004,
        "snow": 0,
        "solar_rad": 247.2,
        "sources": [
            "analysis",
            "F9098",
            "radar",
            "satellite"
        ],
        "state_code": "09",
        "station": "F9098",
        "sunrise": "04:02",
        "sunset": "17:45",
        "temp": 17.8,
        "timezone": "Europe/Vienna",
        "ts": 1744717367,
        "uv": 2,
        "vis": 16,
        "weather": {
            "description": "Overcast clouds",
            "code": 804,
            "icon": "c04d"
        },
        "wind_cdir": "SSE",
        "wind_cdir_full": "south-southeast",
        "wind_dir": 150,
      },
      {
        "app_temp": 9,
        "aqi": 37,
        "city_name": "Batumi",
        "clouds": 100,
        "country_code": "GE",
        "datetime": "2025-04-15:11",
        "dewpt": 5.9,
        "dhi": 115,
        "dni": 894,
        "elev_angle": 50.64,
        "ghi": 799,
        "gust": null,
        "h_angle": 45,
        "lat": 41.64228,
        "lon": 41.63392,
        "ob_time": "2025-04-15 11:30",
        "pod": "d",
        "precip": 0,
        "pres": 1017.1,
        "rh": 81,
        "slp": 1021,
        "snow": 0,
        "solar_rad": 143.8,
        "sources": [
            "UGSB",
            "radar",
            "satellite"
        ],
        "state_code": "04",
        "station": "UGSB",
        "sunrise": "02:31",
        "sunset": "15:54",
        "temp": 9,
        "timezone": "Asia/Tbilisi",
        "ts": 1744716600,
        "uv": 2,
        "vis": 16,
        "weather": {
            "code": 804,
            "icon": "c04d",
            "description": "Overcast clouds"
        },
        "wind_cdir": "ESE",
        "wind_cdir_full": "east-southeast",
        "wind_dir": 120,
        "wind_spd": 2.6
      },
      {
        "app_temp": 17.3,
        "aqi": 49,
        "city_name": "Horlivka",
        "clouds": 0,
        "country_code": "UA",
        "datetime": "2025-04-15:11",
        "dewpt": 0.7,
        "dhi": 112,
        "dni": 879,
        "elev_angle": 46.87,
        "ghi": 746,
        "gust": 8,
        "h_angle": 25.7,
        "lat": 48.33576,
        "lon": 38.05325,
        "ob_time": "2025-04-15 11:42",
        "pod": "d",
        "precip": 0,
        "pres": 996,
        "rh": 30,
        "slp": 1027,
        "snow": 0,
        "solar_rad": 746,
        "sources": [
            "analysis",
            "radar",
            "satellite"
        ],
        "state_code": "05",
        "station": "URRP",
        "sunrise": "02:29",
        "sunset": "16:10",
        "temp": 18.6,
        "timezone": "Europe/Kyiv",
        "ts": 1744717368,
        "uv": 6,
        "vis": 16,
        "weather": {
            "description": "Clear sky",
            "code": 800,
            "icon": "c01d"
        },
        "wind_cdir": "E",
        "wind_cdir_full": "east",
        "wind_dir": 101,
        "wind_spd": 3.2
      }
  	  ],
      searchField: ''
    }
  }

  // async componentDidMount(){
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow"
  //   };

  //   const results = [];

  //   const citiesToRequest = this.state.citiesToRequest;
    
  //   for(const city of citiesToRequest) {

  //     const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=1d04413d16e74a03ac70dc04360d88f4`, requestOptions);
  //     const data = await response.json();

  //     results.push(data.data[0]);
      
  //   }
    
  //   this.setState({cities: results});
  // }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){

    const {cities, searchField} = this.state;
    const filteredCities = cities.filter(city => (
      city.city_name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return(
      <div className="App">
        <SearchBox placeholder = "Enter city name..." handleChange = {this.handleChange}/>
        <CityList cities = {filteredCities} />
      </div>
    )
  }
}

export default App;
