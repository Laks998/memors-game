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

   CATEGORIES
   ---------------------------------------------------------------------
   Every item has a `category`: 'person', 'colour', 'animal', 'fruit',
   'vegetable', 'bodypart', or 'object'.

   In the quiz, the 3 wrong-answer options ALWAYS come from the same
   category as the correct answer — a person is only ever quizzed
   against other people, a colour only against other colours, an
   animal only against other animals, and so on. They never mix across
   categories as answer choices.

   The "Look It Up" picture dictionary groups People at the top and
   everything else below (both alphabetized). The quiz order itself
   still mixes every category together as it goes through the list.

   To add a new item, just add a line with a matching `category` value
   to one of the existing groups (or a new one — as long as there end
   up being at least a few items sharing that category).

   That's it — no other code needs to change. Any common image format
   works (.jpg, .png, .svg, .webp, etc).
   ===================================================================== */

const BADGES = ['#FDECD8','#DCEFEA','#E9E3F5','#FDE2E2','#DCE7F5'];

const RAW_ITEMS = [
  // ---- Everyday Things ----
  {id:'book', name:'Book', file:'book.webp', category:'object'},
  {id:'chair', name:'Chair', file:'chair.jpg', category:'object'},
  {id:'clock', name:'Clock', file:'clock.webp', category:'object'},
  {id:'comb', name:'Comb', file:'comb.webp', category:'object'},
  {id:'cup', name:'Cup', file:'cup.avif', category:'object'},
  {id:'stapler', name:'stapler', file:'stapler.webp', category:'object'},
  {id:'glasses', name:'Glasses', file:'glasses.avif', category:'object'},
  {id:'cap', name:'cap', file:'cap.jpg', category:'object'},
  {id:'keys', name:'Keys', file:'keys.webp', category:'object'},
  {id:'mobile phone', name:'Mobile Phone', file:'mobile phone.jpg', category:'object'},
  {id:'scissors', name:'Scissors', file:'scissor.jpg', category:'object'},
  {id:'shoes', name:'Shoes', file:'shoes.png', category:'object'},
  {id:'spoon', name:'Spoon', file:'spoon.avif', category:'object'},
  {id:'toothbrush', name:'Toothbrush', file:'toothbrush.webp', category:'object'},
  {id:'umbrella', name:'Umbrella', file:'umbrella.jpg', category:'object'},
  {id:'watch', name:'Watch', file:'watch.avif', category:'object'},

  // ---- Fruits ----
  {id:'apple', name:'Apple', file:'apple.avif', category:'fruit'},
  {id:'banana', name:'Banana', file:'banana.avif', category:'fruit'},
  {id:'orange', name:'Orange', file:'orange.jpeg', category:'fruit'},
  {id:'grapes', name:'Grapes', file:'grapes.png', category:'fruit'},
  {id:'strawberry', name:'Strawberry', file:'strawberry.jpeg', category:'fruit'},
  {id:'watermelon', name:'Watermelon', file:'watermellon.png', category:'fruit'},
  {id:'pineapple', name:'Pineapple', file:'pineapple.jpeg', category:'fruit'},
  {id:'mango', name:'Mango', file:'mango.jpeg', category:'fruit'},
  {id:'lemon', name:'Lemon', file:'lemon.jpeg', category:'fruit'},
  {id:'cherries', name:'Cherries', file:'cherry.jpeg', category:'fruit'},

  // ---- Vegetables ----
  {id:'carrot', name:'Carrot', file:'carrot.jpg', category:'vegetable'},
  {id:'potato', name:'Potato', file:'potato.jpg', category:'vegetable'},
  {id:'tomato', name:'Tomato', file:'tomato.jpg', category:'vegetable'},
  {id:'onion', name:'Onion', file:'onion.jpg', category:'vegetable'},
  {id:'corn', name:'Corn', file:'corn.jpg', category:'vegetable'},
  {id:'cucumber', name:'Cucumber', file:'cucumber.webp', category:'vegetable'},
  {id:'pepper', name:'Pepper', file:'pepper.webp', category:'vegetable'},
  {id:'garlic', name:'Garlic', file:'garlic.webp', category:'vegetable'},

  // ---- Animals ----
  {id:'dog', name:'Dog', file:'dog.avif', category:'animal'},
  {id:'cat', name:'Cat', file:'cat.webp', category:'animal'},
  {id:'cow', name:'Cow', file:'cow.webp', category:'animal'},
  {id:'horse', name:'Horse', file:'horse.webp', category:'animal'},
  {id:'crow', name:'Crow', file:'crow.jpg', category:'animal'},
  {id:'fish', name:'Fish', file:'fish.avif', category:'animal'},
  {id:'chicken', name:'Chicken', file:'chicken.webp', category:'animal'},
  {id:'rabbit', name:'Rabbit', file:'rabbit.webp', category:'animal'},
  {id:'elephant', name:'Elephant', file:'elephant.jpeg', category:'animal'},
  {id:'tiger', name:'Tiger', file:'Tiger.avif', category:'animal'},
  {id:'duck', name:'Duck', file:'duck.jpg', category:'animal'},
  {id:'sheep', name:'Sheep', file:'sheep.jpg', category:'animal'},
  {id:'pig', name:'Pig', file:'pig.webp', category:'animal'},
  {id:'butterfly', name:'Butterfly', file:'butterfly.webp', category:'animal'},

  // ---- Body Parts ----
  {id:'eye', name:'Eye', file:'eye.jpg', category:'bodypart'},
  {id:'ear', name:'Ear', file:'ear.jpeg', category:'bodypart'},
  {id:'nose', name:'Nose', file:'nose.jpeg', category:'bodypart'},
  {id:'mouth', name:'Mouth', file:'mouth.jpg', category:'bodypart'},
  {id:'hand', name:'Hand', file:'hand.jpg', category:'bodypart'},
  {id:'foot', name:'Foot', file:'foot.jpeg', category:'bodypart'},
  {id:'teeth', name:'Teeth', file:'teeth.jpeg', category:'bodypart'},
  {id:'arm', name:'Arm', file:'arm.jpg', category:'bodypart'},
  {id:'legs', name:'Legs', file:'legs.jpg', category:'bodypart'},
  {id:'tongue', name:'Tongue', file:'tongue.webp', category:'bodypart'},

  // ---- Colours ----
  {id:'red', name:'Red', file:'red.jpg', category:'colour'},
  {id:'yellow', name:'Yellow', file:'yellow.avif', category:'colour'},
  {id:'green', name:'Green', file:'green.avif', category:'colour'},
  {id:'blue', name:'Blue', file:'blue.avif', category:'colour'},
  {id:'black', name:'Black', file:'black.jpg', category:'colour'},
  {id:'white', name:'White', file:'white.avif', category:'colour'},
  {id:'brown', name:'Brown', file:'brown.png', category:'colour'},
  {id:'pink', name:'Pink', file:'pink.jpg', category:'colour'},
  {id:'grey', name:'Grey', file:'grey.avif', category:'colour'},

  // ---- People ----
  {id:'Lakshmi', name:'Lakshmi', file:'Lakshmi.jpeg', category:'person'},
  {id:'Suja', name:'Suja', file:'Suja.jpeg', category:'person'},
  {id:'Pratap', name:'Pratap Singh', file:'Pratap Singh.jpeg', category:'person'},
  {id:'Amma', name:'Amma(Vanaja)', file:'Amma.jpeg', category:'person'},
  {id:'Tarun', name:'Tarun', file:'Tarun.jpeg', category:'person'},
  {id:'Baby', name:'Baby', file:'Baby.jpeg', category:'person'}
];

