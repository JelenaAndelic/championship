import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDriverDetails, getDriverRaces } from '../api/Drivers/utils';

const DriverDetail = () => {
  // const [driverDetail, setDriverDetail] = useState("");
  // const [idOfDriver, setIdOfDriver] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getDetails() {
      const fetchedDetails = await getDriverDetails(params.driverId);
      console.log("it is changed detail for  " + params.driverId);
    }
    getDetails();
  }, [params.driverId])

  useEffect(() => {
    async function getRaces() {
      const fetchedRaces = await getDriverRaces(params.driverId);
      console.log("it is changed race for " + params.driverId);
    }
    getRaces();
  }, [params.driverId])

  // const handleDriverInformation = (id) => {
  //   console.log(id);
  //   setIdOfDriver(id);
  // }



  
  return (
    <div>{params.driverId} details</div>
  )
}

export default DriverDetail