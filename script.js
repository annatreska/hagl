/* ── State ─────────────────────────────────────────────────────────── */
let currentTab       = 'gallery';
let selectedArtwork  = null;   // index into artworks[]
let selectedEventIdx = null;   // index into allEventImages[]

/* ── DOM refs ──────────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const tabs = {
  gallery:  $('tab-gallery'),
  events:   $('tab-events'),
  manifesto: $('tab-manifesto'),
};

const STORAGE_KEY = 'hagl_artwork_names';

/* ── Init ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadNamesFromStorage();
  initNews();
  buildGallery();
  buildEvents();
  bindMenu();
  bindGalleryDetail();
  bindEventsDetail();
  bindMobileMenu();
  initAdmin();
});

/* ── Load saved names from localStorage ───────────────────────────── */
function loadNamesFromStorage() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    artworks.forEach(art => {
      const n = saved[art.num];
      if (n) {
        art.nameEN = n.en || '';
        art.namePL = n.pl || '';
        art.nameES = n.es || '';
      }
    });
  } catch (e) { /* corrupt storage – ignore */ }
}

/* ── News ──────────────────────────────────────────────────────────── */
function initNews() {
  const { text, expires } = newsConfig;
  if (!text) return;
  if (expires && new Date(expires) < new Date()) return;
  $('news-text').textContent = text;
  $('news-section').hidden = false;
}

/* ── Menu / tabs ───────────────────────────────────────────────────── */
function bindMenu() {
  document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchTab(link.dataset.tab);
    });
  });

  document.querySelector('.logo-link').addEventListener('click', e => {
    e.preventDefault();
    switchTab(currentTab);  // just reset detail view
    closeGalleryDetail();
    closeEventsDetail();
  });
}

function switchTab(tabName) {
  currentTab = tabName;

  // Toggle panels
  Object.entries(tabs).forEach(([name, el]) => {
    el.hidden = name !== tabName;
  });

  // Toggle menu active state
  document.querySelectorAll('.menu-item').forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabName);
  });

  // Close any open details when switching tabs
  closeGalleryDetail();
  closeEventsDetail();
}

/* ── Gallery: build grid ───────────────────────────────────────────── */
function buildGallery() {
  const grid = $('gallery-grid');
  artworks.forEach((art, i) => {
    grid.appendChild(makeGridItem(art.imgF, art.author, i, 'gallery'));
  });
}

function makeGridItem(src, alt, index, mode) {
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.dataset.index = index;

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';

  div.appendChild(img);
  div.addEventListener('click', () => {
    if (mode === 'gallery') selectArtwork(index);
    else                    selectEvent(index);
  });
  return div;
}

/* ── Gallery: select artwork ───────────────────────────────────────── */
function bindGalleryDetail() {
  $('gallery-close').addEventListener('click', closeGalleryDetail);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && selectedArtwork !== null) closeGalleryDetail();
  });
}

function selectArtwork(index) {
  const art = artworks[index];
  selectedArtwork = index;

  // Activate split layout
  $('tab-gallery').classList.add('detail-active');
  $('gallery-detail').hidden = false;

  // Fill detail images
  $('gallery-front').src = art.imgF;
  $('gallery-front').alt = art.author;
  $('gallery-back').src  = art.imgB;
  $('gallery-back').alt  = `${art.author} – tył`;

  // Sidebar: hide news, show artwork info
  $('news-section').hidden  = true;
  $('artwork-info').hidden  = false;
  $('event-info').hidden    = true;

  setInfo('info-num',    art.num);
  setInfo('info-author', art.author);
  setInfo('info-en',     art.nameEN);
  setInfo('info-pl',     art.namePL);
  setInfo('info-es',     art.nameES);

  // Mark selected thumbnail
  $('gallery-grid').querySelectorAll('.gallery-item').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });

  // Scroll detail panel to top
  $('gallery-detail').scrollTop = 0;
}

