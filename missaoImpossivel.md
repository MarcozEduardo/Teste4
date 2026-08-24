# 🕵️‍♂️ MISSÃO IMPOSSÍVEL - PULSO ETERNO

> **Objetivo:** Implementar todas as funcionalidades pendentes do Modo Desenvolvedor, Órbita e Bolha.
> **Status:** Em andamento
> **Última Atualização:** Hoje

---

## 📋 LISTA DE TAREFAS (CHECKLIST)

### 🔧 MODO DESENVOLVEDOR (Aba DEV)
- [ ] 1. Criar nova aba "Desenvolvedor" com identidade visual própria (Preto/Amarelo)
- [ ] 2. Implementar "Mira DEV" que oculta a janela do Pulso ao ativar
- [ ] 3. Permitir travar múltiplos alvos com clique esquerdo (numerados 1, 2, 3...)
- [ ] 4. Menu de contexto (botão direito) em alvo travado: "Copiar código fonte"
- [ ] 5. Copiar CSS, HTML, Canvas, Tailwind, JS + nomes dos arquivos originais
- [ ] 6. Exibir Toast de confirmação e manter janela aberta após cópia
- [ ] 7. Opções pós-cópia: "Manter travado" (amarelo) ou "Destravar"
- [ ] 8. Opção "Colar Código novo - Destravar" para substituir código
- [ ] 9. Sistema de histórico/reversão de edições (Undo/Redo no DEV)
- [ ] 10. Aviso obrigatório: "Jamais mude a ordem local, apenas o código modificado"

### 🌐 NAVEGADOR/PROJETO
- [ ] 11. Botão "Abrir" no Pulso para carregar projetos externos (index.html, app.tsx)
- [ ] 12. Suporte a links de host local e servidores remotos
- [ ] 13. Detecção automática de tipo de projeto (Vite, Next, HTML puro)

### ➕ ADICIONAR ELEMENTO
- [ ] 14. Botão "Add elemento" com modal para colar HTML/CSS/JS
- [ ] 15. Identificação automática de linguagem e geração do elemento
- [ ] 16. Elemento arrastável até posição final
- [ ] 17. Botão direito "Finalizar" para injetar código nos arquivos corretos
- [ ] 18. Comentários automáticos: `<!-- elemento adicionado pelo Dev PulsoEterno -->`
- [ ] 19. Análise de conflitos antes da injeção
- [ ] 20. Atualização automática da documentação

### 🗺️ MAPEAR PASTA
- [ ] 21. Modo "Mapear pasta" que varre diretórios
- [ ] 22. Gerar relatório de funções e linkagens
- [ ] 23. Exportar relatório para o CODE CLI
- [ ] 24. Agente `.dev bobby vasculha` no chat

### 🟠 ABA ÓRBITA (CORREÇÕES VISUAIS)
- [ ] 25. Separar "Achados" (sem link) e "Já Linkados" (com órbita) ✅ FEITO
- [ ] 26. Expandir apenas uma categoria por vez
- [ ] 27. Menu de contexto nos cards: Editar, Excluir, Localizar Instância
- [ ] 28. Função "Localizar Instância": minimiza janela e faz elemento piscar 3x
- [ ] 29. Botão direito no card para ações rápidas

### 🔵 ABA BOLHA (CORREÇÕES VISUAIS)
- [ ] 30. Desenhar círculo (bolha) em volta dos elementos da órbita
- [ ] 31. Zoom focado no cursor (roda do mouse) estilo CorelDRAW
- [ ] 32. Pan (mover área) segurando clique central do mouse (mãozinha)
- [ ] 33. Múltiplas bolhas vizinhas se não finalizadas
- [ ] 34. Contador de "Bolhas Achadas" vs "Novas Bolhas" na aba
- [ ] 35. Linkagem entre bolhas
- [ ] 36. Bolha azulada durante edição (intensidade varia com zoom)
- [ ] 37. Finalizar bolha move para contagem de "Achadas"

### 🎨 IDENTIDADE VISUAL
- [ ] 38. Cor temática por aba: Órbita (Laranja), Bolha (Azul), Dev (Preto)
- [ ] 39. Ícones específicos para cada aba (figurinhas)
- [ ] 40. Botão de Maximizar na janela principal

### ℹ️ INFORMAÇÕES E DADOS
- [ ] 41. Informações de Órbita (tempo, status) apenas na aba Órbita
- [ ] 42. Informações de Bolha (limites, contexto) apenas na aba Bolha
- [ ] 43. Caixas de texto de informação abrem em janelas modais

### 🤖 AGENTE DEV
- [ ] 44. Comando `.dev bobby vasculha` ativa o mapeador
- [ ] 45. Bobby age como agente auxiliar no chat

---

## 📊 ESCALAS DE ABSTRAÇÃO

| Escala | Unidade | O que faz | Resultado |
|--------|---------|-----------|-----------|
| **Órbita** | Elemento | Localiza, liga, atribui reação | Comportamento |
| **Bolha** | Conjunto | Agrupa, resolve ambiguidade, dá fronteira | Contexto |
| **DEV** | Sistema | Inspeciona, extrai, injeta, edita | Estrutura |

---

## 📝 LOG DE EXECUÇÃO

### ✅ FIX #1: Separação de Galerias
- **Arquivo:** `PulsoStudio.tsx`
- **Descrição:** Separação da galeria "Achados" em duas listas distintas (Sem Link / Já Linkados). Reformulação do modal "Nova Órbita".
- **Status:** Concluído

### ✅ FIX #2: Estrutura Limpa para Deploy
- **Arquivo:** Todo o repositório
- **Descrição:** Limpeza de pastas antigas, centralização dos arquivos na raiz, configuração do Git remoto.
- **Status:** Concluído

### ⏳ FIX #3: Círculo da Bolha e Menu de Contexto
- **Arquivo:** `PulsoStudio.tsx`, `studio.css`
- **Descrição:** Implementação do círculo visual da bolha na área de trabalho e menu de contexto nos cards da aba Órbita.
- **Status:** Em andamento

---

## 🚀 PRÓXIMOS PASSOS
1. Implementar círculo SVG da bolha na área de trabalho.
2. Adicionar menu de contexto (Editar, Excluir, Localizar) nos cards.
3. Criar animação de "piscar 3 vezes" ao localizar instância.
4. Testar zoom e pan na área de trabalho.
