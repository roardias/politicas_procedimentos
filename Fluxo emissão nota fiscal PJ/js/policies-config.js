/**
 * Configuração das Políticas e Procedimentos
 * Grupo 3SA - Sistema de Gestão de Políticas
 * 
 * Este arquivo centraliza todas as informações das políticas para facilitar manutenção
 */

const POLICIES_CONFIG = {
    // Configurações gerais do sistema
    system: {
        title: "Políticas e Processos - Grupo 3SA",
        version: "2.0.0",
        lastUpdate: "2024-12-19",
        description: "Portal de Acesso aos Colaboradores"
    },

    // Configuração das políticas disponíveis
    policies: {
        "emissao-nf-pj": {
            id: "emissao-nf-pj",
            title: "Emissão de Nota Fiscal PJ",
            shortTitle: "NF PJ",
            description: "Fluxo completo para emissão de notas fiscais de prestadores pessoa jurídica",
            icon: "fas fa-file-invoice-dollar",
            category: "Financeiro",
            status: "active", // active, draft, archived
            version: "1.4.0",
            lastUpdate: "2025-09-29",
            author: "Departamento Financeiro",
            approvedBy: "Diretoria Financeira",
            tags: ["PJ", "nota fiscal", "pagamento", "prestador", "financeiro", "dia 25", "cálculo"],
            priority: "high",
            viewCount: 47,
            filePath: "policies/emissao-nf-pj.html",
            pdfPath: "Fluxo de Pagamento – Prestadores de Serviço PJ.pdf",
            imagePath: "fluxo_pagamentos_pj.png",
            sections: [
                {
                    id: "data-emissao",
                    title: "Data de Emissão da Nota Fiscal",
                    keywords: ["data", "emissão", "dia 25", "primeiro dia útil", "pagamento"]
                },
                {
                    id: "regras-emissao",
                    title: "Regras de Emissão da Nota Fiscal", 
                    keywords: ["regras", "início atividade", "dias trabalhados", "período"]
                },
                {
                    id: "calculo-nf",
                    title: "Metodologia de Cálculo da Nota Fiscal",
                    keywords: ["cálculo", "valor", "proporcional", "30 dias", "fórmula"]
                },
                {
                    id: "fluxo-envio",
                    title: "Fluxo de Envio para o Financeiro",
                    keywords: ["RH", "DP", "prestador", "financeiro", "bitrix24", "aprovação"]
                }
            ],
            changelog: [
                {
                    version: "1.4.0",
                    date: "2025-09-29",
                    changes: [
                        "Reestruturação completa do fluxo de envio para o financeiro",
                        "Implementação de validação centralizada no RH/DP",
                        "Adição de fluxo condicional para correção de valores",
                        "Consolidação de notas fiscais em tarefa única para o financeiro"
                    ],
                    author: "Sistema"
                },
                {
                    version: "1.3.0",
                    date: "2025-09-18",
                    changes: ["Correção da política: NF emitida dia 25 cobre apenas dias trabalhados até dia 24"],
                    author: "Sistema"
                },
                {
                    version: "1.2.0",
                    date: "2025-08-22",
                    changes: ["Atualização do link do Bitrix24", "Melhoria na descrição dos cálculos"],
                    author: "Sistema"
                },
                {
                    version: "1.1.0", 
                    date: "2025-07-15",
                    changes: ["Inclusão de exemplos práticos", "Correção de datas"],
                    author: "Financeiro"
                }
            ]
        },

        "reembolso-prejuizo": {
            id: "reembolso-prejuizo",
            title: "Reembolso de Prejuízo",
            shortTitle: "Reembolso",
            description: "Tratamento de prejuízos e descontos para CLT e PJ via Bitrix24",
            icon: "fas fa-coins",
            category: "RH",
            status: "active",
            version: "1.1.0",
            lastUpdate: "2025-08-22",
            author: "Departamento de RH",
            approvedBy: "Diretoria de RH",
            tags: ["CLT", "PJ", "desconto", "reembolso", "prejuízo", "bitrix24", "guia", "financeiro"],
            priority: "high",
            viewCount: 23,
            filePath: "policies/reembolso-prejuizo.html",
            pdfPath: null,
            imagePath: null,
            sections: [
                {
                    id: "identificacao-prejuizo",
                    title: "Identificação do Prejuízo",
                    keywords: ["identificação", "erro", "líder", "tarefa", "evidências"]
                },
                {
                    id: "analise-rh",
                    title: "Análise do RH",
                    keywords: ["RH", "avaliação", "CLT", "PJ", "desconto", "financeiro"]
                },
                {
                    id: "encerramento-registro",
                    title: "Encerramento e Registro",
                    keywords: ["encerramento", "comprovante", "histórico", "arquivado"]
                }
            ],
            changelog: [
                {
                    version: "1.1.0",
                    date: "2025-08-22",
                    changes: ["Melhoria no fluxo de aprovação", "Clarificação dos prazos"],
                    author: "RH"
                }
            ]
        },

        "politica-pagamentos": {
            id: "politica-pagamentos",
            title: "Política de Pagamentos",
            shortTitle: "Pagamentos",
            description: "Diretrizes e procedimentos para solicitação, aprovação e execução de pagamentos",
            icon: "fas fa-credit-card",
            category: "Financeiro",
            status: "active",
            version: "1.0.0",
            lastUpdate: "2025-09-19",
            author: "Departamento Financeiro",
            approvedBy: "Diretoria Financeira",
            tags: ["pagamentos", "financeiro", "aprovação", "diretoria", "prazo", "compliance", "bitrix24", "exceção"],
            priority: "high",
            viewCount: 0,
            filePath: "../Politica de Pagamentos/policies/politica-pagamentos.html",
            pdfPath: null,
            imagePath: null,
            sections: [
                {
                    id: "prazos-solicitacao",
                    title: "Prazos para Solicitação",
                    keywords: ["quarta-feira", "semana anterior", "prazo", "limite", "negativa", "automática"]
                },
                {
                    id: "responsabilidades",
                    title: "Responsabilidades da Área Solicitante",
                    keywords: ["documentos", "comprobatórios", "aprovação", "gestor", "diretoria", "nota fiscal"]
                },
                {
                    id: "excecoes",
                    title: "Exceções",
                    keywords: ["situações", "excepcionais", "diretoria", "pedido", "exceção", "falhou", "processo"]
                },
                {
                    id: "fluxo-operacional",
                    title: "Fluxo Operacional",
                    keywords: ["abertura", "tarefa", "conferência", "documentos", "execução", "pagamento", "bitrix24"]
                },
                {
                    id: "compliance",
                    title: "Compliance e Segurança",
                    keywords: ["aprovação", "formal", "segregação", "funções", "dados", "bancários", "auditoria"]
                }
            ],
            changelog: [
                {
                    version: "1.0.0",
                    date: "2025-09-19",
                    changes: ["Criação da política de pagamentos", "Definição de prazos e responsabilidades"],
                    author: "Sistema"
                }
            ]
        }
    },

    // Configuração das categorias
    categories: {
        "Financeiro": {
            name: "Financeiro",
            icon: "fas fa-calculator",
            color: "#DEE653",
            description: "Políticas relacionadas a processos financeiros e pagamentos"
        },
        "RH": {
            name: "Recursos Humanos", 
            icon: "fas fa-users",
            color: "#4F46E5",
            description: "Políticas de gestão de pessoas e processos de RH"
        },
        "Operacional": {
            name: "Operacional",
            icon: "fas fa-cogs",
            color: "#059669", 
            description: "Procedimentos operacionais e de processo"
        }
    },

    // Configuração de links úteis
    quickLinks: [
        {
            title: "Portal Bitrix24",
            url: "https://alldax.bitrix24.com.br/page/g3sa_financeiro/geral/",
            icon: "fas fa-external-link-alt",
            description: "Acesso ao sistema Bitrix24"
        },
        {
            title: "Suporte TI",
            url: "#suporte",
            icon: "fas fa-headset",
            description: "Suporte técnico interno"
        }
    ],

    // Configuração de busca
    searchConfig: {
        minLength: 2,
        maxResults: 10,
        highlightClass: "search-highlight",
        placeholder: "Digite palavras-chave: CLT, PJ, nota fiscal, reembolso...",
        suggestions: [
            "CLT", "PJ", "nota fiscal", "desconto", "reembolso", 
            "bitrix24", "financeiro", "prazo", "guia", "pagamento",
            "política pagamentos", "diretoria", "aprovação", "exceção", "compliance"
        ]
    }
};

