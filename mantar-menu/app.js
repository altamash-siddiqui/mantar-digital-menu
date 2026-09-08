const MENU_DATA = [
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Jal Jeera", price: "35" },
      { name: "Chaach", price: "110" },
      { name: "Soft Drink", price: "99" },
      { name: "Kulhad Lassi", price: "120" },
      { name: "Fresh Lime", price: "169" },
      { name: "Mineral Water", price: "60" },
    ]
  },
  {
    id: "cold-blends",
    name: "Cold Blends",
    items: [
      { name: "Cold Coffee", price: "215" },
      { name: "Ice Tea", price: "199" },
      { name: "Cola Mint Mojito", price: "215" },
      { name: "Classic Mint Mojito", price: "215" },
      { name: "Blue Ocean", price: "215" },
      { name: "Passion Fruit Cooler", price: "215" },
      { name: "Kala Khatta", price: "231" },
      { name: "Aam Panna Cooler", price: "231" },
    ]
  },
  {
    id: "fusion",
    name: "Fusion",
    items: [
      { name: "Mango Smoothie", price: "231" },
      { name: "Cranberry Colada", price: "236" },
      { name: "Berry Blast", price: "236" },
      { name: "Virgin Pinacolada", price: "236" },
    ]
  },
  {
    id: "shakes",
    name: "Shakes",
    items: [
      { name: "All Shakes", price: "229" },
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    items: [
      { name: "Americano", price: "198" },
      { name: "Cappuccino", price: "221" },
      { name: "Cafe Latte", price: "221" },
      { name: "Cafe Mocha", price: "245" },
    ]
  },
  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Cream of Tomato and Basil", price: "234" },
      { name: "Manchow — Veg / Non Veg", price: "231 / 270" },
      { name: "Lemon Coriander — Veg / Non Veg", price: "231 / 270" },
      { name: "Peking Soup — Veg / Non Veg", price: "231 / 270" },
      { name: "Hot and Sour — Veg / Non Veg", price: "210 / 270" },
      { name: "Sweet Corn — Veg / Non Veg", price: "210 / 250" },
      { name: "Himalayan Thupka — Veg / Non Veg", price: "210 / 250" },
    ]
  },
  {
    id: "continental",
    name: "Continental",
    items: [
      { name: "Chilli Garlic Cheese Toast", price: "285" },
      { name: "French Fries Peri Peri", price: "285" },
      { name: "Saute Vegetable", price: "449" },
      { name: "Grilled Fish with Lemon Butter Sauce", price: "790", description: "Along with steam rice and saute vegetables" },
      { name: "Grilled Chicken Breast Single / Double", price: "670 / 790", description: "Along with steam rice and saute vegetables" },
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Penne Arabita Pasta", price: "490" },
      { name: "Penne Alfredo — Veg / Non Veg", price: "525 / 585" },
      { name: "Penne Pasta in Mixed Sauce", price: "545" },
      { name: "Agli Olio", price: "545" },
    ]
  },
  {
    id: "burger",
    name: "Burger",
    items: [
      { name: "Classic Vegetable Burger", price: "225" },
      { name: "Chicken Burger", price: "260" },
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { name: "Grilled Vegetable and Cheese Sandwich", price: "330" },
      { name: "Paneer Tikka Sandwich", price: "340" },
      { name: "Mantar Classic Veg Club", price: "375" },
      { name: "Grilled Chicken Tikka Sandwich", price: "375" },
      { name: "Mantar Classic Chicken Sandwich", price: "395" },
    ]
  },
  {
    id: "mantar-kathi-roll",
    name: "Mantar Kathi Roll",
    items: [
      { name: "Paneer", price: "330" },
      { name: "Chicken", price: "360" },
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Sicilian Margherita", price: "380" },
      { name: "Pizza Americana", price: "396" },
      { name: "Absolute Veggies", price: "410" },
      { name: "Tandoori Paneer Pizza", price: "449" },
      { name: "Makhni Paneer Pizza", price: "449" },
      { name: "Chicken Makhni Pizza", price: "546" },
      { name: "Chicken Tikka Pizza", price: "546" },
    ]
  },
  {
    id: "south-indian",
    name: "South Indian",
    items: [
      { name: "Butter Masala Dosa", price: "282" },
    ]
  },
  {
    id: "chinese-momos",
    name: "Chinese — Momos",
    items: [
      { name: "Steamed — Vegetable / Chicken", price: "315 / 356" },
      { name: "Fried — Vegetable / Chicken", price: "330 / 375" },
    ]
  },
  {
    id: "chinese-starters",
    name: "Chinese — Starters",
    items: [
      { name: "Crispy Corn Kernels", price: "455" },
      { name: "Honey Chilli Potato", price: "380" },
      { name: "Chilli Paneer", price: "489" },
      { name: "Pan Fried Chilli Paneer", price: "525" },
      { name: "Traditional Spring Roll", price: "435" },
      { name: "Veg Manchurian Dry", price: "420" },
      { name: "Mushroom Baby Corn Dry", price: "490" },
      { name: "Crispy Lotus Root", price: "590" },
      { name: "Pan Fried Chilli Fish", price: "650" },
      { name: "Mantar Chilli Prawns", price: "865" },
      { name: "BBQ Chicken Wings", price: "535" },
      { name: "Chicken Lollipop", price: "545" },
      { name: "Chilli Chicken Dry", price: "525" },
      { name: "Chef Special Chilli Chicken", price: "570" },
    ]
  },
  {
    id: "chinese-mains",
    name: "Chinese — Mains",
    items: [
      { name: "Stir Fry Vegetable in Hot Garlic Sauce", price: "455" },
      { name: "Chilli Paneer Gravy", price: "525" },
      { name: "Vegetable Manchurian Gravy", price: "445" },
      { name: "Pan Fried Noodles with Veg Gravy", price: "545" },
      { name: "Mushroom Chilli Gravy", price: "490" },
      { name: "Asian Green Black Beans Sauce", price: "545" },
      { name: "Chicken in Hot Garlic Sauce", price: "570" },
      { name: "Chicken in Schezwan Sauce", price: "570" },
      { name: "Chilli Chicken Gravy", price: "570" },
      { name: "Chicken Hongkong Style", price: "570" },
      { name: "Pan Fried Noodles with Chicken Gravy", price: "610" },
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      { name: "Veg Hakka Noodles", price: "410" },
      { name: "Chilli Garlic Noodles", price: "420" },
      { name: "Pad Thai Noodles", price: "450" },
      { name: "Egg Hakka Noodles", price: "430" },
      { name: "Chicken Hakka Noodles", price: "455" },
      { name: "Chicken Schezwan Noodle", price: "455" },
      { name: "American Chopsey Chicken", price: "490" },
    ]
  },
  {
    id: "thai",
    name: "Thai",
    items: [
      { name: "Burmese Khao Suye", price: "249" },
      { name: "Veg Green Thai Curry with Steam Rice", price: "549" },
      { name: "Chicken Red Thai Curry with Steam Rice", price: "649" },
    ]
  },
  {
    id: "chinese-rice",
    name: "Rice",
    items: [
      { name: "Vegetable Fried Rice", price: "410" },
      { name: "Mushroom Paneer Fried Rice", price: "455" },
      { name: "Burnt Garlic Fried Rice", price: "455" },
      { name: "Egg Fried Rice", price: "470" },
      { name: "Chicken Fried Rice", price: "490" },
      { name: "Chicken Mushroom Fried Rice", price: "499" },
    ]
  },
  {
    id: "indian-starters",
    name: "Indian — Starters",
    items: [
      { name: "Dahi Ke Kabab", price: "420" },
      { name: "Peshawari Paneer Tikka", price: "455" },
      { name: "Hara Bhara Kebab", price: "390" },
      { name: "Shami Kebab", price: "390" },
      { name: "Paneer Malai Tikka", price: "455" },
      { name: "Paneer Pudina Tikka", price: "455" },
      { name: "Tandoori Malai Chaap", price: "430" },
      { name: "Mixed Veg Kebab Platter", price: "720" },
      { name: "Amritsari Macchi", price: "590" },
      { name: "Tandoori Fish Tikka", price: "605" },
      { name: "Kalmi Kebab", price: "605" },
      { name: "Pilli Mirch Ka Murgh Tikka", price: "545" },
      { name: "Tandoori Murgh — Half / Full", price: "545 / 868" },
      { name: "Chicken Seekh Peshawari", price: "685" },
      { name: "Mutton Seekh Peshawari", price: "715" },
      { name: "Mixed Non Veg Platter", price: "915" },
    ]
  },
  {
    id: "salad",
    name: "Salad",
    items: [
      { name: "Garden Green Salad", price: "295" },
      { name: "Kachumbar Salad", price: "295" },
      { name: "Caesar Salad — Veg / Non Veg", price: "330 / 390" },
    ]
  },
  {
    id: "raita",
    name: "Raita",
    items: [
      { name: "Pineapple Raita", price: "270" },
      { name: "Mixed Vegetable Raita", price: "260" },
      { name: "Boondi Raita", price: "225" },
    ]
  },
  {
    id: "thali-meal",
    name: "Thali Meal",
    items: [
      { name: "Vegetarian Thali", price: "460" },
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    items: [
      { name: "Vegetable Biryani", price: "475" },
      { name: "Chicken Biryani", price: "585" },
      { name: "Mutton Biryani", price: "685" },
    ]
  },
  {
    id: "indian-mains",
    name: "Indian — Mains",
    items: [
      { name: "Aloo Gobi Adraki", price: "375" },
      { name: "Bhindi Apki Pasand", price: "375" },
      { name: "Baingan Bharta", price: "385" },
      { name: "Vegetable Jalfrezi", price: "395" },
      { name: "Veg Keema Matar", price: "399" },
      { name: "Nizami Handi", price: "399" },
      { name: "Benarasi Dum Aloo", price: "455" },
      { name: "Malai Kofta Curry", price: "490" },
      { name: "Mushroom Hara Payaz", price: "490" },
      { name: "Lahsooni Palak Paneer", price: "490" },
      { name: "Sahi Paneer", price: "546" },
      { name: "Paneer Lababdar", price: "546" },
      { name: "Paneer Tikka Masala", price: "546" },
      { name: "Paneer Butter Masala", price: "546" },
      { name: "Handi Paneer", price: "525" },
      { name: "Paneer Pasanda", price: "546" },
      { name: "Paneer Kaleji", price: "546" },
      { name: "Dal Makhni", price: "455" },
      { name: "Dal Tadka", price: "409" },
      { name: "Dhaba Murgh", price: "535" },
      { name: "Chicken Do Payaza", price: "535" },
      { name: "Handi Chicken", price: "569" },
      { name: "Murgh Kali Mirch", price: "569" },
      { name: "Murgh Masala", price: "569" },
      { name: "Rara Chicken", price: "599" },
      { name: "Murgh Patiyala", price: "599" },
      { name: "Dilli Butter Chicken", price: "599" },
      { name: "Murgh Tikka Lababdar", price: "599" },
      { name: "Kadhai Murgh Shimla Mirch", price: "569" },
      { name: "Mutton Roganjosh", price: "661" },
      { name: "Handi Mutton Lahsooni Adrak", price: "685" },
      { name: "Bhuna Gosht", price: "699" },
    ]
  },
  {
    id: "breads",
    name: "Breads",
    items: [
      { name: "Tandoori Roti", price: "55" },
      { name: "Butter Tandoori Roti", price: "65" },
      { name: "Plain Naan", price: "99" },
      { name: "Butter Naan / Garlic Naan", price: "125" },
      { name: "Cheese Naan", price: "145" },
      { name: "Cheese Garlic Naan", price: "155" },
      { name: "Missi Roti", price: "75" },
      { name: "Butter Lachha Paratha", price: "125" },
      { name: "Amritsari Kulcha — Aloo Pyaz / Paneer / Mix Veg", price: "139 / 149 / 165" },
    ]
  },
  {
    id: "indian-rice",
    name: "Rice",
    items: [
      { name: "Steamed Basmati Rice", price: "240" },
      { name: "Jeera Rice", price: "289" },
      { name: "Green Peas & Brown Onion Pulao", price: "375" },
      { name: "Subz Pulao", price: "399" },
    ]
  },
  {
    id: "dessert",
    name: "Dessert",
    items: [
      { name: "Walnut Brownie with Ice Cream", price: "285" },
      { name: "Gulab Jamun with Ice Cream", price: "285" },
      { name: "Matka Kulfi", price: "145" },
      { name: "Choice of Ice Cream", price: "179" },
    ]
  }
];

