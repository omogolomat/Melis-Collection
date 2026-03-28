// ============================================
// MELIS COLLECTION - Main JavaScript (Full)
// ============================================

const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ============================================
// HAMBURGER MENU
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('mobile-open')) {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// ACTIVE NAV LINK
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ============================================
// FADE IN ON SCROLL
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;top:90px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const bg = type === 'success' ? 'linear-gradient(135deg,#E8639A,#C9A84C)' : type === 'info' ? 'linear-gradient(135deg,#FF85B3,#FFB3D1)' : '#e74c3c';
  toast.style.cssText = `background:${bg};color:white;padding:12px 20px;border-radius:25px;font-family:'Nunito',sans-serif;font-size:0.88rem;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,0.15);transform:translateX(120%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);pointer-events:auto;max-width:280px;`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
  setTimeout(() => {
    toast.style.transform = 'translateX(120%)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backTop = document.createElement('button');
backTop.id = 'backToTop';
backTop.innerHTML = '↑';
backTop.title = 'Back to top';
backTop.style.cssText = 'position:fixed;bottom:100px;left:24px;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8639A,#C9A84C);color:white;border:none;font-size:1.2rem;cursor:pointer;z-index:998;opacity:0;pointer-events:none;transition:all 0.3s ease;box-shadow:0 4px 15px rgba(232,99,154,0.4);font-family:sans-serif;';
document.body.appendChild(backTop);

window.addEventListener('scroll', () => {
  const show = window.scrollY > 400;
  backTop.style.opacity = show ? '1' : '0';
  backTop.style.pointerEvents = show ? 'auto' : 'none';
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Back to top! ✨', 'info');
});

// ============================================
// TESTIMONIAL SLIDER
// ============================================
const track = document.querySelector('.testimonials-track');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

if (track) {
  const scrollAmount = 340;
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (track.scrollLeft <= 10) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });

  let autoScroll = setInterval(() => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 4500);

  track.addEventListener('mouseenter', () => clearInterval(autoScroll));
  track.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 4500);
  });
}

// ============================================
// PRODUCT MODAL
// ============================================
const modalOverlay = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close');

function openModal(product) {
  if (!modalOverlay) return;
  const waLink = getWALink(product);
  const detailsHTML = (product.details || []).map(d =>
    `<div class="modal-detail-item"><span class="check">✦</span> ${d}</div>`
  ).join('');

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalBadge').textContent = product.badge || 'Melis Collection';
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.description;
  document.getElementById('modalPrice').innerHTML = `${product.price} <small>WhatsApp to order</small>`;
  document.getElementById('modalDetails').innerHTML = detailsHTML;
  document.getElementById('modalBuyBtn').href = waLink;
  document.getElementById('modalBuyBtn').onclick = () => showToast('Opening WhatsApp... 💬');

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============================================
// RENDER PRODUCT CARD
// ============================================
function renderProductCard(product) {
  const safeProduct = JSON.stringify(product).replace(/"/g, '&quot;');
  return `
    <div class="product-card fade-in" data-tags="${(product.tags||[]).join(',')}" onclick="openModal(${safeProduct})">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%23FFD6E7%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2240%22>🌸</text></svg>'">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <div class="product-img-overlay"><span>View Details</span></div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-short-desc">${product.shortDesc}</p>
        <div class="product-price">${product.price}</div>
        <div class="product-footer">
          <button class="btn-view" onclick="event.stopPropagation(); openModal(${safeProduct})">
            View Details →
          </button>
          <a class="btn-quick-buy" href="${getWALink(product)}" target="_blank" onclick="event.stopPropagation(); showToast('Opening WhatsApp... 💬')">
            Buy Now 💬
          </a>
        </div>
      </div>
    </div>`;
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !PRODUCTS[category]) return;
  container.innerHTML = PRODUCTS[category].map(renderProductCard).join('');
  container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  // Setup filters after render
  setupFilters(category, containerId);
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================
function setupFilters(category, containerId) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      filterProducts(category, containerId, filter);
      showToast(filter === 'all' ? 'Showing all items ✨' : `Filtered: ${btn.textContent} 🌸`, 'info');
    });
  });
}

