export default function Business() {
  return (
    <div>
      <div className="text-center text-darkblue my-10 px-5">
        <h1 className="text-lg lg:text-2xl xl:text-4xl">
          ULIFE OPERADOR DE EXPERIENCIAS
        </h1>
        <h2 className="text-3xl lg:text-5xl xl:text-7xl">
          CREAMOS EXPERIENCIAS
        </h2>
      </div>
      <div className="bg-business bg-cover my-10 lg:p-20">
        {
          articles.map((article, index) =>{
            return(
              <>
                <div className={`bg-plainblue w-2/3 grid grid-cols-1 lg:grid-cols-3 items-center justify-center
                  ${index % 2 === 0 ? 'm-10 rounded-r-full rounded-b-full' : 'my-10 mx-20 lg:mx-80 self-start rounded-l-full rounded-b-full'}
                `}>
                  <img src={article.image} alt={`Article ${index}`} className="p-2 xl:p-10"/>
                  <div className="col-span-2 pb-10 lg:pb-0 px-5 lg:px-10 xl:px-16 text-white text-justify">
                    <div className="text-lg lg:text-xl xl:text-2xl my-5 text-left">{article.title}</div>
                    <div className="text-sm lg:text-lg xl:text-lg my-5">{article.text}</div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-end mx-3 my-10 px-2">
        <div className="flex flex-row">
          <p className="hidden lg:block basis-3/12">&nbsp;</p>
          <img src="/images/cityu_foto.png" alt="CityU" className="rounded-l-xl h-full w-full lg:w-3/4"/>
        </div>
        <div className="rounded-r-xl bg-plainblue text-white text-justify h-full flex flex-col place-content-center px-20">
          <h1 className="text-xl lg:text-2xl xl:text-2xl my-5">
            Nuestros activos, proyectos exitosos
          </h1>
          <p className="text-sm lg:text-lg xl:text-xl my-5">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich i enjoy with my whole heart. I am alone, and feel the charm of existence of the light.
          </p>
        </div>
      </div>
    </div>
  )
}


const articles =[
  {image:'/images/javier_nieto.png', title:'UN MODELO DE GESTIÓN EXITOSO', text:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich i enjoy with my whole heart. I am alone, and feel the charm of existence of the light.'},
  {image:'/images/johana_castillo.png', title:'LÍDERES EN CLOUD HOUSING EN LATAM', text:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich i enjoy with my whole heart. I am alone, and feel the charm of existence of the light.'},
  {image:'/images/angelica_cabra.png', title:'EXTRATEGIAS INNOVADORAS PARA LA EXPERIENCIA', text:'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring wich i enjoy with my whole heart. I am alone, and feel the charm of existence of the light.'},
]