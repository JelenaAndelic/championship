import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Races from './pages/Races';
// import {getDriversPerYear, getDriverDetails, getDriverRaces} from './api/Drivers/utils'
import { getTeamDetails, getTeamResultsPerYear, getTeamsPerYear } from './api/Teams/utils';
import './App.css'

// async function logData() {
//   const driverList = await getDriversPerYear();
//   const driverDetails = await getDriverDetails();
//   const driverRaces = await getDriverRaces();

//   const TeamList = await getTeamsPerYear();
//   const TeamDetals = await getTeamDetails();
//   const TeamResults = await getTeamResultsPerYear();
// }

// logData();

function App() {
  // const [driverList, setDriverList] = useState([]);
  const [teamList, setTeamList] = useState([]);

  // useEffect(() => {
  //   async function getDriverList() {
  //     const fetchedDriverList = await getDriversPerYear();
  //     setDriverList(fetchedDriverList);
  //   }
  //   getDriverList();
  // }, []);

  // const driverNames = driverList.MRData?.StandingsTable.StandingsLists[0].DriverStandings.map((driver) => {
  //   return console.log(driver.Driver);
  // })

  useEffect(() => {
    async function getTeamList() {
      const fetchedTeamList = await getTeamsPerYear();
      setTeamList(fetchedTeamList);
    }
    getTeamList();
  }, [])

  const teamNames = teamList.MRData?.StandingsTable.StandingsLists[0].ConstructorStandings.map((team) => {
    return console.log(team.Constructor.name);
  })
   

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index:true, element: <Drivers />},
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "races",
        element: <Races />,
      },
    ],
  },
]);

  return <RouterProvider router={router} />
}

export default App
