'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { usePathname } from "next/navigation"
export default function ContactUsForm() {
  const mail = 'xxxx@ulife.com.co' //! este correo es el que sale al lado del formulario
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
  const formClass = `w-full p-2 flex place-self-center rounded-lg border border-gray-400 text-lg lg:text-xl`
  let loading = false;
  return (
    <section className={`lg:bg-contact bg-center bg-cover flex flex-col py-5 text-lg lg:flex-row`}>
      <div className={`flex flex-col items-center justify-items-center lg:basis-10/12 text-center p-8 lg:p-20 text-subtle text-lg lg:text-2xl xl:text-4xl`}>
        <h1 className="my-5">Para brindarle una experiencia personalizada puede comunicarse con nosotros por medio del correo <strong>{mail}</strong> con su solicitud</h1>
        <h2 className="my-5">Si es de su preferencia, por favor llene el formulario y le contactaremos para resolver su solicitud</h2>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full flex sm:flex-col place-items-center text-black text-lg pt-4 px-20"> */}
      <form action={`https://formsubmit.co/${mailTo}`} method="POST" className={`w-full flex lg:flex-col place-items-center lg:py-20 px-10 xl:px-40`}>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-x-3 text-black'>
          <div className={'lg:col-span-2 flex flex-col'}>
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
          <div className={'flex flex-col'}>
            <label>Teléfono<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Telefono?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Numero de Teléfono</p>
            )} */}
            <input className={formClass} name="Telefono" type="number" required />
          </div>
          <div className={'flex flex-col'}>
            <label>Correo<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Email?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Correo Electrónico</p>
            )} */}
            <input className={formClass} name="Email" type="email" required />
          </div>
          <div className={'lg:col-span-2 flex flex-col'}>
            <label>Asunto<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Email?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Correo Electrónico</p>
            )} */}
            <input className={formClass} name="Asunto" type="text" required />
          </div>
          <div className={'lg:col-span-2 flex flex-col'}>
            <label>Mensaje<span className="text-red">*</span></label>
            {/* <input className={formClass} {...register("Telefono", { required: true })} 
              aria-invalid={errors.Telefono ? "true" : "false"}
            />
            {errors.Email?.type === "required" && (
              <p role="alert" className="text-red">Es necesario digitar su Correo Electrónico</p>
            )} */}
            <input className={formClass + ' h-20'} name="Mensaje" type="text" required />
          </div>
          <input type="submit" className={`col-span-2 self-center rounded-xl bg-darkblue hover:bg-purpleHover text-white py-1
                  ${loading ? 'cursor-not-allowed': 'cursor-pointer'}w-1/2 sm:w-5/12 text-base lg:text-2xl mb-5`}
                  value={'ENVIAR'}/>
          {/* <button 
          className={`w-1/2 self-center rounded-xl bg-purple hover:bg-purpleHover text-white text-sm lg:text-xl py-3 mb-5 ${loading ? 'disable': ''}`}>
            Contáctame
          </button> */}
          <input type="hidden" name="_next" value='https://ulife.com.co/' />
        </div>
      </form>
    </section>
  )
}
