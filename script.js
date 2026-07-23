/* =====================================================================
   HOW TO SWAP IN YOUR OWN PICTURES
   ---------------------------------------------------------------------
   Every item below loads its picture from the "Assets" folder, using
   the filename in its `file:` property (e.g. "apple.svg").

   To use your own photo for any item:
     1. Save your image into the Assets folder.
     2. Name it anything you like (e.g. "apple.jpg", "my-watch.png").
     3. Update that item's `file:` value below to match your filename
        exactly, including the extension.

   That's it — no other code needs to change. Any common image format
   works (.jpg, .png, .svg, .webp, etc).
   ===================================================================== */

const BADGES = ['#FDECD8','#DCEFEA','#E9E3F5','#FDE2E2','#DCE7F5'];

const RAW_ITEMS = [
  {id:'book', name:'Book', file:'book.webp'},
  {id:'chair', name:'Chair', file:'chair.jpg'},
  {id:'clock', name:'Clock', file:'clock.webp'},
  {id:'comb', name:'Comb', file:'comb.webp'},
  {id:'cup', name:'Cup', file:'cup.avif'},
  {id:'stapler', name:'Envelope', file:'stapler.webp'},
  {id:'fork', name:'Fork', file:'fork.svg'},
  {id:'glasses', name:'Glasses', file:'glasses.avif'},
  {id:'hat', name:'Hat', file:'hat.svg'},
  {id:'key', name:'Key', file:'key.svg'},
  {id:'phone', name:'Phone', file:'phone.svg'},
  {id:'scissors', name:'Scissors', file:'scissors.svg'},
  {id:'shoe', name:'Shoe', file:'shoe.svg'},
  {id:'spoon', name:'Spoon', file:'spoon.svg'},
  {id:'toothbrush', name:'Toothbrush', file:'toothbrush.svg'},
  {id:'umbrella', name:'Umbrella', file:'umbrella.svg'},
  {id:'watch', name:'Watch', file:'watch.svg'},
  {id:'apple', name:'Apple', file:'apple.avif'},
  {id:'banana', name:'Banana', file:'banana.svg'},
  {id:'orange', name:'Orange', file:'orange.jpeg'},
  {id:'grapes', name:'Grapes', file:'grapes.svg'},
  {id:'strawberry', name:'Strawberry', file:'strawberry.svg'},
  {id:'watermelon', name:'Watermelon', file:'watermelon.svg'},
  {id:'pineapple', name:'Pineapple', file:'pineapple.jpeg'},
  {id:'mango', name:'Mango', file:'mango.svg'},
  {id:'pear', name:'Pear', file:'pear.svg'},
  {id:'peach', name:'Peach', file:'peach.svg'},
  {id:'lemon', name:'Lemon', file:'lemon.svg'},
  {id:'cherries', name:'Cherries', file:'cherries.svg'},
  {id:'kiwi', name:'Kiwi', file:'kiwi.svg'},
  {id:'carrot', name:'Carrot', file:'carrot.svg'},
  {id:'potato', name:'Potato', file:'potato.svg'},
  {id:'tomato', name:'Tomato', file:'tomato.svg'},
  {id:'onion', name:'Onion', file:'onion.svg'},
  {id:'broccoli', name:'Broccoli', file:'broccoli.svg'},
  {id:'corn', name:'Corn', file:'corn.svg'},
  {id:'cucumber', name:'Cucumber', file:'cucumber.svg'},
  {id:'pepper', name:'Pepper', file:'pepper.svg'},
  {id:'eggplant', name:'Eggplant', file:'eggplant.svg'},
  {id:'garlic', name:'Garlic', file:'garlic.svg'},
  {id:'dog', name:'Dog', file:'dog.svg'},
  {id:'cat', name:'Cat', file:'cat.svg'},
  {id:'cow', name:'Cow', file:'cow.svg'},
  {id:'horse', name:'Horse', file:'horse.svg'},
  {id:'bird', name:'Bird', file:'bird.svg'},
  {id:'fish', name:'Fish', file:'fish.svg'},
  {id:'chicken', name:'Chicken', file:'chicken.svg'},
  {id:'rabbit', name:'Rabbit', file:'rabbit.svg'},
  {id:'elephant', name:'Elephant', file:'elephant.svg'},
  {id:'lion', name:'Lion', file:'lion.svg'},
  {id:'duck', name:'Duck', file:'duck.svg'},
  {id:'sheep', name:'Sheep', file:'sheep.svg'},
  {id:'pig', name:'Pig', file:'pig.svg'},
  {id:'butterfly', name:'Butterfly', file:'butterfly.svg'},
  {id:'eye', name:'Eye', file:'eye.svg'},
  {id:'ear', name:'Ear', file:'ear.svg'},
  {id:'nose', name:'Nose', file:'nose.svg'},
  {id:'mouth', name:'Mouth', file:'mouth.svg'},
  {id:'hand', name:'Hand', file:'hand.svg'},
  {id:'foot', name:'Foot', file:'foot.svg'},
  {id:'tooth', name:'Tooth', file:'tooth.svg'},
  {id:'arm', name:'Arm', file:'arm.jpg'},
  {id:'leg', name:'Leg', file:'leg.svg'},
  {id:'tongue', name:'Tongue', file:'tongue.svg'},
  {id:'red', name:'Red', file:'red.svg'},
  {id:'yellow', name:'Yellow', file:'yellow.svg'},
  {id:'green', name:'Green', file:'green.svg'},
  {id:'blue', name:'Blue', file:'blue.svg'},
  {id:'purple', name:'Purple', file:'purple.svg'},
  {id:'black', name:'Black', file:'black.svg'},
  {id:'white', name:'White', file:'white.svg'},
  {id:'brown', name:'Brown', file:'brown.svg'},
  {id:'pink', name:'Pink', file:'pink.svg'},
  {id:'grey', name:'Grey', file:'grey.svg'}
];

const ITEMS = RAW_ITEMS.map((it, i) => ({
  ...it,
  color: BADGES[i % BADGES.length],
  file: it.file || `${it.id}.svg`,
  get img(){ return `Assets/${this.file}`; }
}));

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