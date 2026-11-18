function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('active');
}

const whatsappNumber = '923703497749';

function submitContactToWhatsApp(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const subject = form.elements.subject.value;
  const message = form.elements.message.value.trim();

  const orderMessage = `Hello AR Watches,\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message || 'I would like to place an inquiry.'}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`, '_blank', 'noopener,noreferrer');
}

const fallbackWatchImage = 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85';

const productCatalog = [
  {
    id: 1,
    brand: 'Tissot',
    name: 'Tissot PRX',
    price: 'Rs. 3,000',
    original: 'Rs. 4,500',
    badge: '33% Off',
    image: 'assets/watches images/Tissot PRX/WhatsApp Image 2026-11-17 at 5.54.42 PM.jpeg',
    images: [
      'assets/watches images/Tissot PRX/WhatsApp Image 2026-11-17 at 5.54.42 PM.jpeg',
      'assets/watches images/Tissot PRX/WhatsApp Image 2026-11-17 at 5.54.43 PM.jpeg',
      'assets/watches images/Tissot PRX/WhatsApp Image 2026-11-17 at 5.54.44 PM.jpeg'
    ],
    description: 'A silver Tissot PRX with a working date and stainless steel quality. Available dial choices include black, white and blue.',
    features: ['Watch: Tissot PRX', 'Color: Silver', 'Dial colors: Black, white or blue', 'Working date', 'Quality: Stainless steel', 'Total price: Rs. 4,500', 'Discount price: Rs. 3,000'],
    sold: 184,
    rating: '4.8',
    reviews: [
      ['Ahmed Raza', 'Lahore', 'Bohat acha design hai. Dial bilkul clear aur wrist par classy lagta hai.'],
      ['Usman Ali', 'Karachi', 'Delivery time par mil gayi aur packing bhi achi thi. Value for money.'],
      ['Hassan Khan', 'Islamabad', 'Date theek chal raha hai aur steel ki finish bhi premium lagti hai.'],
      ['Bilal Ahmed', 'Faisalabad', 'Main ne black dial liya, bohat stylish hai. Recommended.'],
      ['Hamza Shah', 'Rawalpindi', 'Price ke mutabiq quality achi hai. Customer service ne selection mein help ki.'],
      ['Ali Raza', 'Multan', 'Watch lightweight aur comfortable hai. Rozana use ke liye suitable.']
    ]
  },
  {
    id: 2,
    brand: 'Cartier',
    name: 'Cartier Tank',
    price: 'Rs. 1,799',
    original: 'Rs. 3,000',
    badge: '40% Off',
    image: 'assets/watches images/Cartier tank/WhatsApp Image 2026-11-17 at 5.58.37 PM (1).jpeg',
    images: [
      'assets/watches images/Cartier tank/WhatsApp Image 2026-11-17 at 5.58.37 PM (1).jpeg',
      'assets/watches images/Cartier tank/WhatsApp Image 2026-11-17 at 5.58.37 PM.jpeg',
      'assets/watches images/Cartier tank/WhatsApp Image 2026-11-17 at 5.58.38 PM.jpeg'
    ],
    description: 'A classic Cartier Tank style watch with a black leather strap, gold case and silver finish with blue hands.',
    features: ['Watch: Cartier Tank', 'Strap: Black leather', 'Case: Gold', 'Finish: Silver', 'Hands: Blue', 'Total price: Rs. 3,000', 'Discount price: Rs. 1,799'],
    sold: 132,
    rating: '4.7',
    reviews: [
      ['Zain Malik', 'Lahore', 'Black leather strap bohat elegant hai. Party wear ke liye perfect.'],
      ['Saad Iqbal', 'Karachi', 'Gold case aur blue hands ka combination excellent hai.'],
      ['Farhan Ali', 'Sialkot', 'Watch photo jaisi hi thi aur finish kaafi achi hai.'],
      ['Omar Hassan', 'Islamabad', 'Gift ke liye li thi, recipient ko bohat pasand aayi.'],
      ['Adeel Khan', 'Peshawar', 'Leather strap soft hai aur watch ka look premium hai.'],
      ['Taha Butt', 'Gujranwala', 'Price bohat reasonable hai. Delivery aur packing both good.']
    ]
  },
  {
    id: 3,
    brand: 'Tissot',
    name: 'Tissot Sport T',
    price: 'Rs. 1,799',
    original: 'Rs. 2,500',
    badge: '28% Off',
    image: 'assets/watches images/tissot sport t/WhatsApp Image 2026-11-17 at 6.02.10 PM.jpeg',
    images: [
      'assets/watches images/tissot sport t/WhatsApp Image 2026-11-17 at 6.02.10 PM.jpeg',
      'assets/watches images/tissot sport t/WhatsApp Image 2026-11-17 at 6.02.11 PM.jpeg'
    ],
    description: 'A Tissot Sport T watch with a brown leather strap, black and silver case styling, working date and radium hands.',
    features: ['Watch: Tissot Sport T', 'Strap: Brown leather', 'Case: Black and silver', 'Working date', 'Hands: Radium', 'Total price: Rs. 2,500', 'Discount price: Rs. 1,799'],
    sold: 96,
    rating: '4.6',
    reviews: [
      ['Danish Rauf', 'Karachi', 'Radium hands raat mein clearly nazar aate hain. Very useful.'],
      ['Fahad Noor', 'Lahore', 'Brown strap ka look aur watch ka finish bohat acha hai.'],
      ['Shehryar Khan', 'Sargodha', 'Date work kar raha hai aur quality sahi mili hai.'],
      ['Kamran Ali', 'Quetta', 'Office wear ke liye classy aur comfortable watch hai.'],
      ['Adnan Sheikh', 'Rawalpindi', 'Packing safe thi aur delivery bhi jaldi hui.'],
      ['Waqas Hussain', 'Bahawalpur', 'Is price par stylish watch mil jana achi deal hai.']
    ]
  },
  {
    id: 4,
    brand: 'Hublot',
    name: 'Hublot Strap Watch',
    price: 'Rs. 2,250',
    original: 'Rs. 3,000',
    badge: '25% Off',
    image: 'assets/watches images/Hublot strap watch/WhatsApp Image 2026-11-17 at 6.09.33 PM.jpeg',
    images: [
      'assets/watches images/Hublot strap watch/WhatsApp Image 2026-11-17 at 6.09.33 PM.jpeg',
      'assets/watches images/Hublot strap watch/WhatsApp Image 2026-11-17 at 6.09.34 PM.jpeg'
    ],
    description: 'A chronographic Hublot strap watch with a working date, premium leather and silicone straps and a Hublot master lock.',
    features: ['Watch: Hublot Strap Watch', 'Design: Chronograph', 'Working date', 'Straps: Premium leather and silicone', 'Lock: Hublot master lock', 'Total price: Rs. 3,000', 'Discount price: Rs. 2,250'],
    sold: 118,
    rating: '4.7',
    reviews: [
      ['Umar Farooq', 'Lahore', 'Chronograph design bohat impressive hai aur straps comfortable hain.'],
      ['Irfan Ali', 'Karachi', 'Master lock strong hai aur watch wrist par secure rehti hai.'],
      ['Zohaib Ahmed', 'Islamabad', 'Silicone strap daily use ke liye perfect hai.'],
      ['Naveed Khan', 'Faisalabad', 'Date function theek chal raha hai. Look premium lagta hai.'],
      ['Rizwan Shah', 'Peshawar', 'Delivery fast mili aur watch bilkul new thi.'],
      ['Sameer Malik', 'Gujrat', 'Stylish watch hai, price ke hisaab se quality achi lagi.']
    ]
  },
  {
    id: 5,
    brand: 'Rivoli',
    name: 'Rivoli Master Lock Watch',
    price: 'Rs. 2,250',
    original: '',
    badge: 'Featured',
    image: 'assets/watches images/rivoli/WhatsApp Image 2026-11-17 at 6.17.54 PM.jpeg',
    images: [
      'assets/watches images/rivoli/WhatsApp Image 2026-11-17 at 6.17.54 PM.jpeg'
    ],
    description: 'A Rivoli watch with a gold case, working date and day, premium leather strap, radium hands and master lock.',
    features: ['Watch: Rivoli', 'Case: Gold', 'Working date and day', 'Strap: Premium leather', 'Hands: Radium', 'Lock: Master lock', 'Discount price: Rs. 2,250'],
    sold: 74,
    rating: '4.5',
    reviews: [
      ['Talha Mahmood', 'Lahore', 'Gold case bohat attractive hai aur leather strap soft hai.'],
      ['Shahzaib Khan', 'Karachi', 'Date aur day dono theek work karte hain.'],
      ['Abdullah Yousaf', 'Sialkot', 'Radium hands raat mein visible hain. Achhi watch hai.'],
      ['Shoaib Malik', 'Islamabad', 'Formal wear ke liye classy choice hai.'],
      ['Usama Tariq', 'Rawalpindi', 'Master lock strong lagta hai aur fitting comfortable hai.'],
      ['Muneeb Ali', 'Multan', 'Watch ka look photos se bhi acha hai.']
    ]
  },
  {
    id: 6,
    brand: 'Rolex',
    name: 'Two-Tone Silver and Gold Date Watch',
    price: 'Rs. 2,950',
    original: 'Rs. 4,200',
    badge: '30% Off',
    image: 'assets/watches images/rolex/WhatsApp Image 2026-11-17 at 5.52.10 PM (1).jpeg',
    images: [
      'assets/watches images/rolex/WhatsApp Image 2026-11-17 at 5.52.10 PM (1).jpeg',
      'assets/watches images/rolex/WhatsApp Image 2026-11-17 at 5.52.10 PM.jpeg',
      'assets/watches images/rolex/WhatsApp Image 2026-11-17 at 5.52.11 PM.jpeg',
      'assets/watches images/rolex/WhatsApp Image 2026-11-17 at 5.52.12 PM.jpeg'
    ],
    description: 'A premium Rolex-style two-tone watch with a silver and gold finish, working date display, stainless steel construction and water-resistant design.',
    features: ['Watch: Rolex', 'Color: Two-tone silver and gold', 'Working date display', 'Stainless steel', 'Water resistant', 'Total price: Rs. 4,200', 'Discount price: Rs. 2,950'],
    sold: 156,
    rating: '4.8',
    reviews: [
      ['Muhammad Asif', 'Lahore', 'Silver aur gold combination bohat premium lagta hai.'],
      ['Rehan Ahmed', 'Karachi', 'Date working hai aur weight bhi theek hai. Satisfied.'],
      ['Kashif Javed', 'Islamabad', 'Office functions ke liye excellent watch hai.'],
      ['Amir Hussain', 'Faisalabad', 'Packaging achi thi aur watch bilkul as described mili.'],
      ['Noman Tariq', 'Peshawar', 'Stainless steel ki finish strong aur shiny hai.'],
      ['Arsalan Iqbal', 'Sahiwal', 'Price ke mutabiq design bohat stylish hai. Recommended.']
    ]
  }
];

