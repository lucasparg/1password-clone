import PageHead from "@components/PageHead"
import SigninForm from "@modules/auth/signin/Form"
import { NextPage } from "next"

const title = "1Password — Password Manager for Teams, Businesses, and Families"

const Signin: NextPage = () => {
  return (
    <>
      <PageHead title={title} content="" />
      <div
        id="locked-app"
        className="bg-cultured flex flex-wrap justify-center"
      >
        <div
          id="locked-app-container"
          className="flex flex-row justify-center max-w-[70%] w-full min-h-full"
        >
          <div
            id="locked-app-icon"
            className="w-[250px] m-0 mr-12 flex flex-row justify-center items-center"
          ></div>
          <div id="locked-app-content" className="max-w-[420px] mr-[62px]">
            <main id="signin-form" className="max-w-[425px] pt-[22vh] w-full">
              <SigninForm />
            </main>
            <footer className="mt-24">
              <small className="text-xsbase leading-[1.2em] block">
                <a
                  className="link"
                  rel="noreferrer"
                  href="https://app-updates.agilebits.com/product_history/B5"
                  target="_blank"
                >
                  <span className="default--typography_IPc9L text04--typography_gysuf">
                    Versión 1305
                  </span>
                </a>{" "}
                — © 2022
                <a
                  className="link"
                  rel="noreferrer"
                  href="https://1password.com"
                  target="_blank"
                >
                  <span className="default--typography_IPc9L text04--typography_gysuf">
                    {" "}
                    1Password
                  </span>
                </a>
                . Todos los derechos reservados. 4711 Yonge St, 10th Floor,
                Toronto, Ontario, M2N 6K8, Canada.
              </small>
            </footer>
          </div>
        </div>
        <div className="whats-new-frame px-6 bg-green-900 max-w-full">
          <span className="webinar">Webinar Series</span>
          <span className="security-summer">Security Summer Camp</span>
        </div>
      </div>
    </>
  )
}

export default Signin
