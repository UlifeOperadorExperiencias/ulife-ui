import Valores from "@/components/Valores";

export default function AboutUs(){
  const mision = 'Contribuir al desarrollo local a través de la creación de modelos de gestión organizacional innovadores, con propósíto, sostenibles y sustentables, que revolucionen las experiencias de vida de nuestros clientes, dándole sentido, valor y memorabilidad a cada espacio al cual nos acercamos'
  const vision  = 'En el 2025 lograremos transformar la industria del Club housing, expandiendo nuestro mercado a Latinoamérica y consolidando nuestra marca como pionera en el mercado de desarrollo de modelos organizacionales inspiradores y transformadores de espacios de vida innovadores'
  return(
    <div className='w-full flex flex-col items-center justify-center my-10 px-10'>
      <div className="text-center text-darkblue my-10 px-5">
        <h1 className="text-3xl lg:text-5xl xl:text-7xl">
          ULIFE OPERADOR DE EXPERIENCIAS
        </h1>
        <h2 className="text-sm lg:text-xl xl:text-2xl my-10">
          Líderes latinoamericanos en la creación y desarrollo de modelos de gestión organizacional
        </h2>
      </div>
      <div className="w-full lg:w-3/4 text-justify grid self-end justify-end justify-items-center">
        <div className={`grid grid-cols-1 lg:grid-cols-4 text-white items-center`}>
          <h1 className="lg:rounded-tl-xl bg-plainblue text-white text-center text-3xl lg:text-3xl xl:text-5xl h-full flex items-center justify-center p-10">
            MISION
          </h1>
          <div className="lg:rounded-tr-xl col-span-3 bg-mision bg-cover h-full flex items-center justify-center p-5 lg:p-10">
            {mision}
          </div>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-4 text-white`}>
          <div className="lg:rounded-bl-xl col-span-3 bg-vision bg-cover h-full flex items-center justify-center p-5 lg:p-10 order-last lg:order-none">
            {vision}
          </div>
          <h1 className="lg:rounded-br-xl bg-plainblue text-white text-center text-3xl lg:text-3xl xl:text-5xl h-full flex items-center justify-center p-10 order-first lg:order-none">
            VISION
          </h1>
        </div>
      </div>
      <Valores />
    </div>
  )
}