function getProductById(id) {
  return productCatalog.find((product) => Number(product.id) === Number(id)) || productCatalog[0];
}

function renderStorefrontCards(products = productCatalog) {
  document.querySelectorAll('.products-grid').forEach((grid) => {
    grid.innerHTML = products.map((product) => `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-image">
          <span class="badge sale">${product.badge}</span>
          <img src="${product.image}" alt="${product.name}" onerror="this.src='${fallbackWatchImage}'">
        </div>
        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price">
            <span class="current">${product.price}</span>
            ${product.original ? `<span class="original">${product.original}</span>` : ''}
          </div>
          <div class="card-sales-row">
            <span class="card-rating">★ ${product.rating}</span>
            <span>${product.sold} sold</span>
          </div>
          <a href="article.html?id=${product.id}" class="btn btn-dark btn-sm">View Details</a>
        </div>
      </article>
    `).join('');
  });

  bindRenderedProductCards();
}

function bindRenderedProductCards() {
  document.querySelectorAll('.products-grid .product-card').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      window.location.href = `article.html?id=${card.dataset.productId}`;
    });
  });
}

function setupShopControls() {
  const searchInput = document.getElementById('productSearch');
  const brandFilter = document.getElementById('brandFilter');
  const sortSelect = document.getElementById('sortProducts');
  const resultsText = document.getElementById('productResults');
  const shopGrid = document.querySelector('.shop-toolbar')?.closest('section')?.querySelector('.products-grid');

  if (!searchInput || !brandFilter || !sortSelect || !shopGrid) return;

  const urlQuery = new URLSearchParams(window.location.search).get('q') || '';
  searchInput.value = urlQuery;

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedBrand = brandFilter.value;
    let filtered = productCatalog.filter((product) => {
      const matchesSearch = !query || [product.brand, product.name, product.description, ...product.features]
        .join(' ')
        .toLowerCase()
        .includes(query);
      const matchesBrand = selectedBrand === 'All Brands' || product.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });

    if (sortSelect.value === 'low') {
      filtered.sort((a, b) => Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, '')));
    } else if (sortSelect.value === 'high') {
      filtered.sort((a, b) => Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, '')));
    }

    renderStorefrontCards(filtered);
    resultsText.textContent = filtered.length === 1 ? '1 watch found' : `${filtered.length} watches found`;

    const newUrl = new URL(window.location.href);
    if (query) newUrl.searchParams.set('q', query);
    else newUrl.searchParams.delete('q');
    window.history.replaceState({}, '', newUrl);
  }

  searchInput.addEventListener('input', applyFilters);
  brandFilter.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  applyFilters();
}

