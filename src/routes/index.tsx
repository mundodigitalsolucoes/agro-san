import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-agro.jpg";
import { whatsappUrl, COMPANY } from "@/lib/company";
import { ArrowRight, Package, Wrench, Cpu, Newspaper, Users, ShieldCheck, Clock, Sparkles, LineChart, CheckCircle2, MapPin } from "lucide-react";
import agrosanLogo from "@/assets/logo-agrosan.png.asset.json";
import nutrisanLogo from "@/assets/logo-nutrisan.png.asset.json";
import petsanLogo from "@/assets/logo-petsan.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agro'San Linea — Tecnologia e Soluções para o Agronegócio" },
      { name: "description", content: "Desde 2012 fortalecendo o produtor rural com produtos, tecnologia, informação e atendimento especializado. Conheça as marcas Agro'San, Shop'San, Nutri'San e Pet'San." },
      { property: "og:title", content: "Agro'San Linea — Soluções para o Agronegócio" },
      { property: "og:description", content: "Tecnologia, produtos e serviços para o produtor rural desde 2012." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as any,
    ],
  }),
  component: HomePage,
});

const PILARES = [
  { icon: Package, title: "Produtos", desc: "Portfólio com mais de 150 itens selecionados para o campo." },
  { icon: Wrench, title: "Serviços", desc: "Suporte técnico e atendimento consultivo especializado." },
  { icon: Cpu, title: "Tecnologia", desc: "Soluções digitais que aproximam produtor e fornecedor." },
  { icon: Newspaper, title: "Informação", desc: "Conteúdo, dados e conhecimento aplicados à decisão no campo." },
  { icon: Users, title: "Associação", desc: "Rede de parceiros e produtores conectados ao futuro do agro." },
];

const MARCAS = [
  { name: "AGRO'SAN", tag: "Marca institucional", desc: "Identidade que reúne toda a estrutura de soluções para o agronegócio." , logo: agrosanLogo.url, tint: "from-[color:var(--forest-deep)] to-[color:var(--forest)]" },
  { name: "SHOP'SAN", tag: "Canal oficial de atendimento e vendas", desc: "Central prática de compra, cotação e relacionamento em um só lugar.", tint: "from-[color:var(--gold)] to-[color:var(--gold-soft)]" },
  { name: "NUTRI'SAN", tag: "Linha de nutrição animal", desc: "Rações e suplementos formulados para máxima performance no rebanho.", logo: nutrisanLogo.url, tint: "from-[color:oklch(0.62_0.10_195)] to-[color:oklch(0.78_0.10_190)]" },
  { name: "PET'SAN", tag: "Canal de atendimento pet", desc: "Nutrição e cuidado especializado para cães, gatos e pets em geral.", logo: petsanLogo.url, tint: "from-[color:oklch(0.85_0.15_90)] to-[color:oklch(0.92_0.10_95)]" },
];

