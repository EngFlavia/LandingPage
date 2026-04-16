# Landing Page Portfolio

Landing page/portfolio profissional construída com React a partir dos dados do arquivo [`src/data/portfolio.json`](./src/data/portfolio.json).

O projeto foi estruturado para que a interface seja alimentada pelo JSON, evitando conteúdo espalhado pelos componentes e facilitando manutenção futura.

## Objetivo

Criar uma landing page moderna, responsiva e com aparência profissional para apresentar o perfil de uma desenvolvedora fullstack/backend com foco em:

- credibilidade técnica
- clareza de leitura
- boa hierarquia visual
- manutenção simples
- fácil troca de conteúdo via JSON

## Stack escolhida

### React

Responsável pela composição da interface em seções e subcomponentes reutilizáveis.

### TypeScript

Foi usado para:

- tipar a estrutura do JSON
- reduzir erros na integração entre dados e UI
- facilitar manutenção e evolução do projeto

Os tipos estão em [`src/types/portfolio.ts`](./src/types/portfolio.ts).

### Vite

Usado como bundler e servidor de desenvolvimento por ser rápido, simples e muito adequado para projetos React modernos.

Observação: o projeto foi ajustado para `Vite 4.5.x`, o que mantém compatibilidade com o ambiente atual em `Node 16.16.0`.

### Tailwind CSS

Foi escolhido para:

- acelerar a construção visual
- manter consistência entre seções
- permitir variações visuais sem criar CSS monolítico
- facilitar responsividade

Os estilos globais ficam em [`src/styles/index.css`](./src/styles/index.css) e a configuração visual principal em [`tailwind.config.ts`](./tailwind.config.ts).

### Framer Motion

Usado para animações sutis e elegantes, principalmente:

- entrada de seções
- microinterações em cards
- transições leves de destaque

### Lucide React

Biblioteca de ícones leve e consistente, usada para reforçar leitura e hierarquia visual sem poluir o layout.

## Como os dados alimentam a interface

O projeto usa exclusivamente o arquivo:

- [`src/data/portfolio.json`](./src/data/portfolio.json)

Fluxo de consumo:

1. O JSON é importado em [`src/App.tsx`](./src/App.tsx)
2. Os dados passam por [`src/lib/portfolio.ts`](./src/lib/portfolio.ts)
3. Essa camada normaliza o conteúdo e entrega o objeto tipado para a UI
4. Cada seção da página recebe apenas a parte do JSON de que precisa

Isso permite trocar o conteúdo editando apenas o JSON, sem reescrever a interface.

## Tipagem do JSON

As interfaces principais são:

- `Portfolio`
- `ExperienceItem`
- `SkillGroups`

Arquivo:

- [`src/types/portfolio.ts`](./src/types/portfolio.ts)

## Arquitetura de componentes

Cada seção principal do JSON foi separada em um componente próprio:

- [`HeroSection`](./src/components/hero/HeroSection.tsx)
- [`ProfessionalSummary`](./src/components/summary/ProfessionalSummary.tsx)
- [`ExperienceSection`](./src/components/experience/ExperienceSection.tsx)
- [`SkillsSection`](./src/components/skills/SkillsSection.tsx)
- [`HighlightsSection`](./src/components/highlights/HighlightsSection.tsx)
- [`InterestsSection`](./src/components/interests/InterestsSection.tsx)

### Subcomponentes internos

Para evitar um arquivo monolítico, listas e grupos foram quebrados em componentes menores:

#### Experiência

- [`FeaturedExperienceCard`](./src/components/experience/cards/FeaturedExperienceCard.tsx)
- [`TimelineExperienceCard`](./src/components/experience/cards/TimelineExperienceCard.tsx)
- [`CompactExperienceCard`](./src/components/experience/cards/CompactExperienceCard.tsx)

#### Skills

- [`BackendSkills`](./src/components/skills/groups/BackendSkills.tsx)
- [`FrontendSkills`](./src/components/skills/groups/FrontendSkills.tsx)
- [`DatabaseSkills`](./src/components/skills/groups/DatabaseSkills.tsx)
- [`CloudDevOpsSkills`](./src/components/skills/groups/CloudDevOpsSkills.tsx)

