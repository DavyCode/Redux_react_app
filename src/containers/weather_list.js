import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
    
    renderWeather(data){
        if(data){
            const {name, country}= data.city;
            const temps = data.list.map( weather => weather.main.temp);
            let key = Math.random(); 

            console.log('data is :',data.list)
            return ( 
                <tr key={key} >
                    <td scope="row"> { name} | {country} </td>
                    <td scope="row"> 
                        <Sparklines data={temps} width={180} height={120} margin={5}>
                            <SparklinesLine color="red" />
                        </Sparklines>
                    {temps} 
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