import Head from "next/head"
import { FC } from "react"

type PageHeadProps = {
  title: string
  content?: string
}

const PageHead: FC<PageHeadProps> = ({ title, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="https://app.1password.com/images/favicon.ico" />
    </Head>
  )
}

export default PageHead
