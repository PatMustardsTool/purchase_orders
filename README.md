## Project Setup (WebStorm)

###  React Checklist:
- Don't type props outside of components
- Import {theme} from '@/theme/theme';
- standardise buttons
- destructure props if for separate components (or even better destructure types)
- name props as props_
- put {...props} first
- name destructured props as props_ds
- name theme vars as theme_
- check for semicolons
- check for trailing commas
- check for .tsx

### 1. Initialise a new Vite project using the React TypeScript template (Oxlint)

### 2. Files:
- Replace `favicon.svg` in public, add `background.svg` and `logo.jpg` to assets
- Delete other files in public and assets
- Delete `App.css`
- Create folders:
    - `src/components`
    - `src/config`
    - `src/hooks`
    - `src/pages`
    - `src/schema`
    - `src/ui`
    - `src/utils`
    - `src/api`
- Create files:
    - `src/config/env.ts`
    - `src/config/route_definitions.ts`
    - `src/config/theme.ts`
    - `src/pages/Create.tsx`
    - `src/pages/Edit.tsx`
    - `src/pages/Search.tsx`
    - `src/schema/SchemaCreate.ts`
    - `src/schema/SchemaEdit.ts`
    - `src/schema/SchemaSearch.ts`
    - `src/components/ProviderPageForm.tsx`
    - `src/graphql.config.yml`


- Update **compilerOptions** section of `tsconfig.app.json`
  ```json
  {
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  }
  ```
- `vite.config.ts`
  ```typescript
  import {defineConfig} from 'vite'
  import react from '@vitejs/plugin-react'
  import path from 'path'
  
  const root = path.resolve(import.meta.dirname, 'src')
  export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': root
        }
      }
  })
  ```
- `main.tsx`
  ```typescript jsx
  import '@/index.css'
  import {createRoot} from 'react-dom/client'
  import {StrictMode} from 'react'
  import {BrowserRouter} from 'react-router-dom'
  import {ThemeProvider} from '@mui/material'
  import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
  import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
  import {enGB} from 'date-fns/locale'
  import {App} from '@/App'
  import {theme} from '@/config/theme'
  import {ProviderPageForm} from '@/components/ProviderPageForm'
  
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <LocalizationProvider adapterLocale={enGB} dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                    <ProviderPageForm>
                        <App/>
                    </ProviderPageForm>
                </BrowserRouter>
            </LocalizationProvider>
        </ThemeProvider>
    </StrictMode>
  )
  ```
- `index.css`
  ```css
  html, body, #root {
    background-color: #2C4768;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
  ```
- `Create.tsx`
  ```typescript jsx
  export const Create = () => {
    return (
        <div>Create</div>
    )
  }
  ```
- `Edit.tsx`
  ```typescript jsx
  export const Edit = () => {
    return (
        <div>Edit</div>
    )
  }
  ```
- `Search.tsx`
  ```typescript jsx
  export const Search = () => {
    return (
        <div>Search</div>
    )
  }
  ```
- `graphql.config.yml`
  ```yaml
  schema:
  - https://api.monday.com/v2:
      headers:
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjYxNzQ1OTczMCwiYWFpIjoxMSwidWlkIjo5OTIwNzM0NSwiaWFkIjoiMjAyNi0wMi0wNVQxMjo1NDo0NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ2OTI1MTksInJnbiI6ImV1YzEifQ.flotSYfrZz9HqtugRDmoQILaQ-nvzMaAsnW1mNCEh70'
  documents:
  - 'src/**/*.graphql'
    ```
### 3. Dependencies:
```bash
    npm install # Core dependencies
    npm install react-router-dom # React Router
    npm install @mui/material @emotion/react @emotion/styled # Material UI
    npm install @fontsource/roboto # Roboto font
    npm install @mui/icons-material # Material UI icons
    npm install @mui/x-date-pickers # Material UI date pickers
    npm install date-fns # Date FNS for date pickers
    npm install react-hook-form # React Hook Form
    npm install zod # Form validation
    npm install @hookform/resolvers # To link React Hook Form with Zod
    npm install axios # API requests
    npm install @tanstack/react-query # Caching data
```

## Monday:

### 1. App setup:
#### - Create app
#### - Build → Features → Create board view feature (Start from scratch)
#### - OAuth & Permissions:
- `boards:read`
- `boards:write`

### 2. App Deployment:
#### - Use **Client-side code deployment** via Monday CLI
```bash
  npm run build
  npm install -g @mondaycom/apps-cli
  mapps init -t eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjYxNzQ1OTczMCwiYWFpIjoxMSwidWlkIjo5OTIwNzM0NSwiaWFkIjoiMjAyNi0wMi0wNVQxMjo1NDo0NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ2OTI1MTksInJnbiI6ImV1YzEifQ.flotSYfrZz9HqtugRDmoQILaQ-nvzMaAsnW1mNCEh70
  cd "C:\Users\OliverAherne\WebstormProjects\purchase_orders\dist"; mapps code:push --client-side -i 18234409
```

### 3. Add To Board:
####  - Build → Features

- **Basic Settings:** Change the name
- **Deployment:**
  - Client-side code
  - Use app url in sub route (e.g. https://v2ef9ecd0cfbf9ad8c13dc51aae3ad5e9.cdn2.monday.app)

## GitHub Pages:

### 1. Add  in project:
- Create folders `.github` at root then `workflows` inside it
- Create file `deploy.yml` at `.github/workflows/`
```yaml
name: Deploy static content to Pages
on:
  push:
    branches: ['main']
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: 'pages'
  cancel-in-progress: true
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5
      - name: Set up Node
        uses: actions/setup-node@v5
        with:
          node-version: lts/*
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build -- --base=/${{ github.event.repository.name }}/
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
### 2. After committing:

  - https://github.com/PatMustardsTool/purchase_orders/actions/workflows/deploy.yml
  - Run workflow

## Links:
- [Material UI](https://mui.com/components/)
- [YouTube](https://www.youtube.com/watch?v=RnHJJNqwSoQ&t)
- [React Hook Form](https://www.youtube.com/watch?v=JyeWoqWsQFo&t=2296s)