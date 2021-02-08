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
            { x: 1, y: _.random(1, 5) },
            { x: 2, y: _.random(1, 10) },
            { x: 3, y: _.random(2, 10) },
            { x: 4, y: _.random(2, 10) },
            { x: 5, y: _.random(2, 12) }
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