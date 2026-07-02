/* ═══════════════════════════════════════════
   UI Helpers — Toast, Modal, Formatação
   ═══════════════════════════════════════════ */

function showToast(msg, type = 'success') {
    let t = document.getElementById('toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'toast';
        t.className = 'fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg z-50 text-white';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = `fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50 text-white ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`;
    setTimeout(() => { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; }, 10);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(20px)'; }, 3500);
}

function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function getUrlParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}

function getBadgeRisco(risco) {
    const map = { 'CRÍTICO': 'bg-red-900 text-white', 'ALTO': 'bg-red-500 text-white', 'MÉDIO': 'bg-yellow-400 text-gray-900', 'BAIXO': 'bg-green-500 text-white' };
    return map[risco] || 'bg-gray-200 text-gray-600';
}

function getBadgeStatus(status) {
    const map = {
        em_analise: { label: 'Em Análise', cls: 'bg-blue-100 text-blue-800' },
        em_acompanhamento: { label: 'Em Acompanhamento', cls: 'bg-yellow-100 text-yellow-800' },
        resolvido: { label: 'Resolvido', cls: 'bg-green-100 text-green-800' }
    };
    return map[status] || map.em_analise;
}

function formatStatus(v) {
    return ({ em_analise: 'Em Análise', em_acompanhamento: 'Em Acompanhamento', resolvido: 'Resolvido' })[v] || 'Em Análise';
}