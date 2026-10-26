
/* ====== DADOS ====== */
const STEPS = [
  { key:'budget', color:'#ff6b6b', icon:'🪙', title:'Orçamento', q:'Quanto você pode investir nesse livro?', opts:[
    { v:40,  l:'Até R$ 40',      s:'Até R$40',  i:'🌱', d:'Edições de bolso e clássicos acessíveis' },
    { v:70,  l:'R$ 40 a R$ 70',  s:'R$40–70',   i:'🌿', d:'O meio-termo mais comum nas livrarias' },
    { v:999, l:'Acima de R$ 70', s:'R$70+',     i:'🌳', d:'Edições robustas, sem limite de preço' }]},
  { key:'genre', color:'#ffd166', icon:'🎭', title:'Gênero', q:'Qual gênero você gostaria de ler?', opts:[
    { v:'fantasia', l:'Fantasia',          s:'Fantasia',  i:'🐉', d:'Magia, reinos e criaturas' },
    { v:'scifi',    l:'Ficção científica', s:'Ficção',    i:'🚀', d:'Futuros, ciência e distopias' },
    { v:'romance',  l:'Romance',           s:'Romance',   i:'💌', d:'Amores, encontros e despedidas' },
    { v:'suspense', l:'Suspense e mistério', s:'Suspense', i:'🔍', d:'Pistas, crimes e reviravoltas' },
    { v:'classico', l:'Clássicos',         s:'Clássicos', i:'🏛️', d:'Obras que atravessam os séculos' },
    { v:'reflexao', l:'Reflexão e vida',   s:'Reflexão',  i:'🧭', d:'Ideias para pensar e mudar' }]},
  { key:'pages', color:'#06d6a0', icon:'📏', title:'Tamanho', q:'Gostaria de aproximadamente quantas páginas?', opts:[
    { v:'curto', l:'Até 250 páginas',   s:'Até 250',  i:'☕', d:'Leitura rápida, de um fôlego' },
    { v:'medio', l:'250 a 450 páginas', s:'250–450',  i:'🕯️', d:'Para algumas noites tranquilas' },
    { v:'longo', l:'Mais de 450',       s:'450+',     i:'🏔️', d:'Uma longa travessia' }]},
  { key:'style', color:'#4cc9f0', icon:'🪶', title:'Escrita', q:'Qual modelo de escrita você prefere?', opts:[
    { v:'poetico',    l:'Poético e sensível',  s:'Poético',    i:'✒️', d:'Frases bonitas e lirismo' },
    { v:'direto',     l:'Direto e fluido',     s:'Direto',     i:'⚡', d:'Ritmo ágil, vai direto à ação' },
    { v:'descritivo', l:'Descritivo e imersivo', s:'Imersivo', i:'🏰', d:'Cenários e detalhes ricos' }]},
  { key:'series', color:'#c77dff', icon:'📚', title:'Formato', q:'Você prefere uma história que termina no primeiro livro ou uma série?', opts:[
    { v:'unico', l:'Livro único',  s:'Único', i:'1️⃣', d:'Começo, meio e fim num só volume' },
    { v:'serie', l:'Uma série',    s:'Série', i:'📖', d:'Vários livros para morar na história' }]}
];
 
