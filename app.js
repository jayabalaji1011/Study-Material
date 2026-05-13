// ============================================================
// PySQL Master — Main App Logic
// AI-Powered Python & SQL Learning Platform
// ============================================================

// ============================================================
// CURRICULUM DATA
// ============================================================
const CURRICULUM = {
  python: [
    {
      category: "🐍 Python Basics",
      topics: [
        { id: "py-intro", title: "Introduction to Python", emoji: "🐍" },
        { id: "py-syntax", title: "Syntax & Indentation", emoji: "📝" },
        { id: "py-variables", title: "Variables & Data Types", emoji: "📦" },
        { id: "py-operators", title: "Operators", emoji: "➕" },
        { id: "py-input-output", title: "Input & Output", emoji: "📥" },
        { id: "py-typecasting", title: "Type Casting", emoji: "🔄" },
      ]
    },
    {
      category: "🔀 Control Flow",
      topics: [
        { id: "py-if-else", title: "if / elif / else", emoji: "🔀" },
        { id: "py-for-loop", title: "for Loop", emoji: "🔁" },
        { id: "py-while-loop", title: "while Loop", emoji: "🔃" },
        { id: "py-break-continue", title: "break & continue", emoji: "⏭️" },
        { id: "py-pass", title: "pass Statement", emoji: "⏩" },
        { id: "py-nested-loops", title: "Nested Loops", emoji: "🌀" },
      ]
    },
    {
      category: "📚 Data Structures",
      topics: [
        { id: "py-lists", title: "Lists", emoji: "📋" },
        { id: "py-tuples", title: "Tuples", emoji: "🔒" },
        { id: "py-sets", title: "Sets", emoji: "🔵" },
        { id: "py-dictionaries", title: "Dictionaries", emoji: "📖" },
        { id: "py-strings", title: "Strings & Methods", emoji: "🔤" },
        { id: "py-comprehensions", title: "List/Dict Comprehensions", emoji: "⚡" },
      ]
    },
    {
      category: "🛠️ Functions",
      topics: [
        { id: "py-functions", title: "Functions", emoji: "🛠️" },
        { id: "py-args-kwargs", title: "*args & **kwargs", emoji: "📌" },
        { id: "py-lambda", title: "Lambda Functions", emoji: "λ" },
        { id: "py-recursion", title: "Recursion", emoji: "🔄" },
        { id: "py-scope", title: "Scope & Closures", emoji: "🔭" },
        { id: "py-decorators", title: "Decorators", emoji: "🎨" },
        { id: "py-generators", title: "Generators & yield", emoji: "⚙️" },
      ]
    },
    {
      category: "🏗️ OOP",
      topics: [
        { id: "py-classes", title: "Classes & Objects", emoji: "🏗️" },
        { id: "py-inheritance", title: "Inheritance", emoji: "🧬" },
        { id: "py-polymorphism", title: "Polymorphism", emoji: "🎭" },
        { id: "py-encapsulation", title: "Encapsulation", emoji: "🔐" },
        { id: "py-abstraction", title: "Abstraction", emoji: "🌫️" },
        { id: "py-magic-methods", title: "Magic/Dunder Methods", emoji: "✨" },
      ]
    },
    {
      category: "📂 File & Error Handling",
      topics: [
        { id: "py-exceptions", title: "Exception Handling", emoji: "🚨" },
        { id: "py-file-io", title: "File I/O", emoji: "📂" },
        { id: "py-context-managers", title: "Context Managers (with)", emoji: "🧩" },
      ]
    },
    {
      category: "📦 Modules & Advanced",
      topics: [
        { id: "py-modules", title: "Modules & Packages", emoji: "📦" },
        { id: "py-iterators", title: "Iterators & Iterables", emoji: "🔁" },
        { id: "py-map-filter", title: "map(), filter(), reduce()", emoji: "🗺️" },
        { id: "py-regex", title: "Regular Expressions", emoji: "🔍" },
        { id: "py-datetime", title: "datetime Module", emoji: "📅" },
        { id: "py-collections", title: "collections Module", emoji: "🗂️" },
        { id: "py-os-sys", title: "os & sys Modules", emoji: "🖥️" },
        { id: "py-threading", title: "Threading & Concurrency", emoji: "🧵" },
        { id: "py-async", title: "async / await", emoji: "⚡" },
      ]
    },
  ],
  sql: [
    {
      category: "🗄️ SQL Basics",
      topics: [
        { id: "sql-intro", title: "Introduction to SQL", emoji: "🗄️" },
        { id: "sql-databases", title: "Databases & Tables", emoji: "🏛️" },
        { id: "sql-datatypes", title: "Data Types", emoji: "🔤" },
        { id: "sql-select", title: "SELECT Statement", emoji: "📋" },
        { id: "sql-where", title: "WHERE Clause", emoji: "🔍" },
        { id: "sql-order-by", title: "ORDER BY", emoji: "📊" },
        { id: "sql-limit", title: "LIMIT & OFFSET", emoji: "✂️" },
      ]
    },
    {
      category: "✏️ Data Manipulation (DML)",
      topics: [
        { id: "sql-insert", title: "INSERT INTO", emoji: "➕" },
        { id: "sql-update", title: "UPDATE", emoji: "✏️" },
        { id: "sql-delete", title: "DELETE", emoji: "🗑️" },
        { id: "sql-truncate", title: "TRUNCATE vs DELETE", emoji: "⚡" },
      ]
    },
    {
      category: "🏗️ Data Definition (DDL)",
      topics: [
        { id: "sql-create", title: "CREATE TABLE", emoji: "🏗️" },
        { id: "sql-alter", title: "ALTER TABLE", emoji: "🔧" },
        { id: "sql-drop", title: "DROP & TRUNCATE", emoji: "💥" },
        { id: "sql-constraints", title: "Constraints (PK, FK, UNIQUE)", emoji: "🔒" },
        { id: "sql-indexes", title: "Indexes", emoji: "📑" },
      ]
    },
    {
      category: "🔗 Joins",
      topics: [
        { id: "sql-inner-join", title: "INNER JOIN", emoji: "🔗" },
        { id: "sql-left-join", title: "LEFT / RIGHT JOIN", emoji: "⬅️" },
        { id: "sql-full-join", title: "FULL OUTER JOIN", emoji: "🔄" },
        { id: "sql-self-join", title: "SELF JOIN", emoji: "🪞" },
        { id: "sql-cross-join", title: "CROSS JOIN", emoji: "✖️" },
      ]
    },
    {
      category: "📊 Aggregations",
      topics: [
        { id: "sql-aggregate", title: "Aggregate Functions", emoji: "📊" },
        { id: "sql-group-by", title: "GROUP BY", emoji: "🗂️" },
        { id: "sql-having", title: "HAVING Clause", emoji: "🔍" },
        { id: "sql-distinct", title: "DISTINCT", emoji: "🌟" },
      ]
    },
    {
      category: "🧠 Advanced SQL",
      topics: [
        { id: "sql-subquery", title: "Subqueries", emoji: "🧠" },
        { id: "sql-cte", title: "CTEs (WITH clause)", emoji: "🔗" },
        { id: "sql-window", title: "Window Functions", emoji: "🪟" },
        { id: "sql-views", title: "Views", emoji: "👁️" },
        { id: "sql-stored-proc", title: "Stored Procedures", emoji: "⚙️" },
        { id: "sql-triggers", title: "Triggers", emoji: "⚡" },
        { id: "sql-transactions", title: "Transactions (ACID)", emoji: "🔐" },
        { id: "sql-normalization", title: "Normalization (1NF–3NF)", emoji: "📐" },
        { id: "sql-optimization", title: "Query Optimization", emoji: "🚀" },
      ]
    },
  ]
};

