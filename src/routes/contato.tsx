import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./empresa";
import { COMPANY, whatsappUrl } from "@/lib/company";
import { MapPin, Mail, Instagram, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Agro'San Linea" },
      { name: "description", content: "Fale com a Agro'San Linea pelo WhatsApp, e-mail ou Instagram. Atendimento consultivo e especializado para o produtor rural." },
      { property: "og:title", content: "Contato — Agro'San Linea" },
      { property: "og:description", content: "Fale com nossa equipe." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com quem entende do campo."
        subtitle="Nossa equipe está pronta para atender produtores rurais, revendas e parceiros."
      />
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-6">
        <a
          href={whatsappUrl("Olá! Quero falar com um especialista.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-gradient-forest text-white p-10 shadow-elegant hover:shadow-gold transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/10 grid place-items-center mb-6 border border-white/15">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-[color:var(--gold-soft)]" fill="currentColor" aria-hidden>
              <path d="M20.5 3.5A11 11 0 0 0 3.4 17L2 22l5.2-1.4a11 11 0 0 0 16.3-9.6 10.9 10.9 0 0 0-3-7.5Z"/>
            </svg>
          </div>
          <div className="text-xs uppercase tracking-wider text-[color:var(--gold-soft)] font-semibold">WhatsApp</div>
          <div className="mt-2 text-2xl font-display font-bold">{COMPANY.whatsappDisplay}</div>
          <p className="mt-3 text-white/80 text-sm">Atendimento rápido e direto com nossos especialistas.</p>
        </a>

        <div className="rounded-3xl bg-white border border-[color:var(--border)] p-10 shadow-soft space-y-6">
          <InfoRow icon={<Mail className="w-5 h-5" />} label="E-mail" value={<a href={`mailto:${COMPANY.email}`} className="hover:text-[color:var(--forest-deep)]">{COMPANY.email}</a>} />
          <InfoRow icon={<Instagram className="w-5 h-5" />} label="Instagram" value={<a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--forest-deep)]">{COMPANY.instagramHandle}</a>} />
          <InfoRow icon={<MapPin className="w-5 h-5" />} label="Endereço" value={COMPANY.address} />
          <InfoRow icon={<Clock className="w-5 h-5" />} label="Horário" value="Seg a Sex · 8h às 18h" />
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-xl bg-[color:var(--accent)] text-[color:var(--forest-deep)] grid place-items-center shrink-0">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold">{label}</div>
        <div className="mt-1 text-[color:var(--foreground)] font-medium">{value}</div>
      </div>
    </div>
  );
}
