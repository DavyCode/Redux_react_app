import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines';
import _ from 'lodash'

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={180} height={120} margin={5}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div> {average(props.data)} {props.units}</div>
        </div>
    )
}

function average(data) {
    return _.round(_.sum(data)/data.length)
}