// ============================================================
// STATE
// ============================================================
let state = {
  activeLang: 'python',
  activeTopic: null,
  activeTab: 'learn',
  completedTopics: new Set(JSON.parse(localStorage.getItem('pysql_completed') || '[]')),
  cachedContent: {},
  allTopics: [],
  activeTopicIndex: 0,
};

// ============================================================
// FLAT LIST OF ALL TOPICS
// ============================================================
function buildFlatTopicList() {
  state.allTopics = [];
  ['python', 'sql'].forEach(lang => {
    CURRICULUM[lang].forEach(cat => {
      cat.topics.forEach(t => {
        state.allTopics.push({ ...t, lang });
      });
    });
  });
}

// ============================================================
// SIDEBAR RENDERING
// ============================================================
function renderSidebar(lang) {
  const nav = document.getElementById('topicNav');
  nav.innerHTML = '';

  CURRICULUM[lang].forEach((cat, ci) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'nav-category';
    catDiv.innerHTML = `
      <div class="nav-category-header" onclick="toggleCategory(this)">
        <span><span class="cat-icon">${cat.category.split(' ')[0]}</span>${cat.category.slice(cat.category.indexOf(' ')+1)}</span>
        <span class="cat-arrow">▾</span>
      </div>
      <div class="nav-category-items">
        ${cat.topics.map((t, ti) => {
          const done = state.completedTopics.has(t.id) ? 'done' : '';
          return `<div class="nav-item ${done}" data-id="${t.id}" onclick="openTopic('${t.id}', '${lang}')">
            <span class="item-num">${String(ti+1).padStart(2,'0')}</span>
            <span>${t.emoji} ${t.title}</span>
          </div>`;
        }).join('')}
      </div>
    `;
    nav.appendChild(catDiv);
  });
}

