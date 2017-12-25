import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
    
    renderWeather(data){
        if(data){
            const name = data.city.name;
            const country = data.city.country;
            const temp = data.list[0].main.temp
            const pressure = data.list[0].main.pressure
            const humidity = data.list[0].main.humidity
            const description = data.list[0].weather[0].description
            let key = 1; 

            console.log('data is :',data.list)
            return ( 
                <tr key={name} >
                    <td scope="row"> { name} : {country} </td>
                    <td scope="row"> { temp } </td>
                    <td scope="row"> { pressure } </td>
                    <td scope="row"> { humidity } </td>
                    <td scope="row"> { description} </td>
                </tr>
            );
        }
    }

    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr><th>City</th><th>Temperature</th><th>Pressure</th><th>Humidity</th><th>Description</th></tr>      
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