const DIFERENCIAIS = [
  { icon: Clock, title: "Empresa desde 2012", desc: "Mais de uma década ao lado do produtor rural." },
  { icon: Sparkles, title: "Atendimento especializado", desc: "Equipe técnica pronta para orientar cada decisão." },
  { icon: Package, title: "+150 produtos", desc: "Portfólio completo para diferentes cadeias produtivas." },
  { icon: Cpu, title: "Tecnologia aplicada", desc: "Ferramentas digitais que simplificam o dia a dia no campo." },
  { icon: CheckCircle2, title: "Produtos selecionados", desc: "Curadoria rigorosa de marcas e formulações." },
  { icon: LineChart, title: "Orçamento rápido", desc: "Cotação ágil direto pelo WhatsApp." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-18 pt-18">
        <img
          src={heroImg}
          alt="Plantação verde ao amanhecer representando o agronegócio brasileiro"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--forest-deep)]/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark text-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
              Desde {COMPANY.since} · Soluções para o Agronegócio
            </div>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Tecnologia, Produtos e Soluções
              <span className="block bg-gradient-to-r from-[color:var(--gold-soft)] to-[color:var(--gold)] bg-clip-text text-transparent">
                para o Agronegócio.
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
              Desde 2012 oferecendo soluções para fortalecer o produtor rural com produtos, tecnologia, informação e atendimento especializado.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/produtos"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--forest-deep)] px-6 py-3.5 font-semibold shadow-elegant hover:shadow-gold transition-all"
              >
                Conheça nossos produtos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={whatsappUrl("Olá! Vim pelo site da Agro'San.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white px-6 py-3.5 font-semibold shadow-elegant hover:brightness-110 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["12+", "anos de mercado"],
                ["150+", "produtos"],
                ["100%", "atendimento consultivo"],
              ].map(([n, l]) => (
                <div key={l as string} className="glass-dark rounded-2xl p-4">
                  <dt className="text-2xl lg:text-3xl font-display font-bold text-white">{n}</dt>
                  <dd className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>Empresa</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
            Uma linha completa para quem cuida do que a terra oferece.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Agro'San Linea nasceu para facilitar a negociação no agro nacional, reunindo empresas
            parceiras cuidadosamente selecionadas em torno de cinco pilares que fortalecem o produtor
            rural em cada etapa da cadeia.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Produtos, serviços, tecnologia, informação e associação — uma estrutura pensada para o Agro 2030.
          </p>
          <Link
            to="/nossa-historia"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 font-semibold shadow-elegant hover:opacity-95"
          >
            Conheça nossa história
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-leaf opacity-20 rounded-3xl blur-2xl" />
          <div className="relative grid grid-cols-2 gap-4">
            {[
              { n: "2012", l: "Fundação" },
              { n: "5", l: "Pilares estratégicos" },
              { n: "4", l: "Marcas do grupo" },
              { n: "PA", l: "Base no Pará" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6 shadow-soft">
                <div className="text-4xl font-display font-bold text-[color:var(--forest-deep)]">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-gradient-to-b from-[color:var(--cream)] to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Estrutura</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Os cinco pilares da Agro'San
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma metodologia própria que integra tudo o que o produtor rural precisa para prosperar.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PILARES.map((p, i) => (
              <div
                key={p.title}
                className="group relative rounded-2xl bg-white p-6 shadow-soft border border-[color:var(--border)] hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-leaf grid place-items-center text-white shadow-soft mb-5">
                  <p.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold mb-1">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-[color:var(--forest-deep)]">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Eyebrow>Marcas do grupo</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Um ecossistema de marcas complementares
            </h2>
          </div>
          <Link to="/marcas" className="text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)] inline-flex items-center gap-1">
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MARCAS.map((m) => (
            <article key={m.name} className="group relative overflow-hidden rounded-2xl bg-white border border-[color:var(--border)] shadow-soft hover:shadow-elegant transition-all">
              <div className={`h-40 bg-gradient-to-br ${m.tint} grid place-items-center relative overflow-hidden`}>
                {m.logo ? (
                  <img src={m.logo} alt={`Logo ${m.name}`} className="max-h-28 max-w-[80%] object-contain" loading="lazy" />
                ) : (
                  <div className="text-white font-display text-2xl font-bold tracking-tight">{m.name}</div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold">{m.tag}</div>
                <h3 className="mt-1 font-display text-lg font-bold text-[color:var(--forest-deep)]">{m.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ÁREA DE ATUAÇÃO */}
      <section className="bg-gradient-to-b from-transparent to-[color:var(--cream)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Onde atuamos</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Do Pará para todo o Brasil.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Atendemos com força total o estado do Pará — com destaque para as regiões Metropolitana,
              Bragantina e Salgado — e estamos preparados para expansão em todo o território nacional.
            </p>
            <ul className="mt-6 space-y-2">
              {["Pará", "Região Metropolitana", "Bragantina", "Salgado"].map((r) => (
                <li key={r} className="flex items-center gap-3 text-[color:var(--foreground)]">
                  <MapPin className="w-4 h-4 text-[color:var(--gold)]" />
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
            <Link to="/area-de-atuacao" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 font-semibold shadow-elegant">
              Ver mapa completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ParaMap />
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Por que Agro'San</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
            Diferenciais que fazem a diferença no campo
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((d) => (
            <div key={d.title} className="flex gap-4 p-6 rounded-2xl bg-white border border-[color:var(--border)] hover:border-[color:var(--leaf)]/40 hover:shadow-soft transition-all">
              <div className="w-11 h-11 rounded-xl bg-[color:var(--accent)] text-[color:var(--forest-deep)] grid place-items-center shrink-0">
                <d.icon className="w-5 h-5" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[color:var(--forest-deep)]">{d.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-forest text-white p-10 lg:p-16 shadow-elegant">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <ShieldCheck className="w-10 h-10 text-[color:var(--gold-soft)] mb-4" />
                <h2 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
                  Precisa de soluções para o Agronegócio?
                </h2>
                <p className="mt-4 text-white/80 max-w-xl">
                  Fale agora com nossa equipe especializada e receba um atendimento sob medida para a sua operação.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={whatsappUrl("Olá! Gostaria de solicitar atendimento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--forest-deep)] px-8 py-4 font-bold shadow-elegant hover:shadow-gold transition-all"
                >
                  Solicitar Atendimento
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[color:var(--gold)]">
      <span className="w-6 h-px bg-[color:var(--gold)]" />
      {children}
    </div>
  );
}

function ParaMap() {
  return (
    <div className="relative aspect-square max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-leaf opacity-10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="relative w-full h-full drop-shadow-xl" role="img" aria-label="Mapa estilizado do estado do Pará com regiões de atuação destacadas">
        <defs>
          <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--leaf)" />
            <stop offset="100%" stopColor="var(--forest)" />
          </linearGradient>
        </defs>
        <path
          d="M80 90 L200 60 L320 100 L340 200 L310 300 L220 340 L120 320 L70 240 Z"
          fill="url(#mapGrad)"
          opacity="0.9"
        />
        <path
          d="M80 90 L200 60 L320 100 L340 200 L310 300 L220 340 L120 320 L70 240 Z"
          fill="none"
          stroke="var(--forest-deep)"
          strokeWidth="2"
        />
        {[
          { cx: 250, cy: 280, r: 12, label: "Metropolitana" },
          { cx: 290, cy: 220, r: 10, label: "Bragantina" },
          { cx: 300, cy: 170, r: 9, label: "Salgado" },
        ].map((p) => (
          <g key={p.label}>
            <circle cx={p.cx} cy={p.cy} r={p.r + 8} fill="var(--gold)" opacity="0.25" />
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="var(--gold)" stroke="white" strokeWidth="2" />
          </g>
        ))}
        <text x="200" y="200" textAnchor="middle" className="fill-white font-display font-bold" fontSize="42">PA</text>
      </svg>
    </div>
  );
}
