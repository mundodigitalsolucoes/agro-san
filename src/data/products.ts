export type ProductCategory =
  | "Nutrição Animal"
  | "Produtos Veterinários"
  | "Suplementos"
  | "Linha Equinos"
  | "Linha Pet"
  | "Agronegócio";

export const CATEGORIES: ProductCategory[] = [
  "Nutrição Animal",
  "Produtos Veterinários",
  "Suplementos",
  "Linha Equinos",
  "Linha Pet",
  "Agronegócio",
];

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  emoji: string; // fallback visual identity
}

export const PRODUCTS: Product[] = [
  { id: "n-01", name: "Nutri'San Bovinos Corte", category: "Nutrição Animal", description: "Ração balanceada de alta performance para bovinos de corte em fase de terminação.", emoji: "🐄" },
  { id: "n-02", name: "Nutri'San Bovinos Leite", category: "Nutrição Animal", description: "Formulação premium para vacas leiteiras, aumentando produtividade e qualidade do leite.", emoji: "🥛" },
  { id: "n-03", name: "Nutri'San Aves Postura", category: "Nutrição Animal", description: "Ração completa para poedeiras com nutrientes que fortalecem a casca e o desempenho.", emoji: "🐔" },
  { id: "n-04", name: "Nutri'San Suínos Crescimento", category: "Nutrição Animal", description: "Alta conversão alimentar e ganho de peso saudável para suínos em desenvolvimento.", emoji: "🐖" },
  { id: "v-01", name: "Antiparasitário Injetável", category: "Produtos Veterinários", description: "Controle amplo de endo e ectoparasitas para bovinos e equinos.", emoji: "💉" },
  { id: "v-02", name: "Antibiótico de Amplo Espectro", category: "Produtos Veterinários", description: "Tratamento eficaz contra infecções bacterianas em animais de produção.", emoji: "🧪" },
  { id: "v-03", name: "Vacina Polivalente", category: "Produtos Veterinários", description: "Proteção contra as principais doenças infecciosas do rebanho.", emoji: "🛡️" },
  { id: "v-04", name: "Anti-inflamatório Veterinário", category: "Produtos Veterinários", description: "Alívio rápido de dores e processos inflamatórios pós-cirúrgicos.", emoji: "💊" },
  { id: "s-01", name: "Suplemento Mineral Premium", category: "Suplementos", description: "Blend mineral completo para desempenho reprodutivo e ganho de peso.", emoji: "⚗️" },
  { id: "s-02", name: "Núcleo Proteico Energético", category: "Suplementos", description: "Concentrado para pastagens de baixa qualidade e período seco.", emoji: "🌾" },
  { id: "s-03", name: "Suplemento Vitamínico ADE", category: "Suplementos", description: "Reposição de vitaminas essenciais em rebanhos de corte e leite.", emoji: "🧬" },
  { id: "e-01", name: "Ração Equinos Performance", category: "Linha Equinos", description: "Formulação para cavalos atletas com alta demanda energética.", emoji: "🐎" },
  { id: "e-02", name: "Suplemento Articular Equino", category: "Linha Equinos", description: "Proteção e recuperação articular para equinos de esporte e trabalho.", emoji: "🦴" },
  { id: "e-03", name: "Eletrolítico Equinos", category: "Linha Equinos", description: "Reposição hidroeletrolítica pós exercício intenso.", emoji: "💧" },
  { id: "p-01", name: "Pet'San Ração Cães Adultos", category: "Linha Pet", description: "Alimentação premium com proteínas nobres para cães de todos os portes.", emoji: "🐕" },
  { id: "p-02", name: "Pet'San Ração Gatos", category: "Linha Pet", description: "Nutrição completa e sabor irresistível para felinos adultos.", emoji: "🐈" },
  { id: "p-03", name: "Petiscos Naturais Pet", category: "Linha Pet", description: "Snacks saudáveis para reforçar o vínculo com o pet.", emoji: "🦴" },
  { id: "p-04", name: "Antipulgas Pet'San", category: "Linha Pet", description: "Proteção prolongada contra pulgas, carrapatos e sarnas.", emoji: "🛡️" },
  { id: "a-01", name: "Fertilizante Foliar NPK", category: "Agronegócio", description: "Alta absorção para lavouras de grãos, hortaliças e fruticultura.", emoji: "🌱" },
  { id: "a-02", name: "Defensivo Agrícola Biológico", category: "Agronegócio", description: "Controle sustentável de pragas com registro e segurança comprovada.", emoji: "🍃" },
  { id: "a-03", name: "Sementes Selecionadas", category: "Agronegócio", description: "Genética superior para maior produtividade no campo.", emoji: "🌾" },
  { id: "a-04", name: "Corretivo de Solo", category: "Agronegócio", description: "Calcário e gesso agrícola para equilíbrio químico do solo.", emoji: "⛏️" },
];
