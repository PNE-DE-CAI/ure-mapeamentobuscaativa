/* ═══════════════════════════════════════════
   DATABASE — localStorage CRUD Engine
   URE Caieiras — Mapeamento de Faltosos
   ═══════════════════════════════════════════ */

const DB = {
    STORAGE_KEY: 'ure_caieiras_alunos_2026',

    _read() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    _write(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },

    _generateId() {
        return 'aluno_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // ─── LISTAR ───
    getAll(filters = {}) {
        let alunos = this._read();

        if (filters.search) {
            const s = filters.search.toLowerCase();
            alunos = alunos.filter(a => (a.nome || '').toLowerCase().includes(s));
        }
        if (filters.status) {
            alunos = alunos.filter(a => a.status === filters.status);
        }
        if (filters.risco) {
            alunos = alunos.filter(a => a.analise && a.analise.nivelRisco === filters.risco);
        }
        if (filters.ano) {
            alunos = alunos.filter(a => a.anoSerie === filters.ano);
        }

        // Ordenar por data de criação (mais recente primeiro)
        alunos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        return alunos;
    },

    // ─── BUSCAR POR ID ───
    getById(id) {
        return this._read().find(a => a.id === id) || null;
    },

    // ─── CRIAR ───
    create(data) {
        const alunos = this._read();
        const novo = {
            id: this._generateId(),
            ...data,
            status: data.status || 'em_analise',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        alunos.push(novo);
        this._write(alunos);
        return novo;
    },

    // ─── ATUALIZAR ───
    update(id, data) {
        const alunos = this._read();
        const idx = alunos.findIndex(a => a.id === id);
        if (idx === -1) return null;

        alunos[idx] = {
            ...alunos[idx],
            ...data,
            id: alunos[idx].id,
            createdAt: alunos[idx].createdAt,
            updatedAt: new Date().toISOString()
        };
        this._write(alunos);
        return alunos[idx];
    },

    // ─── ATUALIZAR STATUS ───
    updateStatus(id, status) {
        return this.update(id, { status });
    },

    // ─── DELETAR ───
    delete(id) {
        const alunos = this._read();
        const idx = alunos.findIndex(a => a.id === id);
        if (idx === -1) return false;
        alunos.splice(idx, 1);
        this._write(alunos);
        return true;
    },

    // ─── ESTATÍSTICAS ───
    getStats() {
        const all = this._read();
        return {
            total: all.length,
            emAnalise: all.filter(a => a.status === 'em_analise').length,
            emAcompanhamento: all.filter(a => a.status === 'em_acompanhamento').length,
            resolvido: all.filter(a => a.status === 'resolvido').length,
            critico: all.filter(a => a.analise && a.analise.nivelRisco === 'CRÍTICO').length,
            alto: all.filter(a => a.analise && a.analise.nivelRisco === 'ALTO').length,
            medio: all.filter(a => a.analise && a.analise.nivelRisco === 'MÉDIO').length,
            baixo: all.filter(a => a.analise && a.analise.nivelRisco === 'BAIXO').length
        };
    },

    // ─── EXPORTAR TODOS (backup JSON) ───
    exportAll() {
        const data = this._read();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backup-ure-caieiras-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    // ─── IMPORTAR (restore backup) ───
    importFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (!Array.isArray(data)) throw new Error('Formato inválido');
                    // Merge: adiciona os que não existem pelo id
                    const existing = this._read();
                    const existingIds = new Set(existing.map(a => a.id));
                    const novos = data.filter(a => !existingIds.has(a.id));
                    this._write([...existing, ...novos]);
                    resolve(novos.length);
                } catch (err) {
                    reject(err);
                }
            };
            reader.readAsText(file);
        });
    },

    // ─── LIMPAR TUDO ───
    clearAll() {
        this._write([]);
    }
};