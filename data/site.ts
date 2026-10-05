export const company = {
  name: "Primapox Pinturas Industriais",
  shortName: "Primapox",
  foundedOn: "13 de julho de 1993",
  foundedYear: 1993,
  yearsOfExperience: 33,
  phoneMain: "(21) 3448-7320",
  whatsappNumber: "5521970130465",
  whatsappLabel: "(21) 97013-0465",
  phones: ["(21) 3448-7320", "(21) 3452-8763", "(21) 3452-8764", "(21) 3452-8765"],
  email: "primapox@primapox.com",
  address: "Praça Itapitanga, 10 — Vigário Geral, Rio de Janeiro — RJ",
  mapsUrl: "https://maps.app.goo.gl/G8nsQfmqLi8PusUA7",
  mapsEmbedUrl: "https://www.google.com/maps?q=-22.8185494,-43.3150827&z=16&output=embed",
};

export const navigation = [
  { label: "Serviços", href: "/solucoes/pintura-eletrostatica-a-po" },
  { label: "Processo", href: "/processo" },
  { label: "Aplicações", href: "/aplicacoes" },
  { label: "Empresa", href: "/empresa" },
  { label: "Manutenção", href: "/manutencao" },
];

export const processSteps = [
  {
    number: "01",
    title: "Leitura da peça",
    description: "Avaliamos material, geometria, uso e acabamento desejado antes de iniciar o tratamento.",
  },
  {
    number: "02",
    title: "Preparação",
    description: "Removemos resíduos de graxa, gordura e corrosão para criar uma base limpa e aderente.",
  },
  {
    number: "03",
    title: "Aplicação",
    description: "A carga eletrostática distribui o pó com uniformidade, inclusive em cantos, bordas e arestas.",
  },
  {
    number: "04",
    title: "Cura e controle",
    description: "O aquecimento polimeriza a tinta e consolida o acabamento antes da verificação final.",
  },
];

export const applications = [
  {
    code: "ARQ",
    title: "Arquitetura metálica",
    description: "Esquadrias, batentes, caixilhos, fachadas, telhas e coberturas metálicas, corrimãos e forros.",
    tone: "blue",
    image: "/gallery/17.jpg",
    imageAlt: "Passarela metálica com estrutura e guarda-corpos brancos, do acervo Primapox",
    imagePosition: "center",
  },
  {
    code: "IND",
    title: "Componentes industriais",
    description: "Gabinetes, painéis, estruturas e peças metálicas com exigência de proteção e acabamento.",
    tone: "steel",
    image: "/gallery/45.jpg",
    imageAlt: "Componente industrial de grande porte com acabamento azul, do acervo Primapox",
    imagePosition: "center",
  },
  {
    code: "VJO",
    title: "Varejo e exposição",
    description: "Gôndolas, araras, cestos, carrinhos, prateleiras e placas de sinalização para supermercados e lojas.",
    tone: "red",
    image: "/gallery/44.jpg",
    imageAlt: "Perfis metálicos com acabamento amarelo e grafite, do acervo Primapox",
    imagePosition: "center",
  },
  {
    code: "INT",
    title: "Interiores e mobiliário",
    description: "Móveis metálicos, divisórias, luminárias e spots, aramados e armários de banheiro e cozinha.",
    tone: "carbon",
    image: "/gallery/40.jpg",
    imageAlt: "Divisória de vidro com estrutura metálica escura em ambiente interno, do acervo Primapox",
    imagePosition: "center",
  },
];

export const benefits = [
  "Cobertura uniforme em geometrias complexas",
  "Alta resistência química e mecânica",
  "Acabamentos brilhantes ou foscos",
  "Processo sem solventes orgânicos",
];
