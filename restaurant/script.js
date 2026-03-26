/* ============================================================
   SWAAD - Restaurant Web App | script.js
   ============================================================ */

// ── Menu Data ────────────────────────────────────────────────
const menuItems = [
    {
        id: 1, title: "Paneer Butter Masala", category: "mains", price: 15.99, veg: true,
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=400&auto=format&fit=crop",
        desc: "Fresh paneer cubes in a rich, creamy tomato-butter sauce with aromatic spices."
    },
    {
        id: 2, title: "Samosa Chaat", category: "starters", price: 8.99, veg: true,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop",
        desc: "Crispy samosas topped with spicy chickpeas, yogurt, and tangy chutneys."
    },
    {
        id: 3, title: "Gulab Jamun", category: "desserts", price: 6.99, veg: true,
        img: "https://images.unsplash.com/photos/a-plate-of-food-2oJ4eGRPqrE",
        desc: "Soft milk-solid dumplings soaked in rose-flavored sugar syrup. Served warm."
    },
    {
        id: 4, title: "Mango Lassi", category: "drinks", price: 4.99, veg: true,
        img: "https://images.unsplash.com/photo-1549429107-160fa800b708?q=80&w=400&auto=format&fit=crop",
        desc: "Refreshing yogurt-based drink blended with sweet Alphonso mango pulp."
    },
    {
        id: 5, title: "Paneer Tikka", category: "starters", price: 12.99, veg: true,
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=400&auto=format&fit=crop",
        desc: "Marinated cottage cheese cubes grilled to perfection in a live tandoor."
    },
    {
        id: 6, title: "Veg Dum Biryani", category: "mains", price: 14.99, veg: true,
        img: "https://images.unsplash.com/photo-1543362906-acfc16c623a2?q=80&w=400&auto=format&fit=crop",
        desc: "Aromatic basmati rice slow-cooked with fresh garden vegetables and whole spices."
    },
    {
        id: 7, title: "Rasmalai", category: "desserts", price: 7.50, veg: true,
        img: "https://images.unsplash.com/photo-1610453308890-a7d18a096c43?q=80&w=400&auto=format&fit=crop",
        desc: "Soft paneer balls soaked in chilled, sweetened saffron milk garnished with pistachios."
    },
    {
        id: 8, title: "Masala Chai", category: "drinks", price: 3.50, veg: true,
        img: "https://images.unsplash.com/photo-1619861613943-7f83a45c38ac?q=80&w=400&auto=format&fit=crop",
        desc: "Traditional Indian spiced tea brewed with milk, ginger, cardamom & cinnamon."
    },
    {
        id: 9, title: "Dal Makhani", category: "mains", price: 13.99, veg: true,
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop",
        desc: "Slow-cooked black lentils in a rich,1 buttery tomato gravy. A North Indian classic."
    },
    {
        id: 10, title: "Pani Puri", category: "starters", price: 6.99, veg: true,
        img: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?q=80&w=400&auto=format&fit=crop",
        desc: "Crispy hollow puris filled with spiced water, chickpeas and tamarind chutney."
    },
    {
        id: 11, title: "Kulfi Falooda", category: "desserts", price: 8.50, veg: true,
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=400&auto=format&fit=crop",
        desc: "Traditional Indian ice cream with falooda noodles, rose syrup, and basil seeds."
    },
    {
        id: 12, title: "Fresh Lime Soda", category: "drinks", price: 2.99, veg: true,
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop",
        desc: "Chilled sparkling lime soda with black salt, sugar, and mint. Sweet or salty."
    }
];

// ── Cart State ───────────────────────────────────────────────
let cart = [];

// ── DOM References ───────────────────────────────────────────
const menuContainer = document.getElementById('menu-container');
const filterBtns = document.querySelectorAll('#menu-flters li');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartItemsEl = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const cartToast = document.getElementById('cartToast');
const cartToastMsg = document.getElementById('cartToastMsg');
const backToTop = document.getElementById('backToTop');
const mainNav = document.getElementById('mainNav');
const preloader = document.getElementById('preloader');
const menuSearch = document.getElementById('menuSearch');

// ── Preloader ────────────────────────────────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1200);
});

