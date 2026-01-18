/**
 * Configuração das Políticas de RH e DP
 * Grupo 3SA - Sistema de Gestão de Políticas
 * 
 * Este arquivo centraliza as informações das políticas de RH e DP
 */

const RH_DP_POLICIES_CONFIG = {
    // Configurações gerais do sistema
    system: {
        title: "Políticas RH e DP - Grupo 3SA",
        version: "1.0.0",
        lastUpdate: "2026-01-18",
        description: "Portal de Políticas de Recursos Humanos e Departamento Pessoal"
    },

    // Configuração das políticas disponíveis
    policies: {
        "solicitacao-ferias": {
            id: "solicitacao-ferias",
            title: "Solicitação de Férias",
            shortTitle: "Férias",
            description: "Política de solicitação de férias do Grupo 3SA com prazos semestrais e processo via Bitrix24",
            icon: "fas fa-calendar-check",
            category: "RH",
            status: "active",
            version: "1.0.0",
            lastUpdate: "2026-01-16",
            author: "Departamento de RH",
            approvedBy: "Diretoria de RH",
            tags: ["férias", "solicitação", "aprovação", "semestral", "RH", "Bitrix24", "fracionamento", "abono pecuniário"],
            priority: "high",
            viewCount: 0,
            filePath: "policies/solicitacao-ferias.html",
            pdfPath: "../../Politicas DP e RH/Política de Solicitação de Férias.pdf",
            imagePath: null,
            sections: [
                {
                    id: "empresas-envolvidas",
                    title: "Empresas / Negócios Envolvidos",
                    keywords: ["Alldax", "Tax All", "Concimed", "Grupo 3SA", "empresas", "abrangência"]
                },
                {
                    id: "procedimentos",
                    title: "Procedimentos para Solicitação",
                    keywords: ["primeiro semestre", "segundo semestre", "10 novembro", "10 abril", "90 dias", "período aquisitivo"]
                },
                {
                    id: "fracionamento",
                    title: "Possibilidades de Fracionamento",
                    keywords: ["três períodos", "14 dias", "5 dias", "abono pecuniário", "13º salário", "antecipação"]
                },
                {
                    id: "processo-aprovacao",
                    title: "Processo de Aprovação",
                    keywords: ["Bitrix24", "RPA", "líder", "liderado", "planejamento semestral", "formulário"]
                },
                {
                    id: "comunicacao",
                    title: "Comunicação entre RH e Líderes",
                    keywords: ["alinhamento", "tarefa", "aviso férias", "recibo pagamento", "assinatura", "relatórios trimestrais"]
                },
                {
                    id: "responsabilidades",
                    title: "Responsabilidades dos Líderes",
                    keywords: ["orientar", "informar", "compreensão", "diretrizes", "exceções", "justificativa"]
                }
            ],
            changelog: [
                {
                    version: "1.0.0",
                    date: "2026-01-16",
                    changes: ["Atualização da política de solicitação de férias", "Implementação de prazos semestrais", "Integração com Bitrix24 RPA", "Definição de responsabilidades dos líderes"],
                    author: "RH"
                },
                {
                    version: "0.9.0",
                    date: "2024-01-01",
                    changes: ["Vigência inicial da política", "Estabelecimento de regras básicas"],
                    author: "RH"
                }
            ]
        },

        "checklist-desligamento": {
            id: "checklist-desligamento",
            title: "Checklist de Desligamento",
            shortTitle: "Desligamento",
            description: "Procedimentos completos para processo de desligamento de colaboradores, incluindo documentação e prazos legais",
            icon: "fas fa-clipboard-check",
            category: "DP",
            status: "active",
            version: "2.0.0",
            lastUpdate: "2026-01-18",
            author: "Departamento Pessoal",
            approvedBy: "Diretoria de RH",
            tags: ["desligamento", "rescisão", "checklist", "DP", "homologação", "TRCT", "prazos legais", "documentação"],
            priority: "high",
            viewCount: 0,
            filePath: "policies/checklist-desligamento.html",
            pdfPath: "../../Politicas DP e RH/Checklist de Desligamento v.2 (1).pdf",
            imagePath: null,
            sections: [
                {
                    id: "comunicacao",
                    title: "Comunicação do Desligamento",
                    keywords: ["pedido", "solicitação", "gestor", "bitrix", "horas", "comissionamento", "colaborador", "RH"]
                },
                {
                    id: "devolucao",
                    title: "Devolução de Materiais e Acesso",
                    keywords: ["celular", "chip", "chaves", "notebook", "equipamentos", "acesso", "controle", "materiais"]
                },
                {
                    id: "entrevista",
                    title: "Entrevista de Desligamento",
                    keywords: ["feedback", "entrevista", "informações", "RH", "agendar", "conduzir"]
                },
                {
                    id: "documentacao-inicial",
                    title: "Documentação Inicial",
                    keywords: ["formulário", "devolução", "registro", "materiais", "solicitação", "DP"]
                },
                {
                    id: "exclusao",
                    title: "Exclusão de Acessos",
                    keywords: ["M3X", "microsoft", "email", "TI", "tangerino", "bitrix", "totalpass", "plano saúde", "sistemas"]
                },
                {
                    id: "acompanhamento",
                    title: "Acompanhamento",
                    keywords: ["etapas", "conclusão", "saída", "colaborador", "confirmar"]
                },
                {
                    id: "calculos",
                    title: "Cálculos de Rescisão",
                    keywords: ["CID", "CAT", "estabilidade", "FGTS", "totalpass", "empréstimos", "ASO", "carta referência", "rescisão"]
                },
                {
                    id: "financeiro",
                    title: "Envio para Financeiro",
                    keywords: ["termo rescisão", "GRRF", "financeiro", "prazo", "envio", "DP"]
                },
                {
                    id: "documentacao-final",
                    title: "Documentação Final",
                    keywords: ["TRCT", "quitação", "kit profissional", "INSS", "ficha empregado", "seguro desemprego", "ponto", "documentos"]
                },
                {
                    id: "homologacao",
                    title: "Homologação",
                    keywords: ["whatsapp", "email", "convocação", "pagamento", "assinatura", "testemunha", "homologação", "final"]
                }
            ],
            changelog: [
                {
                    version: "2.0.0",
                    date: "2026-01-18",
                    changes: ["Atualização completa do checklist", "Inclusão de novos procedimentos legais", "Adequação às mudanças trabalhistas"],
                    author: "DP"
                },
                {
                    version: "1.0.0",
                    date: "2025-06-15",
                    changes: ["Criação inicial do checklist de desligamento"],
                    author: "DP"
                }
            ]
        }
    },

    // Configuração das categorias
    categories: {
        "RH": {
            name: "Recursos Humanos",
            icon: "fas fa-users",
            color: "#4F46E5",
            description: "Políticas de gestão de pessoas e processos de RH"
        },
        "DP": {
            name: "Departamento Pessoal", 
            icon: "fas fa-clipboard-check",
            color: "#059669",
            description: "Procedimentos legais e administrativos do DP"
        }
    },

    // Configuração de links úteis
    quickLinks: [
        {
            title: "Portal Principal",
            url: "../../Fluxo emissão nota fiscal PJ/index.html",
            icon: "fas fa-home",
            description: "Voltar ao portal principal"
        },
        {
            title: "Portal Bitrix24",
            url: "https://alldax.bitrix24.com.br/page/g3sa_financeiro/geral/",
            icon: "fas fa-external-link-alt",
            description: "Acesso ao sistema Bitrix24"
        }
    ],

    // Configuração de busca
    searchConfig: {
        minLength: 2,
        maxResults: 10,
        highlightClass: "search-highlight",
        placeholder: "Digite palavras-chave: férias, desligamento, homologação, TRCT...",
        suggestions: [
            "Férias", "Desligamento", "Homologação", "TRCT", 
            "Aviso Prévio", "FGTS", "Período Aquisitivo", "DP"
        ]
    }
};

