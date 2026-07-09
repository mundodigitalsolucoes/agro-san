import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[color:var(--forest-deep)]">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-forest px-5 py-3 text-sm font-semibold text-white shadow-elegant"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente novamente ou volte para a home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-forest px-5 py-2.5 text-sm font-semibold text-white"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm font-medium">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Agro'San Linea — Tecnologia e Soluções para o Agronegócio" },
      {
        name: "description",
        content:
          "Desde 2012, a Agro'San Linea oferece produtos, tecnologia e atendimento especializado para fortalecer o produtor rural. Nutrição animal, veterinária, suplementos e agronegócio.",
      },
      { name: "author", content: "Agro'San Linea" },
      { name: "theme-color", content: "#1f3a2e" },
      { name: "robots", content: "index, follow" },
      { name: "google", content: "notranslate" },
      { "http-equiv": "Content-Language", content: "pt-BR" },
      { property: "og:site_name", content: "Agro'San Linea" },
      {
        property: "og:title",
        content: "Agro'San Linea — Tecnologia e Soluções para o Agronegócio",
      },
      {
        property: "og:description",
        content:
          "Produtos, tecnologia, informação e atendimento especializado para o produtor rural desde 2012.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "/images/logo-agrosan.png" },
      { property: "og:image:alt", content: "Logo oficial Agro'San Linea" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/logo-agrosan.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/images/logo-agrosan.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/images/logo-agrosan.png" },
      { rel: "canonical", href: "/" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Agro'San Linea",
          slogan: "Se tem Agro'San, tem mais negócio.",
          foundingDate: "2012",
          url: "https://agrosanlinea.com.br",
          sameAs: ["https://instagram.com/agrosanlinea"],
          areaServed: "BR",
          address: { "@type": "PostalAddress", addressRegion: "PA", addressCountry: "BR" },
          logo: "/images/logo-agrosan.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55 91 8463-3934",
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: "Portuguese",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" translate="no" className="notranslate">
      <head>
        <HeadContent />
      </head>
      <body translate="no" className="notranslate">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main" className="pt-18">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
