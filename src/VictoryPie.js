import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';

class VictoryPie extends React.Component {
    render() {
        return (
            <svg viewBox="0 0 400 400">
                <VictoryPie
                    standalone={false}
                    width={400} height={400}
                    data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }
                    ]}
                    innerRadius={68} labelRadius={100}
                    style={{ labels: { fontSize: 20, fill: "white" } }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={200} y={200}
                    text="PoR"
                />
            </svg>
        );
    }
}

{/* <VictoryChart
    domainPadding={{x: 15}}
    >
        <VictoryBar
            data={[
                { month: "Jan", revenue: .250 },
                { month: "Feb", revenue: .295 },
                { month: "Mar", revenue: .646 },
                { month: "Apr", revenue: .620 },
                { month: "May", revenue: .557 },
                { month: "Jun", revenue: .860 },
                { month: "Jul", revenue: .830 },
                { month: "Aug", revenue: 1.275 },
                { month: "Sep", revenue: 1.100 },
                { month: "Oct", revenue: 1.272 },
                { month: "Nov", revenue: 1.650 },
                { month: "Dec", revenue: 1.287 }
            ]}
            x="month"
            // y={(d) => (d.actual / d.expected) * 100}
            y={"revenue"}
        />
        <VictoryAxis
            label="12 Months Rolling"
            style={{
                axisLabel: { padding: 30 },
                color: "white"
            }}
        />
        <VictoryAxis dependentAxis
            label="Total Revenue in Thousands"
            style={{
                axisLabel: { padding: 40 }
        }}
    />
</VictoryChart> */}

export default VictoryPie;