function toggleCategory(el) {
  el.parentElement.classList.toggle('collapsed');
}

// ============================================================
// HOME SCREEN
// ============================================================
function renderHomeCards() {
  const grid = document.getElementById('homeCards');
  const pythonCategories = CURRICULUM.python;
  const sqlCategories = CURRICULUM.sql;

  let cards = '';
  pythonCategories.forEach(cat => {
    cards += `
      <div class="home-card python" onclick="startLang('python')">
        <div class="card-emoji">${cat.category.split(' ')[0]}</div>
        <div class="card-title">${cat.category.slice(cat.category.indexOf(' ')+1)}</div>
        <div class="card-desc">${cat.topics.map(t => t.title).slice(0,3).join(', ')}...</div>
        <div class="card-count">${cat.topics.length} topics</div>
        <span class="card-tag">Python</span>
      </div>
    `;
  });
  sqlCategories.forEach(cat => {
    cards += `
      <div class="home-card sql" onclick="startLang('sql')">
        <div class="card-emoji">${cat.category.split(' ')[0]}</div>
        <div class="card-title">${cat.category.slice(cat.category.indexOf(' ')+1)}</div>
        <div class="card-desc">${cat.topics.map(t => t.title).slice(0,3).join(', ')}...</div>
        <div class="card-count">${cat.topics.length} topics</div>
        <span class="card-tag">SQL</span>
      </div>
    `;
  });
  grid.innerHTML = cards;
}

function startLang(lang) {
  state.activeLang = lang;
  const langTabs = document.querySelectorAll('.lang-tab');
  langTabs.forEach(t => t.classList.toggle('active', t.dataset.lang === lang));
  renderSidebar(lang);
  // Open first topic
  const firstTopic = CURRICULUM[lang][0].topics[0];
  openTopic(firstTopic.id, lang);
}

