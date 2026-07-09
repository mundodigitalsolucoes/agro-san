import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Wrench, Cpu, Newspaper, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "Empresa — Agro'San Linea" },
      {
        name: "description",
        content:
          "Conheça a Agro'San Linea: quem somos, missão, valores e os cinco pilares que sustentam nossa atuação no agronegócio nacional desde 2012.",
      },
      { property: "og:title", content: "Empresa — Agro'San Linea" },
      { property: "og:description", content: "Missão, visão e pilares da Agro'San Linea." },
      { property: "og:url", content: "/empresa" },
    ],
    links: [{ rel: "canonical", href: "/empresa" }],
  }),
  component: EmpresaPage,
});

const PILARES = [
  { icon: Package, title: "Produtos" },
  { icon: Wrench, title: "Serviços" },
  { icon: Cpu, title: "Tecnologia" },
  { icon: Newspaper, title: "Informação" },
  { icon: Users, title: "Associação" },
];

function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="A Agro'San Linea é a linha que conecta o produtor ao futuro do agro."
        subtitle="Uma empresa fundada em 2012 no Pará, dedicada a oferecer produtos, serviços, tecnologia, informação e associação para fortalecer o produtor rural em todo o Brasil."
      />

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Missão",
              d: "Facilitar a negociação no agronegócio nacional com produtos, tecnologia e atendimento consultivo.",
            },
            {
              t: "Visão",
              d: "Ser referência em soluções integradas para o produtor rural, do Norte ao Sul do Brasil.",
            },
            {
              t: "Valores",
              d: "Ética, responsabilidade, inovação, proximidade com o produtor e compromisso com o campo.",
            },
          ].map((v) => (
            <div
              key={v.t}
              className="rounded-2xl bg-white p-6 border border-[color:var(--border)] shadow-soft"
            >
              <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold">
                {v.t}
              </div>
              <p className="mt-3 text-[color:var(--foreground)] leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-forest text-white p-10 lg:p-14 shadow-elegant">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)] font-semibold">
            Nossos pilares
          </div>
          <h2 className="mt-3 text-3xl font-display font-bold">
            Cinco frentes, um único propósito.
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {PILARES.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-sm"
              >
                <p.icon className="w-6 h-6 text-[color:var(--gold-soft)]" />
                <div className="mt-3 font-display font-semibold">{p.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/nossa-historia"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 font-semibold shadow-elegant"
          >
            Ler nossa história completa <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[color:var(--cream)] via-white to-[color:var(--accent)] py-20 lg:py-28">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--forest-deep) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[color:var(--gold)]">
          <span className="w-6 h-px bg-[color:var(--gold)]" />
          {eyebrow}
        </div>
        <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold text-[color:var(--forest-deep)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
