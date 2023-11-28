import { PiCopyrightThin } from "react-icons/pi"
export default function Footer(){
  const date = new Date(Date.now());
  const year = date.getFullYear();
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md my-2 py-2 px-2 bg-darkblue text-white text-lg bg-terciary">
      <div className="flex flex-col items-center justify-center p-2 order-first sm:order-last">
        <p className="text-center">
          Política de privacidad y manejo de datos
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-center
        p-2 order-last sm:order-first">
        <span className="text-xl mx-1">
          <PiCopyrightThin size={40}/>
        </span>
        {year} Todos los derechos reservados.
      </div>
    </div>
  )
}