function closeGalleryDetail() {
  selectedArtwork = null;
  $('tab-gallery').classList.remove('detail-active');
  $('gallery-detail').hidden = true;
  $('gallery-grid').querySelectorAll('.gallery-item').forEach(el => el.classList.remove('selected'));

  // Restore news if it was visible
  restoreNews();
  $('artwork-info').hidden = true;
}

/* ── Events: build grid ────────────────────────────────────────────── */
function buildEvents() {
  const grid = $('events-grid');
  allEventImages.forEach((ev, i) => {
    grid.appendChild(makeGridItem(ev.src, ev.label, i, 'events'));
  });
}

/* ── Events: select image ──────────────────────────────────────────── */
function bindEventsDetail() {
  $('events-close').addEventListener('click', closeEventsDetail);
  $('events-prev').addEventListener('click', () => navigateEvent(-1));
  $('events-next').addEventListener('click', () => navigateEvent(+1));
  document.addEventListener('keydown', e => {
    if (selectedEventIdx === null) return;
    if (e.key === 'Escape')      closeEventsDetail();
    if (e.key === 'ArrowLeft')   navigateEvent(-1);
    if (e.key === 'ArrowRight')  navigateEvent(+1);
  });
}

function selectEvent(flatIndex) {
  selectedEventIdx = flatIndex;
  const ev = allEventImages[flatIndex];

  // Activate split layout
  $('tab-events').classList.add('detail-active');
  $('events-detail').hidden = false;

  // Fill image
  $('events-img').src = ev.src;
  $('events-img').alt = ev.label;

  // Sidebar info
  $('news-section').hidden = true;
  $('artwork-info').hidden = true;
  $('event-info').hidden   = false;

  updateEventNav(ev, flatIndex);

  // Mark selected thumbnail
  $('events-grid').querySelectorAll('.gallery-item').forEach((el, i) => {
    el.classList.toggle('selected', i === flatIndex);
  });

  $('events-detail').scrollTop = 0;
}

function updateEventNav(ev, flatIndex) {
  const folder = eventFolders[ev.eventKey];

  // Find all images in the same event folder
  const siblings = allEventImages
    .map((e, i) => ({ ...e, flatIdx: i }))
    .filter(e => e.eventKey === ev.eventKey);
  const posInEvent = siblings.findIndex(s => s.flatIdx === flatIndex);

  setInfo('info-event-label', ev.label);

  // Description (preserve newlines)
  const descEl = $('info-event-desc');
  if (folder.description) {
    descEl.textContent = folder.description;
    descEl.hidden = false;
  } else {
    descEl.hidden = true;
  }

  // Links
  const linksEl = $('info-event-links');
  linksEl.innerHTML = '';
  if (folder.links && folder.links.length) {
    folder.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.text;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'event-press-link';
      linksEl.appendChild(a);
    });
    linksEl.hidden = false;
  } else {
    linksEl.hidden = true;
  }

  setInfo('info-event-pos', `${posInEvent + 1} / ${siblings.length}`);

  // Enable/disable nav buttons
  $('events-prev').disabled = posInEvent <= 0;
  $('events-next').disabled = posInEvent >= siblings.length - 1;
  $('events-prev').style.opacity = posInEvent <= 0                   ? '0.2' : '';
  $('events-next').style.opacity = posInEvent >= siblings.length - 1 ? '0.2' : '';
}

function navigateEvent(dir) {
  if (selectedEventIdx === null) return;
  const ev = allEventImages[selectedEventIdx];

  const siblings = allEventImages
    .map((e, i) => ({ ...e, flatIdx: i }))
    .filter(e => e.eventKey === ev.eventKey);

  const posInEvent = siblings.findIndex(s => s.flatIdx === selectedEventIdx);
  const nextPos    = posInEvent + dir;
  if (nextPos < 0 || nextPos >= siblings.length) return;

  selectEvent(siblings[nextPos].flatIdx);
}

function closeEventsDetail() {
  selectedEventIdx = null;
  $('tab-events').classList.remove('detail-active');
  $('events-detail').hidden = true;
  $('events-grid').querySelectorAll('.gallery-item').forEach(el => el.classList.remove('selected'));

  restoreNews();
  $('event-info').hidden = true;
}

