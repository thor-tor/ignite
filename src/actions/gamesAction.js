import axios from "axios"
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api"

//action creator

//action that fetches games from api url and dispatches data to store
export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularData = await axios.get(popularGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  const newData = await axios.get(newGamesURL())
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  })
}
