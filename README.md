# 🌱🎮 ECOPlay - Gamificando Ações Sustentáveis

# 📖 Sobre o Projeto

O ECOPlay é uma plataforma gamificada focada em sustentabilidade, criada para transformar ações ecológicas em experiências sociais interativas e recompensadoras.

A proposta do projeto é unir conceitos de comunidades online, gamificação e sustentabilidade através de Guildas socioecológicas, permitindo que usuários realizem missões, acumulem pontos, participem de rankings, recebam lootboxes e troquem recompensas reais em estabelecimentos parceiros.

O sistema busca aumentar o engajamento da plataforma Soul Up utilizando elementos inspirados em RPGs, comunidades geeks e sistemas competitivos modernos.

---

# 🎯 Objetivo

O principal objetivo do projeto é incentivar práticas sustentáveis através de mecânicas de gamificação social, criando uma experiência mais atrativa, competitiva e interativa para os usuários.

Além disso, o sistema busca:

- Melhorar a retenção de usuários;
- Criar novas formas de monetização;
- Estimular ações sustentáveis;
- Desenvolver comunidades dentro da plataforma;
- Gerar impacto ambiental positivo.

---

# 🧠 Conceito da Solução ECOPlay

A plataforma ECOPlay funciona através de guildas e missões solo, onde usuários podem:

- Participar de missões sustentáveis;
- Ganhar experiência e pontos;
- Evoluir dentro da comunidade;
- Competir em rankings;
- Receber recompensas;
- Interagir com outros membros.

As ações sustentáveis realizadas pelos usuários poderão gerar pontuações validadas pela plataforma, incentivando comportamentos positivos para o meio ambiente.

---

# 🚀 Funcionalidades

## 👥 Sistema de Guildas
- Criação de comunidades sustentáveis;
- Ranking entre guildas;
- Progressão de níveis;
- Sistema de reputação.

## 🎮 Gamificação
- Missões diárias;
- Sistema de pontuação;
- Ranking global;

## 🌍 Sustentabilidade
- Registro de ações ecológicas;
- Incentivo ao impacto ambiental positivo;
- Engajamento sustentável.

## 🏪 Recompensas
- Troca de pontos por lootbox;
- Lootboxes que podem sortear recompensas em descontos em lojas parceiras, itens colecionáveis na plataforma e mais;
- Benefícios em organizações parceiras, como a Prospera;

## 📱 Interface Responsiva
- Compatibilidade com desktop;
- Compatibilidade com tablets;
- Compatibilidade com dispositivos móveis.

---

# 🛠️ Tecnologias Utilizadas (Até o momento)

## Front-End
- React
- TypeScript
- Tailwind CSS
- HTML
- CSS (utilizado para criar animações dinâmicas)
- JavaScript

## Hooks utilizados
- useState
- useEffect
- useParams
- useNavigate
- useRef
- useForm
- useScrollReveal (hook personalizado para animar scroll)

## Back-End
- Login integrado à API REST local (`POST /usuarios/login`);
- URL configurada pela variável `VITE_API_URL` no arquivo `.env`.

## Versionamento
- Git
- GitHub

## Ferramentas de Design
- Figma
- Canva

## Ferramentas de Inteligência Artificial e Produtividade
- Gemini
- Github Copilot <br/>
**USADO PARA**: Acelerar fluxo de desenvolvimento de tarefas repetitivas e portabilidade para componente React, como funcionamento do ```IntersectionObserver``` para animar o scroll na animação.

---

# 🎨 Identidade Visual

O projeto utiliza uma identidade visual inspirada em:
- Sustentabilidade;
- Tecnologia;
- Comunidades RPG;
- Interface gamer moderna.

## 🖌️ Paleta de Cores Base

| Função | Cor | Hexadecimal |
|--------|------|-------------|
| Cor Primária | Azul vibrante | #5360FF |
| Cor Secundária | Roxo moderno | #6B46C1 |
| Background | Cinza claro | #D9D9D9 |
| Cor de Texto | Azul escuro | #2C3952 |
| Cor de Destaque | Azul profundo | #323A99 |
| Cor de Destaque Secundária | Verde esmeralda | #38A169 |

## 🔤 Tipografia
- Montserrat
- Nico Moji

---

# 📂 Estrutura de Pastas

