import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY, whatsappUrl } from "@/lib/company";
import agrosanLogo from "@/assets/logo-agrosan.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/empresa", label: "Empresa" },
  { to: "/marcas", label: "Marcas" },
  { to: "/produtos", label: "Produtos" },
  { to: "/area-de-atuacao", label: "Área de Atuação" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-[color:var(--border)] shadow-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Agro'San Linea — início">
          <img
            src={agrosanLogo.url}
            alt="Logo Agro'San Linea"
            className="h-12 w-auto max-w-[160px] object-contain transition-transform group-hover:scale-105"
            loading="eager"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-[color:var(--forest-deep)] text-base tracking-tight">{COMPANY.shortName}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">linea · desde {COMPANY.since}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[color:var(--foreground)]/80 hover:text-[color:var(--forest-deep)] hover:bg-[color:var(--accent)]/60 transition-colors"
              activeProps={{ className: "text-[color:var(--forest-deep)] bg-[color:var(--accent)]/70" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={whatsappUrl("Olá! Vim pelo site da Agro'San e gostaria de mais informações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-5 py-2.5 text-sm font-semibold shadow-elegant hover:opacity-95 transition"
          >
            <WhatsIcon /> Falar agora
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md hover:bg-[color:var(--accent)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[color:var(--border)] shadow-soft">
          <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Menu mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-[color:var(--foreground)] hover:bg-[color:var(--accent)]"
                activeProps={{ className: "bg-[color:var(--accent)] text-[color:var(--forest-deep)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl("Olá! Vim pelo site da Agro'San.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-forest text-white px-5 py-3 text-sm font-semibold"
            >
              <WhatsIcon /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11 11 0 0 0 3.4 17L2 22l5.2-1.4a11 11 0 0 0 16.3-9.6 10.9 10.9 0 0 0-3-7.5ZM12 20.2a9 9 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5.1-6.8c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.1c-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
    </svg>
  );
}
