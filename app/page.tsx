import Link from "next/link"

export default function Home() {
  return (
    <main
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
    >
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">CofiFac</div>

        <div
          className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="text"
            placeholder="Ingrese Numero de Nit"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        <div
          className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="text"
            placeholder="Ingrese nombre de usuario"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>
        <Link href="./dashboard">
          <button
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 w-[480px]">
            Acceder al sistema
          </button>
        </Link>
        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
        >Olvide mi contraseña </a
        >
        <p className="text-center text-lg">
          No tienes cuenta?   
          <a
            href="#"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline">Contactanos </a>
        </p>
      </section>
    </main>
  )
}