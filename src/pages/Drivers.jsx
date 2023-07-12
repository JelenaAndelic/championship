import { useState, useEffect } from "react";
import {getDriversPerYear} from "../api/Drivers/utils"


const Drivers = () => {
  const [driverList, setDriverList] = useState([]);

  useEffect(() => {
    async function getDriverList() {
      const fetchedDriverList = await getDriversPerYear();
      setDriverList(fetchedDriverList);
    }
    getDriverList();
  }, []);

  const driverNames = driverList.MRData?.StandingsTable.StandingsLists[0].DriverStandings.map((driver) => {
    return (
      <h2 key={driver.Driver.driverId}>{driver.Driver.givenName} {driver.Driver.familyName}</h2>
    )
  })

  return (
    <div>
      {driverNames}
    </div>
  )
}

export default Drivers