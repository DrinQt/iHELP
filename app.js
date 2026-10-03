// ===== KAPWA APP.JS =====

// ===== DATA (Community Directory Members & Listings) =====
const listings = [
  {
    id: 1,
    user: 'Arthur Cooper',
    userEmail: 'arthur.cooper@kapwa.ph',
    userPhone: '+63 917 842 1923',
    userRole: 'Senior Hardware Tech & IT Specialist',
    userColor: 'linear-gradient(135deg,#1B4FD8,#4A7FFF)',
    city: 'Quezon City',
    title: 'PC Diagnostics & Laptop Repair',
    desc: 'Hardware diagnosis, custom PC builds, OS reinstalls, network cabling & software setup.',
    category: 'services',
    categoryLabel: 'Tech & Repairs',
    type: 'offer',
    status: 'Verified',
    statusCls: 'status-validated',
    date: '2026/04/24',
    qualification: 'Free / Pro-bono',
    distance: '3.2 km',
    rating: '4.9 ★ (32 reviews)',
    emoji: '💻',
    tags: [{ text: 'Tech', cls: 'badge-blue' }, { text: 'Free', cls: 'badge-green' }]
  },
  {
    id: 2,
    user: 'Gladys Wilson',
    userEmail: 'gladys.wilson@kapwa.ph',
    userPhone: '+63 928 554 9912',
    userRole: 'High School & College Math Educator',
    userColor: 'linear-gradient(135deg,#059669,#34D399)',
    city: 'Manila',
    title: 'Math & Algebra One-on-One Tutoring',
    desc: 'Private math tutoring, college entrance exam prep, and homework support for students.',
    category: 'skills',
    categoryLabel: 'Education & Tutoring',
    type: 'offer',
    status: 'Active',
    statusCls: 'status-active',
    date: '2026/05/16',
    qualification: 'Skill Exchange',
    distance: '4.5 km',
    rating: '5.0 ★ (19 reviews)',
    emoji: '📚',
    tags: [{ text: 'Education', cls: 'badge-gold' }, { text: 'Exchange', cls: 'badge-blue' }]
  },
  {
    id: 3,
    user: 'Colleen Howard',
    userEmail: 'colleen.howard@kapwa.ph',
    userPhone: '+63 917 842 1923',
    userRole: 'Brand Designer & UI Illustrator',
    userColor: 'linear-gradient(135deg,#E8A91E,#F5C842)',
    city: 'Taguig City',
    title: 'Logo & Brand Identity Design',
    desc: 'Visual identity creation, vector logos, social media banners, and pitch decks.',
    category: 'skills',
    categoryLabel: 'Design & Creative',
    type: 'offer',
    status: 'Verified',
    statusCls: 'status-validated',
    date: '2026/05/20',
    qualification: 'Skill Exchange',
    distance: '2.1 km',
    rating: '4.9 ★ (47 reviews)',
    emoji: '🎨',
    tags: [{ text: 'Creative', cls: 'badge-red' }, { text: 'Exchange', cls: 'badge-blue' }]
  },
  {
    id: 4,
    user: 'Shawn Richards',
    userEmail: 'shawn.richards@kapwa.ph',
    userPhone: '+63 999 412 8820',
    userRole: 'Licensed Electrician & Maintenance',
    userColor: 'linear-gradient(135deg,#D8281B,#FF6B5B)',
    city: 'Pasig City',
    title: 'Residential Wiring & Circuit Repairs',
    desc: 'Home electrical installations, safety upgrades, breaker repairs, and quick troubleshooting.',
    category: 'services',
    categoryLabel: 'Home Services',
    type: 'offer',
    status: 'Verified',
    statusCls: 'status-validated',
    date: '2026/05/22',
    qualification: 'PHP 500 / visit',
    distance: '5.0 km',
    rating: '4.8 ★ (28 reviews)',
    emoji: '🔌',
    tags: [{ text: 'Service', cls: 'badge-blue' }, { text: 'Paid', cls: 'badge-gold' }]
  },
  {
    id: 5,
    user: 'Victoria Williamson',
    userEmail: 'victoria.w@kapwa.ph',
    userPhone: '+63 917 223 9011',
    userRole: 'Book Collector & Community Donor',
    userColor: 'linear-gradient(135deg,#7C3AED,#A78BFA)',
    city: 'Makati City',
    title: '20+ Free Textbooks & Study Manuals',
    desc: 'Donating secondary and college textbooks to students, youth centers, or local libraries.',
    category: 'donate',
    categoryLabel: 'Donation / Free',
    type: 'offer',
    status: 'Active',
    statusCls: 'status-active',
    date: '2026/05/25',
    qualification: 'Free Pick-up',
    distance: '1.8 km',
    rating: '5.0 ★ (14 reviews)',
    emoji: '📖',
    tags: [{ text: 'Donation', cls: 'badge-green' }, { text: 'Free', cls: 'badge-green' }]
  },
  {
    id: 6,
    user: 'Greg Webb',
    userEmail: 'greg.webb@kapwa.ph',
    userPhone: '+63 908 771 2345',
    userRole: 'Digital Marketing & Community Lead',
    userColor: 'linear-gradient(135deg,#0B3BA8,#1B4FD8)',
    city: 'Mandaluyong',
    title: 'Social Media Management for Local Shops',
    desc: 'Social feed curation, Canva graphic posts, community engagement, and local brand outreach.',
    category: 'jobs',
    categoryLabel: 'Jobs & Opps',
    type: 'offer',
    status: 'Active',
    statusCls: 'status-active',
    date: '2026/05/28',
    qualification: 'Paid / Contract',
    distance: 'Online',
    rating: '4.7 ★ (8 reviews)',
    emoji: '💼',
    tags: [{ text: 'Job', cls: 'badge-blue' }, { text: 'Paid', cls: 'badge-gold' }]
  },
  {
    id: 7,
    user: 'Esther Robertson',
    userEmail: 'esther.r@kapwa.ph',
    userPhone: '+63 920 662 1099',
    userRole: 'Eco Volunteer & Community Organizer',
    userColor: 'linear-gradient(135deg,#1A8A5A,#22C55E)',
    city: 'Marikina',
    title: 'Weekend Park Clean-Up & Tree Planting',
    desc: 'Coordinating volunteer clean-up and urban greening drives in community parks. Supplies provided.',
    category: 'volunteer',
    categoryLabel: 'Volunteer',
    type: 'offer',
    status: 'Verified',
    statusCls: 'status-validated',
    date: '2026/05/30',
    qualification: 'Volunteer',
    distance: '6.4 km',
    rating: '5.0 ★ (35 reviews)',
    emoji: '💚',
    tags: [{ text: 'Volunteer', cls: 'badge-green' }, { text: 'Free', cls: 'badge-green' }]
  },
  {
    id: 8,
    user: 'Kyle Henry',
    userEmail: 'kyle.henry@kapwa.ph',
    userPhone: '+63 916 331 4455',
    userRole: 'Homeowner / Taguig Resident',
    userColor: 'linear-gradient(135deg,#DC2626,#F87171)',
    city: 'Taguig City',
    title: 'Urgent Plumber Needed for Leaking Pipe',
    desc: 'Seeking an experienced plumber to fix an active kitchen sink pipe leak. Immediate fair payment.',
    category: 'services',
    categoryLabel: 'Urgent Need',
    type: 'need',
    status: 'Urgent',
    statusCls: 'status-urgent',
    date: '2026/06/01',
    qualification: 'Paid / Negotiable',
    distance: '2.5 km',
    rating: '4.8 ★ (11 reviews)',
    emoji: '🚿',
    tags: [{ text: 'Need', cls: 'badge-red' }, { text: 'Paid', cls: 'badge-gold' }]
  },
  {
    id: 9,
    user: 'Kristin Murphy',
    userEmail: 'kristin.murphy@kapwa.ph',
    userPhone: '+63 927 889 1234',
    userRole: 'Language Exchange Enthusiast',
    userColor: 'linear-gradient(135deg,#9B59B6,#C06FD4)',
    city: 'San Juan',
    title: 'English Conversation Practice / IELTS Prep',
    desc: 'Speaking practice for IELTS and interview preparation. Happy to exchange conversational Japanese or Spanish.',
    category: 'skills',
    categoryLabel: 'Skill Exchange',
    type: 'need',
    status: 'Active',
    statusCls: 'status-active',
    date: '2026/06/02',
    qualification: 'Skill Exchange',
    distance: 'Online',
    rating: '4.9 ★ (9 reviews)',
    emoji: '🇬🇧',
    tags: [{ text: 'Need', cls: 'badge-red' }, { text: 'Exchange', cls: 'badge-blue' }]
  },
  {
    id: 10,
    user: 'Courtney Jones',
    userEmail: 'courtney.jones@kapwa.ph',
    userPhone: '+63 918 445 7789',
    userRole: 'Family Caregiver',
    userColor: 'linear-gradient(135deg,#D97706,#F59E0B)',
    city: 'Caloocan',
    title: 'Borrowing Wheelchair for 1 Month',
    desc: 'Looking for a temporary loan or solidarity rental of a wheelchair for an elderly recovering family member.',
    category: 'donate',
    categoryLabel: 'Medical Solidarity',
    type: 'need',
    status: 'Urgent',
    statusCls: 'status-urgent',
    date: '2026/06/03',
    qualification: 'Borrow / Solidarity',
    distance: '7.8 km',
    rating: '5.0 ★ (6 reviews)',
    emoji: '♿',
    tags: [{ text: 'Need', cls: 'badge-red' }, { text: 'Donation', cls: 'badge-green' }]
  }
];

