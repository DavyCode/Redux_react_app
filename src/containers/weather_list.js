import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from '../components/chart'
class WeatherList extends Component {
    
    renderWeather(data){
        if(data){
            const {name, country}= data.city;
            const temps = data.list.map( weather => weather.main.temp);
            const pressure = data.list.map( weather => weather.main.pressure);
            const humidity = data.list.map( weather => weather.main.humidity);
            const description   = data.list.map( weather => weather.weather[0].description);
            const descriptionTitle   = data.list.map( weather => weather.weather[0].main);
        
            let key = Math.random(); 

            console.log('description is :', description)
            return ( 
                <tr key={key} >
                    <td scope="row"> { name } | {country} </td>
                    <td scope="row"> <Chart data={temps} color='orange' units='C'/></td>
                    <td scope="row"> <Chart data={pressure} color='green' units='hPa'/></td>
                    <td scope="row"> <Chart data={humidity} color='black'units='%'/></td>
                    <td scope="row"> 
                        <div className="card text-center">
                            <div className="card-body">
                                <h4 className="card-title">{descriptionTitle.slice(0,1)}</h4>
                                <p className="card-text">{description.slice(0,1)}</p>
                            </div>
                        </div>    
                    </td>
                </tr>
            );
        }
    }

    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr><th>City | Country(US)</th><th>Temperature (C)</th><th>Pressure (hPa)</th><th>Humidity (%)</th><th>Description</th></tr>      
                    </thead>
                    
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
                <hr/>
            </div>
        );
    };
};

function mapStateToProps({weather}) { //weather available on state.weather
           return { weather }; //{weather} ==={weather :weather}
}

export default connect(mapStateToProps)(WeatherList);