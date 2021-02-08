import React from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 }
];

const cartesianInterpolations = [
    "basis",
    "bundle",
    "cardinal",
    "catmullRom",
    "linear",
    "monotoneX",
    "monotoneY",
    "natural",
    "step",
    "stepAfter",
    "stepBefore"
];

const polarInterpolations = [
    "basis",
    "cardinal",
    "catmullRom",
    "linear"
];

const InterpolationSelect = ({ currentValue, values, onChange }) => (
    <select onChange={ onChange } value={ currentValue } style={{ width: 75 }}>
        {values.map(
            (value) => <option value={ value } key={ value }>{ value }</option>
        )}
    </select>
);

class InterpolationChart extends React.Component {
    
    state = {
        interpolation: "linear",
        polar: false
    };

    // whiteStyle = {
    //     axis: { stroke: "white" },
    //     axisLabel: { fontSize: 15, padding: 30, fill: "white" },
    //     ticks: { stroke: "#bb86fc", size: 5, },
    //     tickLabels: { fontSize: 13, padding: 5, fill: "white" }
    // };

    render() {
        return (
            <div>
                <InterpolationSelect
                    currentValue={ this.state.interpolation }
                    values={ this.state.polar ? polarInterpolations : cartesianInterpolations }
                    onChange={( event ) => this.setState({ interpolation: event.target.value })}
                />
                <input
                    type="checkbox"
                    id="polar"
                    value={ this.state.polar }
                    onChange={
                        ( event ) => this.setState({
                            polar: event.target.checked,
                            interpolation: "linear"
                            })
                    }
                    style={{ marginLeft: 25, marginRight: 5 }}
                />
                    <label 
                        htmlFor="polar"
                        style={{ data: { fill: "#ffffff" } }}
                    >
                        polar
                    </label>
                <VictoryChart 
                    polar={ this.state.polar } 
                    height={ 390 }
                    style={{ data: { fill: "#ffffff" } }} 
                    >
                    <VictoryLine
                        interpolation={ this.state.interpolation } data={ data }
                        style={{ data: { stroke: "#bb86fc" } }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    />
                    <VictoryScatter data={ data }
                        size={ 5 }
                        style={{ data: { fill: "#bb86fc" } }}
                    />
                </VictoryChart>
            </div>
        );
    }
}

export default InterpolationChart;