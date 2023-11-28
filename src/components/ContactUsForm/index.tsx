import { SubmitHandler, useForm } from "react-hook-form"
import { usePathname } from "next/navigation"
export default function ContactUsForm({page}:{page?: boolean}) {
  const mailTo = 'nbarrera@cityu.com.co'
  // const mailTo = 'jlaguna@ulife.com.co'
  const pathName = usePathname()
  type InputsValues = {
    Nombres: string
    Apellidos: string
    Telefono: number
    Email: string
    mensaje: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsValues>()
  const onSubmit: SubmitHandler<InputsValues> = (data) => {
    loading = true;
    setTimeout(() => {
      loading = false;
    },5000)
    alert(JSON.stringify(data))
  }
  const formClass = `${page ? 'w-3/4 py-4 px-2' : 'w-full p-2'} flex place-self-center rounded-lg border border-gray-400 text-lg lg:text-xl`
  let loading = false;
  return (
    <div className={`bg-contact bg-center bg-cover flex flex-col py-5 ${ page ? 'text-center text-lg lg:text-3xl' : 'text-lg lg:flex-row'}`}>
      <div className={`flex flex-col items-center justify-items-center lg:basis-10/12 text-center p-20`}>
        <img src="/images/viveinside.png" alt="Contact Form" className={`${ page ? 'h-[400px] w-[700px]' : 'h-[350px] w-[1000px]'}`}/>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full flex sm:flex-col place-items-center text-black text-lg pt-4 px-20"> */}
      <form action={`https://formsubmit.co/${mailTo}`} method="POST" className={`w-full flex sm:flex-col place-items-center lg:py-20 px-10 xl:px-40`}>
        <div className='w-full flex flex-col gap-y-5 lg:gap-x-3 text-black'>
          <div className={'lg:col-span-3 flex flex-col'}>
            <label>Nombres Completo<span className="text-red">*</span></label>
            {/* <input className={formClass}
              {...register("Nombres", { required: true })} 
              aria-invalid={errors.Nombres ? "true" : "false"}
            />
            {errors.Nombres?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Nombre</p>
            )} */}
            <input className={formClass} name="Nombre" type="text" required />
          </div>
          <div className={'lg:col-span-3 flex flex-col'}>
            <label>Teléfono<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Telefono?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Numero de Teléfono</p>
            )} */}
            <input className={formClass} name="Telefono" type="number" required />
          </div>
          <div className={'lg:col-span-3 flex flex-col'}>
            <label>Email<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Email?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Correo Electrónico</p>
            )} */}
            <input className={formClass} name="Email" type="email" required />
          </div>
          <input type="submit" className={`self-center rounded-xl bg-purple hover:bg-purpleHover text-white py-1
                  ${loading ? 'cursor-not-allowed': 'cursor-pointer'} ${ page ? 'w-1/2 sm:w-7/12 lg:w-2/6 text-2xl lg:text-4xl my-5' : 'w-1/2 sm:w-7/12 text-base lg:text-2xl mb-5'}`}
                  value={'Contáctame'}/>
          {/* <button 
          className={`w-1/2 self-center rounded-xl bg-purple hover:bg-purpleHover text-white text-sm lg:text-xl py-3 mb-5 ${loading ? 'disable': ''}`}>
            Contáctame
          </button> */}
          <input type="hidden" name="_next" value='https://insideboho.com.co/' />
        </div>
      </form>
    </div>
  )
}
