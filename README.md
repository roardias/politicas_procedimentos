# 📋 Portal de Políticas e Processos - Grupo 3SA

Sistema web para consulta de políticas e procedimentos corporativos do Grupo 3SA.

## 🎯 Objetivo

Centralizar e facilitar o acesso às políticas corporativas, proporcionando uma interface moderna e intuitiva para colaboradores consultarem procedimentos, fluxos e diretrizes da empresa.

## 🚀 Funcionalidades

### ✅ Funcionalidades Implementadas

- **🔍 Sistema de Busca Avançado**: Busca inteligente com suporte a acentos (férias/ferias, rescisão/rescisao)
- **📱 Design Responsivo**: Interface otimizada para desktop, tablet e mobile
- **🎨 Interface Moderna**: Design profissional com cards de departamentos lado a lado
- **📊 Estatísticas de Uso**: Contador de visualizações e métricas de acesso
- **🔄 Navegação Intuitiva**: Links rápidos e navegação entre seções com hash URLs
- **📄 Exportação**: Opções para imprimir e baixar PDFs de todas as políticas
- **👥 Divisão por Departamentos**: Área Financeira e Recursos Humanos e DP
- **🎯 Navegação Direta**: Links que levam diretamente às seções específicas

### 📋 Políticas Disponíveis

#### 💼 **Área Financeira**

1. **💳 Política de Pagamentos**
   - Prazos para solicitação
   - Responsabilidades das áreas
   - Fluxo de exceções
   - Processo operacional completo
   - Regras de compliance

2. **📄 Emissão de Nota Fiscal PJ**
   - Fluxo antigo vs. novo fluxo
   - Datas de emissão
   - Regras de cálculo
   - Processo de envio
   - Integração com líder imediato

3. **💰 Reembolso de Prejuízo**
   - Tratamento de prejuízos CLT/PJ
   - Fluxo via Bitrix24
   - Aprovações necessárias

#### 👥 **Recursos Humanos e Departamento Pessoal**

4. **🏖️ Solicitação de Férias**
   - Política semestral de solicitação
   - Processo via Bitrix24
   - Prazos e aprovações
   - Fracionamento e abono pecuniário
   - Download de PDF disponível

5. **📋 Checklist de Desligamento**
   - Procedimentos completos de rescisão
   - Documentação obrigatória
   - Prazos legais
   - Homologação e TRCT
   - Checkboxes organizados por seção
   - Download de PDF disponível

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+**: Funcionalidades interativas e busca
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia (Inter)

## 📁 Estrutura do Projeto

```
📦 Procedimentos e Processos/
├── 📁 Fluxo emissão nota fiscal PJ/          # Portal principal
│   ├── 📁 css/
│   │   ├── main.css                          # Estilos da página inicial
│   │   └── policy-page.css                   # Estilos das páginas de política
│   ├── 📁 js/
│   │   ├── main.js                          # Lógica principal
│   │   └── policies-config.js               # Configurações e dados
│   ├── 📁 policies/
│   │   ├── emissao-nf-pj.html               # Política de emissão NF PJ
│   │   └── reembolso-prejuizo.html          # Política de reembolso
│   ├── index.html                           # Página principal
│   └── Logo_grupo_3sa.png                   # Logo da empresa
├── 📁 Politica de Pagamentos/               # Política de pagamentos
│   ├── 📁 css/
│   ├── 📁 js/
│   ├── 📁 policies/
│   │   └── politica-pagamentos.html
│   ├── index.html
│   └── Fluxograma _pagamentos.svg           # Fluxograma visual
└── 📁 Controle de linhas corporativas/       # Outras políticas
```

## 🎨 Características do Design

- **🎨 Tema Moderno**: Paleta de cores profissional (azul, amarelo, cinza)
- **📱 Totalmente Responsivo**: Adaptação automática para todos os dispositivos
- **⚡ Performance Otimizada**: Carregamento rápido e suave
- **♿ Acessibilidade**: Estrutura semântica e navegação por teclado
- **🔍 UX Intuitiva**: Interface familiar e fácil de usar

## 🚀 Como Usar

### Para Desenvolvedores

1. Clone o repositório
2. Abra `Fluxo emissão nota fiscal PJ/index.html` no navegador
3. Para desenvolvimento local, use um servidor HTTP simples

### Para Usuários Finais

1. Acesse a página inicial
2. Use a busca para encontrar políticas específicas
3. Navegue pelos cards das políticas
4. Acesse diretamente as seções via navegação rápida

## 📊 Sistema de Busca

O sistema de busca indexa:
- Títulos das políticas
- Descrições completas
- Tags e categorias
- Conteúdo das seções
- Palavras-chave específicas

**Sugestões de busca populares:**
- "PJ", "nota fiscal", "emissão"
- "pagamentos", "aprovação", "prazo"
- "reembolso", "prejuízo", "CLT"

## 🔄 Atualizações Recentes

### Versão 2.1.0 (Janeiro 2026) 🆕

- ✅ **Novas Políticas RH e DP**: Solicitação de Férias e Checklist de Desligamento
- ✅ **Busca com Suporte a Acentos**: Pesquise "ferias" ou "férias", "rescisao" ou "rescisão"
- ✅ **Navegação por Departamentos**: Cards lado a lado com responsividade
- ✅ **Downloads de PDF**: Todas as políticas com opção de download
- ✅ **Navegação Direta**: Links com hash URLs (#rh-dp) para seções específicas
- ✅ **Checkboxes Organizados**: Alinhamento correto no Checklist de Desligamento
- ✅ **Integração Bitrix**: Atualização para incluir líder imediato nos processos
- ✅ **Remoção de Páginas Desnecessárias**: Estrutura mais limpa e direta

### Versão 2.0.0 (Setembro 2025)
- ✅ Reformulação completa da interface
- ✅ Novo sistema de busca
- ✅ Adição da Política de Pagamentos
- ✅ Integração de fluxogramas visuais
- ✅ Melhoria na navegação e UX

### Versão 1.3.0 (Agosto 2025)
- ✅ Implementação de fluxos duplos para NF PJ
- ✅ Atualização de datas e prazos
- ✅ Melhorias no design responsivo

## 🤝 Contribuição

Para sugestões, melhorias ou correções:
1. Documente a necessidade
2. Teste em diferentes dispositivos
3. Mantenha a consistência visual
4. Atualize a documentação

## 📞 Suporte

Para dúvidas sobre as políticas ou uso do sistema:
- **RH/DP**: Questões sobre procedimentos
- **TI**: Suporte técnico do portal
- **Financeiro**: Dúvidas específicas sobre pagamentos

---

**© 2024 Grupo 3SA - Portal de Políticas e Processos**  
*Versão 2.0.0 - Atualizado em Setembro 2025*
