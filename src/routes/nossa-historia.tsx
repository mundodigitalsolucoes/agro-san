import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./empresa";
import {
  Sprout,
  Package,
  Wrench,
  Cpu,
  Newspaper,
  Users,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Agro'san Linea" },
      {
        name: "description",
        content:
          "Conheça a história completa da Agro'san Linea: origem, propósito e o projeto que reúne cinco pilares para transformar o agro nacional.",
      },
      { property: "og:title", content: "Nossa História — Agro'san Linea" },
      { property: "og:description", content: "O projeto Agro'san Linea contado por inteiro." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/nossa-historia" },
    ],
    links: [{ rel: "canonical", href: "/nossa-historia" }],
  }),
  component: HistoriaPage,
});

const PILARES = [
  { icon: Package, title: "Produtos" },
  { icon: Wrench, title: "Serviços" },
  { icon: Cpu, title: "Tecnologia" },
  { icon: Newspaper, title: "Informação" },
  { icon: Users, title: "Associação" },
];

function HistoriaPage() {
  return (
    <>
      <PageHero eyebrow="Nossa história" title="PROJETO Agro'san línea" />

      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-16">
        <div className="prose-lg space-y-8 text-[color:var(--foreground)] leading-[1.9] text-lg">
          <div className="flex items-center gap-4 pb-4 border-b border-[color:var(--border)]">
            <div className="w-12 h-12 rounded-xl bg-gradient-leaf text-white grid place-items-center shadow-soft">
              <Sprout className="w-6 h-6" />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[color:var(--gold)]">
              Origem do projeto
            </div>
          </div>

          <p>
            Fugindo da fantasia de que a terra dá, e pegando se aos princípios de que dela tem que
            cuidar preocupados com um fator, de muitas faces e complexidades Vimos a necessidade de
            criar um sistema facilitador, com objetivo principal, a Garantia e Eficiência na
            Negociação no Agro nacional.
          </p>

          <p>
            Convidadas, de forma seletiva e de acordo firmado empresas parceiras, na ideia de que
            trouxessem em seus curriculum, pra este certo e exigível sistema particular.
          </p>

          <p>Além de referências, conhecimento no Agro negócio.</p>

          <p>E, características descritas pro Agro 2030.</p>

          <p>No mais que fossem sensíveis na detecção das novas necessidades pro homem do campo.</p>

          <p>
            Hoje, formadores de uma linha de produtos e Serviços, com uma Batela de 05 (cinco)
            itens, o grupo Agro'san línea, com o slogan, se tem Agro'san, tem mais Negócio.
          </p>

          {/* Lista dos 5 itens - destaque visual sem alterar palavras */}
          <div className="not-prose grid grid-cols-2 sm:grid-cols-5 gap-3 py-6">
            {PILARES.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-[color:var(--border)] p-4 shadow-soft text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-forest text-white mx-auto grid place-items-center mb-2">
                  <p.icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-[color:var(--gold)] font-semibold">{i + 1}</div>
                <div className="font-display font-bold text-[color:var(--forest-deep)] text-sm mt-1">
                  {p.title.toLowerCase()}
                </div>
              </div>
            ))}
          </div>

          <p>Dona das marca Nutri'san ração animal.</p>

          <p>E, Favorável ao projeto, a Shop'san.</p>

          <div className="not-prose flex items-center gap-4 mt-8 p-6 rounded-2xl bg-[color:var(--accent)]/60 border-l-4 border-[color:var(--gold)]">
            <ShoppingBag className="w-8 h-8 text-[color:var(--forest-deep)] shrink-0" />
            <p className="font-display text-xl font-bold text-[color:var(--forest-deep)] m-0">
              Shop'san, Canal de atendimento.
            </p>
          </div>

          <p>
            Nos por sua vez, usando da tecnologia e consolidação automática em um só lugar criou se
            o canal Shopsan, um sistema certo prático e de função simplificada atuando não só como
            canal de vendas através da Internet.
          </p>

          <p>
            Entre outros recursos, temos como coberturas e Garantias, recursos aplicáveis nos
            fatores tecnologia, Informação e participação, pra com este público que atravessa
            fronteiras e trava lutas no objetivos na Aquisição no Agro nacional.
          </p>
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-forest text-white p-10 text-center shadow-elegant">
          <p className="font-display text-2xl italic">"Se tem Agro'san, tem mais negócio."</p>
          <Link
            to="/produtos"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--forest-deep)] px-6 py-3 font-semibold shadow-elegant"
          >
            Explorar nossos produtos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
