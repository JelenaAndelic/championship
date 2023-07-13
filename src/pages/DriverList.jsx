import React from 'react'
import { Link } from 'react-router-dom';

const DriverList = ({driverList}) => {

  return (
    <>
      <table>
        <tbody>
          {driverList.MRData?.StandingsTable.StandingsLists[0].DriverStandings.map((driver) => {
          const {driverId, givenName, familyName} = driver.Driver;
          const {points} = driver;
          const {name} = driver.Constructors[0];
          return (
            <Link key={driverId} to={`${driverId}`}>
              <tr>
                <td>{givenName} {familyName}</td>
                <td>{name}</td>
                <td>{points}</td>
              </tr>
              </Link>
            )
          })}
        </tbody>
    </table>
  </>
  )
}

export default DriverList