// ===== COMMUNITY BOARD DATA =====
const boardNeeds = [
  { title: 'Emergency plumber needed for sink leak', meta: ['Taguig City', 'Paid', 'Urgent'], time: '15m ago' },
  { title: 'Math & Physics tutor for Grade 11 student', meta: ['Online', 'Negotiable'], time: '42m ago' },
  { title: 'Pickup truck assistance for moving couch', meta: ['Quezon City', 'Paid'], time: '1h ago' },
  { title: 'Borrowing wheelchair for recovering senior', meta: ['Caloocan', 'Free / Loan'], time: '2h ago' },
  { title: 'Volunteer doctors for community medical drive', meta: ['Manila', 'Volunteer'], time: '3h ago' },
  { title: 'Help assembling flatpack desk and bookshelf', meta: ['Pasig City', 'Paid'], time: '5h ago' }
];

const boardOffers = [
  { title: 'Free PC diagnostic & laptop cleanup', meta: ['Quezon City', 'Free'], time: '20m ago' },
  { title: 'Resume formatting & LinkedIn profile review', meta: ['Online', 'Skill Exchange'], time: '1h ago' },
  { title: 'Math & Algebra high school tutoring', meta: ['Manila', 'Free'], time: '2h ago' },
  { title: 'Logo and vector graphic design package', meta: ['Taguig City', 'Exchange'], time: '3h ago' },
  { title: 'Donating 20+ senior high school textbooks', meta: ['Makati City', 'Donation'], time: '4h ago' },
  { title: 'Electrical wiring and breaker troubleshooting', meta: ['Pasig City', 'PHP 500'], time: '6h ago' }
];

const boardOpps = [
  { title: 'Social Media Assistant for Local Shop (Remote)', meta: ['Part-time', 'Paid'], time: '1h ago' },
  { title: 'Weekend River Clean-up & Tree Planting Drive', meta: ['Marikina', 'Volunteer'], time: '3h ago' },
  { title: 'Online English Teacher for ESL Students', meta: ['Quezon City', 'PHP 250/hr'], time: '5h ago' },
  { title: 'Community Kitchen Meal Prep Assistant', meta: ['Manila', 'Volunteer'], time: '8h ago' },
  { title: 'Junior Web Dev Internship (Paid Stipend)', meta: ['BGC, Taguig', 'Internship'], time: '1d ago' }
];

// ===== CHATBOT RESPONSES DATA =====
const chatResponses = {
  default: {
    msg: "I'm here to help you navigate KAPWA! You can browse community services, request assistance, or share an offer. What would you like to explore?",
    follow: ['Browse all listings', 'Find tech services', 'Post a request', 'Volunteer opportunities']
  },
  'looking for jobs': {
    msg: "Here are some current openings in the community:\n\n💼 Social Media Manager — Mandaluyong (Part-time, Paid)\n🏫 Online English Teacher — Quezon City (Flexible)\n💻 Junior Web Dev Intern — Taguig City\n\nWould you like more details or want to post your profile?",
    follow: ['View all opportunities', 'Post what I can do']
  },
  'i need a service': {
    msg: "What kind of help are you looking for?\n\n• Tech & computer repairs 💻\n• Math & academic tutoring 📚\n• Home repairs & electrical 🔌\n• Transportation & moving 🚚\n\nJust type what you need or click below!",
    follow: ['Tech repairs', 'Math tutoring', 'Urgent plumbing', 'Post a custom need']
  },
  'i want to offer help': {
    msg: "That's wonderful! You can offer your professional skills, volunteer your time, or donate useful items.\n\nClick 'Post an Offer' or tell me what skills you'd like to share!",
    follow: ['Post an offer', 'Volunteer opportunities', 'Donate items']
  },
  'how does kapwa work?': {
    msg: "KAPWA is a direct community exchange platform:\n\n1️⃣ **Post** what you need or what you can offer.\n2️⃣ **Connect** directly via chat or message.\n3️⃣ **Help & Grow** — build trust and help your community flourish!",
    follow: ['Browse listings', 'Post now', 'View live map']
  }
};

