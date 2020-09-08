import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Doughnut } from "react-chartjs-2"
import { winRate_getData } from "../../actions/winRateActions"

// export function showOddsGraph() {
//   const dispatch = useDispatch()

//   dispatch(winRate_getData())
// }

const OddsGraph = () => {
  const dispatch = useDispatch()

  const winRatestate = useSelector(state => state.winRateReducer)
  const showOddsGraph = () => {
    dispatch(winRate_getData())
  }
  console.log(winRatestate)
  return (
    <>
      <button onClick={() => showOddsGraph()}>버튼!!</button>
      <Doughnut data={winRatestate.data} />
    </>
  )
}

export default OddsGraph
