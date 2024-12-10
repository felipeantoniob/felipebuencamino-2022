import emailjs from "@emailjs/browser";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { RefCallback } from "react";
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";
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

type FormFieldKey = keyof FormSchemaType;

const InputField = ({
  label,
  id,
  register,
  errors,
  type = "text",
  isTextArea = false,
  ref,
}: {
  label: string;
  id: FormFieldKey;
  register: UseFormRegister<FormSchemaType>;
  errors: FieldValues;
  type?: string;
  isTextArea?: boolean;
  ref?: RefCallback<HTMLDivElement>;
}) => {
  return (
    <div ref={ref}>
      <label htmlFor={id} className="text-sm sm:text-base">
        {label}
        {isTextArea ? (
          <textarea
            id={id}
            {...register(id)}
            className="form-textarea mt-2 h-24 w-full rounded-md bg-slate-800 focus:border-slate-400 focus:ring-0"
          />
        ) : (
          <input
            id={id}
            {...register(id)}
            type={type}
            autoComplete={id}
            className="form-input mt-2 h-12 w-full rounded-md bg-slate-800 focus:border-slate-400 focus:ring-0"
          />
        )}
      </label>
      {errors[id]?.message && (
        <p className="text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
};

const sendEmail = async (data: FormSchemaType): Promise<void> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      data,
      PUBLIC_KEY,
    );

    if (response.status !== 200) {
      throw new Error(`Failed to send email. Status: ${response.status}`);
    }

    toast.success("Email sent successfully!");
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : err && typeof err === "object" && "status" in err
          ? `Email service error. Status: ${err.status || "unknown"}`
          : "Failed to send email";

    console.error("Email send failed:", err);

    toast.error(errorMessage);
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
        onSubmit={handleSubmit(sendEmail)}
      >
        <InputField
          label="Name"
          id="name"
          register={register}
          errors={errors}
          ref={parent}
        />
        <InputField
          label="Email"
          id="email"
          register={register}
          errors={errors}
          ref={parent}
        />
        <InputField
          label="Message"
          id="message"
          register={register}
          errors={errors}
          isTextArea
          ref={parent}
        />
        <button className="mt-4 rounded-md bg-slate-500 py-4 text-xl text-white transition-all hover:opacity-75">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
