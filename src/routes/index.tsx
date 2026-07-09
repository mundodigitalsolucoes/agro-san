import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-agro.jpg";
import { whatsappUrl, COMPANY } from "@/lib/company";
import {
  ArrowRight,
  Package,
  Wrench,
  Cpu,
  Newspaper,
  Users,
  ShieldCheck,
  Clock,
  Sparkles,
  LineChart,
  CheckCircle2,
  MapPin,
  Wheat,
  Syringe,
  PawPrint,
  Leaf,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agro'San Linea — Soluções para o Agronegócio" },
      {
        name: "description",
        content:
          "Agro'San Linea: produtos, serviços, tecnologia, informação e atendimento para o agro. Nutri'San, Pet'San e Shop'San em um ecossistema para o produtor.",
      },
      { property: "og:title", content: "Agro'San Linea — Se tem Agro'San, tem mais negócio" },
      {
        property: "og:description",
        content: "Catálogo, atendimento e soluções para o agronegócio desde 2012.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg },
    ],
  }),
  component: HomePage,
});

const PILARES = [
  {
    icon: Package,
    title: "Produtos",
    desc: "Portfólio com mais de 150 itens selecionados para o campo.",
  },
  {
    icon: Wrench,
    title: "Serviços",
    desc: "Suporte técnico e atendimento consultivo especializado.",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    desc: "Soluções digitais que aproximam produtor e fornecedor.",
  },
  {
    icon: Newspaper,
    title: "Informação",
    desc: "Conteúdo, dados e conhecimento aplicados à decisão no campo.",
  },
  {
    icon: Users,
    title: "Associação",
    desc: "Rede de parceiros e produtores conectados ao futuro do agro.",
  },
];

const LINHAS = [
  {
    icon: Wheat,
    title: "Nutri'San",
    desc: "Rações e soluções para nutrição animal com foco em desempenho e saúde.",
    href: "/produtos?categoria=Nutri%C3%A7%C3%A3o%20Animal",
    cta: "Ver linha Nutri'San",
  },
  {
    icon: Syringe,
    title: "Veterinária",
    desc: "Produtos veterinários, medicamentos e cuidados essenciais para animais de produção.",
    href: "/produtos?categoria=Produtos%20Veterin%C3%A1rios",
    cta: "Ver veterinária",
  },
  {
    icon: Leaf,
    title: "Linha Equinos",
    desc: "Produtos para cavalos e criadores que buscam performance, manejo e cuidado.",
    href: "/produtos?categoria=Linha%20Equinos",
    cta: "Ver equinos",
  },
  {
    icon: PawPrint,
    title: "Pet'San",
    desc: "Linha pet para cães, gatos e atendimento especializado ao tutor.",
    href: "/produtos?categoria=Linha%20Pet",
    cta: "Ver linha pet",
  },
  {
    icon: Package,
    title: "Agronegócio",
    desc: "Soluções para a rotina do produtor rural, do campo à negociação.",
    href: "/produtos?categoria=Agroneg%C3%B3cio",
    cta: "Ver agro",
  },
];

const MARCAS = [
  {
    name: "AGRO'SAN",
    tag: "Marca institucional",
    desc: "Identidade que reúne a estrutura de soluções para o agronegócio.",
    logo: "/images/logo-agrosan.png",
    href: "/nossa-historia",
    cta: "Conhecer história",
    tint: "from-[color:var(--forest-deep)] to-[color:var(--forest)]",
  },
  {
    name: "SHOP'SAN",
    tag: "Central de atendimento e vendas",
    desc: "Canal para cotação, compra e relacionamento em um só lugar.",
    logo: "/images/shop-san.png",
    href: "/produtos",
    cta: "Ver produtos",
    tint: "from-[color:var(--gold)] to-[color:var(--gold-soft)]",
  },
  {
    name: "NUTRI'SAN",
    tag: "Linha de nutrição animal",
    desc: "Rações e suplementos formulados para alta performance.",
    logo: "/images/logo-nutrisan.png",
    href: "/produtos?categoria=Nutri%C3%A7%C3%A3o%20Animal",
    cta: "Linha Nutri'San",
    tint: "from-[color:oklch(0.62_0.10_195)] to-[color:oklch(0.78_0.10_190)]",
  },
  {
    name: "PET'SAN",
    tag: "Linha pet",
    desc: "Nutrição e cuidado especializado para cães e gatos.",
    logo: "/images/logo-petsan.png",
    href: "/produtos?categoria=Linha%20Pet",
    cta: "Linha Pet'San",
    tint: "from-[color:oklch(0.85_0.15_90)] to-[color:oklch(0.92_0.10_95)]",
  },
];

