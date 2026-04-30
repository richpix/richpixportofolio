let currentLang = 'es';

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skillsData.map(cat => `
    <div class="skill-category reveal">
      <div class="skill-cat-title">
        <span class="icon">${cat.icon}</span>
        ${currentLang === 'es' ? cat.category_es : cat.category_en}
      </div>
      <div class="skill-chips">
        ${cat.chips.map(c => `<span class="chip">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');
  observeReveal();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const t = i18n[currentLang];
  grid.innerHTML = projectsData.map((p, idx) => `
    <div class="project-card ${p.featured ? 'project-featured' : ''} reveal" style="cursor:pointer" onclick="openModal(${idx})">
      <div class="project-tag">${currentLang === 'es' ? p.tag_es : p.tag_en}</div>
      <h3 class="project-title">${p.title_es}</h3>
      <p class="project-desc">${currentLang === 'es' ? p.desc_es : p.desc_en}</p>
      <div class="project-stack">
        ${p.stack.map(s => `<span class="stack-chip">${s}</span>`).join('')}
      </div>
      <div class="project-links" onclick="event.stopPropagation()">
        <button class="project-link" onclick="openModal(${idx})" style="border:none;cursor:pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          ${t.modal_view || 'Ver más'}
        </button>
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.254-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.547 1.377.203 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          ${t.project_github}
        </a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${t.project_demo}
        </a>` : ''}
      </div>
    </div>
  `).join('');
  observeReveal();
}

let galleryIndex = 0;
let galleryImages = [];

function openModal(idx) {
  const p = projectsData[idx];
  const t = i18n[currentLang];

  document.getElementById('modalTag').textContent = currentLang === 'es' ? p.tag_es : p.tag_en;
  document.getElementById('modalTitle').textContent = p.title_es;
  document.getElementById('modalDesc').textContent = currentLang === 'es' ? p.desc_es : p.desc_en;

  document.getElementById('modalStack').innerHTML = p.stack.map(s =>
    `<span class="stack-chip">${s}</span>`).join('');

  const media = document.getElementById('modalMedia');
  media.innerHTML = '';
  media.className = 'modal-media';
  media.style.display = 'block';

  if (p.preview && p.preview.type === 'iframe') {
    media.classList.add('type-iframe');
    media.innerHTML = `<iframe src="${p.preview.url}" loading="lazy" title="${p.title_es}" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`;
  } else if (p.preview && p.preview.type === 'gallery' && p.preview.images.length) {
    media.classList.add('type-gallery');
    galleryImages = p.preview.images;
    galleryIndex = 0;
    renderGallery(media);
  } else {
    media.style.display = 'none';
  }

  const footer = document.getElementById('modalFooter');
  footer.innerHTML = '';
  if (p.github) {
    footer.innerHTML += `<a href="${p.github}" target="_blank" rel="noopener" class="btn-ghost" style="font-size:.85rem;padding:10px 20px">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.254-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.547 1.377.203 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
      GitHub
    </a>`;
  }
  if (p.demo) {
    footer.innerHTML += `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-primary" style="font-size:.85rem;padding:10px 22px">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${t.project_demo}
    </a>`;
  }

  document.body.style.overflow = 'hidden';
  document.getElementById('modalOverlay').classList.add('open');
}

function renderGallery(container) {
  const dots = galleryImages.map((_, i) =>
    `<button class="gallery-dot ${i === galleryIndex ? 'active' : ''}" onclick="goGallery(${i})"></button>`
  ).join('');

  container.innerHTML = `
    <div class="gallery-wrap">
      ${galleryImages.length > 1 ? `<button class="gallery-btn prev" id="prevBtn">‹</button>` : ''}
      <div class="gallery-img-container">
        <img src="${galleryImages[galleryIndex]}" alt="Screenshot ${galleryIndex + 1}" id="galleryImg">
      </div>
      ${galleryImages.length > 1 ? `<button class="gallery-btn next" id="nextBtn">›</button>` : ''}
    </div>
    ${galleryImages.length > 1 ? `<div class="gallery-dots">${dots}</div>` : ''}
  `;

  // Attach events manually since they're in global scope in original but now in script scope
  const prev = container.querySelector('.prev');
  const next = container.querySelector('.next');
  if (prev) prev.onclick = () => goGallery((galleryIndex - 1 + galleryImages.length) % galleryImages.length);
  if (next) next.onclick = () => goGallery((galleryIndex + 1) % galleryImages.length);
}

function goGallery(idx) {
  galleryIndex = idx;
  const media = document.getElementById('modalMedia');
  renderGallery(media);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { document.getElementById('modalMedia').innerHTML = ''; }, 300);
}

function applyI18n() {
  const t = i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  
  const fp = document.getElementById('formName');
  const fe = document.getElementById('formEmail');
  const fm = document.getElementById('formMessage');
  if (fp) fp.placeholder = currentLang === 'es' ? 'Tu nombre' : 'Your name';
  if (fe) fe.placeholder = currentLang === 'es' ? 'tu@correo.com' : 'you@email.com';
  if (fm) fm.placeholder = currentLang === 'es' ? '¿En qué puedo ayudarte?' : 'How can I help you?';
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langToggle').textContent = currentLang === 'es' ? '🌐 EN' : '🌐 ES';
  document.documentElement.lang = currentLang === 'es' ? 'es' : 'en';
  
  if (currentLang === 'en') {
    document.title = 'Ricardo Pool Tuz — Full-Stack & Systems Engineer | Cancún, Mexico';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Full-Stack & Systems Engineer specialized in Rust, TypeScript and React. Native desktop apps with Tauri, high-performance web platforms and AI tooling. Available for freelance projects from Cancún, Mexico.');
  } else {
    document.title = 'Ricardo Pool Tuz — Ingeniero de Software Full-Stack | Cancún, México';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Desarrollador Full-Stack & Systems Engineer especializado en Rust, TypeScript and React. Creo apps de escritorio nativas con Tauri, plataformas web de alto rendimiento y herramientas con IA. Disponible para proyectos freelance desde Cancún, México.');
  }
  applyI18n();
  renderSkills();
  renderProjects();
}

function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => obs.observe(i));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modalClose').onclick = closeModal;
    document.getElementById('modalOverlay').onclick = e => {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    };
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    document.getElementById('contactForm').addEventListener('submit', e => {
      e.preventDefault();
      const n = document.getElementById('formName').value.trim();
      const em = document.getElementById('formEmail').value.trim();
      const msg = document.getElementById('formMessage').value.trim();
      if (!n || !em || !msg) { showToast(i18n[currentLang].toast_err); return; }
      const mailto = `mailto:pool.ricardo.1fm@gmail.com?subject=Contacto desde portfolio - ${encodeURIComponent(n)}&body=${encodeURIComponent(msg)}%0A%0A${encodeURIComponent(em)}`;
      window.location.href = mailto;
      showToast(i18n[currentLang].toast_ok);
      e.target.reset();
    });

    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
    
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
    });

    document.getElementById('langToggle').addEventListener('click', toggleLang);

    // Footer year
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Initialize
    renderSkills();
    renderProjects();
    observeReveal();
    applyI18n();
});
