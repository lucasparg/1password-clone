import { FC } from "react"

const SigninForm: FC<any> = () => {
  return (
    <div className="relative flex flex-col w-full">
      <h1 className="text-basex1 font-semibold mb-6">
        Inicia sesión en tu cuenta 1Password
      </h1>
      <div className="relative">
        <label htmlFor="email">{"Correo electrónico"}</label>
        <input
          className="basic-input"
          type="email"
          id="email"
          autoComplete="username"
          autoCapitalize="none"
          autoCorrect="off"
        />
      </div>
      <div className="relative">
        <label htmlFor="account-key">{"Secret Key"}</label>
        <input
          className="basic-input"
          type="text"
          id="account-key"
          autoCapitalize="characters"
          autoCorrect="off"
        />
        <a
          className="absolute top-0 right-0 link"
          target="_blank"
          href="https://support.1password.com/secret-key"
          rel="noreferrer"
        >
          <span className="text-sm font-medium">Encuentra tu Secret Key</span>
        </a>
      </div>
      <div className="relative">
        <label htmlFor="master-password">{"Contraseña"}</label>
        <input
          className="basic-input"
          type="password"
          id="master-password"
          autoComplete="current-password"
        />
      </div>
      <div className="relative public-computer">
        <input type="checkbox" id="public-computer" aria-checked="false" />
        <label htmlFor="public-computer" className="ml-3">
          {"Este es un equipo público o compartido"}
        </label>
      </div>
      <div className="relative flex justify-between items-center">
        <button className="btn-primary rounded-full">Iniciar sesión</button>
        <a className="link" href="/support?a=&amp;email=">
          <span className="text-sm font-medium">
            ¿Tienes problemas para iniciar sesión?
          </span>
        </a>
      </div>
    </div>
  )
}

export default SigninForm