const ITEMS = RAW_ITEMS.map((it, i) => ({
  ...it,
  color: BADGES[i % BADGES.length],
  file: it.file || `${it.id}.svg`,
  category: it.category || 'object',
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

  const people = ITEMS.filter(it => it.category === 'person').sort((a,b) => a.name.localeCompare(b.name));
  const things = ITEMS.filter(it => it.category !== 'person').sort((a,b) => a.name.localeCompare(b.name));

  const cardHtml = item => `
    <div class="ref-card">
      <div class="ref-badge" style="background:${item.color}">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="ref-name">${item.name}</div>
      <button class="speak-btn" data-name="${item.name}" aria-label="Hear the word ${item.name}">Hear it</button>
    </div>
  `;

  let html = '';
  if(people.length){
    html += `<h3 class="ref-group-heading">People</h3>`;
    html += `<div class="ref-grid">${people.map(cardHtml).join('')}</div>`;
  }
  if(things.length){
    html += `<h3 class="ref-group-heading">Everyday Things</h3>`;
    html += `<div class="ref-grid">${things.map(cardHtml).join('')}</div>`;
  }

  grid.innerHTML = html;
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

  // Wrong-answer options only come from the same category as the current item.
  let samePool = ITEMS.filter(it => it.id !== current.id && it.category === current.category);
  let wrongChoices;
  if(samePool.length >= 3){
    wrongChoices = shuffle(samePool).slice(0, 3);
  } else {
    // Fallback (only triggers if a category has fewer than 4 total items)
    const rest = ITEMS.filter(it => it.id !== current.id && !samePool.includes(it));
    wrongChoices = shuffle([...samePool, ...shuffle(rest).slice(0, 3 - samePool.length)]);
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