const BADGES = ['#FDECD8','#DCEFEA','#E9E3F5','#FDE2E2','#DCE7F5'];

const RAW_ITEMS = [
  {id:'book', name:'Book'},
  {id:'chair', name:'Chair'},
  {id:'clock', name:'Clock'},
  {id:'comb', name:'Comb'},
  {id:'cup', name:'Cup'},
  {id:'envelope', name:'Envelope'},
  {id:'fork', name:'Fork'},
  {id:'glasses', name:'Glasses'},
  {id:'hat', name:'Hat'},
  {id:'key', name:'Key'},
  {id:'phone', name:'Phone'},
  {id:'scissors', name:'Scissors'},
  {id:'shoe', name:'Shoe'},
  {id:'spoon', name:'Spoon'},
  {id:'toothbrush', name:'Toothbrush'},
  {id:'umbrella', name:'Umbrella'},
  {id:'watch', name:'Watch'},
  {id:'apple', name:'Apple'},
  {id:'banana', name:'Banana'},
  {id:'orange', name:'Orange'},
  {id:'grapes', name:'Grapes'},
  {id:'strawberry', name:'Strawberry'},
  {id:'watermelon', name:'Watermelon'},
  {id:'pineapple', name:'Pineapple'},
  {id:'mango', name:'Mango'},
  {id:'pear', name:'Pear'},
  {id:'peach', name:'Peach'},
  {id:'lemon', name:'Lemon'},
  {id:'cherries', name:'Cherries'},
  {id:'kiwi', name:'Kiwi'},
  {id:'carrot', name:'Carrot'},
  {id:'potato', name:'Potato'},
  {id:'tomato', name:'Tomato'},
  {id:'onion', name:'Onion'},
  {id:'broccoli', name:'Broccoli'},
  {id:'corn', name:'Corn'},
  {id:'cucumber', name:'Cucumber'},
  {id:'pepper', name:'Pepper'},
  {id:'eggplant', name:'Eggplant'},
  {id:'garlic', name:'Garlic'},
  {id:'dog', name:'Dog'},
  {id:'cat', name:'Cat'},
  {id:'cow', name:'Cow'},
  {id:'horse', name:'Horse'},
  {id:'bird', name:'Bird'},
  {id:'fish', name:'Fish'},
  {id:'chicken', name:'Chicken'},
  {id:'rabbit', name:'Rabbit'},
  {id:'elephant', name:'Elephant'},
  {id:'lion', name:'Lion'},
  {id:'duck', name:'Duck'},
  {id:'sheep', name:'Sheep'},
  {id:'pig', name:'Pig'},
  {id:'butterfly', name:'Butterfly'},
  {id:'eye', name:'Eye'},
  {id:'ear', name:'Ear'},
  {id:'nose', name:'Nose'},
  {id:'mouth', name:'Mouth'},
  {id:'hand', name:'Hand'},
  {id:'foot', name:'Foot'},
  {id:'tooth', name:'Tooth'},
  {id:'arm', name:'Arm'},
  {id:'leg', name:'Leg'},
  {id:'tongue', name:'Tongue'},
  {id:'red', name:'Red'},
  {id:'yellow', name:'Yellow'},
  {id:'green', name:'Green'},
  {id:'blue', name:'Blue'},
  {id:'purple', name:'Purple'},
  {id:'black', name:'Black'},
  {id:'white', name:'White'},
  {id:'brown', name:'Brown'},
  {id:'pink', name:'Pink'},
  {id:'grey', name:'Grey'}
];

const ITEMS = RAW_ITEMS.map((it, i) => ({...it, color: BADGES[i % BADGES.length], img: `images/${it.id}.svg`}));

/* ---------------- TAB SWITCHING ---------------- */
const tabQuizBtn = document.getElementById('tab-quiz-btn');
const tabRefBtn = document.getElementById('tab-ref-btn');
const tabQuiz = document.getElementById('tab-quiz');
const tabRef = document.getElementById('tab-ref');

