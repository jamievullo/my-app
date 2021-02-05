import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack } from 'victory';

import './App.css';
import Chart from './Chart';

function App() {

  // colorScale=[
  //   "#913bfa",
  //   "#9f54fb",
  //   "#ad6dfb",
  //   "#bb86fc",
  //   "#c99ffd",
  //   "#d7b8fd",
  //   "#e5d1fe"
  // ]

  // const data2017 = [
  //   {quarter: 1, earnings: 13000},
  //   {quarter: 2, earnings: 16500},
  //   {quarter: 3, earnings: 14250},
  //   {quarter: 4, earnings: 19000}
  // ];
  
  // const data2018 = [
  //   {quarter: 1, earnings: 15000},
  //   {quarter: 2, earnings: 12500},
  //   {quarter: 3, earnings: 19500},
  //   {quarter: 4, earnings: 13000}
  // ];
  
  // const data2019 = [
  //   {quarter: 1, earnings: 11500},
  //   {quarter: 2, earnings: 13250},
  //   {quarter: 3, earnings: 20000},
  //   {quarter: 4, earnings: 15500}
  // ];
  
  // const data2020 = [
  //   {quarter: 1, earnings: 18000},
  //   {quarter: 2, earnings: 13250},
  //   {quarter: 3, earnings: 15000},
  //   {quarter: 4, earnings: 12000}
  // ];



  return (
    <div className="App">
      <Chart />
      {/* <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={"warm"}
        >
          <VictoryBar
            data={data2017}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2018}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2019}
            x="quarter"
            y="earnings"
          />
          <VictoryBar
            data={data2020}
            x="quarter"
            y="earnings"
          />
        </VictoryStack>
      </VictoryChart> */}
    </div>
  );
}

export default App;
