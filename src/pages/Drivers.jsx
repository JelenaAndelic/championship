import { useState, useEffect } from "react";
import {getDriverDetails, getDriversPerYear} from "../api/Drivers/utils"
import DriverList from "./DriverList";


const Drivers = () => {
  const [driverList, setDriverList] = useState([]);
  // const [idOfDriver, setIdOfDriver] = useState("");

  useEffect(() => {
    async function getDriverList() {
      const fetchedDriverList = await getDriversPerYear();
      setDriverList(fetchedDriverList);
    }
    getDriverList();
  }, []);

  // useEffect(() => {
  //   async function getDetails() {
  //     const fetchedDetails = await getDriverDetails(idOfDriver);
  //     console.log("it is changed " + idOfDriver);
  //   }
  //   getDetails();
  // }, [idOfDriver])

  // useEffect(() => {
  //   async function getRaces() {
  //     const fetchedRaces = await getDriverRaces(idOfDriver);
  //   }
  //   getRaces();
  // }, [idOfDriver])

  // const handleDriverInformation = (id) => {
  //   console.log(id);
  //   setIdOfDriver(id);
  // }

  return (
    <div>
      <h1>Drivers Championship</h1>
      <DriverList driverList={driverList} />
    </div>
  )
}

export default Drivers