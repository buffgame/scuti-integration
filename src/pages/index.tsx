import { FC, useCallback, useState } from "react"
import Script from "next/script"
import Link from "next/link"


const Scuti: FC = () => {
  const [scutiLoaded, setScutiLoaded] = useState(false)
  const [scutiOpened, setScutiOpened] = useState(false)

  const onScutiLoaded = useCallback(() => {
    console.log("SCUTI LOADED");
    (window as any).SCUTI_SDK.initialize("65407cb8-cd30-48e5-90cf-3275486aba0e")

    setScutiLoaded(true)
  }, [])

  const onBackToGame = useCallback(() => {
    console.log("on back to game")
    setScutiOpened(false)
  }, [])

  const onScutiExchange = useCallback(() => {
    console.log("onScutiExchange")
  }, [])

  const showScuti = useCallback(() => {
    if (!scutiLoaded || scutiOpened) return

    console.log("SHOW scuti");
    setScutiOpened(true);
    
    setTimeout(() => {
      (window as any).SCUTI_SDK.renderStore(
        "scuti-store", 
        { onBackToGame, onScutiExchange }, 
        { width: "100%", height: "100%" }
      )
    }, 1000)
  }, [onBackToGame, onScutiExchange, scutiLoaded, scutiOpened])

  return (
    <div>
      <Script src="https://staging.scuti-sdk.js.run.app.scuti.store/browser.js" onLoad={onScutiLoaded} />
      <button onClick={showScuti} style={{marginRight: 16}}>SHOW SCUTI</button>
      <Link href="/iframe">open this page in iframe</Link>

      {scutiOpened && <div id="scuti-store" style={{ height: "800px" }} />}
    </div>
  )
}

export default Scuti
