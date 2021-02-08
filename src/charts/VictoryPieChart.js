import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

class VictoryPieChart extends React.Component {

    colorScale = [
        "#913bfa",
        "#9f54fb",
        "#ad6dfb",
        "#bb86fc",
        "#c99ffd"
    ]

    // whiteStyle = {
    //     axis: { stroke: "white" },
    //     axisLabel: { fontSize: 15, padding: 30, fill: "white" },
    //     ticks: { stroke: "white", size: 5, },
    //     tickLabels: { fontSize: 13, padding: 5, fill: "white" }
    // }
    
    render() {
        return (
            <svg viewBox="0 0 400 400">
                <VictoryPie
                    standalone={ false }
                    width={ 400 } height={ 400 }
                    data={ [
                        { x: "Camming", y: 120 }, 
                        { x: "Items", y: 150 }, 
                        { x: "Subs", y: 70 },
                        { x: "TDTM", y: 20 }
                    ] }
                    innerRadius={ 100 } labelRadius={ 65 }
                    style={{ labels: { fontSize: 15, fill: "white" }}}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20, fill: "white" }}
                    x={ 200 } y={ 180 }
                    text="Percentage"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20, fill: "white" }}
                    x={ 200 } y={ 200 }
                    text="of"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20, fill: "white" }}
                    x={ 200 } y={ 220 }
                    text="Revenue"
                />
            </svg>
        );
    }
}

export default VictoryPieChart;