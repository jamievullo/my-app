import React from 'react'
import './App.css';
import Chart from './charts/Chart';
import CircularProgressBar from './charts/CircularProgressBar';
import RadarChart from './charts/RadarChart';
import InterpolationChart from './charts/InterpolationChart';
import RevenueBYMonthBarChart from './charts/RevenueByMonthBarChart';
import VictoryPieChart from './charts/VictoryPieChart';

function App() {

  return (
    <div className="App">
      <CircularProgressBar />
      <RadarChart />
      <InterpolationChart />
      <RevenueBYMonthBarChart />
      <VictoryPieChart />
      <Chart />
    </div>
  );
}

export default App;




 // Random colorscale and data set on top of app for now
  // colorScale=[
  //   "#913bfa",
  //   "#9f54fb",
  //   "#ad6dfb",
  //   "#bb86fc",
  //   "#c99ffd",
  //   "#d7b8fd",
  //   "#e5d1fe"
  // ]

  // const week1 = [
  //   {day: 1, earnings: 130},
  //   {day: 2, earnings: 165},
  //   {day: 3, earnings: 142},
  //   {day: 4, earnings: 190},
  //   {day: 5, earnings:200},
  //   {day: 6, earnings: 110},
  //   {day: 7, earnings: 87}
  // ];
  
  // const week2 = [
  //   {day: 1, earnings: 150},
  //   {day: 2, earnings: 125},
  //   {day: 3, earnings: 195},
  //   {day: 4, earnings: 130},
  //   {day: 5, earnings:200},
  //   {day: 6, earnings: 110},
  //   {day: 7, earnings: 87}
  // ];
  
  // const week3 = [
  //   {day: 1, earnings: 115},
  //   {day: 2, earnings: 132},
  //   {day: 3, earnings: 200},
  //   {day: 4, earnings: 155},
  //   {day: 5, earnings:200},
  //   {day: 6, earnings: 110},
  //   {day: 7, earnings: 87}
  // ];
  
  // const week4 = [
  //   {day: 1, earnings: 180},
  //   {day: 2, earnings: 132},
  //   {day: 3, earnings: 150},
  //   {day: 4, earnings: 120},
  //   {day: 5, earnings:200},
  //   {day: 6, earnings: 110},
  //   {day: 7, earnings: 87}
  // ];