import emailjs from "@emailjs/browser";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { z } from "zod";

const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;

const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email().min(1, { message: "Required" }),
  message: z.string().min(1, { message: "Required" }),
});

type FormSchemaType = {
  name: string;
  email: string;
  message: string;
};

const onSubmit: SubmitHandler<FormSchemaType> = async (data): Promise<void> => {
  const isSuccessful = await sendEmail(data);
  if (isSuccessful) {
    toast.success("Email sent successfully!");
  } else {
    toast.error("Email failed to send!");
  }
};

const sendEmail = async (data: FormSchemaType): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      data,
      PUBLIC_KEY,
    );
    return response.status === 200;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const ContactForm = () => {
  const [parent] = useAutoAnimate({ duration: 100 });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      <Toaster toastOptions={{ className: "bg-red-500" }} />
      <form
        className="mx-4 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div ref={parent}>
          <label htmlFor="name" className="text-sm sm:text-base">
            Name
            <input
              {...register("name")}
              type="text"
              autoComplete="name"
              className="form-input mt-2 h-12 w-full rounded-md bg-slate-800 focus:border-slate-400 focus:ring-0"
            />
          </label>
          {errors.name?.message && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>
        <div ref={parent}>
          <label htmlFor="email" className="text-sm sm:text-base">
            Email
            <input
              {...register("email")}
              type="text"
              autoComplete="email"
              className="form-input mt-2 h-12 w-full rounded-md bg-slate-800 focus:border-slate-400 focus:ring-0"
            />
          </label>
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div ref={parent}>
          <label htmlFor="message" className="text-sm sm:text-base">
            Message
            <textarea
              {...register("message")}
              className="form-textarea mt-2 h-24 w-full rounded-md bg-slate-800 focus:border-slate-400 focus:ring-0"
            />
          </label>
          {errors.message?.message && (
            <p className="text-red-500">{errors.message?.message}</p>
          )}
        </div>
        <button className="mt-4 rounded-md bg-slate-500 py-4 text-xl text-white transition-all hover:opacity-75">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
