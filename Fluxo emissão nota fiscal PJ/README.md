# Portal de Políticas e Processos - Grupo 3SA

## 🎯 **Sistema Profissional de Gestão de Políticas**

Portal web moderno e profissional para documentação e acesso a políticas e procedimentos corporativos do Grupo 3SA.

### ✨ **Principais Funcionalidades**

- **🔍 Busca Inteligente**: Sistema avançado de busca semântica
- **📄 Páginas Específicas**: Cada política tem sua própria página detalhada
- **📅 Versionamento**: Controle completo de versões com histórico de alterações
- **📱 Design Responsivo**: Interface adaptada para todos os dispositivos
- **🔧 Fácil Manutenção**: Estrutura modular para facilitar atualizações

## 🏗️ **Estrutura do Projeto**

```
Fluxo emissão nota fiscal PJ/
├── index.html                      # Página principal
├── css/
│   ├── main.css                    # Estilos principais
│   └── policy-page.css             # Estilos para páginas de políticas
├── js/
│   ├── policies-config.js          # Configuração das políticas
│   └── main.js                     # Aplicação principal
├── policies/
│   ├── emissao-nf-pj.html         # Política de Emissão NF PJ
│   └── reembolso-prejuizo.html    # Política de Reembolso
├── assets/
│   ├── Logo_grupo_3sa.png         # Logo da empresa
│   ├── fluxo_pagamentos_pj.png    # Fluxograma
│   └── Fluxo de Pagamento – Prestadores de Serviço PJ.pdf
└── README.md                       # Documentação
```

## 🚀 **Como Usar**

### **Acesso Básico**
1. Abra o arquivo `index.html` no navegador
2. Use a busca global para encontrar políticas específicas
3. Navegue pelos cards de políticas populares
4. Acesse páginas específicas através dos links

### **Busca Avançada**
- Digite palavras-chave na barra de busca
- Use as tags de sugestão para busca rápida
- Resultados mostram seções específicas relevantes
- Clique nos resultados para ir direto à seção

## 📋 **Políticas Disponíveis**

### **1. Emissão de Nota Fiscal PJ** (`policies/emissao-nf-pj.html`)
- **Versão**: 1.2.0
- **Categoria**: Financeiro
- **Descrição**: Fluxo completo para emissão de notas fiscais de prestadores pessoa jurídica
- **Funcionalidades**:
  - Calculadora integrada de valores
  - Fluxograma visual do processo
  - Exemplos práticos de cálculo
  - Download do PDF oficial

### **2. Reembolso de Prejuízo** (`policies/reembolso-prejuizo.html`)
- **Versão**: 1.1.0
- **Categoria**: RH
- **Descrição**: Tratamento de prejuízos e descontos para CLT e PJ via Bitrix24
- **Funcionalidades**:
  - Busca específica por tipo de procedimento
  - Fluxo diferenciado CLT vs PJ
  - Links diretos para o Bitrix24

## 🔧 **Manutenção e Atualizações**

### **Adicionando Nova Política**

1. **Criar arquivo HTML** em `policies/nome-da-politica.html`
2. **Atualizar configuração** em `js/policies-config.js`:

```javascript
"nova-politica": {
    id: "nova-politica",
    title: "Título da Nova Política",
    description: "Descrição detalhada...",
    icon: "fas fa-icon-name",
    category: "Categoria",
    status: "active",
    version: "1.0.0",
    lastUpdate: "2024-12-19",
    author: "Departamento Responsável",
    tags: ["tag1", "tag2", "tag3"],
    // ... outras configurações
}
```

3. **Criar seções** da política com IDs únicos
4. **Adicionar ao changelog** todas as alterações

### **Atualizando Política Existente**

1. **Editar arquivo** da política em `policies/`
2. **Incrementar versão** em `policies-config.js`
3. **Atualizar data** de modificação
4. **Adicionar entrada** no changelog
5. **Testar busca** e navegação

### **Personalização Visual**

- **Cores principais**: Editar variáveis CSS em `css/main.css`
- **Layout**: Modificar estrutura em arquivos HTML
- **Componentes**: Adicionar novos estilos em CSS modular

## 🎨 **Design System**

### **Cores Principais**
- **Primária**: #DEE653 (Verde Lima)
- **Secundária**: #212121 (Cinza Escuro)
- **Accent**: #4F46E5 (Azul)
- **Fundo**: #f8fafc / #e2e8f0

### **Tipografia**
- **Fonte**: Inter (Google Fonts)
- **Títulos**: 700 weight
- **Corpo**: 400 weight
- **Destaques**: 600 weight

### **Componentes**
- Cards com gradientes e sombras
- Botões com efeitos hover
- Busca com autocomplete
- Navegação breadcrumb
- Animações suaves

## 📱 **Responsividade**

O sistema é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🔍 **Sistema de Busca**

### **Funcionalidades**
- Busca semântica por título, descrição e tags
- Busca por seções específicas
- Sugestões automáticas
- Relevância por pontuação
- Highlight de termos encontrados

### **Algoritmo de Busca**
- **Título**: Peso 3
- **Descrição**: Peso 2
- **Tags**: Peso 2
- **Seções**: Peso 1

## 📊 **Versionamento**

### **Sistema de Versões**
- **Formato**: MAJOR.MINOR.PATCH
- **MAJOR**: Mudanças estruturais
- **MINOR**: Novas funcionalidades
- **PATCH**: Correções e melhorias

### **Histórico de Alterações**
Cada política mantém changelog completo com:
- Data da alteração
- Autor da modificação
- Lista detalhada de mudanças
- Versão anterior e nova

## 🛠️ **Tecnologias Utilizadas**

- **HTML5**: Estrutura semântica
- **CSS3**: Design moderno com Grid/Flexbox
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Iconografia
- **Google Fonts**: Tipografia

## 📈 **Métricas e Analytics**

O sistema rastreia:
- Visualizações por política
- Buscas mais populares
- Seções mais acessadas
- Tempo de permanência

## 🔐 **Segurança**

- Sem dependências externas além de CDNs
- Validação de inputs
- Escape de conteúdo HTML
- Sanitização de buscas

## 📞 **Suporte**

Para dúvidas ou suporte técnico:
- **RH**: Políticas de pessoal
- **Financeiro**: Políticas financeiras
- **TI**: Suporte técnico do sistema

---

**Grupo 3SA** - Portal de Políticas v2.0.0 | Atualizado em 19/12/2024