#### Highlights

- [`IconHighlightCard`](./src/components/highlights/cards/IconHighlightCard.tsx)
- [`NumberHighlightCard`](./src/components/highlights/cards/NumberHighlightCard.tsx)
- [`RibbonHighlightCard`](./src/components/highlights/cards/RibbonHighlightCard.tsx)

## Como foi evitada a repetição visual

Um dos objetivos do projeto foi evitar que listas fossem renderizadas com o mesmo card repetido várias vezes.

### Experience

- a primeira experiência aparece como card principal em destaque
- a segunda usa composição de timeline
- a terceira aparece em formato compacto e horizontal

### Skills

- `backend`: badges técnicas em bloco escuro de destaque
- `frontend`: grid claro com cards curtos
- `database`: bloco compacto e mais objetivo
- `cloud_devops`: área com visual operacional e destaque de contexto

### Highlights

Os itens alternam entre:

- card com ícone
- card com número
- card com faixa de destaque

### Interests

Renderizados em mini cards leves, diferentes visualmente das skills.

## Decisões visuais

Direção visual adotada:

- hero com fundo escuro e atmosfera premium
- transição para seções claras para criar ritmo visual
- tipografia com `Space Grotesk` para títulos e `IBM Plex Sans` para leitura
- acentos em coral, cyan, teal e gold para transmitir tecnologia com maturidade
- animações discretas e focadas em percepção de qualidade

## SEO básico

O projeto já vem preparado com SEO básico:

- `meta description`
- `meta keywords`
- `og:title`
- `og:description`
- título dinâmico via hook

Arquivos relacionados:

- [`index.html`](./index.html)
- [`src/hooks/usePortfolioMeta.ts`](./src/hooks/usePortfolioMeta.ts)

## Estrutura de pastas

```text
LandingPage/
├─ src/
│  ├─ components/
│  │  ├─ experience/
│  │  ├─ hero/
│  │  ├─ highlights/
│  │  ├─ interests/
│  │  ├─ layout/
│  │  ├─ skills/
│  │  └─ summary/
│  ├─ data/
│  │  └─ portfolio.json
│  ├─ hooks/
│  ├─ lib/
│  ├─ styles/
│  ├─ types/
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.app.json
└─ vite.config.ts
```

## Como executar o projeto

### Pré-requisitos

- Node.js 16.16+ recomendado no estado atual do projeto
- npm instalado

### Instalação

```bash
npm install
```

### Rodar em desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local no terminal, normalmente algo como:

```bash
http://localhost:5173
```

### Gerar build de produção

```bash
npm run build
```

Os arquivos finais serão gerados em:

- `dist/`

### Visualizar build localmente

```bash
npm run preview
```

## Deploy sugerido

As opções mais simples para esse projeto são:

- Vercel
- Netlify
- Cloudflare Pages

Configuração padrão:

- comando de build: `npm run build`
- diretório de saída: `dist`

## Observações importantes

### Sobre o JSON atual

O arquivo [`src/data/portfolio.json`](./src/data/portfolio.json) está sendo usado como única fonte de dados.

Existe uma pequena camada em [`src/lib/portfolio.ts`](./src/lib/portfolio.ts) para normalizar o conteúdo do JSON no consumo. Isso foi mantido para tornar a leitura mais robusta e desacoplar a UI de eventuais inconsistências de encoding.

### Sobre arquivos gerados automaticamente

Durante build e uso do TypeScript/Vite, alguns arquivos auxiliares podem aparecer no projeto, como:

- `*.d.ts`
- `*.tsbuildinfo`
- `dist/`

Eles não fazem parte da arquitetura principal da UI.

## Scripts disponíveis

```json
{
  "dev": "vite",
  "build": "tsc --noEmit -p tsconfig.app.json && vite build",
  "preview": "vite preview"
}
```

## Próximos passos sugeridos

- adicionar links reais de contato na hero
- criar seção de projetos usando o mesmo padrão orientado a JSON
- expandir SEO com favicon, Open Graph image e sitemap
- integrar formulário de contato
- preparar modo multilíngue se necessário