// [título, autor, gênero, páginas, estilo, série(1/0), preço aproximado em R$]
const BOOKS = [
  ['O Hobbit','J.R.R. Tolkien','fantasia',336,'descritivo',1,45],
  ['Nascidos da Bruma','Brandon Sanderson','fantasia',560,'direto',1,75],
  ['O Nome do Vento','Patrick Rothfuss','fantasia',656,'poetico',1,80],
  ['Stardust','Neil Gaiman','fantasia',256,'poetico',0,45],
  ['O Oceano no Fim do Caminho','Neil Gaiman','fantasia',192,'poetico',0,40],
  ['Duna','Frank Herbert','scifi',680,'descritivo',1,110],
  ['Fundação','Isaac Asimov','scifi',256,'direto',1,55],
  ['O Guia do Mochileiro das Galáxias','Douglas Adams','scifi',208,'direto',1,40],
  ['Projeto Hail Mary','Andy Weir','scifi',480,'direto',0,70],
  ['Admirável Mundo Novo','Aldous Huxley','scifi',312,'descritivo',0,45],
  ['Fahrenheit 451','Ray Bradbury','scifi',216,'poetico',0,40],
  ['Orgulho e Preconceito','Jane Austen','romance',424,'descritivo',0,35],
  ['Um Dia','David Nicholls','romance',448,'direto',0,50],
  ['Me Chame Pelo Seu Nome','André Aciman','romance',272,'poetico',0,50],
  ['Outlander: A Estranha','Diana Gabaldon','romance',704,'descritivo',1,90],
  ['Os Sete Maridos de Evelyn Hugo','Taylor Jenkins Reid','romance',360,'direto',0,60],
  ['A Seleção','Kiera Cass','romance',368,'direto',1,45],
  ['Assassinato no Expresso do Oriente','Agatha Christie','suspense',256,'direto',0,40],
  ['Garota Exemplar','Gillian Flynn','suspense',424,'direto',0,50],
  ['Os Homens que Não Amavam as Mulheres','Stieg Larsson','suspense',536,'descritivo',1,65],
  ['O Código Da Vinci','Dan Brown','suspense',480,'direto',1,50],
  ['A Paciente Silenciosa','Alex Michaelides','suspense',336,'direto',0,45],
  ['O Nome da Rosa','Umberto Eco','suspense',592,'descritivo',0,80],
  ['Dom Casmurro','Machado de Assis','classico',256,'poetico',0,25],
  ['O Morro dos Ventos Uivantes','Emily Brontë','classico',400,'poetico',0,45],
  ['Crime e Castigo','Fiódor Dostoiévski','classico',560,'descritivo',0,70],
  ['1984','George Orwell','classico',416,'direto',0,40],
  ['O Pequeno Príncipe','Antoine de Saint-Exupéry','classico',96,'poetico',0,20],
  ['Drácula','Bram Stoker','classico',432,'descritivo',0,50],
  ['Hábitos Atômicos','James Clear','reflexao',320,'direto',0,55],
  ['O Poder do Hábito','Charles Duhigg','reflexao',408,'direto',0,45],
  ['O Alquimista','Paulo Coelho','reflexao',208,'poetico',0,35],
  ['Meditações','Marco Aurélio','reflexao',208,'poetico',0,30],
  ['Sapiens','Yuval Noah Harari','reflexao',464,'descritivo',0,70]
];
 
/* ====== ESTADO ====== */
const $ = s => document.querySelector(s);
const ROMAN = ['I','II','III','IV','V'];
let answers = [];                       // índice da opção escolhida em cada etapa
const pageBand = p => p <= 250 ? 'curto' : p <= 450 ? 'medio' : 'longo';
const val = i => STEPS[i].opts[answers[i]].v;
 
/* ====== RECOMENDAÇÃO ====== */
function recommend() {
  const a = Object.fromEntries(STEPS.map((s, i) => [s.key, val(i)]));
  const W = { genre:40, style:20, pages:15, series:15, budget:10 };
  return BOOKS.map(([t, au, g, p, st, se, pr]) => {
    const m = { genre:g === a.genre, style:st === a.style, pages:pageBand(p) === a.pages,
                series:(se ? 'serie' : 'unico') === a.series, budget:pr <= a.budget };
    const sc = Object.keys(W).reduce((n, k) => n + (m[k] ? W[k] : 0), 0);
    return { t, au, p, st, se, pr, m, sc };
  }).sort((x, y) => y.sc - x.sc || x.pr - y.pr).slice(0, 3);
}
 
/* ====== PROGRESSO ====== */
function renderProgress() {
  $('#progress').innerHTML = STEPS.map((s, i) =>
    `<span class="dot ${i < answers.length ? 'on' : ''}" style="--c:${s.color}"></span>`).join('');
}
 
/* ====== PERGUNTAS ====== */
function renderQuiz() {
  const box = $('#quiz'), n = answers.length;
  if (n === STEPS.length) return renderResult(box);
  const s = STEPS[n];
  box.style.setProperty('--c', s.color);
  box.innerHTML = `
    <p class="chap">Capítulo ${ROMAN[n]} de V · ${s.title}</p>
    <h2 class="q">${s.q}</h2>
    <div class="orn" aria-hidden="true">❦</div>
    <div class="opts" style="--c:${s.color}">
      ${s.opts.map((o, i) => `
        <button class="opt-btn" data-i="${i}">
          <span class="ic">${o.i}</span>
          <span><b>${o.l}</b><small>${o.d}</small></span>
        </button>`).join('')}
    </div>
    ${n ? '<button class="ghost" id="back">← Voltar um capítulo</button>' : ''}`;
  box.querySelectorAll('.opt-btn').forEach(b => b.onclick = () => choose(+b.dataset.i, b));
  if (n) $('#back').onclick = () => { answers.pop(); render(); };
}
 
