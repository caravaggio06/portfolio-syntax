// src/components/ContactForm.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup.string().required("Bitte einen Namen eintragen."),
  email: yup
    .string()
    .email("Bitte eine gültige E-Mail-Adresse eingeben.")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Bitte eine gültige E-Mail-Adresse eingeben.")
    .min(5, "E-Mail muss mindestens 5 Zeichen haben.")
    .required("E-Mail ist erforderlich."),
  message: yup
    .string()
    .min(20, "Nachricht muss mindestens 20 Zeichen lang sein.")
    .required("Nachricht ist erforderlich."),
  attachment: yup
    .mixed()
    .test("fileSize", "Datei ist zu groß (max. 5 MB).", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 5 * 1024 * 1024;
    }),
});

export default function ContactForm({ contact, onSubmitted }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      attachment: formData.attachment?.[0]
        ? {
            name: formData.attachment[0].name,
            size: formData.attachment[0].size,
            type: formData.attachment[0].type,
          }
        : null,
    };

    // Aufgabe: Daten in die Konsole loggen
    console.log("Kontaktformular:", payload);

    // Felder zurücksetzen
    reset();
    // Seite informieren → Inhalt umschalten
    onSubmitted();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
      encType="multipart/form-data"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-200">
            E-Mail
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-200">
          Nachricht
        </label>
        <textarea
          rows={5}
          {...register("message")}
          className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-200">
          Anhang (optional)
        </label>
        <input
          type="file"
          {...register("attachment")}
          className="block w-full text-xs text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-slate-100 hover:file:bg-slate-700"
        />
        {errors.attachment && (
          <p className="text-xs text-red-400">{errors.attachment.message}</p>
        )}
      </div>

      {contact && (
        <p className="text-xs text-slate-400">
          Alternativ direkt per E-Mail:{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-yellow-300 underline underline-offset-2"
          >
            {contact.email}
          </a>{" "}
          oder Telefon:{" "}
          <span className="text-slate-200">{contact.phone}</span>
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400"
        >
          {isSubmitting ? "Senden…" : "Nachricht senden"}
        </button>
      </div>
    </form>
  );
}
