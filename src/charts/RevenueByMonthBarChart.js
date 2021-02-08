import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

class RevenueBYMonthBarChart extends React.Component {

    whiteStyle = {
        axis: { stroke: "white" },
        axisLabel: { fontSize: 15, padding: 30, fill: "white" },
        ticks: { stroke: "white", size: 5, },
        tickLabels: { fontSize: 13, padding: 5, fill: "white" }
    }

    render() {
        return (
            <VictoryChart
                domainPadding={{ x: 18 }}
            >
                <VictoryBar
                    style={{
                        data: { fill: "#bb86fc" }
                    }}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    // NOTE: data on logged in user from DB plotted out using x, y
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
                    y={"revenue"}
                    // y={(d) => (d.actual / d.expected) * 100}
                    // NOTE: you can pass functions directly in to y like above
                />
                <VictoryAxis
                    label="By Month (Last 12 Months)"
                    style={ this.whiteStyle }
                />
                <VictoryAxis dependentAxis
                    label="Total Revenue (Thousands)"
                    style={ this.whiteStyle }
                />
            </VictoryChart>
        )
    }
}

export default RevenueBYMonthBarChart;