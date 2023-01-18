import { FC, useEffect, useState } from "react"
import Script from "next/script"


const Scuti: FC = () => {

  const onBackToGame = () => {
    console.log("on backto game")
  }

  const onScutiExchange = () => {
    console.log("test if now work when i add both functions")
  }

  const onScutiLoaded = () => {
    (window as any).SCUTI_SDK.initialize("65407cb8-cd30-48e5-90cf-3275486aba0e")
    setTimeout(() => {
      (window as any).SCUTI_SDK.renderStore("scuti-store", { onBackToGame, onScutiExchange }, { width: "100%", height: "100%" })
    }, 1000)
  }


  return (
    <div>
      <Script src="https://staging.scuti-sdk.js.run.app.scuti.store/browser.js" onLoad={onScutiLoaded} />
      <h1>SCUTI</h1>
      <div className="fixed top-0 left-0 h-screen w-full bg-main-bk z-[50000] flex flex-col">
        <div id="scuti-store" style={{ height: "800px" }} />
      </div>
    </div>
  )
}

export default Scuti
