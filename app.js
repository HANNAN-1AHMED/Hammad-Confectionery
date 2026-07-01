/* ============================================================
   HAMMAD CONFECTIONERY — app.js
   Auto-generated from image filenames (clean names, no numbers).
   Categories detected automatically. Admin price panel is
   PASSWORD PROTECTED so only the owner can change prices.
   ============================================================ */

const products = [
  { id: "p1", name: "Aimli", category: "others", image: "images/Aimli.png" },
  { id: "p2", name: "Aimli", category: "others", image: "images/Aimli1.png" },
  { id: "p3", name: "Aimli", category: "others", image: "images/Aimli2.png" },
  { id: "p4", name: "Aimli", category: "others", image: "images/Aimli3.png" },
  { id: "p5", name: "Andhe", category: "others", image: "images/Andhe1.png" },
  { id: "p6", name: "Bubble", category: "bubblegum", image: "images/Bubble1.png" },
  { id: "p7", name: "Bubble", category: "bubblegum", image: "images/Bubble2.png" },
  { id: "p8", name: "Bubble", category: "bubblegum", image: "images/Bubble3.png" },
  { id: "p9", name: "Bubble", category: "bubblegum", image: "images/Bubble4.png" },
  { id: "p10", name: "Bubble", category: "bubblegum", image: "images/Bubble5.png" },
  { id: "p11", name: "Bubble", category: "bubblegum", image: "images/Bubble6.png" },
  { id: "p12", name: "Bubble", category: "bubblegum", image: "images/Bubble7.png" },
  { id: "p13", name: "Candies", category: "candies", image: "images/Candies.png" },
  { id: "p15", name: "Candies", category: "candies", image: "images/Candies10.png" },
  { id: "p16", name: "Candies", category: "candies", image: "images/Candies11.png" },
  { id: "p17", name: "Candies", category: "candies", image: "images/Candies12.png" },
  { id: "p18", name: "Candies", category: "candies", image: "images/Candies13.png" },
  { id: "p19", name: "Candies", category: "candies", image: "images/Candies15.png" },
  { id: "p20", name: "Candies", category: "candies", image: "images/Candies16.png" },
  { id: "p21", name: "Candies", category: "candies", image: "images/Candies17.png" },
  { id: "p22", name: "Candies", category: "candies", image: "images/Candies18.png" },
  { id: "p23", name: "Candies", category: "candies", image: "images/Candies19.png" },
  { id: "p25", name: "Candies", category: "candies", image: "images/Candies2.png" },
  { id: "p26", name: "Candies", category: "candies", image: "images/Candies20.png" },
  { id: "p27", name: "Candies", category: "candies", image: "images/Candies21.png" },
  { id: "p28", name: "Candies", category: "candies", image: "images/Candies3.png" },
  { id: "p29", name: "Candies", category: "candies", image: "images/Candies4.png" },
  { id: "p30", name: "Candies", category: "candies", image: "images/Candies5.png" },
  { id: "p31", name: "Candies", category: "candies", image: "images/Candies6.png" },
  { id: "p32", name: "Candies", category: "candies", image: "images/Candies7.png" },
  { id: "p33", name: "Candies", category: "candies", image: "images/Candies8.png" },
  { id: "p34", name: "Candies", category: "candies", image: "images/Candies9.png" },
  { id: "p35", name: "Chocolate", category: "chocolates", image: "images/Choclate10.png" },
  { id: "p36", name: "Chocolate", category: "chocolates", image: "images/Choclate11.png" },
  { id: "p37", name: "Chocolate", category: "chocolates", image: "images/Choclate12.png" },
  { id: "p38", name: "Chocolate", category: "chocolates", image: "images/Choclate13.png" },
  { id: "p39", name: "Chocolate", category: "chocolates", image: "images/Choclate14.png" },
  { id: "p40", name: "Chocolate", category: "chocolates", image: "images/Choclate15.png" },
  { id: "p41", name: "Chocolate", category: "chocolates", image: "images/Choclate16.png" },
  { id: "p42", name: "Chocolate", category: "chocolates", image: "images/Choclate17.png" },
  { id: "p43", name: "Chocolate", category: "chocolates", image: "images/Choclate2.png" },
  { id: "p44", name: "Chocolate", category: "chocolates", image: "images/Choclate3.png" },
  { id: "p45", name: "Chocolate", category: "chocolates", image: "images/Choclate4.png" },
  { id: "p46", name: "Chocolate", category: "chocolates", image: "images/Choclate5.png" },
  { id: "p47", name: "Chocolate", category: "chocolates", image: "images/Choclate7.png" },
  { id: "p48", name: "Chocolate", category: "chocolates", image: "images/Choclate8.png" },
  { id: "p49", name: "Chocolate", category: "chocolates", image: "images/Choclate9.png" },
  { id: "p50", name: "Choco Chocolate", category: "chocolates", image: "images/Chocochoclate.png" },
  { id: "p51", name: "Chupra", category: "others", image: "images/Chupra.png" },
  { id: "p52", name: "Coin Chocolate", category: "chocolates", image: "images/Coinchoclate.png" },
  { id: "p53", name: "Deekar", category: "others", image: "images/Deekar.png" },
  { id: "p54", name: "Football Chocolate", category: "chocolates", image: "images/Footballchoclate.png" },
  { id: "p55", name: "Hiss Chocolate", category: "chocolates", image: "images/Hisschoclate.png" },
  { id: "p56", name: "Jelley", category: "jellies", image: "images/Jelley.png" },
  { id: "p57", name: "Jelley", category: "jellies", image: "images/Jelley1.png" },
  { id: "p58", name: "Kunafa Chocolate", category: "chocolates", image: "images/Kunafachoclate.png" },
  { id: "p59", name: "Layii", category: "others", image: "images/Layii.png" },
  { id: "p60", name: "Layii", category: "others", image: "images/Layii1.png" },
  { id: "p61", name: "Meito Chocolate", category: "chocolates", image: "images/Metochoclate.png" },
  { id: "p62", name: "Nani Chocolate", category: "chocolates", image: "images/Nanichochoclate3.png" },
  { id: "p63", name: "Nani Chocolate", category: "chocolates", image: "images/Nanichoclate.png" },
  { id: "p64", name: "Nani Chocolate", category: "chocolates", image: "images/Nanichoclate2.png" },
  { id: "p65", name: "Nougat Chocolate", category: "chocolates", image: "images/Nougatchoclate.png" },
  { id: "p66", name: "Oval Banti", category: "oval", image: "images/OvalBanti.png" },
  { id: "p67", name: "Ovalegg", category: "oval", image: "images/Ovalegg.png" },
  { id: "p68", name: "Ovalegg", category: "oval", image: "images/Ovalegg1.png" },
  { id: "p69", name: "Ovalegg", category: "oval", image: "images/Ovalegg2.png" },
  { id: "p70", name: "Ovalegg", category: "oval", image: "images/Ovalegg3.png" },
  // { id:"p71", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-02.jpg" },
  // { id:"p72", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-02_1.jpg" },
  // { id:"p73", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-03.jpg" },
  // { id:"p74", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-03_1.jpg" },
  // { id:"p75", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-06.jpg" },
  // { id:"p76", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-06_1.jpg" },
  // { id:"p77", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-07 copy.jpg" },
  // { id:"p78", name:"Chocolate", category:"chocolates", image:"images/PHOTO-2025-11-21-11-47-07.jpg" },
  { id: "p79", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-15.jpg" },
  { id: "p80", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-15_1.jpg" },
  { id: "p81", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-15_2.jpg" },
  { id: "p82", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-16.jpg" },
  { id: "p83", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-16_1.jpg" },
  { id: "p84", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-16_2.jpg" },
  { id: "p85", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-17.jpg" },
  { id: "p86", name: "Lolipop", category: "lolipops", image: "images/PHOTO-2025-11-21-11-47-17_1.jpg" },

  // { id:"p91", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-19.jpg" },
  // { id:"p92", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-19_1.jpg" },
  // { id:"p93", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-19_2.jpg" },
  // { id:"p94", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-20.jpg" },
  // { id:"p95", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-20_1.jpg" },
  // { id:"p96", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-20_2.jpg" },
  // { id:"p97", name:"Candy", category:"candies", image:"images/PHOTO-2025-11-21-11-47-20_3.jpg" },
  { id: "p111", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-13-24.jpg" },
  { id: "p112", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-14-57.jpg" },
  { id: "p113", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-15-27.jpg" },
  { id: "p114", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-15-41.jpg" },
  { id: "p115", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-16-07.jpg" },
  { id: "p116", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-16-20.jpg" },
  { id: "p117", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-16-46.jpg" },
  { id: "p118", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-17-02.jpg" },
  { id: "p119", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-17-12.jpg" },
  { id: "p120", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-17-25.jpg" },
  { id: "p121", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-17-37.jpg" },
  { id: "p122", name: "Wafer", category: "wafers", image: "images/PHOTO-2025-12-14-16-17-49.jpg" },
  { id: "p123", name: "Ramtin Chocolate", category: "chocolates", image: "images/Ramtin1.png" },
  { id: "p124", name: "Ramtin Chocolate", category: "chocolates", image: "images/Ramtinchoclate.png" },
  { id: "p125", name: "Spark Chocolate", category: "chocolates", image: "images/Sparkchoclate.png" },
  { id: "p126", name: "Suaf", category: "others", image: "images/Suaf.png" },
  { id: "p127", name: "Wafer", category: "wafers", image: "images/Wafers1.png" },
  { id: "p128", name: "Wafer", category: "wafers", image: "images/Wafers2.png" },
  { id: "p129", name: "Wafer", category: "wafers", image: "images/Wafers3.png" },
  { id: "p130", name: "Wafer", category: "wafers", image: "images/Wafers4.png" },
  { id: "p131", name: "Wafer", category: "wafers", image: "images/Wafers5.png" },
  { id: "p132", name: "Wafer", category: "wafers", image: "images/Wafers6.png" },
  { id: "p133", name: "Candies", category: "candies", image: "images/candies14.png" },
  { id: "p134", name: "Chocolate", category: "chocolates", image: "images/choclate.png" },
  { id: "p135", name: "Chocolate", category: "chocolates", image: "images/choclate1.png" },
  { id: "p136", name: "Chocolate", category: "chocolates", image: "images/choclate6.png" },
  { id: "p137", name: "Wafer", category: "wafers", image: "images/wafers7.png" },
];

// ── CATEGORIES CONFIG ─────────────────────────────────────────
const categories = [
  { key: "chocolates", label: "Chocolates", icon: "fa-candy-cane" },
  { key: "candies", label: "Candies", icon: "fa-circle" },
  { key: "lolipops", label: "Lolipops", icon: "fa-ice-cream" },

  { key: "wafers", label: "Wafers", icon: "fa-grip-lines" },
  { key: "bubblegum", label: "Bubble Gum", icon: "fa-circle-dot" },
  { key: "jellies", label: "Jellies", icon: "fa-droplet" },
  { key: "oval", label: "Oval / Egg", icon: "fa-egg" },
  { key: "others", label: "Others", icon: "fa-box-open" },
];

// ── PRICE STORAGE ─────────────────────────────────────────────
const PRICE_KEY = "hc_prices";
function getPrices() { try { return JSON.parse(localStorage.getItem(PRICE_KEY) || "{}"); } catch (e) { return {}; } }
function getPrice(id) { return getPrices()[id] || ""; }
function savePricesObj(obj) { localStorage.setItem(PRICE_KEY, JSON.stringify(obj)); }

// ── HOME: Category showcase (1 image per category) ────────────
function renderCategoryShowcase() {
  const container = document.getElementById("products-container");
  if (!container) return;

  const html = categories.map(cat => {
    const first = products.find(p => p.category === cat.key);
    const count = products.filter(p => p.category === cat.key).length;
    const img = first ? first.image : "";
    return `
    <div class="cat-card" onclick="window.location.href='products.html?category=${cat.key}'">
      <div class="cat-card-img">
        ${img
        ? `<img src="${img}" alt="${cat.label}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="img-fallback" style="display:none"><i class="fas ${cat.icon}"></i></div>`
        : `<div class="img-fallback"><i class="fas ${cat.icon}"></i></div>`
      }
        <div class="cat-count">${count} items</div>
      </div>
      <div class="cat-card-info">
        <h3>${cat.label}</h3>
        <span class="cat-explore">Explore <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>`;
  }).join("");

  container.innerHTML = `<div class="cat-grid">${html}</div>`;
}

// ── SHOW ALL PRODUCTS OF A CATEGORY ───────────────────────────
function showCategory(catKey) {
  const catObj = categories.find(c => c.key === catKey);
  const list = products.filter(p => p.category === catKey);
  const container = document.getElementById("products-container");
  if (!container) return;

  document.getElementById("products").scrollIntoView({ behavior: "smooth" });

  const heading = `
    <div class="cat-header">
      <button class="back-btn" onclick="renderCategoryShowcase()">
        <i class="fas fa-arrow-left"></i> All Categories
      </button>
      <h2 class="cat-heading">${catObj ? catObj.label : catKey}
        <span style="font-size:0.9rem;color:var(--gold);font-family:'Inter',sans-serif;
          font-weight:400;">(${list.length} products)</span>
      </h2>
    </div>`;

  const cards = list.map((p, i) => {
    const price = getPrice(p.id);
    const priceHtml = price
      ? `Rs. ${price}`
      : `<span style="color:var(--white-dim);font-size:0.72rem;">Price not set</span>`;
    return `
    <div class="product-card" style="animation-delay:${i * 0.03}s">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="img-fallback" style="display:none"><i class="fas fa-candy-cane"></i></div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-price" id="price-${p.id}">${priceHtml}</div>
      </div>
    </div>`;
  }).join("");

  container.innerHTML = heading + `<div class="products-grid">${cards}</div>`;
}

function refreshPrices() {
  products.forEach(p => {
    const el = document.getElementById("price-" + p.id);
    if (!el) return;
    const price = getPrice(p.id);
    el.innerHTML = price ? `Rs. ${price}` : `<span style="color:var(--white-dim);font-size:0.72rem;">Price not set</span>`;
  });
}

// ── ADMIN PANEL (PASSWORD PROTECTED) ──────────────────────────
// Change this password to whatever you like — only people who
// know it can open the price editor.
const ADMIN_PASSWORD = "hammad786";
const ADMIN_SESSION_KEY = "hc_admin_unlocked";

const ALL_CATS = ["all", ...categories.map(c => c.key)];

function openAdminPanel() {
  // Already unlocked this session? go straight to panel
  if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") {
    showAdminPriceEditor();
    return;
  }
  showAdminLoginPrompt();
}

function showAdminLoginPrompt() {
  if (document.getElementById("adminLoginModal")) { document.getElementById("adminLoginModal").remove(); }

  const modal = document.createElement("div");
  modal.id = "adminLoginModal";
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:99998;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(8px);";
  modal.innerHTML = `
    <div style="background:#161616;border:1px solid rgba(201,168,76,0.4);border-radius:10px;
      width:100%;max-width:340px;padding:32px 28px;text-align:center;
      box-shadow:0 0 40px rgba(201,168,76,0.15);">
      <div style="width:56px;height:56px;border-radius:50%;background:rgba(201,168,76,0.1);
        border:1px solid rgba(201,168,76,0.3);display:flex;align-items:center;justify-content:center;
        margin:0 auto 18px;color:#C9A84C;font-size:1.4rem;">
        <i class="fas fa-lock"></i>
      </div>
      <div style="font-family:'Playfair Display',serif;color:#fff;font-size:1.1rem;font-weight:700;margin-bottom:6px;">
        Admin Access Only
      </div>
      <div style="color:#888;font-size:0.78rem;margin-bottom:20px;">
        Enter the admin password to manage prices
      </div>
      <input type="password" id="adminPassInput" placeholder="Password"
        style="width:100%;background:#0A0A0A;border:1px solid rgba(201,168,76,0.3);
          border-radius:5px;color:#fff;font-family:'Inter',sans-serif;font-size:0.92rem;
          padding:11px 14px;outline:none;text-align:center;letter-spacing:2px;margin-bottom:8px;"
        onkeydown="if(event.key==='Enter')checkAdminPassword()">
      <div id="adminPassError" style="color:#e0626a;font-size:0.72rem;height:16px;margin-bottom:10px;"></div>
      <div style="display:flex;gap:10px;">
        <button onclick="checkAdminPassword()"
          style="flex:1;background:linear-gradient(135deg,#9A7A30,#C9A84C);color:#0A0A0A;
            font-weight:700;font-size:0.76rem;letter-spacing:1px;text-transform:uppercase;
            padding:11px;border-radius:5px;border:none;cursor:pointer;font-family:'Inter',sans-serif;">
          Unlock
        </button>
        <button onclick="document.getElementById('adminLoginModal').remove()"
          style="flex:1;background:transparent;border:1px solid rgba(201,168,76,0.25);color:#888;
            font-size:0.76rem;padding:11px;border-radius:5px;cursor:pointer;font-family:'Inter',sans-serif;">
          Cancel
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });
  setTimeout(() => document.getElementById("adminPassInput").focus(), 100);
}

function checkAdminPassword() {
  const input = document.getElementById("adminPassInput");
  const errEl = document.getElementById("adminPassError");
  if (input.value === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    document.getElementById("adminLoginModal").remove();
    showAdminPriceEditor();
  } else {
    errEl.textContent = "Incorrect password. Try again.";
    input.value = "";
    input.focus();
    input.style.borderColor = "#e0626a";
    setTimeout(() => input.style.borderColor = "rgba(201,168,76,0.3)", 1000);
  }
}

function showAdminPriceEditor() {
  if (document.getElementById("adminPanel")) { document.getElementById("adminPanel").remove(); return; }
  const prices = getPrices();
  const panel = document.createElement("div");
  panel.id = "adminPanel";
  panel.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(6px);";
  panel.innerHTML = `
    <div style="background:#161616;border:1px solid rgba(201,168,76,0.4);border-radius:10px;
      width:100%;max-width:700px;max-height:92vh;overflow:hidden;display:flex;flex-direction:column;
      box-shadow:0 0 40px rgba(201,168,76,0.15);">
      <div style="padding:18px 22px 14px;border-bottom:1px solid rgba(201,168,76,0.2);
        display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
        <div>
          <div style="font-family:'Playfair Display',serif;color:#C9A84C;font-size:1.15rem;font-weight:700;">
            <i class="fas fa-unlock" style="font-size:0.9rem;"></i> Price Manager
          </div>
          <div style="color:#666;font-size:0.72rem;margin-top:3px;">Prices save in your browser automatically</div>
        </div>
        <button onclick="document.getElementById('adminPanel').remove()"
          style="background:none;border:1px solid rgba(201,168,76,0.3);color:#C9A84C;
            width:32px;height:32px;border-radius:4px;cursor:pointer;font-size:1rem;">✕</button>
      </div>
      <div style="padding:10px 22px;border-bottom:1px solid rgba(201,168,76,0.12);
        flex-shrink:0;display:flex;gap:7px;flex-wrap:wrap;">
        ${ALL_CATS.map(cat => {
    const count = cat === "all" ? products.length : products.filter(p => p.category === cat).length;
    return `<button onclick="filterAdmin('${cat}',this)" data-acat="${cat}"
            style="background:${cat === 'all' ? 'linear-gradient(135deg,#9A7A30,#C9A84C)' : 'transparent'};
              border:1px solid rgba(201,168,76,${cat === 'all' ? '0.8' : '0.25'});
              color:${cat === 'all' ? '#0A0A0A' : '#888'};font-size:0.63rem;font-weight:600;
              letter-spacing:0.8px;text-transform:uppercase;padding:5px 11px;border-radius:3px;
              cursor:pointer;font-family:'Inter',sans-serif;">
            ${cat} (${count})
          </button>`;
  }).join('')}
      </div>
      <div id="adminList" style="overflow-y:auto;flex:1;padding:12px 22px;">
        ${buildAdminRows("all", prices)}
      </div>
      <div style="padding:14px 22px;border-top:1px solid rgba(201,168,76,0.2);
        flex-shrink:0;display:flex;gap:10px;justify-content:flex-end;align-items:center;">
        <span style="color:#666;font-size:0.72rem;margin-right:auto;">Enter price → press Save All</span>
        <button onclick="saveAllPrices()"
          style="background:linear-gradient(135deg,#9A7A30,#C9A84C);color:#0A0A0A;
            font-weight:700;font-size:0.74rem;letter-spacing:1.2px;text-transform:uppercase;
            padding:11px 26px;border-radius:3px;border:none;cursor:pointer;font-family:'Inter',sans-serif;">
          ✓ Save All Prices
        </button>
        <button onclick="document.getElementById('adminPanel').remove()"
          style="background:transparent;border:1px solid rgba(201,168,76,0.25);color:#666;
            font-size:0.74rem;padding:11px 18px;border-radius:3px;cursor:pointer;font-family:'Inter',sans-serif;">
          Cancel
        </button>
      </div>
    </div>`;
  document.body.appendChild(panel);
  panel.addEventListener("click", e => { if (e.target === panel) panel.remove(); });
}

function buildAdminRows(cat, prices) {
  const list = cat === "all" ? products : products.filter(p => p.category === cat);
  if (!list.length) return '<p style="color:#666;text-align:center;padding:30px;">No products</p>';
  return list.map(p => `
    <div style="display:flex;align-items:center;gap:12px;padding:9px 0;
      border-bottom:1px solid rgba(201,168,76,0.07);">
      <img src="${p.image}" alt="${p.name}"
        style="width:48px;height:48px;object-fit:cover;border-radius:5px;
          border:1px solid rgba(201,168,76,0.2);flex-shrink:0;background:#111;"
        onerror="this.style.opacity='0.2'">
      <div style="flex:1;min-width:0;">
        <div style="color:#ddd;font-size:0.82rem;font-weight:500;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</div>
        <div style="color:#C9A84C;font-size:0.62rem;letter-spacing:0.8px;
          text-transform:uppercase;margin-top:1px;">${p.category}</div>
      </div>
      <div style="display:flex;align-items:center;gap:5px;flex-shrink:0;">
        <span style="color:#666;font-size:0.78rem;">Rs.</span>
        <input type="number" id="inp-${p.id}" value="${prices[p.id] || ''}" placeholder="0" min="0"
          style="width:85px;background:#0A0A0A;border:1px solid rgba(201,168,76,0.28);
            border-radius:4px;color:#fff;font-family:'Inter',sans-serif;font-size:0.86rem;
            padding:6px 9px;outline:none;"
          onfocus="this.style.borderColor='#C9A84C'"
          onblur="this.style.borderColor='rgba(201,168,76,0.28)'"
          onkeydown="if(event.key==='Enter')saveAllPrices()">
      </div>
    </div>`).join("");
}

function filterAdmin(cat, btn) {
  document.querySelectorAll("[data-acat]").forEach(b => {
    b.style.background = "transparent"; b.style.borderColor = "rgba(201,168,76,0.25)"; b.style.color = "#888";
  });
  btn.style.background = "linear-gradient(135deg,#9A7A30,#C9A84C)";
  btn.style.borderColor = "rgba(201,168,76,0.8)";
  btn.style.color = "#0A0A0A";
  document.getElementById("adminList").innerHTML = buildAdminRows(cat, getPrices());
}

function saveAllPrices() {
  const prices = getPrices();
  document.querySelectorAll("[id^='inp-']").forEach(inp => {
    const id = inp.id.replace("inp-", ""); const val = inp.value.trim();
    if (val) prices[id] = val; else delete prices[id];
  });
  savePricesObj(prices);
  refreshPrices();
  document.getElementById("adminPanel").remove();
  const t = document.getElementById("toast"); const m = document.getElementById("toastMsg");
  if (t && m) { m.textContent = "✓ Prices saved!"; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 3000); }
}

// ── CONTACT MESSAGES ──────────────────────────────────────────
const MSG_KEY = "hc_messages";
function getAllMessages() { try { return JSON.parse(localStorage.getItem(MSG_KEY) || "[]"); } catch (e) { return []; } }
function saveContactMessage(entry) {
  const msgs = getAllMessages();
  msgs.unshift({ ...entry, id: Date.now(), date: new Date().toLocaleString() });
  if (msgs.length > 50) msgs.splice(50);
  localStorage.setItem(MSG_KEY, JSON.stringify(msgs));
}