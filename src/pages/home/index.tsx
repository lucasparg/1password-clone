import PageHead from "@components/PageHead"
import { NextPage } from "next"

const title = "1Password para Lucas Porter"

const Home: NextPage = () => {
  return (
    <>
      <PageHead title={title} content="" />
      <div>Home</div>
    </>
  )
}

export default Home
