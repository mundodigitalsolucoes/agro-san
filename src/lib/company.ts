export const COMPANY = {
  name: "Agro'San Linea",
  shortName: "Agro'San",
  since: 2012,
  cnpj: "00.000.000/0001-00",
  whatsapp: "5591000000000", // internacional sem +
  whatsappDisplay: "(91) 00000-0000",
  instagram: "https://instagram.com/agrosanlinea",
  instagramHandle: "@agrosanlinea",
  address: "Belém — Pará, Brasil",
  email: "contato@agrosanlinea.com.br",
  slogan: "Se tem Agro'San, tem mais negócio.",
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
