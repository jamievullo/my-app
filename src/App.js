import React from 'react'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryStack, VictoryPie } from 'victory';

import './App.css';
import Chart from './charts/Chart';
import CircularProgressBar from './charts/CircularProgressBar';
import RadarChart from './charts/RadarChart';
import InterpolationChart from './charts/InterpolationChart';
import RevenueBYMonthBarChart from './charts/RevenueByMonthBarChart';

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
    <div className="App" style={{backgroundColor: "#2b2d2f"}}>
      <Chart />
      <CircularProgressBar />
      <RadarChart />
      <InterpolationChart />
      <RevenueBYMonthBarChart />
      <VictoryPie />
    </div>
  );
}

export default App;