function renderArticlePage() {
  const articleWrap = document.getElementById('articleDetail');
  if (!articleWrap) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get('id') || 1);

  const productImages = product.images && product.images.length ? product.images : [product.image];

  articleWrap.innerHTML = `
    <div class="article-layout">
      <div class="article-gallery">
        <div class="article-image-box">
          <button type="button" class="gallery-arrow gallery-prev" aria-label="Previous image">&#10094;</button>
          <img id="articleMainImage" src="${productImages[0]}" alt="${product.name}" onerror="this.src='${fallbackWatchImage}'">
          <button type="button" class="gallery-arrow gallery-next" aria-label="Next image">&#10095;</button>
        </div>
        <div class="gallery-thumbnails">
          ${productImages.map((image, index) => `
            <button type="button" class="gallery-thumb ${index === 0 ? 'active' : ''}" data-image-index="${index}" aria-label="View image ${index + 1}">
              <img src="${image}" alt="${product.name} view ${index + 1}" onerror="this.src='${fallbackWatchImage}'">
            </button>
          `).join('')}
        </div>
      </div>
      <div class="article-content">
        <p class="eyebrow">${product.brand}</p>
        <h1>${product.name}</h1>
        <div class="product-price article-price">
          <span class="current">${product.price}</span>
          ${product.original ? `<span class="original">${product.original}</span>` : ''}
        </div>
        <div class="article-badge">${product.badge}</div>
        <div class="article-sales-row">
          <span class="article-rating">★ ${product.rating}</span>
          <span>${product.reviews.length * 18 + product.sold} customer ratings</span>
          <span><strong>${product.sold}</strong> sold</span>
        </div>
        <p>${product.description}</p>

        <ul class="article-features">
          ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>

        <div class="article-actions">
          <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi, I want to order the ' + product.name)}" target="_blank" class="btn btn-primary">Order on WhatsApp</a>
          <a href="shop.html" class="btn btn-outline-dark">Back to Shop</a>
        </div>
      </div>
    </div>
    <section class="reviews-section">
      <div class="reviews-header">
        <div>
          <p class="eyebrow">Customer Reviews</p>
          <h2>Pakistan Customer Feedback</h2>
        </div>
        <div class="reviews-score">
          <strong>${product.rating}</strong>
          <span>★★★★★</span>
          <small>${product.reviews.length} recent reviews</small>
        </div>
      </div>
      <div class="reviews-grid">
        ${product.reviews.map((review) => `
          <article class="review-card">
            <div class="review-stars">★★★★★</div>
            <p>“${review[2]}”</p>
            <div class="review-author">
              <strong>${review[0]}</strong>
              <span>${review[1]}, Pakistan</span>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  const mainImage = document.getElementById('articleMainImage');
  const thumbnails = articleWrap.querySelectorAll('.gallery-thumb');
  const previousButton = articleWrap.querySelector('.gallery-prev');
  const nextButton = articleWrap.querySelector('.gallery-next');
  let currentImageIndex = 0;

  function showImage(index) {
    currentImageIndex = (index + productImages.length) % productImages.length;
    mainImage.src = productImages[currentImageIndex];
    thumbnails.forEach((thumbnail, thumbnailIndex) => {
      thumbnail.classList.toggle('active', thumbnailIndex === currentImageIndex);
    });
  }

  previousButton.addEventListener('click', () => showImage(currentImageIndex - 1));
  nextButton.addEventListener('click', () => showImage(currentImageIndex + 1));
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => showImage(Number(thumbnail.dataset.imageIndex)));
  });
}

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    if (img.dataset.fallbackApplied !== 'true') {
      img.dataset.fallbackApplied = 'true';
      img.src = fallbackWatchImage;
    }
  });
});

