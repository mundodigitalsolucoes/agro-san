import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./empresa";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/area-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Área de Atuação — Agro'San Linea no Pará e Brasil" },
      { name: "description", content: "Atendemos o Pará, com destaque para as regiões Metropolitana, Bragantina e Salgado, e estamos preparados para expansão em todo o território nacional." },
      { property: "og:title", content: "Área de Atuação — Agro'San Linea" },
      { property: "og:description", content: "Do Pará para todo o Brasil." },
      { property: "og:url", content: "/area-de-atuacao" },
    ],
    links: [{ rel: "canonical", href: "/area-de-atuacao" }],
  }),
  component: AreaPage,
});

const REGIOES = [
  { name: "Pará", desc: "Cobertura em todo o estado com atendimento consultivo especializado." },
  { name: "Região Metropolitana", desc: "Belém e cidades vizinhas com entrega ágil e suporte técnico direto." },
  { name: "Bragantina", desc: "Presença ativa junto ao produtor rural da região Bragantina." },
  { name: "Salgado", desc: "Atendimento aos municípios da região do Salgado paraense." },
];

function AreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Área de atuação"
        title="Do Pará para todo o Brasil."
        subtitle="Presença consolidada no Norte e preparados para expansão em todo o território nacional."
      />
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-leaf opacity-10 blur-3xl rounded-3xl" />
          <svg viewBox="0 0 400 400" className="relative w-full h-auto drop-shadow-xl" role="img" aria-label="Mapa estilizado do Pará com regiões destacadas">
            <defs>
              <linearGradient id="mapGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--leaf)" />
                <stop offset="100%" stopColor="var(--forest)" />
              </linearGradient>
            </defs>
            <path d="M80 90 L200 60 L320 100 L340 200 L310 300 L220 340 L120 320 L70 240 Z" fill="url(#mapGrad2)" />
            <path d="M80 90 L200 60 L320 100 L340 200 L310 300 L220 340 L120 320 L70 240 Z" fill="none" stroke="var(--forest-deep)" strokeWidth="2" />
            {[
              { cx: 250, cy: 280, r: 14, label: "Metropolitana" },
              { cx: 290, cy: 220, r: 12, label: "Bragantina" },
              { cx: 300, cy: 170, r: 11, label: "Salgado" },
            ].map((p) => (
              <g key={p.label}>
                <circle cx={p.cx} cy={p.cy} r={p.r + 10} fill="var(--gold)" opacity="0.25" />
                <circle cx={p.cx} cy={p.cy} r={p.r} fill="var(--gold)" stroke="white" strokeWidth="2" />
                <text x={p.cx + 20} y={p.cy + 4} className="fill-[color:var(--forest-deep)] font-semibold" fontSize="14">{p.label}</text>
              </g>
            ))}
            <text x="180" y="200" textAnchor="middle" className="fill-white font-display font-bold" fontSize="48">PA</text>
          </svg>
        </div>
        <div>
          <ul className="space-y-4">
            {REGIOES.map((r) => (
              <li key={r.name} className="flex gap-4 p-5 rounded-2xl bg-white border border-[color:var(--border)] shadow-soft">
                <div className="w-10 h-10 rounded-xl bg-gradient-forest text-white grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-[color:var(--forest-deep)]">{r.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-forest text-white shadow-elegant">
            <p className="font-display text-lg font-semibold">Preparados para expansão em todo o território nacional.</p>
          </div>
        </div>
      </section>
    </>
  );
}
