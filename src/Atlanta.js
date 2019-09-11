import React, { Component } from 'react';


class Atlanta extends Component {
	constructor(props) {
		super(props);
		this.state={
			weatherData:{
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""
			}			
		}
	}

	componentDidMount() {
		const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		fetch(url).then((response)=>{
			return response.json();
		}).then((weatherJSON)=>{
			console.log(weatherJSON.main);
			this.setState({
				temp :weatherJSON.main.temp,
				temp_min: weatherJSON.main.temp_min,
				temp_max: weatherJSON.main.temp_max,
				desc: weatherJSON.weather[0].description
			})
			console.log('component mounted');
		})
	}
	
	render(){
		console.log(this.state.weatherData)
		return(
			<div>
				<h1>Weather</h1>
				<h4>Temperature: {this.state.temp}</h4>
				<h4>Minimum Temp: {this.state.temp_min}</h4>
				<h4>Maximum Temp: {this.state.temp_max}</h4>
				<h4>Description: {this.state.desc}</h4>
			</div>
			
		);
	}
}
export default Atlanta;