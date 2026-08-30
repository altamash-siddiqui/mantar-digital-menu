const MENU_DATA = [
  {
    id: "beverage",
    name: "Beverage",
    items: [
      { name: "Jal Zeera", price: "25" },
      { name: "Chaach", price: "90" },
      { name: "Soft Drinks", price: "90" },
      { name: "Kulhad Lassi", price: "95" },
      { name: "Fresh Lime Soda — Sweet or Salted", price: "155" },
      { name: "Mineral Water Bottle", price: "MRP" },
    ]
  },
  {
    id: "cold-blends",
    name: "Cold Blends",
    items: [
      { name: "Cold Coffee", price: "195" },
      { name: "Iced Tea — Peach or Lemon", price: "185" },
      { name: "Cola Mint Mojito", price: "195", description: "Chopped Lime, Lemon Juice, Black Salt on Crushed Ice" },
      { name: "Classic Mint Mojito", price: "195", description: "Lime Juice, Mint, Soda, Sugar and Crushed Ice" },
    ]
  },
  {
    id: "shakes",
    name: "Shakes",
    items: [
      { name: "Vanilla, Mango, Kit Kat, Oreo, Chocolate, Strawberry", price: "210" },
    ]
  },
  {
    id: "coffee",
    name: "Coffee",
    items: [
      { name: "Americano", price: "165" },
      { name: "Cappuccino", price: "185" },
      { name: "Café Latte", price: "210" },
      { name: "Café Mocha", price: "245" },
    ]
  },
  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Cream of Tomato and Basil", price: "195" },
      { name: "Manchow — Veg / Non Veg", price: "195 / 225" },
      { name: "Lemon Coriander — Veg / Non Veg", price: "210 / 235" },
      { name: "Peking — Veg / Non Veg", price: "210 / 235" },
      { name: "Hot and Sour — Veg / Non Veg", price: "175 / 225" },
      { name: "Sweet Corn — Veg / Non Veg", price: "175 / 225" },
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Sicilian Margherita", price: "330", description: "Tomato Sauce, Mozzarella and Basil", badges: ["Vegetarian"] },
      { name: "Pizza Americana", price: "345", description: "Cheese and Corn", badges: ["Vegetarian"] },
      { name: "Absolute Veggies", price: "355", description: "Onion, Capsicum, Broccoli, Olives, Babycorn, Mushroom, Corn and Paprika", badges: ["Vegetarian"] },
      { name: "Tandoori Paneer Pizza", price: "390", description: "Tandoori Paneer with Onion, Capsicum, Paprika and Tandoori Sauce", badges: ["Vegetarian"] },
      { name: "Makhani Paneer Pizza", price: "390", description: "Spicy Paneer with Bellpepper, Makhani Sauce and Mozzarella", badges: ["Vegetarian"] },
      { name: "Chicken Makhni Pizza", price: "475", badges: ["Non Vegetarian"] },
      { name: "Chicken Tikka Pizza", price: "475", description: "Chicken Tikka, Capsicum, Corn, Onion and Lachha Pyaz", badges: ["Non Vegetarian"] },
      { name: "Butter Masala Dosa", price: "245", description: "Served with Sambar, Tomato, Coconut and Mint Chutney", badges: ["South Indian"] },
    ]
  },
  {
    id: "chinese-starters",
    name: "Chinese — Starters",
    items: [
      { name: "Steamed Momos — Vegetable / Chicken", price: "275 / 310" },
      { name: "Fried Momos — Vegetable / Chicken", price: "285 / 325" },
      { name: "Crispy Corn Kernels", price: "395", badges: ["Vegetarian"] },
      { name: "Honey Chilli Potato", price: "330", badges: ["Vegetarian"] },
      { name: "Chilli Paneer", price: "425", badges: ["Vegetarian"] },
      { name: "Pan Fried Chilli Paneer", price: "455", badges: ["Vegetarian"] },
      { name: "Traditional Spring Roll", price: "375", badges: ["Vegetarian"] },
      { name: "Veg Manchurian Dry", price: "365", badges: ["Vegetarian"] },
      { name: "Mushroom Baby Corn Dry", price: "425", badges: ["Vegetarian"] },
      { name: "Pan Fried Chilli Fish", price: "565", badges: ["Non Vegetarian"] },
      { name: "BBQ Chicken Wings", price: "465", badges: ["Non Vegetarian"] },
      { name: "Chicken Lollipop", price: "475", badges: ["Non Vegetarian"] },
      { name: "Chilli Chicken Dry", price: "455", badges: ["Non Vegetarian"] },
      { name: "Chef Special Chilli Chicken", price: "495", badges: ["Non Vegetarian"] },
    ]
  },
  {
    id: "indian-starters",
    name: "Indian — Starters",
    items: [
      { name: "Dahi Ke Kebab", price: "365", description: "Pattie made with assorted green vegetables, fried on tawa", badges: ["Vegetarian"] },
      { name: "Peshawari Paneer Tikka", price: "395", description: "Paneer marinated in pickled spice, cooked in tandoor", badges: ["Vegetarian"] },
      { name: "Paneer Malai Tikka", price: "395", badges: ["Vegetarian"] },
      { name: "Paneer Pudina Tikka", price: "395", badges: ["Vegetarian"] },
      { name: "Tandoori Malai Chaap", price: "375", description: "Malai or Achari", badges: ["Vegetarian"] },
      { name: "Mixed Veg Kebab Platter", price: "625", description: "Assortment of 5 types of Kebab", badges: ["Vegetarian"] },
      { name: "Amritsari Macchi", price: "510", badges: ["Non Vegetarian"] },
      { name: "Tandoori Fish Tikka", price: "525", badges: ["Non Vegetarian"] },
      { name: "Kalmi Kebab", price: "525", badges: ["Non Vegetarian"] },
      { name: "Pilli Mirch Ka Murgh Tikka", price: "475", description: "Chicken marinated in yellow chilli of the central plains", badges: ["Non Vegetarian"] },
      { name: "Tandoori Murgh — Half / Full", price: "475 / 755", description: "Chicken marinated in yoghurt and spice, cooked in tandoor", badges: ["Non Vegetarian"] },
      { name: "Chicken Seekh Peshawri", price: "595", badges: ["Non Vegetarian"] },
      { name: "Mixed Non Veg Kebab Platter", price: "795", badges: ["Non Vegetarian"] },
    ]
  },
  {
    id: "salad-raita",
    name: "Salad & Raita",
    items: [
      { name: "Garden Green Salad", price: "255" },
      { name: "Pineapple Raita", price: "225" },
      { name: "Mixed Vegetable or Boondi Raita", price: "195" },
    ]
  },
  {
    id: "thali",
    name: "Thali Meal",
    items: [
      { name: "Vegetarian Thali", price: "385", description: "Butter milk, Paneer, Vegetable, Rice, Raita, Salad, Papad, Pickle, Dal and Dessert" },
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    items: [
      { name: "Vegetable Biryani", price: "415", description: "Made with aromatic basmati, rice, vegetables, herbs and spices" },
      { name: "Chicken Biryani", price: "510", description: "Tender chicken marinated in yoghurt, herbs and spices, cooked with aromatic basmati" },
      { name: "Mutton Biryani", price: "595", description: "Delicious lamb dish cooked with aromatic basmati, yoghurt, herbs and spices" },
    ]
  },
  {
    id: "indian-mains-veg",
    name: "Mains — Vegetarian",
    items: [
      { name: "Aloo Gobhi Adraki", price: "325" },
      { name: "Bhindi Aap Ki Pasand", price: "325", description: "Kurkure or Bhindi Masala or Bhindi Do Pyaza" },
      { name: "Baingan Bharta", price: "335", description: "Roasted brinjal tempered with onion, tomato, chilli and coriander" },
      { name: "Vegetable Jalfrezi", price: "345" },
      { name: "Veg Keema Mattar", price: "355" },
      { name: "Nizami Handi", price: "355", description: "Mixed seasonal vegetable — Hyderabad style" },
      { name: "Benarsi Dum Aloo", price: "395" },
      { name: "Malai Kofta Curry", price: "425" },
      { name: "Mushroom Hara Pyaz", price: "425", description: "Mushroom and spring onion cooked to perfection" },
      { name: "Kaju Kumbh Matar", price: "445" },
      { name: "Kadai Paneer Shimla Mirch", price: "445", description: "Paneer cooked with capsicum and kadai masala" },
      { name: "Lahsooni Palak Paneer", price: "445", description: "Paneer cooked with capsicum and kadai masala" },
      { name: "Shahi Paneer", price: "475", description: "Mughlai paneer dish cooked in rich tomato onion creamy gravy" },
      { name: "Paneer Lababdar", price: "475", description: "Dices of paneer cooked in lababdar gravy" },
      { name: "Paneer Tikka Masala", price: "475", description: "Paneer tikka cooked in makhni gravy" },
      { name: "Paneer Butter Masala", price: "475" },
      { name: "Handi Paneer", price: "455", description: "Paneer cooked in delicious and creamy gravy" },
      { name: "Paneer Pasanda", price: "475", description: "Paneer slice stuffed with paneer, nuts, spices cooked in gravy" },
      { name: "Dal Makhani", price: "395", description: "Black lentil cooked overnight, finished with butter" },
      { name: "Yellow Dal Tadka", price: "355", description: "A simple home-style dal with double tadka and ghee" },
    ]
  },
  {
    id: "indian-mains-nonveg",
    name: "Mains — Non Vegetarian",
    items: [
      { name: "Dhaba Murgh", price: "465" },
      { name: "Chicken Do Pyaza", price: "465", description: "Chicken curry with abundance flavours of onion and aromatic spices" },
      { name: "Handi Chicken", price: "495", description: "Tender chicken cooked in aromatic spices and in rich tomato gravy" },
      { name: "Murgh Kali Mirch", price: "495", description: "Chicken cooked in rich white gravy and black pepper" },
      { name: "Murgh Masala", price: "495", description: "Classic North Indian dish in a chunky onion tomato sauce" },
      { name: "Rara Chicken", price: "525" },
      { name: "Murgh Patiala", price: "525" },
      { name: "Dilli Butter Chicken", price: "525", description: "Classic Indian dish — chicken cooked in tandoor and finished with creamy tomato gravy" },
      { name: "Murgh Tikka Lababdar", price: "525", description: "Chicken tikka cooked in lababdar gravy-must gravy" },
      { name: "Kadhai Murgh Shimla Mirch", price: "495", description: "Chicken cooked along with capsicum and kadai masala" },
      { name: "Mutton Roganjosh", price: "575", description: "A Kashmiri lamb roganjosh cooked in tangy red sauce" },
      { name: "Handi Mutton Lahsooni Adrak", price: "595", description: "Cooked in mustard oil, ghee, onion, ginger, garlic paste" },
      { name: "Bhuna Gosht", price: "610" },
    ]
  },
  {
    id: "breads",
    name: "Breads",
    items: [
      { name: "Tandoori Roti", price: "45" },
      { name: "Butter Tandoori Roti", price: "55" },
      { name: "Plain Naan", price: "95" },
      { name: "Butter Naan / Garlic Naan", price: "110" },
      { name: "Cheese Naan", price: "125" },
      { name: "Cheese Garlic Naan", price: "135" },
      { name: "Missi Roti", price: "65" },
      { name: "Butter Laccha Paratha", price: "110" },
      { name: "Amritsari Kulcha — Aloo Pyaz / Paneer / Mix Veg", price: "120 / 130 / 145" },
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { name: "Steamed Basmati Rice", price: "210" },
      { name: "Jeera Rice", price: "255" },
      { name: "Green Peas & Brown Onion Pulao", price: "325" },
      { name: "Subz Pulao", price: "355" },
    ]
  },
  {
    id: "dessert",
    name: "Dessert",
    items: [
      { name: "Walnut Brownie with Vanilla Ice Cream", price: "255" },
      { name: "Gulab Jamun with Ice Cream", price: "255", description: "Served 2 Pcs and Topped with Nuts" },
      { name: "Matka Kulfi", price: "125" },
      { name: "Choice of Ice Cream", price: "155", description: "Served 2 Scoops — Vanilla, Mango, Strawberry, Butterscotch, Pista, Chocolate" },
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
  return /^MRP$/i.test(String(price).trim())
    ? `<span class="mrp-label">MRP</span>`
    : `<span class="mrp-label">MRP</span> <span class="price-value">₹${escapeHtml(price)}</span>`;
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
