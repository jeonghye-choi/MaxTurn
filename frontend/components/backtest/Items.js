import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { stocks_getData } from "../../actions/stocksActions"

const Items = () => {
  const dispatch = useDispatch()
  const stocksState = useSelector(state => state.stocksReducer)
  console.log("!!!!!!!!!!", stocksState)
  console.log("길이!!!", stocksState.stocks.length)
  console.log("첫번째 요소!!!", stocksState.stocks[0][0])

  const stocksDatas = stocksState.stocks[0]
  const stocksDataList = stocksDatas.map(stocksData => <div>{stocksData}</div>)

  const fetchData = () => {
    dispatch(stocks_getData())
  }
  console.log(stocksState)

  return (
    <>
      <div>{stocksState.loading}</div>
      <div className="items-stockList">{stocksDataList}</div>
    </>
  )
}

export default Items
