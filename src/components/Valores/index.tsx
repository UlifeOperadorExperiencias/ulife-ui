export default function Valores(){
  return(
    <div className='w-full flex flex-col items-center justify-center my-10 px-10'>
      <h1 className='text-center text-darkblue text-3xl lg:text-5xl xl:text-7xl'>Nuestros Valores</h1>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 p-10 my-10'>
        {valores.map((valor, index)=> {
            return(
              <>
                <img src={valor.url} alt={`Valor ${index}`} key={index}/>
              </>
            )
          })}
      </div>
    </div>
  )
}

const valores = [
  {url:'/images/valores1.png'},
  {url:'/images/valores2.png'},
  {url:'/images/valores3.png'},
  {url:'/images/valores4.png'},
  {url:'/images/valores5.png'},
]