function choose(i, btn) {
  btn.classList.add('picked');
  setTimeout(() => {
    answers.push(i);
    render();
    const nodes = $('#flow').children;
    nodes[nodes.length - 1].scrollIntoView({ behavior:'smooth', block:'center' });
    // no celular, volta para a próxima pergunta depois de mostrar o novo fluxograma
    if (innerWidth < 900 && answers.length < STEPS.length)
      setTimeout(() => $('#quiz').scrollIntoView({ behavior:'smooth', block:'start' }), 1500);
  }, 220);
}
 
function renderResult(box) {
  const top = recommend();
  const L = { genre:'Gênero', style:'Escrita', pages:'Páginas', series:'Formato', budget:'Preço' };
  const cols = ['#ffd166', '#4cc9f0', '#c77dff'];
  box.style.setProperty('--c', '#ffd166');
  box.innerHTML = `
    <h2 class="res-title">Seu livro ideal foi escrito</h2>
    <p class="res-sub">Estas são as três páginas que o aguardam.</p>
    ${top.map((b, i) => `
      <article class="book-card" style="--c:${cols[i]}">
        <span class="rank">${i + 1}</span>
        <h3>${b.t}</h3>
        <p class="au">${b.au}</p>
        <p class="meta">${b.p} páginas · ${b.se ? 'série' : 'livro único'} · cerca de R$ ${b.pr}</p>
        <div class="tags">${Object.keys(L).map(k =>
          `<span class="tag ${b.m[k] ? 'ok' : ''}">${b.m[k] ? '✔' : '✖'} ${L[k]}</span>`).join('')}</div>
        <p class="aff">Afinidade com você: ${b.sc}%</p>
      </article>`).join('')}
    <button class="ghost" id="back">← Voltar</button>
    <button class="ghost" id="again">Começar nova jornada</button>`;
  $('#back').onclick = () => { answers.pop(); render(); };
  $('#again').onclick = () => { answers = []; render(); scrollTo({ top:0, behavior:'smooth' }); };
}
 
/* ====== FLUXOGRAMA ====== */
function renderFlow() {
  const n = answers.length, last = Math.max(n - 1, 0);
  let h = `<div class="node start">🚪 Início da jornada<small>Vamos escolher seu próximo livro</small></div>`;
 
  STEPS.forEach((s, i) => {
    if (i > n) return;
    const done = i < n, anim = i >= last ? 'enter' : '';
    const prev = i === 0 ? '#e3bd62' : STEPS[i - 1].color;
    h += `<div class="conn ${anim}" style="--c:${prev}"></div>
      <div class="node ${done ? '' : 'pending'} ${anim}" style="--c:${s.color}">
        ${s.icon} ${s.title}<small>${s.q}</small>
      </div>
      <div class="stem ${anim}" style="--c:${s.color}"></div>
      <div class="branches ${done ? '' : 'open'} ${anim}" style="--c:${s.color}">
        ${s.opts.map((o, k) => `
          <div class="b ${done ? (k === answers[i] ? 'chosen' : 'dim') : ''}">
            <div class="chip"><span class="ic">${o.i}</span>${o.s}</div>
            ${done ? '<div class="lo"></div>' : ''}
          </div>`).join('')}
      </div>
      ${done ? `<div class="stem enter" style="--c:${s.color}"></div>` : ''}`;
  });
 
  if (n === STEPS.length) {
    const top = recommend();
    h += `<div class="conn enter" style="--c:${STEPS[4].color}"></div>
      <div class="node result enter">🏆 Seu livro ideal<small>${top[0].t}</small></div>
      <div class="stem enter" style="--c:#e3bd62"></div>
      <div class="branches open enter" style="--c:#e3bd62">
        ${top.map((b, i) => `<div class="b ${i === 0 ? 'chosen' : ''}">
          <div class="chip book"><span class="ic">${['🥇','🥈','🥉'][i]}</span>${b.t}</div></div>`).join('')}
      </div>`;
  }
  $('#flow').innerHTML = h;
}
 
function render() { renderProgress(); renderQuiz(); renderFlow(); }
render();
