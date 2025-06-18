# NextDex

**NextDex** é um projeto pessoal desenvolvido para praticar habilidades em **React**, **CSS puro** e consumo de APIs. A aplicação foi criada com uma abordagem **mobile first** e consome dados da [PokeAPI](https://pokeapi.co) para exibir informações sobre os Pokémon.

## 🔗 Acesse o Projeto

**Visite o meu projeto:**
[https://nextdex-six.vercel.app/](https://nextdex-six.vercel.app/)

## 🖼 Preview

Adicionei abaixo um preview do projeto para visualização rápida:

![Preview do Projeto](https://github.com/baestero/Nextdex/raw/main/public/preview/Nextdex.png)

## Requisitos e Critérios de Aceite

Para entender as funcionalidades e os critérios de validação da NextDex, consulte o documento de [Requisitos e Critérios de Aceite](REQUIREMENTS.md).

## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS puro**
- **PokeAPI**
- **Vercel** (para deploy)
- **Cypress** (para Testes Automatizados E2E)

## ⚙️ Funcionalidades

- ✅ Tela inicial responsiva com animação
- ✅ Pesquisa de Pokémon por **nome** ou **ID**
- ✅ Filtro animado de categorias na tela inicial
- ✅ Layout otimizado para dispositivos móveis

Claro! Vou incluir na seção a parte do módulo de filtro por tipo de Pokémon também, explicando que ele está testado junto com os demais módulos. Veja a versão atualizada para o seu README:

---

## 🧪 Testes Automatizados E2E (Cypress)

Este projeto conta com **testes automatizados de ponta a ponta (E2E)** utilizando o [Cypress](https://www.cypress.io/), com o objetivo de validar funcionalidades críticas da aplicação com base nos seguintes requisitos funcionais:

- **RF 3.1:** Exibição Inicial de Pokémon (Home)
- **RF 3.2:** Módulo de Filtro por Tipo de Pokémon
- **RF 3.3:** Módulo de Pesquisa de Pokémon
- **RNF 4.1:** Responsividade e Foco Mobile

Os testes garantem, por exemplo:

- O carregamento dos 20 primeiros Pokémon da primeira geração ao acessar a página inicial.
- A pesquisa por Pokémon via nome ou ID.
- O filtro correto dos Pokémon exibidos ao selecionar um tipo específico.
- O comportamento da aplicação ao realizar buscas com campo vazio.

---

### 📁 Localização dos testes

Os testes estão disponíveis na pasta:

```
cypress/e2e/
```

---

### ▶️ Como rodar os testes

1. **Clone o repositório e acesse a pasta de testes:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**

   ```bash
   cd tests
   npm install
   ```

3. **Execute a aplicação (se necessário):**

   ```bash
   npm run dev
   ```

4. **Rode o Cypress:**

   - **Modo interativo (UI):**

     ```bash
     npx cypress open
     ```

   - **Modo headless (terminal):**

     ```bash
     npx cypress run
     ```

---

## 📲 Mobile First

O layout foi pensado primeiro para dispositivos móveis, garantindo uma experiência acessível diretamente na palma da mão.

## 📦 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nextdex.git
```

Perfeito! Com essa imagem de preview, aqui está seu `README.md` completo e atualizado com a visualização incluída:

---

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