```bash
📁 ecoplay-challenge
│
├── 📁 public
├── 📁 src
│   ├── 📁 assets
│   │   ├── 📁 fontes
│   │   └── 📁 imagens
│   ├── 📁 components
│   │   └── 📁 prototipo-structure
│   ├── 📁 hooks
│   ├── 📁 pages
│   ├── 📁 types
│   ├── 📄 App.css
│   ├── 📄 App.tsx
│   ├── 📄 index.css
│   └── 📄 main.tsx
├── 📄 index.html
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts
│
└── 📄 README.md
```

## Organização do código

- `src/assets`: imagens e fontes utilizadas pela aplicação;
- `src/components`: componentes reutilizáveis de layout e interface;
- `src/components/prototipo-structure`: componentes exclusivos da área de protótipo;
- `src/hooks`: hooks reutilizáveis, como a animação de revelação durante o scroll;
- `src/pages`: páginas associadas às rotas da aplicação;
- `src/types`: interfaces e tipos compartilhados, incluindo os dados do protótipo;
- `src/App.tsx`: configuração das rotas da aplicação.

## Rotas principais

| Rota | Página |
|------|--------|
| `/` | Página inicial |
| `/sobre` | Sobre a solução |
| `/quem-somos` | Integrantes da equipe |
| `/quem-somos/:id` | Perfil dinâmico de um integrante |
| `/solucao` | A solução |
| `/fluxograma` | Fluxograma da jornada |
| `/contato` | Formulário de contato |
| `/faq` | Perguntas frequentes |
| `/prototipo` | Protótipo navegável |

---

# 📈 Futuras Implementações

- Inteligência Artificial para validação de ações;
- Sistema real de gamificação;
- Integração com parceiros comerciais;
- Aplicativo mobile;
- Chatbot sustentável;
- Marketplace ecológico.

---

# 👨‍💻 Integrantes

| Nome | RM | Cargo | LinkedIn | GitHub |
|------|-----|--------|----------|--------|
| **Diogo Avelino da Silva** | RM573931 | Desenvolvedor | [diogo-avelino-da-silva](https://www.linkedin.com/in/diogo-avelino-da-silva-2148933b5/) | [capitaomiau](https://github.com/capitaomiau) |
| **Gustavo Soares Silva** | RM573880 | Desenvolvedor | [gustavo-silva](https://www.linkedin.com/in/gustavo-silva-23575638b/) | [GustavoSilva-dev](https://github.com/GustavoSilva-dev) |
| **Edilson Condori** | RM571464 | Desenvolvedor | [edilson-condori](https://www.linkedin.com/in/edilson-condori/) | [Edilson-Cm](https://github.com/Edilson-Cm) |
| **Brayan dos Santos Sousa** | RM564317 | Desenvolvedor | [brayan-dos-santos-sousas](https://www.linkedin.com/in/brayan-dos-santos-sousa/) | [Brayan511](https://github.com/Brayan511) |
| **Breno Henrique de Castro Rocha** | RM572922 | Desenvolvedor | [breno-henrique-de-castro-rocha](https://www.linkedin.com/in/breno-henrique-de-castro-rocha-79b24b24b/) | [BrenoRocha1](https://github.com/BrenoRocha1) |

---

# 🔗 Link do Repositório

Este projeto está disponível publicamente:

**📌 [Projeto no Github](https://github.com/GustavoSilva-dev/ECOPlay-Sprint4)** <br/>
**📌 [Site em Produção](https://ecoplay-sprint4-src.vercel.app/)** <br/>
**📌 [Vídeo Apresentativo das Funcionalidades](https://www.youtube.com/watch?v=9ZKqxf-D9E0)**

---

# 📞 Contato

Para dúvidas, sugestões ou suporte, entre em contato através dos canais abaixo:

**Emails dos Integrantes:**
- Breno Henrique: brenohenrique91901@gmail.com
- Brayan dos Santos: brayandossantossousa4@gmail.com
- Gustavo Silva: gustavosilvaxx25@gmail.com
- Diogo Avelino: diogoavelinods@gmail.com
- Edilson Condori: edilsoncondori08@gmail.com

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos no Challenge FIAP + SoulUp 2026.

---

**© ECOPlay - 2026 - Gamificando ações sustentáveis**
