// src/components/ContactSuccess.jsx
export default function ContactSuccess({ contact, onReset }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-yellow-300">
        Danke für deine Nachricht.
      </h3>
      <p className="text-sm text-slate-300">
        Dein Formular wurde abgesendet. Du kannst dieses Fenster schließen oder
        noch eine Nachricht schicken.
      </p>

      {contact && (
        <p className="text-sm text-slate-400">
          Falls etwas Dringendes ist, erreichst du mich auch direkt unter{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-yellow-300 underline underline-offset-2"
          >
            {contact.email}
          </a>{" "}
          oder telefonisch unter{" "}
          <span className="text-slate-200">{contact.phone}</span>.
        </p>
      )}

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800"
      >
        Neues Formular ausfüllen
      </button>
    </div>
  );
}
