import Axios from "axios"

export const strategy_getData = () => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_WINRATE"
    })
    const strategyResponse = Axios.get("api/strategy").then(function (
      strategyResponse
    ) {
      const strategyData = strategyResponse.data
      console.log("strategyData", strategyData)
    })
  }
}
