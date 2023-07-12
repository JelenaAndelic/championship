import {useState, useEffect} from 'react'
import {getTeamsPerYear} from "../api/Teams/utils"

const Teams = () => {
  const [teamList, setTeamList] = useState([]);

 useEffect(() => {
    async function getTeamList() {
      const fetchedTeamList = await getTeamsPerYear();
      setTeamList(fetchedTeamList);
    }
    getTeamList();
  }, [])

  const teamNames = teamList.MRData?.StandingsTable.StandingsLists[0].ConstructorStandings.map((team) => {
    return (
      <h2 key={team.Constructor.constructorId}>{team.Constructor.name}</h2>
    )
  })

  return (
    <div>{teamNames}</div>
  )
}

export default Teams