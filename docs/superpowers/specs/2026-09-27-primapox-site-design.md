# Primapox — especificação de design do novo site

Data: 27 de setembro de 2026  
Status: direção visual aprovada

## Objetivo

Reposicionar a Primapox como uma operação industrial confiável, com apresentação premium, sem perder sua competência comprovada: pintura eletrostática a pó para componentes metálicos. O site deve gerar percepção de capacidade técnica, apoiar vendas B2B e permitir a inclusão futura de novos serviços, segmentos e cases sem reestruturar a interface.

O visitante principal é o comprador, projetista, responsável por manutenção ou gestor industrial que precisa avaliar rapidamente se a Primapox tem processo, estrutura e atendimento adequados ao seu projeto.

## Limites de veracidade

O conteúdo público inicial usará somente informações verificadas no site antigo ou fornecidas pelo cliente:

- pintura eletrostática com tinta em pó;
- pré-tratamento e preparação de substratos metálicos;
- aplicação eletrostática e cura em estufa;
- trabalho com resinas híbrida e poliéster;
- aplicações históricas em construção civil, decoração, varejo, equipamentos industriais e componentes navais;
- mais de 20 anos de atuação, conforme o site antigo;
- endereço, telefones e e-mail herdados do site antigo, centralizados em um arquivo de dados para atualização simples;
- identidade azul e vermelha do logotipo fornecido.

Jateamento, hidrojateamento, pintura em campo, offshore, óleo e gás, certificações, normas, clientes, equipamentos adicionais, metragem tratada e cases detalhados não serão publicados como capacidades atuais sem confirmação. A arquitetura aceitará esses itens por meio de registros com estado `published`, mantendo conteúdo não confirmado fora da navegação, do sitemap e do HTML público.

## Abordagem escolhida

Entre uma modernização literal do site antigo, uma expansão imediata com afirmações não verificadas e uma plataforma progressiva, foi aprovada a plataforma progressiva: comunicar com força a especialidade real hoje e deixar a estrutura preparada para crescer.

## Direção visual

### Conceito

**Precisão aplicada em camadas.** A interface traduz o processo da pintura a pó como uma sequência controlada: preparar, aplicar, curar e inspecionar. A estética vem de cabine industrial, desenho técnico, metal tratado e controle de processo — não de uma aparência genérica de construção civil ou startup.

### Paleta

- Azul profundo — `#071B33`: fundo institucional e contraste.
- Azul técnico — `#1766A3`: linhas, estados ativos e elementos de processo.
- Vermelho Primapox — `#E01B24`: ação principal e marca.
- Branco frio — `#F3F6F8`: superfícies claras.
- Aço — `#8797A8`: textos auxiliares e diagramas.
- Carbono — `#101820`: texto e fundos de detalhe.

### Tipografia

- Display: Saira Semi Condensed, com pesos altos e largura compacta para títulos industriais.
- Texto: Source Sans 3, para leitura longa e formulários.
- Dados e etiquetas: IBM Plex Mono, usada com moderação em medições, etapas e metadados.

As fontes serão hospedadas pelo próprio projeto para evitar dependência de carregamento externo.

### Assinatura visual

Uma linha azul de “camada protetora” percorre o hero e reaparece somente em transições importantes. Ela nasce como partículas próximas ao aplicador do logotipo, ganha contorno contínuo e revela a superfície final. Essa é a única intervenção visual expressiva; o restante do layout será preciso e disciplinado.

### Layout

Grid de 12 colunas no desktop, 6 em tablet e 4 no mobile. Seções grandes, bordas retas, linhas técnicas, imagens em recortes editoriais e espaço negativo amplo. Cards arredondados serão evitados. O vermelho ficará concentrado em ações e pontos de inspeção.

```text
┌──────────────────────────────────────────────────────────┐
│ LOGO        Soluções  Processo  Aplicações  Empresa  CTA │
├──────────────────────────────────────────────────────────┤
│ HERO / imagem industrial                                 │
│ Pintura eletrostática com controle em cada camada.       │
│ [Solicitar orçamento] [Conhecer o processo]              │
│                         linha/camada em movimento         │
├──────────────────────────────────────────────────────────┤
│ Evidência real: +20 anos | RJ | processo em 4 etapas     │
├──────────────────────────────────────────────────────────┤
│ Competência principal         imagem / peça tratada      │
├──────────────────────────────────────────────────────────┤
│ Processo vertical técnico e progressivo                  │
├──────────────────────────────────────────────────────────┤
│ Aplicações editoriais                                    │
├──────────────────────────────────────────────────────────┤
│ Galeria / antes e depois                                 │
├──────────────────────────────────────────────────────────┤
│ Orçamento técnico B2B                                    │
└──────────────────────────────────────────────────────────┘
```

## Arquitetura de informação

### Rotas públicas iniciais

- `/` — apresentação, autoridade verificável, processo, aplicações, galeria e conversão.
- `/empresa` — história, estrutura e princípios operacionais.
- `/solucoes` — índice das soluções publicadas.
- `/solucoes/pintura-eletrostatica-a-po` — página principal de serviço e SEO.
- `/processo` — pré-tratamento, aplicação, cura e controle de qualidade.
- `/aplicacoes` — categorias comprovadas pelo conteúdo antigo.
- `/galeria` — imagens reais disponíveis, com lightbox e legendas neutras.
- `/central-tecnica` — índice preparado para artigos técnicos.
- `/contato` — orçamento técnico e canais diretos.
- `/politica-de-privacidade` — política compatível com o formulário.

### Rotas preparadas, mas não publicadas sem dados

- `/solucoes/[slug]`
- `/segmentos/[slug]`
- `/cases/[slug]`
- `/central-tecnica/[slug]`