// ============================================================
// OPEN TOPIC
// ============================================================
function openTopic(topicId, lang) {
  // Find topic
  const topic = findTopic(topicId, lang);
  if (!topic) return;

  state.activeTopic = topicId;
  state.activeLang = lang;
  state.activeTopicIndex = state.allTopics.findIndex(t => t.id === topicId);

  // Update sidebar active
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === topicId);
    if (el.dataset.id === topicId) {
      el.classList.toggle('sql-active', lang === 'sql');
    }
  });

  // Show content screen
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('contentScreen').style.display = 'flex';

  // Breadcrumb
  const catName = getCategoryForTopic(topicId, lang);
  document.getElementById('breadcrumb').innerHTML = `${lang === 'python' ? '🐍 Python' : '🗄️ SQL'} / ${catName} / <span>${topic.title}</span>`;
  document.getElementById('topbarTitle').textContent = topic.title;

  // Mark done state
  updateMarkDoneBtn(topicId);

  // Update prev/next
  updateNavArrows();

  // Switch to learn tab
  switchTab('learn');

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('mobile-open');
    document.getElementById('overlay').classList.remove('show');
  }

  // Load content
  loadTopicContent(topic, lang);
}

function findTopic(id, lang) {
  for (const cat of CURRICULUM[lang]) {
    const t = cat.topics.find(x => x.id === id);
    if (t) return t;
  }
  return null;
}

function getCategoryForTopic(id, lang) {
  for (const cat of CURRICULUM[lang]) {
    if (cat.topics.find(t => t.id === id)) {
      return cat.category.slice(cat.category.indexOf(' ')+1);
    }
  }
  return '';
}

// ============================================================
// CONTENT TABS
// ============================================================
function switchTab(tabName) {
  state.activeTab = tabName;
  document.querySelectorAll('.ctab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  ['learn','examples','practice','interview'].forEach(t => {
    const el = document.getElementById(t + 'Tab');
    if (el) el.style.display = t === tabName ? 'block' : 'none';
  });
}