function filterProducts(category, containerId, filter) {
  const container = document.getElementById(containerId);
  if (!container || !PRODUCTS[category]) return;

  const filtered = filter === 'all'
    ? PRODUCTS[category]
    : PRODUCTS[category].filter(p => p.tags && p.tags.includes(filter));

  container.style.transition = 'opacity 0.2s ease';
  container.style.opacity = '0';
  setTimeout(() => {
    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-light);">
        <div style="font-size:3rem;margin-bottom:1rem;">🌸</div>
        <p style="font-size:1.1rem;">No products found in this category.</p>
        <p style="font-size:0.9rem;margin-top:0.5rem;">Try a different filter or <a href="https://wa.me/${WA_NUMBER}" target="_blank" style="color:var(--pink-accent);font-weight:700;">ask us on WhatsApp!</a></p>
      </div>`;
    } else {
      container.innerHTML = filtered.map(renderProductCard).join('');
      container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
    container.style.opacity = '1';
  }, 200);
}

// ============================================
// CHAT WIDGET
// ============================================
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
const chatCloseBtn = document.querySelector('.chat-close');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

const BOT_REPLIES = [
  "Hi there! 💕 Welcome to Melis Collection! How can I help you today?",
  "Great question! For the fastest response, WhatsApp us directly — we reply within hours! 📱",
  "We'd love to help you find the perfect item. Check out our collections above or ask us on WhatsApp! 🛍️",
  "Custom orders are always welcome! Message us on WhatsApp with your requirements and we'll make it happen! ✨",
  "Thank you so much! We're so glad you're here. Is there anything else I can help with? 🌸"
];
let botIdx = 0;
let chatOpen = false;

function addBotMessage(text) {
  if (!chatMessages) return;
  const div = document.createElement('div');
  div.className = 'chat-bubble bubble-bot';
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addUserMessage(text) {
  if (!chatMessages) return;
  const div = document.createElement('div');
  div.className = 'chat-bubble bubble-user';
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function toggleChat() {
  chatOpen = !chatOpen;
  if (!chatWidget) return;
  chatWidget.classList.toggle('open', chatOpen);
  if (chatOpen && chatMessages && chatMessages.children.length === 0) {
    setTimeout(() => addBotMessage("Hi there! 💕 Welcome to Melis Collection! How can I help you today? Feel free to ask about any of our products, or tap below to chat instantly on WhatsApp!"), 300);
  }
}

function sendChatMessage() {
  if (!chatInput || !chatInput.value.trim()) return;
  const msg = chatInput.value.trim();
  addUserMessage(msg);
  chatInput.value = '';
  setTimeout(() => {
    addBotMessage(BOT_REPLIES[botIdx % BOT_REPLIES.length]);
    botIdx++;
  }, 800);
}

if (chatToggle) chatToggle.addEventListener('click', toggleChat);
if (chatCloseBtn) chatCloseBtn.addEventListener('click', () => { chatOpen = false; chatWidget?.classList.remove('open'); });
if (chatSend) chatSend.addEventListener('click', sendChatMessage);
if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    const name = contactForm.querySelector('[name="name"]')?.value || '';
    const subject = contactForm.querySelector('[name="subject"]')?.value || 'General Enquiry';
    const message = contactForm.querySelector('[name="message"]')?.value || '';

    const waMsg = encodeURIComponent(`Hi Melis Collection! 💕\n\nName: ${name}\nSubject: ${subject}\n\nMessage: ${message}`);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

    btn.textContent = 'Sending... 💌';
    btn.disabled = true;
    setTimeout(() => {
      showToast('Message sent! Opening WhatsApp... 💬');
      window.open(waUrl, '_blank');
      btn.textContent = '✓ Sent! Thank you 🌸';
      setTimeout(() => {
        btn.textContent = 'Send Message 💌';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    }, 800);
  });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, duration / steps);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => counterObserver.observe(el));

// ============================================
// SOCIAL LINKS — show coming soon toast
// ============================================
document.querySelectorAll('.social-btn[href="#"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Social page coming soon! Follow us on WhatsApp 💬', 'info');
  });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
