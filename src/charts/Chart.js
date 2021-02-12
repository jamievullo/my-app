import React, { Component } from 'react'
import { VictoryArea, VictoryChart, VictoryTheme, VictoryStack, VictoryAxis } from 'victory';
import _ from 'lodash';

class Chart extends Component {
    state = { 
        data: this.getData() 
    };

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
                this.setState({ data: this.getData() });
            }, 3000);
        }
    
    getData() {
        return _.range(7).map(() => {
            return [
            { x: 10, y: _.random(1, 8) },
            { x: 20, y: _.random(1, 10) },
            { x: 30, y: _.random(2, 14) },
            { x: 40, y: _.random(2, 19) },
            { x: 50, y: _.random(2, 25) }
            ];
        });
    }
    
    render() {
        return (
            <VictoryChart
                theme={ VictoryTheme.material }
                animate={{ duration: 1500 }}
            >
                <VictoryStack
                    colorScale={[
                        "#bb86fc",
                        "#fc86b1",
                        "#fcb986",
                        "#fce886",
                        "#86fc8a",
                        "#86e0fc"
                    ]}
                >
                    { this.state.data.map((data, i) => {
                        return (
                            <VictoryArea
                                key={ i }
                                data={ data }
                                interpolation={ "basis"  }
                            />
                        );
                    }) }
                </VictoryStack>
                <VictoryAxis
                    label="Total Likes"
                    style={{
                        axisLabel: { fontSize: 15, padding: 30, fill: "white" }
                    }}
                />
                <VictoryAxis dependentAxis
                    label="Total Posts"
                    style={{        
                        ticks: { stroke: "white", size: 5, },
                        tickLabels: { fontSize: 15, padding: -40, fill: "white" }
                    }}
                />
            </VictoryChart>
        );
    }
}

export default Chart;