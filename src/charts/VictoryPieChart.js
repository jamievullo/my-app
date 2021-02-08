import React from 'react'
import { VictoryPie, VictoryLabel, VictoryStack } from 'victory';

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
                        colorScale={[
                            "#bb86fc",
                            "#fc86b1",
                            "#fce886",
                            "#86fc8a",
                            "#86e0fc"
                        ]}
                        standalone={ false }
                        width={ 400 } height={ 400 }
                        data={ [
                            { x: "Subs", y: 40 },
                            { x: "Tips", y: 150},
                            { x: "TDTM", y: 20 },
                            { x: "Items", y: 20 }, 
                            { x: "Cam", y: 120 } 
                        ] }
                        innerRadius={ 110 } labelRadius={ 80 }
                        style={{ labels: { fontSize: 10, fill: "white" }}}
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