const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
  const productId = card.dataset.productId || index + 1;
  card.dataset.productId = productId;
  card.style.cursor = 'pointer';
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    window.location.href = `article.html?id=${productId}`;
  });
});

const productButtons = document.querySelectorAll('.product-card .btn');
productButtons.forEach((button, index) => {
  const card = button.closest('.product-card');
  const productId = card ? card.dataset.productId || index + 1 : index + 1;
  button.setAttribute('href', `article.html?id=${productId}`);
});

renderStorefrontCards();
setupShopControls();
renderArticlePage();

// Re-bind cards rendered from the product catalog.
const renderedProductCards = document.querySelectorAll('.product-card');
renderedProductCards.forEach((card) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    window.location.href = `article.html?id=${card.dataset.productId}`;
  });
});

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Keep all WhatsApp and email links in sync across static pages.
function normalizeContactLinks() {
  document.querySelectorAll('a[href*="923001234567"]').forEach((link) => {
    link.href = link.href.replace('923001234567', whatsappNumber);
  });

  document.querySelectorAll('a[href="mailto:hello@arwatches.pk"], a[href="mailto:hello@arwatches.pk"]').forEach((link) => {
    link.href = 'mailto:arwatches09@gmail.com';
    link.textContent = 'arwatches09@gmail.com';
  });
}

normalizeContactLinks();