// ===== TABLE STATE =====
const tableState = {
  explore: {
    category: 'all',
    type: 'all',
    city: 'all',
    search: '',
    sortKey: 'date',
    sortDir: 'desc'
  },
  modal: {
    category: 'all',
    type: 'all',
    city: 'all',
    search: '',
    sortKey: 'date',
    sortDir: 'desc'
  }
};

let activePopoverMemberId = null;
let activeMessageMemberId = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderTable('explore');
  renderTable('modal');
  renderBoard();
  initScrollAnimations();
  initMapObserver();
  updateBrowseModalCounts();

  // Hide popover when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.member-hover-popover') && !e.target.closest('.user-cell')) {
      hideMemberPopover();
    }
  });
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function toggleMobileMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

// ===== SAAS TABLE ROW RENDERING =====
function renderTableRowHTML(item, context) {
  const isOffer = item.type === 'offer';
  const cycleClass = isOffer ? 'cycle-offer' : 'cycle-need';
  const cycleText = isOffer ? '&#129309; Offer' : '&#128587; Need';
  const escapedUser = item.user.replace(/'/g, "\\'");
  const escapedTitle = item.title.replace(/'/g, "\\'");

  return `
    <tr class="saas-table-row" id="${context}-row-${item.id}">
      <td class="td-user">
        <div class="user-cell" onclick="showMemberPopover(event, ${item.id})" onmouseenter="showMemberPopover(event, ${item.id})">
          <span class="table-avatar" style="background: ${item.userColor};">${item.user.charAt(0)}</span>
          <div class="user-cell-meta">
            <span class="user-cell-name">${item.user}</span>
            <span class="user-cell-email">${item.userEmail}</span>
          </div>
        </div>
      </td>
      <td class="td-city">
        <span class="city-pill">📍 ${item.city}</span>
      </td>
      <td class="td-title">
        <div class="service-cell" onclick="showCardToast('${escapedTitle}')">
          <span class="service-emoji">${item.emoji}</span>
          <div class="service-info">
            <span class="service-title-text">${item.title}</span>
            <span class="service-sub-text">${item.categoryLabel}</span>
          </div>
        </div>
      </td>
      <td class="td-cycle">
        <span class="cycle-badge ${cycleClass}">${cycleText}</span>
      </td>
      <td class="td-status">
        <span class="status-pill ${item.statusCls}">
          <span class="status-dot"></span>${item.status}
        </span>
      </td>
      <td class="td-date">
        <span class="date-text">${item.date}</span>
      </td>
      <td class="td-comp">
        <span class="comp-tag">${item.qualification}</span>
      </td>
      <td class="td-dist">
        <span class="dist-badge">${item.distance}</span>
      </td>
      <td class="td-actions text-right">
        <div class="row-action-btns">
          <button class="btn-msg-icon" title="Send message" onclick="event.stopPropagation(); openFloatingMessage(${item.id})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </button>
          <button class="btn-table-connect" onclick="event.stopPropagation(); connectWithListing('${escapedTitle}', '${escapedUser}')">
            Connect
          </button>
        </div>
      </td>
    </tr>
  `;
}

// ===== SAAS TABLE FILTERING & SORTING LOGIC =====
function getFilteredAndSortedListings(context) {
  const st = tableState[context];
  let res = listings.filter(item => {
    // category filter
    if (st.category !== 'all' && item.category !== st.category) return false;
    // type filter
    if (st.type !== 'all' && item.type !== st.type) return false;
    // city filter (Metro Manila)
    if (st.city && st.city !== 'all' && !item.city.toLowerCase().includes(st.city.toLowerCase())) return false;
    // search filter
    if (st.search) {
      const q = st.search.toLowerCase();
      const matchUser = item.user.toLowerCase().includes(q);
      const matchEmail = item.userEmail.toLowerCase().includes(q);
      const matchCity = item.city.toLowerCase().includes(q);
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.desc.toLowerCase().includes(q);
      const matchQual = (item.qualification || '').toLowerCase().includes(q);
      if (!matchUser && !matchEmail && !matchCity && !matchTitle && !matchDesc && !matchQual) return false;
    }
    return true;
  });

  // sorting
  res.sort((a, b) => {
    let valA = a[st.sortKey] || '';
    let valB = b[st.sortKey] || '';
    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();

    if (valA < valB) return st.sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return st.sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return res;
}

function renderTable(context) {
  const tbodyId = context === 'explore' ? 'explore-table-body' : 'browse-table-body';
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  const filtered = getFilteredAndSortedListings(context);

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9">
          <div class="table-empty-state">
            <div class="empty-icon">&#128269;</div>
            <div class="empty-title">No listings found</div>
            <div class="empty-sub">Try adjusting your search query, category, or filter options.</div>
            <button class="btn-outline-sm" style="margin-top:10px;" onclick="resetTableFilters('${context}')">Reset Filters</button>
          </div>
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = filtered.map(item => renderTableRowHTML(item, context)).join('');
  }

  // Update summary stats
  if (context === 'explore') {
    const statEl = document.getElementById('explore-stat-text');
    if (statEl) statEl.textContent = `Showing ${filtered.length} member${filtered.length > 1 ? 's' : ''} of ${listings.length}`;
  } else {
    const summaryEl = document.getElementById('browse-summary-text');
    if (summaryEl) summaryEl.textContent = `Showing ${filtered.length} of ${listings.length} community members & listings`;
  }
}

// Toolbar Handlers
function handleTableSearch(val, context) {
  tableState[context].search = (val || '').trim();
  const clearBtn = document.getElementById('browse-table-clear');
  if (clearBtn && context === 'modal') {
    clearBtn.style.display = tableState[context].search ? 'inline-flex' : 'none';
  }
  renderTable(context);
}

function clearTableSearch(context) {
  const input = document.getElementById(context === 'explore' ? 'explore-table-search' : 'browse-table-search');
  if (input) {
    input.value = '';
    input.focus();
  }
  handleTableSearch('', context);
}

function handleTableSort(sortVal, context) {
  const [key, dir] = sortVal.split('-');
  tableState[context].sortKey = key || 'date';
  tableState[context].sortDir = dir || 'desc';
  renderTable(context);
}

function handleColumnSort(column, context) {
  const st = tableState[context];
  if (st.sortKey === column) {
    st.sortDir = st.sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    st.sortKey = column;
    st.sortDir = 'asc';
  }

  // Update select dropdown if available
  const selectId = context === 'explore' ? 'explore-sort-select' : 'browse-sort-select';
  const select = document.getElementById(selectId);
  if (select) {
    const expectedVal = `${column}-${st.sortDir}`;
    if (select.querySelector(`option[value="${expectedVal}"]`)) {
      select.value = expectedVal;
    }
  }

  renderTable(context);
}

function handleTableType(type, btn, context) {
  tableState[context].type = type;
  const container = btn.closest('.table-type-pills');
  if (container) {
    container.querySelectorAll('.table-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  renderTable(context);
}

function handleTableCity(cityVal, context) {
  tableState[context].city = cityVal || 'all';
  renderTable(context);
}

function filterCategory(cat, btn) {
  tableState.explore.category = cat;
  document.querySelectorAll('#explore-cat-tabs .row-tab-pill').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTable('explore');
}

function filterBrowseCategory(cat, btn) {
  tableState.modal.category = cat;
  document.querySelectorAll('#modal-category-tabs .cat-pill').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTable('modal');
}

function resetTableFilters(context) {
  tableState[context] = {
    category: 'all',
    type: 'all',
    city: 'all',
    search: '',
    sortKey: 'date',
    sortDir: 'desc'
  };
  const searchInput = document.getElementById(context === 'explore' ? 'explore-table-search' : 'browse-table-search');
  if (searchInput) searchInput.value = '';

  const citySelect = document.getElementById(context === 'explore' ? 'explore-city-select' : 'browse-city-select');
  if (citySelect) citySelect.value = 'all';

  const sortSelect = document.getElementById(context === 'explore' ? 'explore-sort-select' : 'browse-sort-select');
  if (sortSelect) sortSelect.value = 'date-desc';

  const pillsContainer = document.getElementById(context === 'explore' ? 'explore-cat-tabs' : 'modal-category-tabs');
  if (pillsContainer) {
    pillsContainer.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === 'all');
    });
  }
  renderTable(context);
}

function updateBrowseModalCounts() {
  const counts = { all: listings.length, services: 0, skills: 0, jobs: 0, donate: 0, volunteer: 0 };
  listings.forEach(l => {
    if (counts[l.category] !== undefined) counts[l.category]++;
  });
  Object.keys(counts).forEach(key => {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = counts[key];
    const pageBadge = document.getElementById(`badge-cnt-${key}`);
    if (pageBadge) pageBadge.textContent = counts[key];
  });
  const totalPill = document.getElementById('modal-total-pill');
  if (totalPill) totalPill.textContent = listings.length + ' Available';
  const browseBtnCount = document.getElementById('browse-btn-count');
  if (browseBtnCount) browseBtnCount.textContent = listings.length + ' Listings';
}

// ===== POP-OFF BROWSE MODAL WINDOW =====
function openBrowseModal(initialCat) {
  const modal = document.getElementById('browse-modal');
  if (!modal) return;
  if (initialCat) {
    tableState.modal.category = initialCat;
    document.querySelectorAll('#modal-category-tabs .cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === initialCat);
    });
  }
  updateBrowseModalCounts();
  renderTable('modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('browse-table-search');
    if (input) input.focus();
  }, 150);
}