Cada registro terá título, slug, resumo, conteúdo, mídia, SEO e estado de publicação. Registros não publicados não gerarão página, link, schema ou sitemap.

## Homepage

1. Header fixo e compacto, com navegação por teclado e CTA de orçamento.
2. Hero quase em tela cheia com mensagem autoral: “Pintura eletrostática com controle em cada camada.” O apoio explica proteção, acabamento e repetibilidade sem prometer aplicações não confirmadas.
3. Faixa de evidências com “mais de 20 anos”, localização no Rio de Janeiro e processo controlado; não serão exibidos contadores fictícios.
4. Bloco da competência principal, mostrando benefícios reais da tinta a pó.
5. Processo em quatro estágios: preparação, aplicação, cura e inspeção.
6. Aplicações em composição editorial, baseadas somente nos usos informados no site antigo.
7. Comparador antes/depois acessível por toque, teclado e mouse; quando não houver um par real, a seção ficará desativada.
8. Galeria assimétrica com lightbox; somente fotos reais da Primapox.
9. Bloco educativo “O que você precisa proteger?”, limitado a orientar a coleta de informações e encaminhar para avaliação técnica, sem prescrever sistema de pintura.
10. CTA final e formulário técnico B2B.
11. Footer robusto com contatos, navegação e dados institucionais confirmados.

## Componentes e limites

- `SiteHeader` e `MobileNavigation`: navegação e foco.
- `HeroLayer`: composição visual do hero e movimento da camada protetora.
- `EvidenceStrip`: apenas dados confirmados.
- `SolutionFeature`: narrativa da solução principal.
- `ProcessRail`: sequência técnica responsiva.
- `ApplicationMosaic`: aplicações em grid editorial.
- `BeforeAfter`: comparação com pointer events e controles de teclado.
- `IndustrialGallery`: mídia, lightbox, swipe e legendas.
- `ProtectionExplorer`: conteúdo educativo proveniente de dados publicados.
- `QuoteForm`: coleta estruturada de lead B2B.
- `WhatsAppAction`: mensagem contextual por rota, ativada somente com número confirmado.
- `SeoMetadata` e schemas: Organization, LocalBusiness, Service, Breadcrumb e FAQ apenas quando os campos necessários existirem.

Cada componente terá uma função clara e consumirá dados tipados, sem textos empresariais espalhados pela interface.

## Formulário e fluxo de dados

O formulário incluirá nome, empresa, cargo, e-mail, telefone, cidade/estado, serviço, segmento, descrição, prazo, local, existência de especificação técnica, pedido de visita e anexos. Os anexos aceitarão apenas extensões configuradas e terão limites visíveis de quantidade e tamanho.

O navegador fará validação imediata e acessível. Uma rota de servidor repetirá a validação e encaminhará o lead por um adaptador de e-mail configurado por variável de ambiente. Sem credencial de envio, a API responderá com indisponibilidade controlada e oferecerá telefone/e-mail; nenhum envio será fingido. Arquivos não serão persistidos no servidor.

Estados previstos: inicial, validação, envio, sucesso, erro recuperável e canal indisponível. Mensagens explicarão o problema e a próxima ação.

## Motion

O movimento principal será a formação da camada no hero. Títulos e imagens terão poucos reveals por máscara, e o trilho do processo crescerá conforme a rolagem. No mobile, o parallax será removido. `prefers-reduced-motion` produzirá uma experiência estática completa. Nenhuma animação bloqueará conteúdo ou navegação.

## Tecnologia

- Next.js com App Router e TypeScript.
- CSS Modules ou CSS global organizado por tokens; nenhuma biblioteca visual genérica será necessária.
- Conteúdo em módulos TypeScript tipados, pronto para migração futura a CMS.
- Imagens responsivas com tamanhos definidos, formatos modernos e lazy loading fora do hero.
- Geração de metadata, sitemap e robots no servidor.
- JavaScript cliente restrito a navegação móvel, comparador, lightbox, explorador e formulário.

## Responsividade e acessibilidade

O design será validado em 375, 390, 430, 768, 1366, 1440 e 1920 px. O hero terá composição específica para telas estreitas. Alvos terão ao menos 44 px, foco será sempre visível, headings manterão hierarquia e todos os controles funcionarão por teclado. A galeria e o antes/depois terão alternativas textuais. Contraste e redução de movimento serão tratados desde os tokens.

## SEO e performance

Cada rota publicada terá título, descrição, canonical e Open Graph próprios. O sitemap incluirá somente páginas reais. O conteúdo técnico priorizará intenção e clareza, sem repetição artificial de palavras-chave. O objetivo é LCP inferior a 2,5 s e CLS inferior a 0,1 em condições representativas, com hero dimensionado, fontes locais, carregamento progressivo e orçamento limitado de JavaScript.

## Testes e aceite

- Build de produção sem erros.
- Typecheck e lint sem avisos relevantes.
- Verificação das rotas, links e mensagens contextuais.
- Testes funcionais do menu, formulário, lightbox e comparador.
- Auditoria de teclado, foco, contraste e reduced motion.
- Inspeção visual nos breakpoints definidos.
- Confirmação de que registros não publicados não aparecem no HTML, sitemap ou schemas.
- Busca por afirmações, números, clientes, normas e serviços sem fonte.

## Entrega inicial

A primeira entrega será um site completo e navegável com a solução comprovada em destaque, páginas institucionais e componentes de expansão implementados. Se o acervo real for insuficiente, áreas dependentes de fotos ou cases ficarão desativadas em vez de exibir conteúdo apresentado como real. A evolução posterior consistirá principalmente em habilitar registros e substituir mídias por materiais aprovados.