// Função para buscar políticas de RH e DP
function searchRHDPPolicies(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase().trim();
    
    if (term.length < RH_DP_POLICIES_CONFIG.searchConfig.minLength) {
        return results;
    }
    
    Object.values(RH_DP_POLICIES_CONFIG.policies).forEach(policy => {
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
        .slice(0, RH_DP_POLICIES_CONFIG.searchConfig.maxResults);
}

// Função para obter política por ID
function getRHDPPolicyById(policyId) {
    return RH_DP_POLICIES_CONFIG.policies[policyId] || null;
}

// Função para obter todas as políticas de uma categoria
function getRHDPPoliciesByCategory(category) {
    return Object.values(RH_DP_POLICIES_CONFIG.policies)
        .filter(policy => policy.category === category);
}

// Função para obter estatísticas
function getRHDPSystemStats() {
    const policies = Object.values(RH_DP_POLICIES_CONFIG.policies);
    return {
        totalPolicies: policies.length,
        activePolicies: policies.filter(p => p.status === 'active').length,
        totalViews: policies.reduce((sum, p) => sum + p.viewCount, 0),
        lastUpdate: Math.max(...policies.map(p => new Date(p.lastUpdate)))
    };
}

// Exportar configurações (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RH_DP_POLICIES_CONFIG;
}

// Disponibilizar globalmente
if (typeof window !== 'undefined') {
    window.RH_DP_POLICIES_CONFIG = RH_DP_POLICIES_CONFIG;
    window.searchRHDPPolicies = searchRHDPPolicies;
    window.getRHDPPolicyById = getRHDPPolicyById;
    window.getRHDPPoliciesByCategory = getRHDPPoliciesByCategory;
    window.getRHDPSystemStats = getRHDPSystemStats;
}