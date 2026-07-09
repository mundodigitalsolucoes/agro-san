import { whatsappUrl } from "@/lib/company";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl("Olá! Vim pelo site da Agro'San.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[color:var(--whatsapp)] text-white grid place-items-center shadow-elegant hover:scale-110 transition-transform animate-float"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 3.4 17L2 22l5.2-1.4a11 11 0 0 0 16.3-9.6 10.9 10.9 0 0 0-3-7.5ZM12 20.2a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5.1-6.8c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.1c-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
      </svg>
    </a>
  );
}