const body = document.body;
const openMenuBtn = document.getElementById('openMenuBtn');
const backBtn = document.getElementById('backBtn');
const floatingActions = document.getElementById('floatingActions');
const categoryBar = document.getElementById('categoryBar');
const menuContent = document.getElementById('menuContent');
const searchInput = document.getElementById('searchInput');

function openMenu() {
  body.classList.add('menu-open');
  setTimeout(() => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    floatingActions.classList.add('visible');
  }, 480);
}

function closeMenu() {
  body.classList.remove('menu-open');
  floatingActions.classList.remove('visible');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function priceMarkup(price) {
  if (price === null || price === undefined || String(price).trim() === "") {
    return `<span class="mrp-label">Price</span> <span class="price-value">Not provided</span>`;
  }
  return `<span class="mrp-label">MRP</span> <span class="price-value">₹${escapeHtml(price)}</span>`;
}

function renderMenu(query = '') {
  const q = query.trim().toLowerCase();
  const sections = MENU_DATA.map(section => ({
    ...section,
    items: section.items.filter(item => {
      if (!q) return true;
      return [item.name, item.description || '', ...(item.badges || [])]
        .join(' ').toLowerCase().includes(q);
    })
  })).filter(section => section.items.length);

  categoryBar.innerHTML = sections.map((section, index) => `
    <button class="category-chip ${index === 0 ? 'active' : ''}" type="button" data-target="${escapeHtml(section.id)}">
      ${escapeHtml(section.name)}
    </button>
  `).join('');

  menuContent.innerHTML = sections.length ? sections.map(section => `
    <section class="menu-section" id="${escapeHtml(section.id)}">
      <div class="section-heading">
        <div>
          <p class="section-overline">MANTAR</p>
          <h2>${escapeHtml(section.name)}</h2>
        </div>
        <span class="section-rule"></span>
      </div>
      ${section.items.map(item => `
        <article class="menu-item">
          <div class="item-copy">
            <p class="item-name">${escapeHtml(item.name)}</p>
            ${item.description ? `<p class="item-desc">${escapeHtml(item.description)}</p>` : ''}
            ${(item.badges || []).length ? `<div class="badges">${item.badges.map(b => `<span class="badge">${escapeHtml(b)}</span>`).join('')}</div>` : ''}
          </div>
          <div class="item-price">${priceMarkup(item.price)}</div>
        </article>
      `).join('')}
    </section>
  `).join('') : `
    <section class="empty-state">
      <span class="empty-mark">⌕</span>
      <h2>No matching items</h2>
      <p>Try another dish name or category.</p>
    </section>
  `;

  categoryBar.querySelectorAll('.category-chip').forEach(button => {
    button.addEventListener('click', () => {
      categoryBar.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

openMenuBtn.addEventListener('click', openMenu);
backBtn.addEventListener('click', closeMenu);
searchInput.addEventListener('input', e => renderMenu(e.target.value));
renderMenu();