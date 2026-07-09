import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, type ProductCategory } from "@/data/products";
import { productQuoteUrl } from "@/lib/company";
import { PageHero } from "./empresa";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Catálogo Agro'San Linea" },
      { name: "description", content: "Catálogo com mais de 150 produtos para nutrição animal, veterinária, suplementos, equinos, pet e agronegócio. Solicite orçamento pelo WhatsApp." },
      { property: "og:title", content: "Catálogo de produtos — Agro'San Linea" },
      { property: "og:description", content: "Nutrição animal, veterinária, suplementos, equinos, pet e agronegócio." },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

function getInitialCategory(): ProductCategory | "Todos" {
  if (typeof window === "undefined") return "Todos";
  const value = new URLSearchParams(window.location.search).get("categoria");
  return CATEGORIES.includes(value as ProductCategory) ? (value as ProductCategory) : "Todos";
}

function ProdutosPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<ProductCategory | "Todos">(getInitialCategory);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (cat !== "Todos" && p.category !== cat) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    });
  }, [query, cat]);

  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Produtos selecionados para o campo, o rebanho e o pet."
        subtitle="Mais de 150 produtos organizados por categoria. Encontre e solicite orçamento em segundos."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        {/* Search */}
        <div className="glass rounded-2xl p-4 shadow-soft flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar produtos, categorias, indicações..."
              aria-label="Buscar produtos"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-[color:var(--leaf)]/40 focus:border-[color:var(--leaf)] transition"
            />
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap px-2">
            <span className="font-semibold text-[color:var(--forest-deep)]">{filtered.length}</span> {filtered.length === 1 ? "produto" : "produtos"}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(["Todos", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c as ProductCategory | "Todos")}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                cat === c
                  ? "bg-gradient-forest text-white border-transparent shadow-soft"
                  : "bg-white text-[color:var(--foreground)] border-[color:var(--border)] hover:border-[color:var(--leaf)] hover:text-[color:var(--forest-deep)]"
              }`}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-16 text-center py-20 rounded-2xl bg-white border border-dashed border-[color:var(--border)]">
            <p className="text-muted-foreground">Nenhum produto encontrado para sua busca.</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col rounded-2xl bg-white border border-[color:var(--border)] overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--cream)] grid place-items-center relative overflow-hidden">
                  <div className="text-7xl transform group-hover:scale-110 transition-transform duration-500" aria-hidden>
                    {p.emoji}
                  </div>
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold text-[color:var(--forest-deep)] bg-white/90 backdrop-blur px-2.5 py-1 rounded-full">
                    {p.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-[color:var(--forest-deep)] leading-tight">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
                  <a
                    href={productQuoteUrl(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-forest text-white px-4 py-2.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all"
                  >
                    Solicitar orçamento
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
