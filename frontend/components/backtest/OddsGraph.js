import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Doughnut } from "react-chartjs-2"

const OddsGraph = () => {
  const dispatch = useDispatch()
  const winRatestate = useSelector(state => state.winRateReducer)

  const fetchData = () => {
    dispatch(winRate_getData())
  }

  return (
    <>
      <Doughnut data={winRatestate.data} />
    </>
  )
}

export default OddsGraph