document.querySelectorAll('.ctab').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ============================================================
// AI CONTENT GENERATION
// ============================================================
async function loadTopicContent(topic, lang) {
  const cacheKey = `${lang}_${topic.id}`;
  if (state.cachedContent[cacheKey]) {
    renderContent(state.cachedContent[cacheKey], topic, lang);
    return;
  }

  // Show loading
  document.getElementById('aiLoading').classList.add('show');
  document.getElementById('learnTab').innerHTML = '';
  document.getElementById('examplesTab').innerHTML = '';
  document.getElementById('practiceTab').innerHTML = '';
  document.getElementById('interviewTab').innerHTML = '';

  try {
    const prompt = buildPrompt(topic, lang);
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        system: `You are an expert Python and SQL teacher and interview coach. 
You generate structured educational content in strict JSON format only.
Never add any text outside the JSON. No markdown fences, no preamble.
Return only valid JSON matching exactly the schema requested.`,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content.map(i => i.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    state.cachedContent[cacheKey] = parsed;
    document.getElementById('aiLoading').classList.remove('show');
    renderContent(parsed, topic, lang);

  } catch (err) {
    console.error(err);
    document.getElementById('aiLoading').classList.remove('show');
    // Fallback content
    const fallback = generateFallbackContent(topic, lang);
    state.cachedContent[cacheKey] = fallback;
    renderContent(fallback, topic, lang);
  }
}

function buildPrompt(topic, lang) {
  return `Generate comprehensive educational content for the topic: "${topic.title}" in ${lang.toUpperCase()}.

Return ONLY a JSON object with this exact structure (no markdown, no extra text):
{
  "definition": "Clear 2-3 sentence definition of what this topic is",
  "purpose": "Why is this topic important? What problem does it solve?",
  "where_used": ["use case 1", "use case 2", "use case 3", "use case 4"],
  "key_concepts": ["concept 1", "concept 2", "concept 3", "concept 4"],
  "syntax": "Basic syntax or structure (as a string, use \\n for newlines)",
  "examples": [
    {
      "title": "Basic Example",
      "description": "What this example demonstrates",
      "code": "full working code here (use \\n for newlines)",
      "output": "expected output",
      "realworld": "real-world scenario this represents"
    },
    {
      "title": "Intermediate Example",
      "description": "What this example demonstrates",
      "code": "full working code here",
      "output": "expected output",
      "realworld": "real-world scenario"
    },
    {
      "title": "Real-World Project Example",
      "description": "A practical real-world application",
      "code": "full working code here",
      "output": "expected output",
      "realworld": "exactly where this is used in industry"
    }
  ],
  "practice": [
    {
      "difficulty": "Easy",
      "question": "Practice problem statement",
      "hint": "A hint to guide the student",
      "solution": "complete solution code"
    },
    {
      "difficulty": "Medium",
      "question": "Practice problem statement",
      "hint": "A hint",
      "solution": "complete solution code"
    },
    {
      "difficulty": "Hard",
      "question": "Advanced practice problem",
      "hint": "Hint",
      "solution": "complete solution code"
    }
  ],
  "interview_qa": [
    {
      "question": "Interview question 1",
      "answer": "Detailed answer",
      "tags": ["tag1", "tag2"]
    },
    {
      "question": "Interview question 2",
      "answer": "Detailed answer",
      "tags": ["tag1"]
    },
    {
      "question": "Interview question 3",
      "answer": "Detailed answer",
      "tags": ["tag1", "tag2"]
    },
    {
      "question": "Interview question 4",
      "answer": "Detailed answer with code if needed",
      "tags": ["advanced"]
    },
    {
      "question": "Interview question 5",
      "answer": "Comprehensive answer",
      "tags": ["conceptual"]
    }
  ]
}`;
}

// ============================================================
// RENDER CONTENT
// ============================================================
function renderContent(data, topic, lang) {
  renderLearnTab(data, topic, lang);
  renderExamplesTab(data, lang);
  renderPracticeTab(data, lang);
  renderInterviewTab(data);
  updateTopicProgress();
}

function renderLearnTab(data, topic, lang) {
  const tab = document.getElementById('learnTab');
  tab.innerHTML = `
    <div class="topic-hero">
      <span class="topic-lang-badge ${lang}">${lang === 'python' ? '🐍 Python' : '🗄️ SQL'}</span>
      <div class="topic-title">${topic.emoji} ${topic.title}</div>
      <div class="topic-tagline">${data.definition || ''}</div>
    </div>

    <div class="section-card">
      <div class="section-title"><span class="s-icon">🎯</span> Purpose & Why It Matters</div>
      <p>${data.purpose || ''}</p>
    </div>

    <div class="section-card">
      <div class="section-title"><span class="s-icon">🌍</span> Where It's Used</div>
      <ul>${(data.where_used || []).map(u => `<li>${u}</li>`).join('')}</ul>
    </div>

    <div class="section-card">
      <div class="section-title"><span class="s-icon">💡</span> Key Concepts</div>
      <ul>${(data.key_concepts || []).map(k => `<li>${k}</li>`).join('')}</ul>
    </div>

    ${data.syntax ? `
    <div class="section-card">
      <div class="section-title"><span class="s-icon">📝</span> Syntax</div>
      ${makeCodeBlock(data.syntax, lang)}
    </div>` : ''}
  `;
}

function renderExamplesTab(data, lang) {
  const tab = document.getElementById('examplesTab');
  const examples = data.examples || [];
  tab.innerHTML = examples.map((ex, i) => `
    <div class="example-block">
      <div class="example-header">
        <div class="example-num">${i+1}</div>
        <div class="example-title">${ex.title}</div>
      </div>
      <div class="example-body">
        <p>${ex.description}</p>
        ${ex.realworld ? `<p>🌍 <strong>Real-World:</strong> ${ex.realworld}</p>` : ''}
        ${makeCodeBlock(ex.code, lang)}
        ${ex.output ? `
        <div class="output-block">
          <div class="output-label">Output</div>
          <pre>${escapeHtml(ex.output)}</pre>
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderPracticeTab(data, lang) {
  const tab = document.getElementById('practiceTab');
  const items = data.practice || [];
  tab.innerHTML = `
    <div class="section-card" style="margin-bottom:20px">
      <div class="section-title"><span class="s-icon">✏️</span> Practice Problems</div>
    