function showTab(which){
  const quiz = which === 'quiz';
  tabQuiz.classList.toggle('active', quiz);
  tabRef.classList.toggle('active', !quiz);
  tabQuizBtn.classList.toggle('active', quiz);
  tabRefBtn.classList.toggle('active', !quiz);
  tabQuizBtn.setAttribute('aria-selected', quiz);
  tabRefBtn.setAttribute('aria-selected', !quiz);
}
tabQuizBtn.addEventListener('click', () => showTab('quiz'));
tabRefBtn.addEventListener('click', () => showTab('ref'));

/* ---------------- SPEECH ---------------- */
function speak(text){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.85;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

/* ---------------- REFERENCE TAB ---------------- */
function buildReference(){
  const grid = document.getElementById('refGrid');
  const sorted = [...ITEMS].sort((a,b) => a.name.localeCompare(b.name));
  grid.innerHTML = sorted.map(item => `
    <div class="ref-card">
      <div class="ref-badge" style="background:${item.color}">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="ref-name">${item.name}</div>
      <button class="speak-btn" data-name="${item.name}" aria-label="Hear the word ${item.name}">Hear it</button>
    </div>
  `).join('');
  grid.querySelectorAll('.speak-btn').forEach(btn => {
    btn.addEventListener('click', () => speak(btn.dataset.name));
  });
}
buildReference();

/* ---------------- QUIZ TAB ---------------- */
function shuffle(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let quizOrder = [];
let quizIndex = 0;
let solvedCount = 0;
let advanceTimer = null;

function startQuiz(){
  if(advanceTimer){ clearTimeout(advanceTimer); advanceTimer = null; }
  quizOrder = shuffle(ITEMS);
  quizIndex = 0;
  solvedCount = 0;
  renderQuestion();
}

function renderQuestion(){
  const quizCard = document.getElementById('quizCard');
  if(quizIndex >= quizOrder.length){
    quizCard.innerHTML = `
      <div class="done-screen">
        <h2>All done!</h2>
        <p>You went through all ${quizOrder.length} items.</p>
        <button class="big-btn" id="restartBtn">Play Again</button>
      </div>
    `;
    document.getElementById('restartBtn').addEventListener('click', startQuiz);
    return;
  }

  const current = quizOrder[quizIndex];
  const wrongPool = ITEMS.filter(it => it.id !== current.id);
  const wrongChoices = shuffle(wrongPool).slice(0, 3);
  const options = shuffle([current, ...wrongChoices]);
  const pct = Math.round((quizIndex / quizOrder.length) * 100);

  quizCard.innerHTML = `
    <div class="progress-row">
      <span>${quizIndex + 1} / ${quizOrder.length}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="badge" style="background:${current.color}">
      <img src="${current.img}" alt="">
    </div>
    <div class="prompt">What is this?</div>
    <div class="options">
      ${options.map(opt => `<button class="opt-btn" data-id="${opt.id}">${opt.name}</button>`).join('')}
    </div>
    <div class="feedback" id="feedback" aria-live="polite"></div>
    <div class="next-row" id="nextRow"></div>
  `;

  const feedback = document.getElementById('feedback');
  const nextRow = document.getElementById('nextRow');
  const buttons = Array.from(quizCard.querySelectorAll('.opt-btn'));

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.dataset.id === current.id){
        btn.classList.add('correct');
        buttons.forEach(b => b.disabled = true);
        feedback.textContent = `Yes! That's a ${current.name}.`;
        feedback.className = 'feedback good';
        solvedCount++;
        speak(current.name);
        nextRow.innerHTML = `<span style="color:#8A9189;font-weight:700;">Next one coming up…</span>`;
        advanceTimer = setTimeout(() => {
          quizIndex++;
          renderQuestion();
        }, 1400);
      } else {
        btn.classList.add('incorrect');
        btn.disabled = true;
        feedback.textContent = `Not quite — try another one.`;
        feedback.className = 'feedback try';
      }
    });
  });
}

startQuiz();