import { FC } from "react"
import Script from "next/script"


const Iframe: FC = () => {


  return (
    <div>
      <h1>SCUTI IFRAME</h1>
      <iframe src="http://localhost:16108/" style={{ height: "800px", width: "600px" }}></iframe>
    </div>
  )
}

export default Iframe
