import { Link } from "@tanstack/react-router";
import { COMPANY, whatsappUrl } from "@/lib/company";
import { MapPin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-white/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center border border-white/15">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[color:var(--gold-soft)]" fill="currentColor" aria-hidden>
                <path d="M12 2C7 6 5 10 5 14a7 7 0 0 0 14 0c0-4-2-8-7-12Z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white text-lg">Agro'San Linea</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Desde {COMPANY.since}</div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-xs">
            Tecnologia, produtos e soluções para fortalecer o produtor rural em todo o Brasil.
          </p>
          <p className="mt-4 text-xs text-white/50">CNPJ {COMPANY.cnpj}</p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Links rápidos</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/empresa", "Empresa"],
              ["/marcas", "Marcas"],
              ["/produtos", "Produtos"],
              ["/area-de-atuacao", "Área de Atuação"],
              ["/nossa-historia", "Nossa história"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-[color:var(--gold-soft)] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[color:var(--gold-soft)]" />
              <span className="text-white/70">{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-[color:var(--gold-soft)]" />
              <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white">{COMPANY.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="w-4 h-4 mt-0.5 text-[color:var(--gold-soft)]" />
              <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                {COMPANY.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Atendimento</h4>
          <p className="text-sm text-white/70 mb-4">Solicite orçamento ou fale com um especialista.</p>
          <a
            href={whatsappUrl("Olá! Vim pelo site da Agro'San.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white px-5 py-3 text-sm font-semibold shadow-elegant hover:brightness-110 transition"
          >
            WhatsApp {COMPANY.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Agro'San Linea. Todos os direitos reservados.</p>
          <p className="italic">"{COMPANY.slogan}"</p>
        </div>
      </div>
    </footer>
  );
}
