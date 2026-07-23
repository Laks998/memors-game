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

   PEOPLE VS THINGS
   ---------------------------------------------------------------------
   Items with `type:'person'` will only ever be quizzed against OTHER
   people as the multiple-choice options (never against objects/fruit/
   etc). Everything else is treated as `type:'thing'` by default, and
   things only get quizzed against other things. The picture list and
   the order items appear in the quiz stay fully mixed together either
   way — this only controls which answer choices show up together.

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
  {id:'stapler', name:'stapler', file:'stapler.webp'},
  {id:'fork', name:'Fork', file:'fork.svg'},
  {id:'glasses', name:'Glasses', file:'glasses.avif'},
  {id:'cap', name:'cap', file:'cap.jpg'},
  {id:'keys', name:'Keys', file:'keys.webp'},
  {id:'mobile phone', name:'Mobile Phone', file:'mobile phone.jpg'},
  {id:'scissors', name:'Scissors', file:'scissor.jpg'},
  {id:'shoes', name:'Shoes', file:'shoes.png'},
  {id:'spoon', name:'Spoon', file:'spoon.avif'},
  {id:'toothbrush', name:'Toothbrush', file:'toothbrush.webp'},
  {id:'umbrella', name:'Umbrella', file:'umbrella.jpg'},
  {id:'watch', name:'Watch', file:'watch.avif'},
  {id:'apple', name:'Apple', file:'apple.avif'},
  {id:'banana', name:'Banana', file:'banana.avif'},
  {id:'orange', name:'Orange', file:'orange.jpeg'},
  {id:'grapes', name:'Grapes', file:'grapes.png'},
  {id:'strawberry', name:'Strawberry', file:'strawberry.jpeg'},
  {id:'watermelon', name:'Watermelon', file:'watermelon.png'},
  {id:'pineapple', name:'Pineapple', file:'pineapple.jpeg'},
  {id:'mango', name:'Mango', file:'mango.jpeg'},
  {id:'lemon', name:'Lemon', file:'lemon.jpeg'},
  {id:'cherries', name:'Cherries', file:'cherry.jpeg'},
  {id:'carrot', name:'Carrot', file:'carrot.jpg'},
  {id:'potato', name:'Potato', file:'potato.webp'},
  {id:'tomato', name:'Tomato', file:'tomato.jpg'},
  {id:'onion', name:'Onion', file:'onion.jpg'},
  {id:'corn', name:'Corn', file:'corn.jpg'},
  {id:'cucumber', name:'Cucumber', file:'cucumber.webp'},
  {id:'pepper', name:'Pepper', file:'pepper.webp'},
  {id:'garlic', name:'Garlic', file:'garlic.webp'},
  {id:'dog', name:'Dog', file:'dog.avif'},
  {id:'cat', name:'Cat', file:'cat.webp'},
  {id:'cow', name:'Cow', file:'cow.webp'},
  {id:'horse', name:'Horse', file:'horse.webp'},
  {id:'crow', name:'Crow', file:'crow.jpg'},
  {id:'fish', name:'Fish', file:'fish.avif'},
  {id:'chicken', name:'Chicken', file:'chicken.webp'},
  {id:'rabbit', name:'Rabbit', file:'rabbit.webp'},
  {id:'elephant', name:'Elephant', file:'elephant.jpeg'},
  {id:'tiger', name:'Tiger', file:'Tiger.avif'},
  {id:'duck', name:'Duck', file:'duck.jpg'},
  {id:'sheep', name:'Sheep', file:'sheep.jpg'},
  {id:'pig', name:'Pig', file:'pig.webp'},
  {id:'butterfly', name:'Butterfly', file:'butterfly.webp'},
  {id:'eye', name:'Eye', file:'eye.jpg'},
  {id:'ear', name:'Ear', file:'ear.jpeg'},
  {id:'nose', name:'Nose', file:'nose.jpeg'},
  {id:'mouth', name:'Mouth', file:'mouth.jpg'},
  {id:'hand', name:'Hand', file:'hand.jpg'},
  {id:'foot', name:'Foot', file:'foot.jpeg'},
  {id:'teeth', name:'Teeth', file:'teeth.svg'},
  {id:'arm', name:'Arm', file:'arm.jpg'},
  {id:'legs', name:'Legs', file:'legs.jpg'},
  {id:'tongue', name:'Tongue', file:'tongue.webp'},
  {id:'red', name:'Red', file:'red.jpg'},
  {id:'yellow', name:'Yellow', file:'yellow.avif'},
  {id:'green', name:'Green', file:'green.avif'},
  {id:'blue', name:'Blue', file:'blue.avif'},
  {id:'black', name:'Black', file:'black.jpg'},
  {id:'white', name:'White', file:'white.avif'},
  {id:'brown', name:'Brown', file:'brown.png'},
  {id:'pink', name:'Pink', file:'pink.jpg'},
  {id:'grey', name:'Grey', file:'grey.avif'},
  {id:'Lakshmi', name:'Lakshmi', file:'Lakshmi.jpeg', type:'person'},
  {id:'Suja', name:'Suja', file:'Suja.jpeg', type:'person'},
  {id:'Pratap', name:'Pratap Singh', file:'Pratap Singh.jpeg', type:'person'},
  {id:'Amma', name:'Amma(Vanaja)', file:'Amma.jpeg', type:'person'},
  {id:'Tarun', name:'Tarun', file:'Tarun.jpeg', type:'person'},
  {id:'Baby', name:'Baby', file:'Baby.jpeg', type:'person'}
];

const ITEMS = RAW_ITEMS.map((it, i) => ({
  ...it,
  color: BADGES[i % BADGES.length],
  file: it.file || `${it.id}.svg`,
  type: it.type || 'thing',
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

  // Wrong-answer options only come from the same type as the current item:
  // people only get quizzed against other people, things only against other things.
  let sameTypePool = ITEMS.filter(it => it.id !== current.id && it.type === current.type);
  let wrongChoices;
  if(sameTypePool.length >= 3){
    wrongChoices = shuffle(sameTypePool).slice(0, 3);
  } else {
    // Fallback (only triggers if a type has fewer than 4 total items)
    const rest = ITEMS.filter(it => it.id !== current.id && !sameTypePool.includes(it));
    wrongChoices = shuffle([...sameTypePool, ...shuffle(rest).slice(0, 3 - sameTypePool.length)]);
  }

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
        feedback.textContent = `Yes! That's ${current.name}.`;
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