/* ── Admin panel ───────────────────────────────────────────────────── */
function initAdmin() {
  // Open via URL param or Ctrl+Shift+A
  if (new URLSearchParams(location.search).has('admin')) openAdmin();

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') { e.preventDefault(); openAdmin(); }
  });

  $('admin-close').addEventListener('click', closeAdmin);
  $('admin-overlay').addEventListener('click', e => {
    if (e.target === $('admin-overlay')) closeAdmin();
  });

  $('admin-export').addEventListener('click', exportNames);
}

function openAdmin() {
  buildAdminList();
  $('admin-overlay').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeAdmin() {
  $('admin-overlay').hidden = true;
  document.body.style.overflow = '';
}

function buildAdminList() {
  const list = $('admin-list');
  list.innerHTML = '';

  artworks.forEach(art => {
    const row = document.createElement('div');
    row.className = 'admin-row';

    row.innerHTML = `
      <img class="admin-thumb" src="${art.imgF}" alt="" loading="lazy">
      <div class="admin-meta">
        <span class="admin-num">${art.num}</span>
        <span class="admin-author">${art.author || '—'}</span>
      </div>
      <input class="admin-input" type="text" placeholder="English name"
             data-num="${art.num}" data-lang="en" value="${escHtml(art.nameEN)}">
      <input class="admin-input" type="text" placeholder="Nazwa polska"
             data-num="${art.num}" data-lang="pl" value="${escHtml(art.namePL)}">
      <input class="admin-input" type="text" placeholder="Nombre en español"
             data-num="${art.num}" data-lang="es" value="${escHtml(art.nameES)}">
    `;
    list.appendChild(row);
  });

  list.querySelectorAll('.admin-input').forEach(input => {
    input.addEventListener('input', onAdminInput);
  });
}

const langKey = { en: 'nameEN', pl: 'namePL', es: 'nameES' };

function onAdminInput(e) {
  const { num, lang } = e.target.dataset;
  const art = artworks.find(a => a.num === num);
  if (art) art[langKey[lang]] = e.target.value;

  // Persist all names
  const saved = {};
  $('admin-list').querySelectorAll('.admin-input').forEach(inp => {
    const n = inp.dataset.num;
    if (!saved[n]) saved[n] = { en: '', pl: '', es: '' };
    saved[n][inp.dataset.lang] = inp.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

  // Update live info panel if this artwork is currently shown
  if (selectedArtwork !== null && artworks[selectedArtwork].num === num) {
    setInfo('info-en', art.nameEN);
    setInfo('info-pl', art.namePL);
    setInfo('info-es', art.nameES);
  }
}

function exportNames() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const json = JSON.stringify(saved, null, 2);
  navigator.clipboard.writeText(json).then(() => {
    const btn = $('admin-export');
    const orig = btn.textContent;
    btn.textContent = 'Skopiowano!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  }).catch(() => {
    // fallback: show in a textarea
    const ta = document.createElement('textarea');
    ta.value = json;
    ta.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;height:60%;z-index:300;font-size:12px;padding:12px;';
    document.body.appendChild(ta);
    ta.select();
    const close = () => ta.remove();
    ta.addEventListener('blur', close);
  });
}

function escHtml(str) {
  return (str || '').replace(/"/g, '&quot;');
}

/* Sets text and toggles visibility — hides the element when value is empty */
function setInfo(id, value) {
  const el = $(id);
  el.textContent = value || '';
  el.hidden = !value;
}

/* ── Mobile menu ───────────────────────────────────────────────────── */
function bindMobileMenu() {
  const btn     = $('hamburger');
  const sidebar = $('sidebar');
  const overlay = $('sidebar-overlay');
  if (!btn) return;

  function open() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', () => sidebar.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);

  // Close sidebar when a menu item is tapped on mobile
  document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 699) close();
    });
  });
}

/* ── Helpers ───────────────────────────────────────────────────────── */
function restoreNews() {
  const { text, expires } = newsConfig;
  if (!text) return;
  if (expires && new Date(expires) < new Date()) return;
  $('news-section').hidden = false;
}
