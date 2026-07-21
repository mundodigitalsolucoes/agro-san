import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./empresa";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/area-de-atuacao")({
  head: () => ({
    meta: [
      { title: "Área de Atuação — Agro'san Linea no Pará e Brasil" },
      {
        name: "description",
        content:
          "Atendemos o Pará, com destaque para as regiões Metropolitana, Bragantina e Salgado, e estamos preparados para expansão em todo o território nacional.",
      },
      { property: "og:title", content: "Área de Atuação — Agro'san Linea" },
      { property: "og:description", content: "Do Pará para todo o Brasil." },
      { property: "og:url", content: "/area-de-atuacao" },
    ],
    links: [{ rel: "canonical", href: "/area-de-atuacao" }],
  }),
  component: AreaPage,
});

const REGIOES = [
  { name: "Pará", desc: "Cobertura em todo o estado com atendimento consultivo especializado." },
  {
    name: "Região Metropolitana",
    desc: "Belém e cidades vizinhas com entrega ágil e suporte técnico direto.",
  },
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
        <BrazilMap />
        <div>
          <ul className="space-y-4">
            {REGIOES.map((r) => (
              <li
                key={r.name}
                className="flex gap-4 p-5 rounded-2xl bg-white border border-[color:var(--border)] shadow-soft"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-forest text-white grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-[color:var(--forest-deep)]">
                    {r.name}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 rounded-2xl bg-gradient-forest text-white shadow-elegant">
            <p className="font-display text-lg font-semibold">
              Preparados para expansão em todo o território nacional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function BrazilMap() {
  return (
    <div className="relative rounded-[2rem] bg-white/75 p-6 shadow-soft border border-[color:var(--border)] overflow-hidden">
      <div className="absolute inset-8 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
      <div className="absolute left-[25%] top-[24%] h-32 w-32 rounded-full bg-[color:var(--leaf)]/25 blur-2xl animate-pulse" />
      <svg
        viewBox="0 0 380 380"
        className="relative w-full h-auto drop-shadow-xl"
        role="img"
        aria-label="Mapa estilizado do Brasil com o Pará em verde"
      >
        <defs>
          <filter id="paraGlowArea" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.21 0 0 0 0 0.58 0 0 0 0 0.28 0 0 0 .65 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M165 54 205 42 252 66 292 104 310 154 292 210 252 246 222 300 170 326 122 296 100 238 72 198 86 136Z"
          fill="var(--accent)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <path
          d="M92 118 166 58 162 132 196 168 172 224 102 232 72 198 86 136Z"
          fill="var(--leaf)"
          stroke="white"
          strokeWidth="3"
          filter="url(#paraGlowArea)"
          className="animate-map-pulse"
        />
        <text
          x="132"
          y="157"
          textAnchor="middle"
          className="fill-white font-display font-bold"
          fontSize="28"
        >
          PA
        </text>
        <circle
          cx="132"
          cy="149"
          r="56"
          fill="none"
          stroke="var(--leaf)"
          strokeWidth="2"
          opacity="0.35"
          className="animate-map-ring"
        />
      </svg>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-white/85 px-4 py-3 text-sm text-[color:var(--forest-deep)] shadow-soft backdrop-blur">
        <span className="inline-flex items-center gap-2 font-semibold">
          <span className="h-3 w-3 rounded-full bg-[color:var(--leaf)] shadow-[0_0_18px_var(--leaf)]" />{" "}
          Pará destacado
        </span>
        <span className="text-muted-foreground">Atuação principal com expansão nacional.</span>
      </div>
    </div>
  );
}
