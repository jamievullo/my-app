import React from 'react'
import { VictoryChart, VictoryGroup, VictoryLabel, VictoryArea, VictoryPolarAxis, VictoryTheme } from 'victory';

const characterData = [
    { photos: 1, videos: 250, camming: 1, TDTM: 40, overall: 50 },
    { photos: 2, videos: 300, camming: 2, TDTM: 80, overall: 90 },
    { photos: 5, videos: 225, camming: 3, TDTM: 60, overall: 120 }
];

class RadarChart extends React.Component {
    
    state = {
        data: this.processData(characterData),
        maxima: this.getMaxima(characterData)
    };

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map((d) => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = Math.max(...groupedData[key]);
            return memo;
        }, {});
    }
    
    processData(data) {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
            return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }
    
        render() {
        return (
            <VictoryChart polar
            theme={VictoryTheme.material}
            domain={{ y: [ 0, 1 ] }}
            >
            <VictoryGroup 
                colorScale={[
                    "#9f54fb",
                    "#ad6dfb",
                    "#bb86fc",
                    "#c99ffd",
                    "#d7b8fd"
                ]}
                style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
            >
                {this.state.data.map((data, i) => {
                return <VictoryArea key={i} data={data}/>;
                })}
            </VictoryGroup>
            {
            Object.keys(this.state.maxima).map((key, i) => {
                return (
                    <VictoryPolarAxis key={i} dependentAxis
                    style={{
                    axisLabel: { padding: 10 },
                    axis: { stroke: "none" },
                    grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 },
                    // fill: "white"
                    }}
                            tickLabelComponent={
                                <VictoryLabel labelPlacement="vertical"/>
                            }
                        labelPlacement="perpendicular"
                        axisValue={i + 1} label={key}
                        tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                        tickValues={[0.25, 0.5, 0.75]}
                    />
                );
            })
            }
            <VictoryPolarAxis
                labelPlacement="parallel"
                tickFormat={() => ""}
                style={{
                axis: { stroke: "none" },
                grid: { stroke: "grey", opacity: 0.5 },
                fill: "white"
                }}
            />
    
            </VictoryChart>
        );
    }
}

export default RadarChart;