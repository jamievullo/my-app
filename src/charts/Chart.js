import React, { Component } from 'react'
import { VictoryArea, VictoryChart, VictoryTheme, VictoryStack } from 'victory';
import _ from 'lodash';
import chunk from 'lodash/chunk';

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
                animate={{ duration: 1000 }}
            >
                <VictoryStack
                    colorScale={[
                    "#913bfa",
                    "#9f54fb",
                    "#ad6dfb",
                    "#bb86fc",
                    "#c99ffd",
                    "#d7b8fd",
                    "#e5d1fe"
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
            </VictoryChart>
        );
    }
}

export default Chart;
