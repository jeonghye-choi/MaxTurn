import React from "react"
import DashboardLayout from "../components/layout/DashboardLayout"
import axios from "axios"

const Community = () => {
  const strategyResponse = axios
    .get("api/strategy")
    .then(function (strategyResponse) {
      const strategyData = strategyResponse.data
      console.log(strategyData)

      // const length = strategyData.length

      // for (var i = 0; i < length; i++) {
      //   let strategyNumber = strategyData[i].strategyNumber

      //   console.log("strategyData", strategyData)
      //   console.log(strategyData[i])
      //   console.log(strategyData[i].strategyNumber)
      //   console.log(strategyData[i].strategyName)
      //   console.log(strategyData[i].writerName_id)
      //   console.log(strategyData[i].strategyDescription)
      //   /////////////////////////////////////////

      //   console.log(strategyNumber)

      // const resultResponse = axios
      //   .get("api/results")
      //   .then(function (resultResponse) {
      //     const resultData = resultResponse.data

      //     const resultLength = resultData.length
      //     for (var j = 0; j < resultLength; j++) {
      //       console.log(j)
      //       console.log(resultData[j].strategy_result_id)
      //       if ((strategyNumber = resultData[j].strategy_result_id)) {
      //         let final_yield = resultData[j].Final_yield
      //         console.log(final_yield)
      //       }
      //     }
      //   })
    })
  // })

  // const resultResponse = axios
  //   .get("api/results")
  //   .then(function (resultResponse) {
  //     const resultData = resultResponse.data
  //     const final_yield = resultData[0].Final_yield
  //   })

  return (
    <>
      <DashboardLayout>
        <div className="community-contents">
          <section className="strategy-banner"></section>
          <section className="strategy-card-box">
            {/* {strategyResponse} */}
            {/* {strategyData.map((data, i) => {
              return (
                <article className="strategy-card">
                  <div className="card-content-strategyname">
                    {data.strategyName}
                  </div>
                  <div className="card-content-name">{data.writerName_id}</div>
                  <div className="card-content-detail">
                    {data.strategyDescription}
                  </div>
                  <div className="card-content-percent">
                    가상 매매 수익률 {final_yield}%
                  </div>
                  <div className="card-content-stars">{data.strategeStar}</div>
                </article>
              )
            })} */}

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>

            {/* 카드박스하나! */}
            <article className="strategy-card">
              <div className="card-content-strategyname">STRATEGY NAME</div>
              <div className="card-content-name">판매자 이름</div>
              <div className="card-content-detail">
                대충 이 전략에 대한 설명을 간략하게 두 줄 정도로 넣는다. 이
                설명은 전략 판매자가 백테스팅 페이지에서 전략을 저장할 때
                입력하도록 한다.
              </div>
              <div className="card-content-percent">가상 매매 수익률 50%</div>
              <div className="card-content-stars">별별별별별</div>
            </article>
          </section>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Community
