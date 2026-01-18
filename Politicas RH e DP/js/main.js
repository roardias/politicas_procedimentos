/**
 * Sistema de Políticas e Procedimentos - Grupo 3SA
 * Arquivo JavaScript Principal
 * Versão: 2.0.0
 */

class PoliciesApp {
    constructor() {
        this.currentView = 'home';
        this.searchTimeout = null;
        this.currentResults = [];
        
        this.init();
    }

    init() {
        // Verificar se estamos na página principal
        if (this.isHomePage()) {
            this.bindEvents();
            this.renderHomePage();
            this.updateStats();
        }
    }

    isHomePage() {
        // Verificar se estamos na página principal (não em subpasta policies)
        const path = window.location.pathname;
        return !path.includes('/policies/') && 
               (path.endsWith('index.html') || path.endsWith('/') || path === '' || 
                path.includes('Fluxo emissão nota fiscal PJ'));
    }

    bindEvents() {
        // Busca
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                clearTimeout(this.searchTimeout);
                this.searchTimeout = setTimeout(() => {
                    this.performSearch(e.target.value);
                }, 300);
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
        }

        // Tags de sugestão
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tag')) {
                this.quickSearch(e.target.textContent);
            }
        });

        // Navegação
        document.addEventListener('click', (e) => {
            if (e.target.closest('.policy-card')) {
                const policyId = e.target.closest('.policy-card').dataset.policyId;
                if (policyId) {
                    this.showPolicy(policyId);
                }
            }

            if (e.target.closest('.result-item')) {
                const policyId = e.target.closest('.result-item').dataset.policyId;
                const sectionId = e.target.closest('.result-item').dataset.sectionId;
                if (policyId) {
                    this.showPolicy(policyId, sectionId);
                }
            }

            if (e.target.closest('.back-btn')) {
                this.goHome();
            }
        });

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K para focar na busca
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('globalSearchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // ESC para voltar ao início
            if (e.key === 'Escape' && this.currentView !== 'home') {
                this.goHome();
            }
        });
    }

    renderHomePage() {
        const mainContent = document.getElementById('mainContent');
        if (!mainContent) return;

        mainContent.innerHTML = `
            <!-- Hero Section com Busca -->
            <div class="hero-section fade-in">
                <div class="hero-content">
                    <h2 class="hero-title">
                        <i class="fas fa-search" style="color: var(--primary-color); margin-right: 15px;"></i>
                        Encontre Qualquer Política ou Procedimento
                    </h2>
                    <p class="hero-subtitle">
                        Digite palavras-chave para encontrar rapidamente a informação que você precisa
                    </p>
                    
                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" 
                                   id="globalSearchInput" 
                                   class="search-input"
                                   placeholder="${POLICIES_CONFIG.searchConfig.placeholder}" 
                                   autocomplete="off"
                                   aria-label="Buscar políticas e procedimentos">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                        
                        <div class="search-suggestions">
                            <h4 class="suggestions-title">
                                <i class="fas fa-fire"></i> 
                                Buscas populares:
                            </h4>
                            <div class="suggestion-tags">
                                ${POLICIES_CONFIG.searchConfig.suggestions.map(tag => 
                                    `<span class="tag" data-search="${tag}">${tag}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Resultados da Busca -->
            <div class="search-results hidden" id="searchResults">
                <h3 class="search-results-title">
                    <i class="fas fa-bullseye"></i> 
                    Resultados Encontrados:
                </h3>
                <div id="searchResultsContainer"></div>
            </div>

            <!-- Políticas Populares -->
            <section class="policies-section">
                <h2 class="section-title">
                    <i class="fas fa-star" style="color: var(--primary-color);"></i>
                    Políticas Mais Acessadas
                </h2>
                <div class="policies-grid" id="policiesGrid">
                    ${this.renderPoliciesGrid()}
                </div>
            </section>

            <!-- Estatísticas -->
            <section class="stats-section" style="margin-top: var(--spacing-xl);">
                <div class="stats-grid" id="statsGrid">
                    ${this.renderStats()}
                </div>
            </section>
        `;

        this.bindEvents();
        this.currentView = 'home';
    }

    renderPoliciesGrid() {
        const policies = Object.values(POLICIES_CONFIG.policies)
            .filter(policy => policy.status === 'active')
            .sort((a, b) => b.viewCount - a.viewCount);

        return policies.map(policy => `
            <div class="policy-card fade-in" data-policy-id="${policy.id}">
                <div class="policy-card-content">
                    <div class="policy-header">
                        <div class="policy-icon">
                            <i class="${policy.icon}"></i>
                        </div>
                        <div class="policy-info">
                            <h3 class="policy-title">${policy.title}</h3>
                            <span class="policy-category">${policy.category}</span>
                        </div>
                    </div>
                    
                    <p class="policy-description">${policy.description}</p>
                    
                    <div class="policy-meta">
                        <div class="policy-stats">
                            <span class="policy-stat">
                                <i class="fas fa-eye"></i>
                                ${this.formatNumber(policy.viewCount)} visualizações
                            </span>
                            <span class="policy-stat">
                                <i class="fas fa-clock"></i>
                                Atualizado ${this.formatDate(policy.lastUpdate)}
                            </span>
                        </div>
                        <span class="policy-version">v${policy.version}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderStats() {
        const stats = getSystemStats();
        
        return `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-lg);">
                <div style="background: var(--bg-primary); padding: var(--spacing-md); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color); margin-bottom: var(--spacing-xs);">
                        ${stats.totalPolicies}
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">Políticas Ativas</div>
                </div>
                
                <div style="background: var(--bg-primary); padding: var(--spacing-md); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-color); margin-bottom: var(--spacing-xs);">
                        ${this.formatNumber(stats.totalViews)}
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">Total de Visualizações</div>
                </div>
                
                <div style="background: var(--bg-primary); padding: var(--spacing-md); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #059669; margin-bottom: var(--spacing-xs);">
                        ${POLICIES_CONFIG.system.version}
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">Versão do Sistema</div>
                </div>
            </div>
        `;
    }

    performSearch(searchTerm) {
        const results = searchPolicies(searchTerm);
        this.currentResults = results;
        this.displaySearchResults(results, searchTerm);
    }

    displaySearchResults(results, searchTerm) {
        const searchResults = document.getElementById('searchResults');
        const container = document.getElementById('searchResultsContainer');
        
        if (!searchResults || !container) return;

        if (results.length === 0 || searchTerm.trim().length < POLICIES_CONFIG.searchConfig.minLength) {
            searchResults.classList.add('hidden');
            return;
        }

        container.innerHTML = results.map(result => `
            <div class="result-item" data-policy-id="${result.id}" data-section-id="${result.matchedSections[0]?.id || ''}">
                <div class="result-header">
                    <div class="result-title">
                        <i class="${result.icon}"></i>
                        ${this.highlightSearchTerm(result.title, searchTerm)}
                    </div>
                    <div class="result-meta">
                        <span><i class="fas fa-tag"></i> ${result.category}</span>
                        <span><i class="fas fa-code-branch"></i> v${result.version}</span>
                    </div>
                </div>
                
                <div class="result-description">
                    ${this.highlightSearchTerm(result.description, searchTerm)}
                </div>
                
                ${result.matchedSections.length > 0 ? `
                    <div class="result-sections">
                        <div class="result-sections-title">Seções relacionadas:</div>
                        <div class="matched-sections">
                            ${result.matchedSections.slice(0, 3).map(section => `
                                <span class="section-tag">${section.title}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `).join('');

        searchResults.classList.remove('hidden');
    }

    quickSearch(tag) {
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) {
            searchInput.value = tag;
            this.performSearch(tag);
            searchInput.focus();
        }
    }

    showPolicy(policyId, sectionId = null) {
        const policy = getPolicyById(policyId);
        if (!policy) return;

        // Incrementar contador de visualizações
        this.incrementViewCount(policyId);

        // Redirecionar para a página específica da política
        let url = `policies/${policyId}.html`;
        if (sectionId) {
            url += `#${sectionId}`;
        }
        window.location.href = url;
    }

    loadPolicyPage(policy, sectionId = null) {
        // Simular carregamento de página específica
        // Em uma implementação real, isso carregaria o arquivo HTML da política
        const mainContent = document.getElementById('mainContent');
        if (!mainContent) return;

        mainContent.innerHTML = `
            <div class="policy-page fade-in">
                <div class="policy-header-page">
                    <button class="btn back-btn" onclick="app.goHome()">
                        <i class="fas fa-arrow-left"></i>
                        Voltar ao Início
                    </button>
                    
                    <div class="policy-title-section">
                        <div class="policy-icon-large">
                            <i class="${policy.icon}"></i>
                        </div>
                        <div>
                            <h1 class="policy-page-title">${policy.title}</h1>
                            <div class="policy-page-meta">
                                <span><i class="fas fa-tag"></i> ${policy.category}</span>
                                <span><i class="fas fa-code-branch"></i> Versão ${policy.version}</span>
                                <span><i class="fas fa-calendar"></i> Atualizado em ${this.formatDate(policy.lastUpdate)}</span>
                                <span><i class="fas fa-user"></i> ${policy.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="policy-content">
                    <div class="policy-description-full">
                        <p>${policy.description}</p>
                    </div>
                    
                    <div class="policy-actions">
                        ${policy.pdfPath ? `<a href="${policy.pdfPath}" download class="btn btn-primary">
                            <i class="fas fa-download"></i> Baixar PDF
                        </a>` : ''}
                        
                        <button class="btn" onclick="window.print()">
                            <i class="fas fa-print"></i> Imprimir
                        </button>
                    </div>
                    
                    <!-- Conteúdo seria carregado do arquivo específico da política -->
                    <div class="policy-content-placeholder">
                        <div style="background: var(--bg-secondary); padding: var(--spacing-lg); border-radius: var(--radius-lg); text-align: center; margin: var(--spacing-lg) 0;">
                            <i class="fas fa-file-alt" style="font-size: 3rem; color: var(--text-light); margin-bottom: var(--spacing-sm);"></i>
                            <h3>Conteúdo da Política</h3>
                            <p>O conteúdo detalhado seria carregado do arquivo específico: <code>${policy.filePath}</code></p>
                        </div>
                    </div>
                    
                    <!-- Changelog -->
                    <div class="changelog-section">
                        <h3><i class="fas fa-history"></i> Histórico de Alterações</h3>
                        <div class="changelog-items">
                            ${policy.changelog.map(change => `
                                <div class="changelog-item">
                                    <div class="changelog-header">
                                        <span class="changelog-version">v${change.version}</span>
                                        <span class="changelog-date">${this.formatDate(change.date)}</span>
                                        <span class="changelog-author">${change.author}</span>
                                    </div>
                                    <ul class="changelog-changes">
                                        ${change.changes.map(changeItem => `<li>${changeItem}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.currentView = 'policy';

        // Scroll para seção específica se fornecida
        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    this.highlightElement(element);
                }
            }, 300);
        }
    }

    goHome() {
        this.renderHomePage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    incrementViewCount(policyId) {
        // Em uma implementação real, isso enviaria para o servidor
        if (POLICIES_CONFIG.policies[policyId]) {
            POLICIES_CONFIG.policies[policyId].viewCount++;
        }
    }

    highlightElement(element) {
        element.style.background = 'linear-gradient(135deg, rgba(222, 230, 83, 0.2) 0%, rgba(222, 230, 83, 0.1) 100%)';
        element.style.transform = 'scale(1.02)';
        element.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            element.style.background = '';
            element.style.transform = '';
        }, 2000);
    }

    highlightSearchTerm(text, term) {
        if (!term || term.trim().length < 2) return text;
        
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'hoje';
        if (diffDays === 1) return 'ontem';
        if (diffDays < 7) return `há ${diffDays} dias`;
        if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semanas`;
        
        return date.toLocaleDateString('pt-BR');
    }

    updateStats() {
        // Atualizar estatísticas na interface
        const statsGrid = document.getElementById('statsGrid');
        if (statsGrid) {
            statsGrid.innerHTML = this.renderStats();
        }
    }
}

// Inicializar aplicação quando DOM estiver carregado
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new PoliciesApp();
});

// Funções globais para compatibilidade
function showPolicy(policyId, sectionId = null) {
    if (app) app.showPolicy(policyId, sectionId);
}

function goHome() {
    if (app) app.goHome();
}

function quickSearch(tag) {
    if (app) app.quickSearch(tag);
}
