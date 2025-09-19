// Configuração das políticas para busca
const policiesConfig = [
    {
        id: 'politica-pagamentos',
        title: 'Política de Pagamentos',
        description: 'Diretrizes e procedimentos para solicitação, aprovação e execução de pagamentos',
        url: 'policies/politica-pagamentos.html',
        tags: ['pagamentos', 'financeiro', 'aprovação', 'diretoria', 'prazo', 'compliance', 'bitrix24', 'exceção'],
        sections: [
            {
                id: 'prazos-solicitacao',
                title: 'Prazos para Solicitação',
                content: 'quarta-feira semana anterior prazo limite negativa automática solicitação envio financeiro',
                anchor: '#prazos-solicitacao'
            },
            {
                id: 'responsabilidades',
                title: 'Responsabilidades da Área Solicitante',
                content: 'documentos comprobatórios aprovação gestor diretoria nota fiscal contrato boleto validação completa',
                anchor: '#responsabilidades'
            },
            {
                id: 'excecoes',
                title: 'Exceções',
                content: 'situações excepcionais diretoria pedido exceção falhou processo corrigir repetição avaliação sócios',
                anchor: '#excecoes'
            },
            {
                id: 'fluxo-operacional',
                title: 'Fluxo Operacional',
                content: 'abertura tarefa conferência documentos execução pagamento bitrix24 agendamento bancário comprovante',
                anchor: '#fluxo-operacional'
            },
            {
                id: 'compliance',
                title: 'Compliance e Segurança',
                content: 'aprovação formal segregação funções dados bancários auditoria interna compliance segurança executor',
                anchor: '#compliance'
            }
        ]
    }
];

// Função de busca
function searchPolicies(query) {
    if (!query || query.length < 2) return [];
    
    const results = [];
    const queryLower = query.toLowerCase();
    
    policiesConfig.forEach(policy => {
        // Busca no título e descrição da política
        if (policy.title.toLowerCase().includes(queryLower) || 
            policy.description.toLowerCase().includes(queryLower) ||
            policy.tags.some(tag => tag.toLowerCase().includes(queryLower))) {
            results.push({
                type: 'policy',
                title: policy.title,
                description: policy.description,
                url: policy.url,
                relevance: 10
            });
        }
        
        // Busca nas seções
        policy.sections.forEach(section => {
            if (section.title.toLowerCase().includes(queryLower) || 
                section.content.toLowerCase().includes(queryLower)) {
                results.push({
                    type: 'section',
                    title: section.title,
                    description: `Seção da ${policy.title}`,
                    url: policy.url + section.anchor,
                    relevance: 8
                });
            }
        });
    });
    
    // Ordena por relevância
    return results.sort((a, b) => b.relevance - a.relevance);
}

// Exporta para uso global
if (typeof window !== 'undefined') {
    window.policiesConfig = policiesConfig;
    window.searchPolicies = searchPolicies;
}