const DIFERENCIAIS = [
  {
    icon: Clock,
    title: "Empresa desde 2012",
    desc: "Mais de uma década ao lado do produtor rural.",
  },
  {
    icon: Sparkles,
    title: "Atendimento especializado",
    desc: "Equipe pronta para orientar a melhor escolha.",
  },
  {
    icon: Package,
    title: "+150 produtos",
    desc: "Portfólio completo para diferentes necessidades.",
  },
  {
    icon: Cpu,
    title: "Tecnologia aplicada",
    desc: "Canais digitais para simplificar o atendimento.",
  },
  {
    icon: CheckCircle2,
    title: "Produtos selecionados",
    desc: "Curadoria de marcas, linhas e formulações.",
  },
  { icon: LineChart, title: "Orçamento rápido", desc: "Cotação ágil direto pelo WhatsApp." },
];

function HomePage() {
  return (
    <>
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
        <div className="absolute inset-0 bg-[color:var(--forest-deep)]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--forest-deep)]/85 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark text-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
              Desde {COMPANY.since} · Pará · Agronegócio
            </div>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Tecnologia, Produtos e Soluções
              <span className="block bg-gradient-to-r from-[color:var(--gold-soft)] to-[color:var(--gold)] bg-clip-text text-transparent">
                para o Agronegócio.
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
              {COMPANY.slogan}
            </p>
            <p className="mt-3 text-base text-white/75 max-w-2xl leading-relaxed">
              Produtos, serviços, tecnologia, informação e atendimento em um ecossistema criado para
              facilitar a negociação no agro.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/produtos"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--forest-deep)] px-6 py-3.5 font-semibold shadow-elegant hover:shadow-gold transition-all"
              >
                Conheça os produtos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={whatsappUrl("Olá! Vim pelo site da Agro'San e quero solicitar atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white px-6 py-3.5 font-semibold shadow-elegant hover:brightness-110 transition"
              >
                Falar no WhatsApp
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["2012", "desde"],
                ["150+", "produtos"],
                ["5", "pilares"],
              ].map(([n, l]) => (
                <div key={l} className="glass-dark rounded-2xl p-4">
                  <dt className="text-2xl lg:text-3xl font-display font-bold text-white">{n}</dt>
                  <dd className="text-[11px] uppercase tracking-wider text-white/70 mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>Empresa</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
            Uma linha completa para quem cuida do que a terra oferece.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A Agro'San Linea nasceu para facilitar a negociação no agro nacional, reunindo empresas
            parceiras cuidadosamente selecionadas em torno de cinco pilares que fortalecem o
            produtor rural em cada etapa da cadeia.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A história institucional foi preservada em uma página própria, mantendo o texto original
            da criação da Agro'San.
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
              { n: "5", l: "Pilares" },
              { n: "4", l: "Marcas" },
              { n: "PA", l: "Base no Pará" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6 shadow-soft">
                <div className="text-4xl font-display font-bold text-[color:var(--forest-deep)]">
                  {s.n}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[color:var(--cream)] to-transparent py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow>Linhas de produtos</Eyebrow>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
                O que a Agro'San vende e atende
              </h2>
              <p className="mt-4 text-muted-foreground">
                Categorias organizadas para o cliente encontrar rápido a linha certa e chamar no
                WhatsApp já com intenção de orçamento.
              </p>
            </div>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-[color:var(--border)] text-[color:var(--forest-deep)] px-5 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all"
            >
              Ver catálogo completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {LINHAS.map((linha) => (
              <article
                key={linha.title}
                className="group rounded-3xl bg-white border border-[color:var(--border)] p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-leaf text-white grid place-items-center shadow-soft mb-5">
                  <linha.icon className="w-7 h-7" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-bold text-[color:var(--forest-deep)]">
                  {linha.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[88px]">
                  {linha.desc}
                </p>
                <a
                  href={linha.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)]"
                >
                  {linha.cta}{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Estrutura</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Os cinco pilares da Agro'San
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma metodologia própria que integra tudo o que o produtor rural precisa para
              prosperar.
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
                <h3 className="font-display text-lg font-bold text-[color:var(--forest-deep)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <Eyebrow>Marcas do grupo</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Um ecossistema de marcas complementares
            </h2>
          </div>
          <Link
            to="/marcas"
            className="text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)] inline-flex items-center gap-1"
          >
            Ver todas as marcas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MARCAS.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[color:var(--border)] shadow-soft hover:shadow-elegant transition-all"
            >
              <div
                className={`h-40 bg-gradient-to-br ${m.tint} grid place-items-center relative overflow-hidden`}
              >
                <img
                  src={m.logo}
                  alt={`Logo ${m.name}`}
                  className="max-h-28 max-w-[80%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[color:var(--gold)] font-semibold">
                  {m.tag}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold text-[color:var(--forest-deep)]">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[62px]">
                  {m.desc}
                </p>
                {m.href.includes("?") ? (
                  <a
                    href={m.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)]"
                  >
                    {m.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={m.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--forest-deep)]"
                  >
                    {m.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent to-[color:var(--cream)] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Onde atuamos</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
              Do Pará para todo o Brasil.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Atendemos com força total o estado do Pará — com destaque para as regiões
              Metropolitana, Bragantina e Salgado — e estamos preparados para expansão em todo o
              território nacional.
            </p>
            <ul className="mt-6 space-y-2">
              {["Pará", "Região Metropolitana", "Bragantina", "Salgado"].map((r) => (
                <li key={r} className="flex items-center gap-3 text-[color:var(--foreground)]">
                  <MapPin className="w-4 h-4 text-[color:var(--gold)]" />
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/area-de-atuacao"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-forest text-white px-6 py-3 font-semibold shadow-elegant"
            >
              Ver mapa completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ParaMap />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Por que Agro'San</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-[color:var(--forest-deep)]">
            Diferenciais que fazem a diferença no campo
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.title}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-[color:var(--border)] hover:border-[color:var(--leaf)]/40 hover:shadow-soft transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[color:var(--accent)] text-[color:var(--forest-deep)] grid place-items-center shrink-0">
                <d.icon className="w-5 h-5" strokeWidth={1.7} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[color:var(--forest-deep)]">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
                  Fale com a Shop'San, canal oficial de atendimento e vendas da Agro'San.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={whatsappUrl(
                    "Olá! Vim pelo site da Agro'San e quero solicitar atendimento pela Shop'San.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--forest-deep)] px-8 py-4 font-bold shadow-elegant hover:shadow-gold transition-all"
                >
                  Solicitar Atendimento <ArrowRight className="w-5 h-5" />
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
  return <BrazilMap compact />;
}

function BrazilMap({ compact = false }: { compact?: boolean }) {
  const states = [
    {
      d: "M165 54 205 42 252 66 292 104 310 154 292 210 252 246 222 300 170 326 122 296 100 238 72 198 86 136Z",
      fill: "var(--accent)",
      stroke: "var(--border)",
    },
    {
      d: "M92 118 166 58 162 132 196 168 172 224 102 232 72 198 86 136Z",
      fill: "var(--leaf)",
      stroke: "white",
      label: "PA",
    },
  ];

  return (
    <div className="relative aspect-square max-w-lg mx-auto rounded-[2rem] bg-white/70 p-5 shadow-soft border border-[color:var(--border)] overflow-hidden">
      <div className="absolute inset-8 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
      <div className="absolute left-[25%] top-[24%] h-28 w-28 rounded-full bg-[color:var(--leaf)]/25 blur-2xl animate-pulse" />
      <svg
        viewBox="0 0 380 380"
        className="relative w-full h-full drop-shadow-xl"
        role="img"
        aria-label="Mapa estilizado do Brasil com o estado do Pará destacado em verde"
      >
        <defs>
          <filter id="paraGlow" x="-40%" y="-40%" width="180%" height="180%">
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
        <path d={states[0].d} fill={states[0].fill} stroke={states[0].stroke} strokeWidth="2" />
        <path
          d={states[1].d}
          fill={states[1].fill}
          stroke={states[1].stroke}
          strokeWidth="3"
          filter="url(#paraGlow)"
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
          r="54"
          fill="none"
          stroke="var(--leaf)"
          strokeWidth="2"
          opacity="0.35"
          className="animate-map-ring"
        />
      </svg>
      <div
        className={`absolute ${compact ? "bottom-4 left-4 right-4" : "bottom-6 left-6 right-6"} flex items-center justify-center gap-3 rounded-2xl bg-white/85 px-4 py-3 text-xs font-semibold text-[color:var(--forest-deep)] shadow-soft backdrop-blur`}
      >
        <span className="h-3 w-3 rounded-full bg-[color:var(--leaf)] shadow-[0_0_18px_var(--leaf)]" />
        Pará em destaque · atuação principal
      </div>
    </div>
  );
}
