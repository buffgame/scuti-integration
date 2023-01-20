import { FC } from "react"

const Iframe: FC = () => {

  return (
    <div>
      <h1>SCUTI IFRAME</h1>
      <iframe src="http://localhost:3000/" style={{ height: "800px", width: "600px" }}></iframe>
    </div>
  )
}

export default Iframe
