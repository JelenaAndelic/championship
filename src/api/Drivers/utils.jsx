// Fetching Drivers data

export async function getDriversPerYear() {
  try {
    const response = await fetch("https://ergast.com/api/f1/2013/driverStandings.json");
    const data = await response.json();
    return data;
    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getDriverDetails(id) {
  try {
    const response = await fetch(`https://ergast.com/api/f1/2013/drivers/${id}.json`);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getDriverRaces() {
  try {
    const response = await fetch("http://ergast.com/api/f1/2013/drivers/alonso/results.json");
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}