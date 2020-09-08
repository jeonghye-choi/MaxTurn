import Axios from "axios"

export const winRate_getData = () => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_WINRATE"
    })
    // const winRate_data = []

    // const winRateResponse = Axios.get("api/winRatetest").then(function (
    //   winRateResponse
    // ) {
    //   const winRateData = winRateResponse.data
    //   // console.log("winRateData", winRateData)

    //   const win = winRateData[0].Winning_rate
    //   // console.log("win", win)
    //   // win *= 1
    //   // console.log(10 - win)
    //   const lose = 10 - win

    //   winRate_data.push(win)
    //   winRate_data.push(lose)

    //   console.log(winRate_data)
    // })

    // console.log("test", win, lose)

    const res = await fetch("http://localhost:3000/api/winRatetest")
    const doc = await res.json()
    let win = doc[doc.length - 1].Winning_rate
    let lose = 10 - win
    console.log("win", win)

    console.log("res", res)
    console.log("doc", doc)

    const winRate_data = []

    winRate_data.push(win)
    winRate_data.push(lose)

    dispatch({
      type: "SUCCESS_WINRATE",
      payload: {
        winRate_data
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_WINRATE"
    })
  }
}

export default winRate_getData