// ── Render Menu ──────────────────────────────────────────────
function renderMenu(items) {
    if (!items.length) {
        menuContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <p class="text-muted fs-5">No dishes found. Try a different search.</p>
            </div>`;
        return;
    }
    menuContainer.innerHTML = items.map(item => `
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex">
            <div class="menu-card w-100">
                <div class="menu-card-img-wrap">
                    <img src="${item.img}" class="menu-card-img" alt="${item.title}" loading="lazy">
                    <span class="menu-veg-badge ${item.veg ? 'veg' : 'non-veg'}">
                        ${item.veg ? '🟢 Veg' : '🔴 Non-Veg'}
                    </span>
                </div>
                <div class="menu-card-body">
                    <h5>${item.title}</h5>
                    <p>${item.desc}</p>
                    <div class="menu-card-footer">
                        <span class="menu-price">₹${(item.price * 85).toFixed(0)}</span>
                        <button class="add-cart-btn" onclick="addToCart(${item.id})" title="Add to Cart" aria-label="Add ${item.title} to cart">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initial render
window.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuItems);
    setupGallery();
    setupScrollReveal();
    setMinDate();
});

// ── Menu Filter ──────────────────────────────────────────────
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('filter-active'));
        btn.classList.add('filter-active');
        const cat = btn.dataset.filter;
        const filtered = cat === 'all' ? menuItems : menuItems.filter(i => i.category === cat);
        renderMenu(filtered);
        if (menuSearch) menuSearch.value = '';
    });
});

// ── Menu Search ──────────────────────────────────────────────
if (menuSearch) {
    menuSearch.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        filterBtns.forEach(b => b.classList.remove('filter-active'));
        document.querySelector('[data-filter="all"]').classList.add('filter-active');
        const filtered = q
            ? menuItems.filter(i => i.title.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q))
            : menuItems;
        renderMenu(filtered);
    });
}

// ── Cart Functions ───────────────────────────────────────────
function addToCart(id) {
    const item = menuItems.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
    showToast(`${item.title} added to cart!`);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    cartBadge.textContent = totalItems;

    if (!cart.length) {
        cartItemsEl.innerHTML = '<p class="text-center text-muted mt-4">Your cart is empty</p>';
        cartFooter.style.display = 'none';
        return;
    }

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
            <img src="${item.img}" alt="${item.title}">
            <div class="cart-item-info">
                <h6>${item.title}</h6>
                <span class="price">₹${(item.price * 85 * item.qty).toFixed(0)}</span>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, i) => sum + (i.price * 85 * i.qty), 0);
    cartTotal.textContent = `₹${total.toFixed(0)}`;
    cartFooter.style.display = 'block';
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    updateCartUI();
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

function checkout() {
    if (!cart.length) return;
    showToast('🎉 Order placed! Thank you!');
    cart = [];
    updateCartUI();
    toggleCart();
}

// ── Toast ────────────────────────────────────────────────────
function showToast(msg) {
    cartToastMsg.textContent = msg;
    cartToast.classList.add('show');
    setTimeout(() => cartToast.classList.remove('show'), 3000);
}

// ── Gallery Lightbox ─────────────────────────────────────────
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

function closeLightbox() {
    document.getElementById('lightboxModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Navbar - Active link & scroll effects ────────────────────
window.addEventListener('scroll', () => {
    // Navbar shrink
    if (window.scrollY > 50) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }

    // Back to Top
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNavLink();

    // Scroll Reveal
    revealElements();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 80) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
}

// ── Scroll Reveal ────────────────────────────────────────────
function setupScrollReveal() {
    revealElements();
}

function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}

// ── Back to Top ──────────────────────────────────────────────
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Reservation Form ─────────────────────────────────────────
function setMinDate() {
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
}

const reservationForm = document.getElementById('reservationForm');
const reservationSuccess = document.getElementById('reservationSuccess');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value.trim();
        const email = document.getElementById('resEmail').value.trim();
        const phone = document.getElementById('resPhone').value.trim();
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const guests = document.getElementById('resGuests').value;

        if (!name || !email || !phone || !date || !time || !guests) {
            showToast('⚠️ Please fill all required fields!');
            return;
        }

        // Simulate booking
        const btn = document.getElementById('bookBtn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Booking...';
        btn.disabled = true;

        setTimeout(() => {
            reservationForm.style.display = 'none';
            reservationSuccess.style.display = 'block';
        }, 1500);
    });
}

function resetForm() {
    reservationForm.reset();
    reservationForm.style.display = 'block';
    reservationSuccess.style.display = 'none';
    const btn = document.getElementById('bookBtn');
    btn.innerHTML = '<i class="fas fa-calendar-check me-2"></i>Confirm Reservation';
    btn.disabled = false;
    setMinDate();
}

// ── Newsletter ───────────────────────────────────────────────
function subscribeNewsletter(e) {
    e.preventDefault();
    showToast('📧 Subscribed successfully!');
    e.target.reset();
}

// ── Keyboard: Close Lightbox on ESC ─────────────────────────
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        if (cartSidebar.classList.contains('open')) toggleCart();
    }
});
