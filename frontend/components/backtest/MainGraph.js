import React from "react"
import { useSelector, useDispatch } from "react-redux"

// 동주 수정사항
import { lineYield_getData } from "../../actions/lineYieldActions"
import { winRate_getData } from "../../actions/winRateActions"

import { Line } from "react-chartjs-2"

const MainGraph = () => {
  const dispatch = useDispatch()
  const Mainstate = useSelector(state => state.lineYieldReducer)

  const fetchData = () => {
    dispatch(lineYield_getData())
  }
  return (
    <>
      {/* 잘 안보이지만 버튼 누르면 몽고디비에서 코스피 데이터 가져와서 그려줌 */}
      <button onClick={() => fetchData()}>kospiYield</button>
      <Line data={Mainstate.data} />
    </>
  )
}

export default MainGraph