// Função para buscar políticas
function searchPolicies(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase().trim();
    
    if (term.length < POLICIES_CONFIG.searchConfig.minLength) {
        return results;
    }
    
    Object.values(POLICIES_CONFIG.policies).forEach(policy => {
        let relevanceScore = 0;
        let matchedSections = [];
        
        // Busca no título (peso 3)
        if (policy.title.toLowerCase().includes(term)) {
            relevanceScore += 3;
        }
        
        // Busca na descrição (peso 2)
        if (policy.description.toLowerCase().includes(term)) {
            relevanceScore += 2;
        }
        
        // Busca nas tags (peso 2)
        policy.tags.forEach(tag => {
            if (tag.toLowerCase().includes(term)) {
                relevanceScore += 2;
            }
        });
        
        // Busca nas seções (peso 1)
        policy.sections.forEach(section => {
            if (section.title.toLowerCase().includes(term) || 
                section.keywords.some(keyword => keyword.toLowerCase().includes(term))) {
                relevanceScore += 1;
                matchedSections.push(section);
            }
        });
        
        if (relevanceScore > 0) {
            results.push({
                ...policy,
                relevanceScore,
                matchedSections
            });
        }
    });
    
    // Ordenar por relevância
    return results
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, POLICIES_CONFIG.searchConfig.maxResults);
}

// Função para obter política por ID
function getPolicyById(policyId) {
    return POLICIES_CONFIG.policies[policyId] || null;
}

// Função para obter todas as políticas de uma categoria
function getPoliciesByCategory(category) {
    return Object.values(POLICIES_CONFIG.policies)
        .filter(policy => policy.category === category);
}

// Função para obter estatísticas
function getSystemStats() {
    const policies = Object.values(POLICIES_CONFIG.policies);
    return {
        totalPolicies: policies.length,
        activePolicies: policies.filter(p => p.status === 'active').length,
        totalViews: policies.reduce((sum, p) => sum + p.viewCount, 0),
        lastUpdate: Math.max(...policies.map(p => new Date(p.lastUpdate)))
    };
}

// Exportar configurações (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = POLICIES_CONFIG;
}
