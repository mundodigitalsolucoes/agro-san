export const COMPANY = {
  name: "Agro'san Linea",
  shortName: "Agro'san",
  since: 2012,
  cnpj: "12.010.616/0001-22",
  whatsapp: "559184633934", // internacional sem +
  whatsappDisplay: "(91) 8463-3934",
  instagram: "https://instagram.com/agrosanlinea",
  instagramHandle: "@agrosanlinea",
  address: "Pará, Brasil",
  email: "contato@agrosanlinea.com.br",
  slogan: "Se tem Agro'san, tem mais negócio.",
  developerName: "Mundo Digital Soluções",
  developerUrl: "https://mundodigitalsolucoes.com.br",
};

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${COMPANY.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productQuoteUrl(productName: string) {
  return whatsappUrl(
    `Olá.\nTenho interesse no produto:\n${productName}\nGostaria de mais informações.`,
  );
}