function closeBrowseModal(event, force) {
  const modal = document.getElementById('browse-modal');
  if (!modal) return;
  if (force || (event && event.target === modal)) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    hideMemberPopover();
    closeFloatingMessage();
  }
}

// ===== HOVER MEMBER POPOVER CARD (Colleen Howard in Screenshot) =====
function showMemberPopover(e, id) {
  e.stopPropagation();
  const item = listings.find(l => l.id === id);
  if (!item) return;

  activePopoverMemberId = id;
  const popover = document.getElementById('member-hover-popover');
  if (!popover) return;

  document.getElementById('pop-name').textContent = item.user;
  document.getElementById('pop-email').textContent = item.userEmail;
  document.getElementById('pop-phone').textContent = item.userPhone;
  const popAvatar = document.getElementById('pop-avatar');
  popAvatar.textContent = item.user.charAt(0);
  popAvatar.style.background = item.userColor;

  // Position relative to target
  const rect = e.currentTarget.getBoundingClientRect();
  popover.style.display = 'block';
  popover.style.position = 'fixed';
  popover.style.top = Math.min(window.innerHeight - 180, Math.max(10, rect.top - 10)) + 'px';
  popover.style.left = Math.min(window.innerWidth - 300, rect.right + 12) + 'px';
}

function hideMemberPopover() {
  const popover = document.getElementById('member-hover-popover');
  if (popover) popover.style.display = 'none';
  activePopoverMemberId = null;
}

function openProfileFromPopover() {
  const item = listings.find(l => l.id === activePopoverMemberId);
  if (item) {
    showToast(`👤 Profile: ${item.user} — ${item.userRole}`, 'info');
  }
  hideMemberPopover();
}

function triggerMessageFromPopover() {
  const id = activePopoverMemberId;
  hideMemberPopover();
  if (id) openFloatingMessage(id);
}

function triggerChatFromPopover() {
  const item = listings.find(l => l.id === activePopoverMemberId);
  hideMemberPopover();
  if (item) connectWithListing(item.title, item.user);
}

// ===== FLOATING "NEW MESSAGE" MODAL =====
function openFloatingMessage(id) {
  const item = listings.find(l => l.id === id) || listings[0];
  activeMessageMemberId = item.id;

  const dialog = document.getElementById('saas-floating-msg');
  if (!dialog) return;

  document.getElementById('msg-recipient-avatar').textContent = item.user.charAt(0);
  document.getElementById('msg-recipient-avatar').style.background = item.userColor;
  document.getElementById('msg-recipient-email').textContent = item.userEmail;
  document.getElementById('msg-subject-input').value = `Regarding: ${item.title}`;
  document.getElementById('msg-content-input').value = `Hello ${item.user},\n\nI came across your listing "${item.title}" on KAPWA and would love to connect. Are you available to discuss this week?\n\nBest regards,\nA KAPWA Community Member`;

  dialog.style.display = 'flex';
  setTimeout(() => {
    const contentInput = document.getElementById('msg-content-input');
    if (contentInput) contentInput.focus();
  }, 100);
}

