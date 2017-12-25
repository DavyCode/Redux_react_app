import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
    render(){
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr><th>City</th><th>Temperature</th><th>Pressure</th><th>Humidity</th></tr>      
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <hr/>
            </div>
        );
    };
};

function mapStateToProps({weather}) {
           return { weather }; //{weather} ==={weather :weather}
}

export default connect(mapStateToProps)(WeatherList);