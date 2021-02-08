import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

class RevenuePercentageByCategory extends React.Component {

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
                        //NOTE: Based on percentage of total revenue overall
                        //NOTE:
                        data={ [
                            { x: "Subs 11.1%", y: 11.1 },
                            { x: "TDTM 5.6%", y: 5.6 },
                            { x: "Tips 40.2%", y: 40.2},
                            { x: "Items 9.7%", y: 9.7 }, 
                            { x: "Cam 33.3%", y: 33.4 } 
                        ] }
                        innerRadius={ 110 } labelRadius={ 65 }
                        style={{ labels: { fontSize: 10, fill: "white" }}}                        
                    />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fill: "white" }}
                    x={ 200 } y={ 185 }
                    text="Percentage"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fill: "white" }}
                    x={ 200 } y={ 200 }
                    text="of"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fill: "white" }}
                    x={ 200 } y={ 212 }
                    text="Revenue"
                />
            </svg>
        );
    }
}

export default RevenuePercentageByCategory;