function closeFloatingMessage() {
  const dialog = document.getElementById('saas-floating-msg');
  if (dialog) dialog.style.display = 'none';
}

function handleRecipientSearch(val) {
  const autoDiv = document.getElementById('recipient-autocomplete');
  if (!autoDiv) return;
  const q = (val || '').trim().toLowerCase();
  if (!q) {
    autoDiv.style.display = 'none';
    return;
  }

  const matches = listings.filter(l => l.user.toLowerCase().includes(q) || l.userEmail.toLowerCase().includes(q));
  if (matches.length === 0) {
    autoDiv.style.display = 'none';
    return;
  }

  autoDiv.innerHTML = matches.map(m => `
    <div class="auto-item" onclick="selectRecipient(${m.id})">
      <div class="auto-name">${m.user}</div>
      <div class="auto-email">${m.userEmail}</div>
    </div>
  `).join('');
  autoDiv.style.display = 'block';
}

function selectRecipient(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;
  document.getElementById('msg-recipient-avatar').textContent = item.user.charAt(0);
  document.getElementById('msg-recipient-avatar').style.background = item.userColor;
  document.getElementById('msg-recipient-email').textContent = item.userEmail;
  document.getElementById('msg-recipient-input').value = '';
  document.getElementById('recipient-autocomplete').style.display = 'none';
}

function sendFloatingMessage() {
  const email = document.getElementById('msg-recipient-email').textContent;
  const item = listings.find(l => l.id === activeMessageMemberId);
  const name = item ? item.user : email;

  showToast(`✉️ Message sent successfully to ${name} (${email})!`, 'success');
  closeFloatingMessage();
}

function connectWithListing(title, user) {
  showToast(`🤝 Connected with ${user} for "${title}". Opening messenger...`, 'success');
  setTimeout(() => {
    closeBrowseModal(null, true);
    if (!chatOpen) toggleChatbot();
    addBotMessage(`You are connected with **${user}** regarding **"${title}"**!\n\nSend a message to start the conversation:`, ['Hello!', 'Is this still available?', 'Tell me more']);
  }, 350);
}

function showCardToast(title) {
  showToast(`📋 Selected listing: ${title}`, 'info');
}

// ===== BOARD =====
function renderBoard() {
  renderBoardColumn('needs-board', boardNeeds, 'need');
  renderBoardColumn('offers-board', boardOffers, 'offer');
  renderBoardColumn('opps-board', boardOpps, 'opp');
}

function renderBoardColumn(containerId, data, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map((item, i) => `
    <div class="board-card" id="${type}-card-${i}" onclick="boardCardClick('${item.title}')">
      <div class="board-card-title">${item.title}</div>
      <div class="board-card-meta">
        ${item.meta.map(m => `<span>${m}</span>`).join('<span>·</span>')}
      </div>
      <div class="board-card-time">🕐 ${item.time}</div>
    </div>
  `).join('');
}

function boardCardClick(title) {
  showToast(`👀 Viewing: "${title}"`, 'info');
}

// ===== CHATBOT =====
function toggleChatbot() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatbot-panel');
  const badge = document.getElementById('fab-badge');

  if (chatOpen) {
    panel.classList.add('open');
    badge.classList.add('hidden');
  } else {
    panel.classList.remove('open');
  }
}

function openChatbot() {
  if (!chatOpen) toggleChatbot();
}

function handleChatEnter(e) {
  if (e.key === 'Enter') sendMessage();
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = '';

  // Hide quick replies
  const qr = document.getElementById('quick-replies');
  if (qr) qr.style.display = 'none';

  // Show typing
  const typingId = showTyping();

  setTimeout(() => {
    removeTyping(typingId);
    const response = getBotResponse(text);
    addBotMessage(response.msg, response.follow);
  }, 1200 + Math.random() * 600);
}

function sendQuickReply(text) {
  const input = document.getElementById('chat-input');
  input.value = text;
  sendMessage();
}

function addUserMessage(text) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `
    <div class="msg-bubble"><p>${escapeHtml(text)}</p></div>
  `;
  messages.appendChild(div);
  scrollChat();
}

function addBotMessage(text, quickReplies) {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `
    <img src="assets/mascot.jpg" alt="Kap" class="msg-avatar" />
    <div class="msg-bubble"><p>${text.replace(/\n/g, '<br>')}</p></div>
  `;
  messages.appendChild(div);

  if (quickReplies && quickReplies.length > 0) {
    const qrDiv = document.createElement('div');
    qrDiv.className = 'quick-replies';
    qrDiv.innerHTML = quickReplies.map(r =>
      `<button class="quick-reply" onclick="sendQuickReply('${r}')">${r}</button>`
    ).join('');
    messages.appendChild(qrDiv);
  }

  scrollChat();
}

