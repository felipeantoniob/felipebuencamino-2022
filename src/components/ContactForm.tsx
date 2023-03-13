import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID

const formSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().email().min(1, { message: 'Required' }),
  message: z.string().min(1, { message: 'Required' }),
})

type FormSchemaType = {
  name: string
  email: string
  message: string
}

const onSubmit: SubmitHandler<FormSchemaType> = async (data): Promise<void> => {
  await sendEmail(data)
  alert('Email sent successfully!')
}

const sendEmail = async (data: FormSchemaType): Promise<boolean> => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
    return response.status === 200
  } catch (err) {
    console.log(err)
    return false
  }
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  return (
    <form className="flex flex-col gap-4 mx-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-sm  sm:text-base">Name</p>
        <input
          {...register('name')}
          type="text"
          className="form-input h-12 rounded-md w-full mt-2 bg-slate-800 focus:ring-0 focus:border-black"
        />
        {errors.name?.message && <p className="text-red-500">{errors.name?.message}</p>}
      </div>
      <div>
        <p className="text-sm sm:text-base">Email</p>
        <input
          {...register('email')}
          type="text"
          className="form-input h-12 rounded-md w-full mt-2 bg-slate-800 focus:ring-0 focus:border-black"
        />
        {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
      </div>
      <div>
        <p className="text-sm sm:text-base">Message</p>
        <textarea
          {...register('message')}
          className="form-textarea h-24 rounded-md w-full mt-2 bg-slate-800 focus:ring-0 focus:border-black"
        />
        {errors.message?.message && <p className="text-red-500">{errors.message?.message}</p>}
      </div>
      <button className="bg-slate-500 py-4 rounded-md mt-4 text-white text-xl hover:opacity-75 transition-all">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
