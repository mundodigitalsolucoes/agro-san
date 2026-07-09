import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "./empresa";
import agrosanLogo from "@/assets/logo-agrosan.png.asset.json";
import nutrisanLogo from "@/assets/logo-nutrisan.png.asset.json";
import petsanLogo from "@/assets/logo-petsan.png.asset.json";

export const Route = createFileRoute("/marcas")({
  head: () => ({
    meta: [
      { title: "Marcas — Agro'San, Shop'San, Nutri'San e Pet'San" },
      { name: "description", content: "Conheça as marcas do grupo Agro'San Linea: Agro'San (institucional), Shop'San (atendimento e vendas), Nutri'San (nutrição animal) e Pet'San (pet)." },
      { property: "og:title", content: "Marcas do grupo Agro'San Linea" },
      { property: "og:description", content: "Um ecossistema de marcas para o agro e o pet." },
      { property: "og:url", content: "/marcas" },
    ],
    links: [{ rel: "canonical", href: "/marcas" }],
  }),
  component: MarcasPage,
});

const MARCAS = [
  {
    name: "AGRO'SAN",
    tag: "Marca institucional",
    desc: "Identidade que reúne toda a estrutura de soluções da Agro'San Linea para o agronegócio.",
    logo: agrosanLogo.url,
    tint: "from-[color:var(--forest-deep)] to-[color:var(--forest)]",
    bullets: ["Curadoria de portfólio", "Atendimento consultivo", "Presença em todo o Pará"],
    cta: "Conhecer história",
    href: "/nossa-historia",
  },
  {
    name: "SHOP'SAN",
    tag: "Canal oficial de atendimento e vendas",
    desc: "Central prática de compra, cotação e relacionamento — tecnologia e simplicidade em um só lugar.",
    tint: "from-[color:var(--gold)] to-[color:var(--gold-soft)]",
    bullets: ["Cotação rápida", "Atendimento humanizado", "Canal digital integrado"],
    cta: "Ver produtos",
    href: "/produtos",
  },
  {
    name: "NUTRI'SAN",
    tag: "Linha de nutrição animal",
    desc: "Rações e suplementos formulados para máxima performance em bovinos, aves, suínos e equinos.",
    logo: nutrisanLogo.url,
    tint: "from-[color:oklch(0.62_0.10_195)] to-[color:oklch(0.78_0.10_190)]",
    bullets: ["Alta conversão alimentar", "Formulações premium", "Suporte técnico incluso"],
    cta: "Linha Nutri'San",
    href: "/produtos?categoria=Nutri%C3%A7%C3%A3o%20Animal",
  },
  {
    name: "PET'SAN",
    tag: "Canal de atendimento pet",
    desc: "Nutrição e cuidado especializado para cães, gatos e demais pets do lar.",
    logo: petsanLogo.url,
    tint: "from-[color:oklch(0.85_0.15_90)] to-[color:oklch(0.92_0.10_95)]",
    bullets: ["Rações premium", "Antiparasitários", "Petiscos naturais"],
    cta: "Linha Pet'San",
    href: "/produtos?categoria=Linha%20Pet",
  },
];

function MarcasPage() {
  return (
    <>
      <PageHero eyebrow="Marcas" title="Um ecossistema de marcas conectadas ao produtor." subtitle="Cada marca do grupo tem um papel claro e complementar, do institucional ao pet." />
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-20 space-y-8">
        {MARCAS.map((m, i) => (
          <article
            key={m.name}
            className={`grid lg:grid-cols-[420px_1fr] gap-8 items-center rounded-3xl bg-white border border-[color:var(--border)] overflow-hidden shadow-soft hover:shadow-elegant transition-all ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className={`h-64 lg:h-full min-h-[240px] bg-gradient-to-br ${m.tint} grid place-items-center p-8`}>
              {m.logo ? (
                <img src={m.logo} alt={`Logo ${m.name}`} className="max-h-40 max-w-full object-contain drop-shadow-xl" loading="lazy" />
              ) : (
                <div className="text-white font-display text-4xl font-bold tracking-tight drop-shadow-lg">{m.name}</div>
              )}
            </div>
            <div className="p-8 lg:pr-12">
              <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold">{m.tag}</div>
              <h2 className="mt-2 font-display text-3xl font-bold text-[color:var(--forest-deep)]">{m.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{m.desc}</p>
              <ul className="mt-5 grid sm:grid-cols-3 gap-2">
                {m.bullets.map((b) => (
                  <li key={b} className="text-sm text-[color:var(--foreground)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                    {b}
                  </li>
                ))}
              </ul>
              {m.href.includes("?") ? (
                <a href={m.href} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
                  {m.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link to={m.href} className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
                  {m.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