function showTyping() {
  const messages = document.getElementById('chat-messages');
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = `
    <img src="assets/mascot.jpg" alt="Kap" class="msg-avatar" />
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messages.appendChild(div);
  scrollChat();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollChat() {
  const messages = document.getElementById('chat-messages');
  messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(text) {
  const lower = text.toLowerCase().trim();

  for (const key of Object.keys(chatResponses)) {
    if (key !== 'default' && lower.includes(key)) {
      return chatResponses[key];
    }
  }

  // Pattern matching
  if (lower.includes('laptop') || lower.includes('computer') || lower.includes('phone') || lower.includes('repair')) {
    return {
      msg: "I can help you find tech repair services! 💻\n\nThere are currently 3 people offering tech help in your area:\n\n👤 Renz M. — Laptop & PC Repair (Free, Taguig)\n👤 Mark — Phone Repair (Paid, BGC)\n👤 Joy — Software Troubleshooting (Online)\n\nWould you like to post a specific request or contact one of them?",
      follow: ['Post a tech request', 'Browse tech services']
    };
  }

  if (lower.includes('tutor') || lower.includes('teach') || lower.includes('learn') || lower.includes('math') || lower.includes('study')) {
    return {
      msg: "Great! I found tutors and teachers in the community! 📚\n\n👩‍🏫 Carla R. — Math & Science (Free, Online)\n👨‍🏫 Ben — Filipino & English (Negotiable, QC)\n👩‍💻 Grace — Coding & Web Dev (Exchange, Online)\n\nWhat subject do you need help with?",
      follow: ['Math', 'English', 'Science', 'Coding']
    };
  }

  if (lower.includes('job') || lower.includes('work') || lower.includes('hire') || lower.includes('employ')) {
    return chatResponses['looking for jobs'];
  }

  if (lower.includes('donate') || lower.includes('give') || lower.includes('free') || lower.includes('donation')) {
    return {
      msg: "That's so generous! 🎁\n\nYou can donate:\n• Items (books, clothes, appliances)\n• Food and supplies\n• Your time (volunteering)\n• Money or financial aid\n\nSimply post your donation and community members who need it can reach out!\n\nWant me to help you post a donation?",
      follow: ['Post a donation', 'Browse free items', 'Volunteer instead']
    };
  }

  if (lower.includes('volunteer')) {
    return {
      msg: "You're amazing for wanting to volunteer! 💚\n\nCurrent volunteer opportunities in Metro Manila:\n\n🏥 Medical Mission — Tondo, Manila (Nov 10)\n🏖️ Manila Bay Coastal Clean-up — Roxas Blvd (Monthly)\n📚 Literacy Program — Caloocan (Weekends)\n🍱 Community Kitchen — Quezon City (Daily)\n\nWould you like details on any of these?",
      follow: ['Medical Mission', 'Manila Bay Clean-up', 'Community Kitchen']
    };
  }

  return chatResponses['default'];
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===== MODALS =====
function openPostModal(type) {
  const modal = document.getElementById('post-modal');
  const icon = document.getElementById('modal-icon');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');

  if (type === 'need') {
    icon.textContent = '🙋';
    title.textContent = 'I Need Something';
    desc.textContent = 'Tell the community what you\'re looking for';
  } else {
    icon.textContent = '🤝';
    title.textContent = 'I Can Help';
    desc.textContent = 'Share your skills or services with the community';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePostModal(event, force) {
  if (force || (event && event.target === document.getElementById('post-modal'))) {
    document.getElementById('post-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitPost(e) {
  e.preventDefault();
  const title = document.getElementById('post-title').value.trim();
  if (!title) {
    showToast('Please add a title for your post', 'error');
    return;
  }

  closePostModal(null, true);
  showToast('🎉 Your post is live! The community will see it now.', 'success');

  // Reset form
  document.getElementById('post-form').reset();
}

function openAuthModal(tab) {
  const modal = document.getElementById('auth-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
}

function closeAuthModal(event, force) {
  if (force || (event && event.target === document.getElementById('auth-modal'))) {
    document.getElementById('auth-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  const signupTab = document.getElementById('tab-signup');
  const signinTab = document.getElementById('tab-signin-btn');
  const nameGroup = document.getElementById('auth-name-group');
  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const submitBtn = document.getElementById('btn-auth-submit');

  if (tab === 'signup') {
    signupTab.classList.add('active');
    signinTab.classList.remove('active');
    nameGroup.style.display = 'flex';
    title.textContent = 'Welcome to KAPWA!';
    subtitle.textContent = 'Join thousands of Filipinos helping each other.';
    submitBtn.textContent = 'Create My Account';
    document.getElementById('auth-password').placeholder = 'Create a password';
  } else {
    signinTab.classList.add('active');
    signupTab.classList.remove('active');
    nameGroup.style.display = 'none';
    title.textContent = 'Welcome Back!';
    subtitle.textContent = 'Sign in to continue helping and connecting.';
    submitBtn.textContent = 'Sign In';
    document.getElementById('auth-password').placeholder = 'Your password';
  }
}

function submitAuth(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  if (!email) {
    showToast('Please enter your email address', 'error');
    return;
  }

  closeAuthModal(null, true);
  showToast('🎉 Welcome to KAPWA! Your account has been created.', 'success');

  setTimeout(() => {
    openChatbot();
    setTimeout(() => {
      addBotMessage("Hello! Welcome to KAPWA! 🎉\n\nI'm Kap, your community guide. Ready to help you connect with your community!\n\nWhat would you like to do first?", ['Find help', 'Offer my skills', 'Browse opportunities']);
    }, 500);
  }, 1500);
}

// ===== TOAST =====
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Animate step cards
  document.querySelectorAll('.step-card, .service-card, .testimonial-card, .board-column, .opp-type').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    observer.observe(el);
  });
}

// ===== CLOSE MODALS ON ESC =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFloatingMessage();
    hideMemberPopover();
    closeBrowseModal(null, true);
    closePostModal(null, true);
    closeAuthModal(null, true);
    if (chatOpen) toggleChatbot();
  }
});

// ===== LIVE MAP =====

// Metro Manila city centers + bounding box
const METRO_MANILA_CENTER = [14.5995, 120.9842];
const METRO_MANILA_BOUNDS = [[14.3800, 120.8000], [14.8500, 121.2000]];

// Map pins data — 30 realistic Metro Manila listings
const mapListings = [
  // OFFERS — Tech & Services
  { id: 'm1',  lat: 14.5174, lng: 121.0507, type: 'offer', category: 'services',  emoji: '💻', title: 'Laptop & PC Repair',          desc: 'Hardware/software fixes, OS install, virus removal.',        user: 'Renz M.',  city: 'Taguig City',    userColor: '#1A56DB' },
  { id: 'm2',  lat: 14.6760, lng: 121.0437, type: 'offer', category: 'services',  emoji: '📱', title: 'Phone Screen Replacement',     desc: 'All brands. Same-day repair available.',                     user: 'Mark G.',  city: 'Quezon City',   userColor: '#DC2626' },
  { id: 'm3',  lat: 14.5547, lng: 121.0244, type: 'offer', category: 'services',  emoji: '🔌', title: 'Electrical Wiring Help',       desc: 'Minor repairs and installations. Licensed electrician.',      user: 'Jun D.',   city: 'Mandaluyong',   userColor: '#059669' },
  { id: 'm4',  lat: 14.6091, lng: 121.0222, type: 'offer', category: 'services',  emoji: '🚗', title: 'Car Wash & Detailing',         desc: 'Mobile service. Comes to your location.',                    user: 'Noel A.',  city: 'San Juan',      userColor: '#D97706' },
  { id: 'm5',  lat: 14.5830, lng: 120.9820, type: 'offer', category: 'services',  emoji: '🛁', title: 'Plumbing Services',            desc: 'Leaks, pipes, bathroom installs. Fast response.',             user: 'Pedro L.', city: 'Manila',        userColor: '#7C3AED' },
  { id: 'm6',  lat: 14.6292, lng: 121.0529, type: 'offer', category: 'services',  emoji: '✂️', title: 'Free Haircut (Weekends)',       desc: 'For students and senior citizens. Walk-in only.',             user: 'Aling Sol', city: 'Marikina',     userColor: '#0891B2' },

  // OFFERS — Skills
  { id: 'm7',  lat: 14.5504, lng: 121.0498, type: 'offer', category: 'skills',    emoji: '📚', title: 'Math & Science Tutoring',      desc: 'Free for HS students. Online or face-to-face.',              user: 'Carla R.', city: 'Pasig City',    userColor: '#D97706' },
  { id: 'm8',  lat: 14.6910, lng: 121.0662, type: 'offer', category: 'skills',    emoji: '🎨', title: 'Logo & Branding Design',       desc: 'Open to skill exchange. 3 yrs experience.',                  user: 'Jake A.',  city: 'Caloocan',      userColor: '#DC2626' },
  { id: 'm9',  lat: 14.4791, lng: 120.8979, type: 'offer', category: 'skills',    emoji: '🇬🇧', title: 'English Conversation Practice', desc: 'IELTS/TOEFL prep. Free sessions.',                           user: 'Grace P.', city: 'Las Piñas',    userColor: '#7C3AED' },
  { id: 'm10', lat: 14.6507, lng: 121.0372, type: 'offer', category: 'skills',    emoji: '💻', title: 'Basic Excel & Word Training',  desc: 'Perfect for job seekers. 2-hour session.',                   user: 'Ben C.',   city: 'Quezon City',   userColor: '#1A56DB' },
  { id: 'm11', lat: 14.5242, lng: 121.0191, type: 'offer', category: 'skills',    emoji: '🎵', title: 'Guitar Lessons (Beginner)',    desc: 'Learn basic chords in 4 sessions. Bring your guitar.',        user: 'Gio M.',   city: 'Makati City',   userColor: '#059669' },

  // OFFERS — Volunteer
  { id: 'm12', lat: 14.5995, lng: 120.9842, type: 'offer', category: 'volunteer', emoji: '🏥', title: 'Medical Mission Volunteer',    desc: 'Doctors & nurses needed. Free checkup event.',               user: 'HealthKap', city: 'Manila',       userColor: '#059669' },
  { id: 'm13', lat: 14.7011, lng: 121.0458, type: 'offer', category: 'volunteer', emoji: '📖', title: 'Literacy Reading Program',     desc: 'Read to kids every Saturday, 9am–12nn.',                     user: 'EduKapwa', city: 'Caloocan',      userColor: '#059669' },
  { id: 'm14', lat: 14.5426, lng: 121.0006, type: 'offer', category: 'volunteer', emoji: '🍱', title: 'Community Kitchen Helper',     desc: 'Help cook and distribute meals daily 6am–9am.',              user: 'FeedMNL',  city: 'Makati City',   userColor: '#059669' },
  { id: 'm15', lat: 14.6209, lng: 121.1088, type: 'offer', category: 'volunteer', emoji: '🌳', title: 'Tree Planting Drive',          desc: 'Join this Saturday. Gloves and bags provided.',               user: 'GreenMNL', city: 'Marikina',     userColor: '#059669' },

  // OFFERS — Donate
  { id: 'm16', lat: 14.6600, lng: 121.0280, type: 'offer', category: 'donate',    emoji: '📖', title: 'Free Textbooks (Grade 7–10)',  desc: '15+ complete textbooks. Pick up only.',                       user: 'Ana B.',   city: 'Quezon City',   userColor: '#D97706' },
  { id: 'm17', lat: 14.5143, lng: 121.0196, type: 'offer', category: 'donate',    emoji: '👕', title: 'Secondhand Clothes (All Sizes)', desc: 'Clean and folded. Taguig area only.',                        user: 'Mary J.',  city: 'Taguig City',   userColor: '#D97706' },
  { id: 'm18', lat: 14.5600, lng: 120.9800, type: 'offer', category: 'donate',    emoji: '🍞', title: 'Extra Bread & Pastries Daily', desc: 'Unsold items from bakery. Available 8pm onward.',             user: 'PanBake', city: 'Ermita, Manila', userColor: '#D97706' },
  { id: 'm19', lat: 14.4911, lng: 121.0460, type: 'offer', category: 'donate',    emoji: '🖥️', title: 'Old Desktop Computer',         desc: 'Working unit. For students or NGO use.',                     user: 'Tony F.',  city: 'Parañaque',    userColor: '#D97706' },

  // NEEDS — Services
  { id: 'm20', lat: 14.6507, lng: 121.1084, type: 'need',  category: 'services',  emoji: '🚿', title: 'Need Plumber — Leaking Pipe', desc: 'Willing to pay. Marikina area preferred.',                   user: 'Tony L.',  city: 'Marikina',      userColor: '#DC2626' },
  { id: 'm21', lat: 14.5548, lng: 121.0534, type: 'need',  category: 'services',  emoji: '🔧', title: 'Appliance Repair Needed',     desc: 'Washing machine issue. Will compensate.',                     user: 'Mia F.',   city: 'Pasig City',    userColor: '#DC2626' },
  { id: 'm22', lat: 14.6183, lng: 120.9833, type: 'need',  category: 'services',  emoji: '🎨', title: 'Need Room Painter',           desc: '2 small rooms. Budget available. Tondo.',                     user: 'Lenny V.', city: 'Tondo, Manila', userColor: '#DC2626' },

  // NEEDS — Skills
  { id: 'm23', lat: 14.5243, lng: 120.9836, type: 'need',  category: 'skills',    emoji: '💼', title: 'Resume Review Needed',        desc: 'Fresh grad looking for job. Any HR or career coach.',         user: 'Donna P.', city: 'Ermita, Manila', userColor: '#7C3AED' },
  { id: 'm24', lat: 14.6760, lng: 121.0200, type: 'need',  category: 'skills',    emoji: '📊', title: 'Excel Help for Work Report',  desc: 'Need someone to help build a simple tracker.',                user: 'Ching M.', city: 'Quezon City',  userColor: '#7C3AED' },
  { id: 'm25', lat: 14.5430, lng: 121.0500, type: 'need',  category: 'skills',    emoji: '🇯🇵', title: 'Looking for Japanese Tutor',  desc: 'Preparing for N5 exam. Online okay.',                         user: 'Ken O.',   city: 'Pasig City',   userColor: '#7C3AED' },

  // NEEDS — Volunteer & Donate
  { id: 'm26', lat: 14.6040, lng: 121.0360, type: 'need',  category: 'volunteer', emoji: '♿', title: 'Need Wheelchair Volunteer',   desc: 'Senior citizen needs escort to hospital twice a week.',       user: 'Lola Fely', city: 'San Juan',    userColor: '#059669' },
  { id: 'm27', lat: 14.5700, lng: 120.9700, type: 'need',  category: 'donate',    emoji: '🎒', title: 'School Supplies for Learners', desc: 'Notebooks, pencils, crayons for 20 kids.',                   user: 'Teacher R.', city: 'Manila',    userColor: '#D97706' },
  { id: 'm28', lat: 14.4820, lng: 121.0190, type: 'need',  category: 'donate',    emoji: '🍼', title: 'Baby Items Needed',           desc: 'New mom needs diapers and formula. Any size.',                user: 'Jenny A.', city: 'Parañaque',    userColor: '#D97706' },

  // Jobs
  { id: 'm29', lat: 14.5547, lng: 121.0244, type: 'offer', category: 'jobs',      emoji: '💼', title: 'Social Media Manager',        desc: 'Part-time, remote. 3hrs/day. Paid.',                          user: 'Mhel B.',  city: 'Mandaluyong',  userColor: '#0891B2' },
  { id: 'm30', lat: 14.6350, lng: 121.0200, type: 'offer', category: 'jobs',      emoji: '🏫', title: 'Online English Teacher',      desc: 'Part-time, flexible hours. Experience preferred.',             user: 'KapwaEd', city: 'Quezon City',   userColor: '#0891B2' },
];

// Map instance and cluster group
let kapwaMap = null;
let markerCluster = null;
let activeMarkers = [];
let currentMapFilter = 'all';

function initMap() {
  if (kapwaMap) return;

  kapwaMap = L.map('kapwa-map', {
    center: METRO_MANILA_CENTER,
    zoom: 12,
    minZoom: 11,
    maxZoom: 17,
    maxBounds: METRO_MANILA_BOUNDS,
    maxBoundsViscosity: 0.85,
    zoomControl: false,
  });

  // Clean OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(kapwaMap);

  // Move zoom control to bottom-left
  L.control.zoom({ position: 'bottomleft' }).addTo(kapwaMap);

  // Marker cluster group
  markerCluster = L.markerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    iconCreateFunction: (cluster) => {
      const count = cluster.getChildCount();
      return L.divIcon({
        html: `<div class="map-cluster-icon">${count}</div>`,
        className: '',
        iconSize: L.point(36, 36),
      });
    }
  });

  kapwaMap.addLayer(markerCluster);
  renderMapMarkers('all');
}

function getPinColor(listing) {
  if (listing.type === 'need') return 'pin-need';
  if (listing.category === 'volunteer') return 'pin-volunteer';
  if (listing.category === 'donate') return 'pin-donate';
  if (listing.category === 'skills') return 'pin-skills';
  if (listing.category === 'jobs') return 'pin-jobs';
  return 'pin-offer';
}

function getPopupTypeClass(listing) {
  if (listing.type === 'need') return 'popup-type-need';
  if (listing.category === 'volunteer') return 'popup-type-volunteer';
  if (listing.category === 'donate') return 'popup-type-donate';
  if (listing.category === 'skills') return 'popup-type-skills';
  if (listing.category === 'jobs') return 'popup-type-jobs';
  return 'popup-type-offer';
}

function getTypeLabel(listing) {
  if (listing.type === 'need') return 'Need';
  if (listing.category === 'volunteer') return 'Volunteer';
  if (listing.category === 'donate') return 'Donate';
  if (listing.category === 'jobs') return 'Job';
  if (listing.category === 'skills') return 'Skill Offer';
  return 'Offer';
}

function createMarker(item) {
  const pinClass = getPinColor(item);
  const icon = L.divIcon({
    html: `<div class="map-pin ${pinClass}"><span class="map-pin-inner">${item.emoji}</span></div>`,
    className: '',
    iconSize: L.point(32, 32),
    iconAnchor: [16, 28],
    popupAnchor: [0, -32],
  });

  const marker = L.marker([item.lat, item.lng], { icon });

  const typeClass  = getPopupTypeClass(item);
  const typeLabel  = getTypeLabel(item);

  const popupHtml = `
    <div class="map-popup">
      <span class="map-popup-type ${typeClass}">${typeLabel}</span>
      <span class="map-popup-emoji">${item.emoji}</span>
      <div class="map-popup-title">${item.title}</div>
      <div class="map-popup-desc">${item.desc}</div>
      <div class="map-popup-footer">
        <div class="map-popup-user">
          <div class="map-popup-avatar" style="background:${item.userColor};">${item.user.charAt(0)}</div>
          ${item.user}
        </div>
        <button class="map-popup-contact" onclick="mapContactClick('${item.title}')">Connect</button>
      </div>
    </div>
  `;

  marker.bindPopup(popupHtml, { maxWidth: 260, minWidth: 240 });
  marker._kapwaData = item;
  return marker;
}

function renderMapMarkers(filter) {
  markerCluster.clearLayers();
  activeMarkers = [];

  const filtered = mapListings.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'offer') return item.type === 'offer';
    if (filter === 'need')  return item.type === 'need';
    return item.category === filter;
  });

  filtered.forEach(item => {
    const marker = createMarker(item);
    markerCluster.addLayer(marker);
    activeMarkers.push(marker);
  });

  // Update count
  const countEl = document.getElementById('map-count');
  if (countEl) countEl.textContent = filtered.length;
}

function filterMap(type, btn) {
  currentMapFilter = type;
  document.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMapMarkers(type);
}

function resetMapView() {
  if (kapwaMap) {
    kapwaMap.flyTo(METRO_MANILA_CENTER, 12, { duration: 0.8 });
  }
}

function mapContactClick(title) {
  showToast(`📩 Connecting you with the poster of "${title}"…`, 'info');
}

// Lazy-init the map when the section scrolls into view
function initMapObserver() {
  const mapSection = document.getElementById('live-map');
  if (!mapSection) return;

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Leaflet needs the container to be visible first
      setTimeout(() => {
        initMap();
        if (kapwaMap) kapwaMap.invalidateSize();
      }, 100);
      obs.disconnect();
    }
  }, { threshold: 0.1 });

  obs.observe(mapSection);
}

// Add cluster icon style dynamically (can't be in CSS without knowing the cluster count)
(function injectClusterStyle() {
  const style = document.createElement('style');
  style.textContent = `
    .map-cluster-icon {
      width: 36px; height: 36px;
      border-radius: 50%;
      background: #1A56DB;
      color: white;
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(26,86,219,0.4);
    }
  `;
  document.head.appendChild(style);
})();

