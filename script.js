const products = [
  { id: "golden-tradition-rice",
     name: "Golden Tradition Rice",
      detail: "50 kg bag", 
      category: "Rice",
       price: 53000,
        badge: "50 kg",
         emoji: "🌾",
          bg: "#f2eedf",
           image: "",
            about: "Golden Tradition Rice, 50 kg bag.",
             storage: "Store in a cool, dry place and follow the storage guidance on the packaging.",
              pairWith: [] },
  { id: "gerawa-rice",
     name: "Gerawa Rice",
      detail: "50 kg bag",
       category: "Rice",
        price: 56000,
         badge: "50 kg",
          emoji: "🌾",
           bg: "#f2eedf",
            image: "images/products/Gerawa Rice, 50 kg.jpg",
             about: "Gerawa Rice, 50 kg bag.",
              storage: "Store in a cool, dry place and follow the storage guidance on the packaging.",
               pairWith: [] },
  { id: "dangote-sugar-50kg",
     name: "Dangote Sugar",
      detail: "50 kg bag", 
      category: "Sugar",
       price: 75000, 
       badge: "50 kg",
       emoji: "🧂", 
       bg: "#f5f0e7", 
       image: "images/products/50KG.jpg", 
       about: "Dangote Sugar, 50 kg bag.", 
       storage: "Store in a cool, dry place and keep the packaging sealed.", 
       pairWith: [] },
  { id: "bua-flour", name: "BUA Flour", detail: "Pack size not specified", category: "Flour & semovita", price: 51000, badge: "Flour", emoji: "🌾", bg: "#f3eee4", image: "images/products/BUA Flour.png", about: "BUA Flour. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "golden-flour", name: "Golden Flour", detail: "50 kg bag", category: "Flour & semovita", price: 52500, badge: "50 kg", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Flour, 50 kg.jpg", about: "Golden Flour, 50 kg bag.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "mim-ee-noodles-70g", name: "MIMEE Noodles", detail: "70 g", category: "Noodles", price: 7900, badge: "Promo", badgeType: "sale", emoji: "🍜", bg: "#f6e9d9", image: "images/products/MIMEE Noodles, 70 g.jpg", about: "MIMEE Noodles, 70 g. The listed price was marked as a promotion.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "mim-ee-noodles-100g", name: "MIMEE Noodles", detail: "100 g", category: "Noodles", price: 10600, badge: "100 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/MIMEE Noodles, 100 g.jpg", about: "MIMEE Noodles, 100 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "golden-chicken-noodles", name: "Golden Chicken Noodles", detail: "70 g", category: "Noodles", price: 7600, badge: "70 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Golden Chicken Noodles, 70 g.jpg", about: "Golden Chicken Noodles, 70 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "golden-jollof-noodles", name: "Golden Jollof Noodles", detail: "70 g", category: "Noodles", price: 7660, badge: "70 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Golden Jollof Noodles, 70 g.jpg", about: "Golden Jollof Noodles, 70 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "mamas-pride-spaghetti", name: "Mama’s Pride Spaghetti", detail: "Pack size not specified", category: "Pasta", price: 15600, badge: "Pasta", emoji: "🍝", bg: "#f5ecde", image: "images/products/Mama’s Pride Spaghetti.jpg", about: "Mama’s Pride Spaghetti. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the preparation guidance on the packaging.", pairWith: [] },
  { id: "golden-spaghettinni", name: "Golden Spaghettinni", detail: "Pack size not specified", category: "Pasta", price: 18700, badge: "Pasta", emoji: "🍝", bg: "#f5ecde", image: "images/products/Golden Spaghettinni.jpg", about: "Golden Spaghettinni. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the preparation guidance on the packaging.", pairWith: [] },
  { id: "golden-spaghetti", name: "Golden Spaghetti", detail: "Pack size not specified", category: "Pasta", price: 18700, badge: "Pasta", emoji: "🍝", bg: "#f5ecde", image: "images/products/Golden Spaghetti.jpg", about: "Golden Spaghetti. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the preparation guidance on the packaging.", pairWith: [] },
  { id: "golden-twist-500g", name: "Golden Twist", detail: "500 g", category: "Pasta", price: 17500, badge: "500 g", emoji: "🍝", bg: "#f5ecde", image: "images/products/Golden Twist, 500 g.jpg", about: "Golden Twist pasta, 500 g.", storage: "Store in a cool, dry place and follow the preparation guidance on the packaging.", pairWith: [] },
  { id: "golden-twist-200g", name: "Golden Twist", detail: "200 g", category: "Pasta", price: 8800, badge: "200 g", emoji: "🍝", bg: "#f5ecde", image: "images/products/Golden Twist, 200 g.jpg", about: "Golden Twist pasta, 200 g.", storage: "Store in a cool, dry place and follow the preparation guidance on the packaging.", pairWith: [] },
  { id: "golden-semovita-10kg", name: "Golden Semovita", detail: "10 kg", category: "Flour & semovita", price: 13700, badge: "10 kg", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Semovita, 10 kg.jpg", about: "Golden Semovita, 10 kg.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "golden-semovita-5kg", name: "Golden Semovita", detail: "5 kg", category: "Flour & semovita", price: 6900, badge: "5 kg", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Semovita, 5 kg.jpg", about: "Golden Semovita, 5 kg.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "golden-semovita-1kg", name: "Golden Semovita", detail: "1 kg", category: "Flour & semovita", price: 14000, badge: "1 kg", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Semovita, 1 kg.jpg", about: "Golden Semovita, 1 kg.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "golden-semovita-500g", name: "Golden Semovita", detail: "500 g", category: "Flour & semovita", price: 14200, badge: "500 g", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Semovita, 500 g.jpg", about: "Golden Semovita, 500 g.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "golden-wheat-1kg", name: "Golden Wheat", detail: "1 kg", category: "Flour & semovita", price: 10500, badge: "1 kg", emoji: "🌾", bg: "#f3eee4", image: "images/products/Golden Wheat, 1 kg.jpg", about: "Golden Wheat, 1 kg.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "dangote-sachet-sugar-1kg", name: "Dangote Sachet Sugar", detail: "1 kg", category: "Sugar", price: 16500, badge: "1 kg", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Dangote Sachet Sugar, 1 kg.jpg", about: "Dangote Sachet Sugar, 1 kg.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "dangote-sachet-sugar-500g", name: "Dangote Sachet Sugar", detail: "500 g", category: "Sugar", price: 16500, badge: "500 g", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Dangote Sachet Sugar, 500 kg.jpg", about: "Dangote Sachet Sugar, 500 g.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "dangote-sachet-sugar-250g", name: "Dangote Sachet Sugar", detail: "250 g", category: "Sugar", price: 16500, badge: "250 g", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Dangote Sachet Sugar, 250 kg bag 1.jpg", about: "Dangote Sachet Sugar, 250 g.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "indomie-regular-chicken-70g", name: "Indomie Regular Chicken", detail: "70 g · +4 promo", category: "Noodles", price: 9700, badge: "+4 Promo", badgeType: "sale", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Indomie Regular Chicken, 70 g.jpg", about: "Indomie Regular Chicken, 70 g. The listing was marked “+4 promo”; confirm promotion details with ZOA Market.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "indomie-super-pack-120g", name: "Indomie Super Pack", detail: "120 g", category: "Noodles", price: 14750, badge: "120 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Indomie Super Pack, 120 g.jpg", about: "Indomie Super Pack, 120 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "indomie-onion-70g", name: "Indomie Onion", detail: "70 g", category: "Noodles", price: 10450, badge: "70 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Indomie Onion, 70 g.jpg", about: "Indomie Onion noodles, 70 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "indomie-hungryman-180g", name: "Indomie Hungry Man", detail: "180 g", category: "Noodles", price: 13600, badge: "180 g", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Indomie Hungry Man, 180 g.jpg", about: "Indomie Hungry Man, 180 g.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "indomie-belleful", name: "Indomie Belleful", detail: "Pack size not specified", category: "Noodles", price: 13800, badge: "Noodles", emoji: "🍜", bg: "#f6e9d9", image: "images/products/Indomie Belleful.jpg", about: "Indomie Belleful. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the preparation and storage guidance on the packaging.", pairWith: [] },
  { id: "kings-veg-oil-25l", name: "Kings Veg Oil", detail: "25 litre", category: "Cooking oil", price: 65000, badge: "25 litre", emoji: "🫒", bg: "#eef0df", image: "images/products/Kings Veg Oil, 25 litre.jpg", about: "Kings Veg Oil, 25 litre.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "kings-veg-oil-5l", name: "Kings Veg Oil", detail: "5 litre", category: "Cooking oil", price: 60500, badge: "5 litre", emoji: "🫒", bg: "#eef0df", image: "images/products/Kings Veg Oil, 5 litre.jpg", about: "Kings Veg Oil, 5 litre.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "kings-veg-oil-3l", name: "Kings Veg Oil", detail: "3 litre", category: "Cooking oil", price: 56500, badge: "3 litre", emoji: "🫒", bg: "#eef0df", image: "images/products/Kings Veg Oil, 3 litre.jpg", about: "Kings Veg Oil, 3 litre.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "kings-veg-oil-2l", name: "Kings Veg Oil", detail: "2 litre", category: "Cooking oil", price: 45600, badge: "2 litre", emoji: "🫒", bg: "#eef0df", image: "images/products/Kings Veg Oil, 2 litre.jpg", about: "Kings Veg Oil, 2 litre.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "kings-veg-oil-1l", name: "Kings Veg Oil", detail: "1 litre", category: "Cooking oil", price: 46300, badge: "1 litre", emoji: "🫒", bg: "#eef0df", image: "images/products/Kings Veg Oil, 1 litre.jpg", about: "Kings Veg Oil, 1 litre.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "power-oil-45ml", name: "Power Oil", detail: "45 ml", category: "Cooking oil", price: 17000, badge: "45 ml", emoji: "🫒", bg: "#eef0df", image: "images/products/Power Oil, 45 ml.jpg", about: "Power Oil, 45 ml.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "dangote-salt-50kg", name: "Dangote Salt", detail: "50 kg", category: "Salt", price: 16800, badge: "50 kg", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Dangote Salt, 50 kg.jpg", about: "Dangote Salt, 50 kg.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "mr-chef-salt-1kg", name: "Mr Chef Salt", detail: "1 kg", category: "Salt", price: 8100, badge: "1 kg", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Mr Chef Salt, 1 kg.jpg", about: "Mr Chef Salt, 1 kg.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "mr-chef-salt-500g", name: "Mr Chef Salt", detail: "500 g", category: "Salt", price: 8300, badge: "500 g", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Mr Chef Salt, 500 g.jpg", about: "Mr Chef Salt, 500 g.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "mr-chef-salt-250g", name: "Mr Chef Salt", detail: "250 g", category: "Salt", price: 8600, badge: "250 g", emoji: "🧂", bg: "#f5f0e7", image: "images/products/Mr Chef Salt, 250 g.jpg", about: "Mr Chef Salt, 250 g.", storage: "Store in a cool, dry place and keep the packaging sealed.", pairWith: [] },
  { id: "gino-curry", name: "Gino Curry", detail: "Pack size not specified", category: "Seasonings", price: 10400, badge: "Seasoning", emoji: "🧂", bg: "#f1ecdd", image: "images/products/Gino Curry.jpg", about: "Gino Curry. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "tasty-tom-paste", name: "Tasty Tom Paste", detail: "Pack size not specified", category: "Tomato paste", price: 7500, badge: "Paste", emoji: "🍅", bg: "#f5e9df", image: "images/products/Tasty Tom Paste.jpg", about: "Tasty Tom Paste. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "gino-tomato-paste", name: "Gino Tomato Paste", detail: "Pack size not specified", category: "Tomato paste", price: 7900, badge: "Paste", emoji: "🍅", bg: "#f5e9df", image: "images/products/Gino Tomato Paste.jpg", about: "Gino Tomato Paste. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "gino-pepper-tomato-paste", name: "Gino Pepper Tomato Paste", detail: "Pack size not specified", category: "Tomato paste", price: 7900, badge: "Paste", emoji: "🍅", bg: "#f5e9df", image: "images/products/Gino Pepper Tomato Paste.jpg", about: "Gino Pepper Tomato Paste. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "gino-party-jollof-tomato-paste", name: "Gino Party Jollof Tomato Paste", detail: "Pack size not specified", category: "Tomato paste", price: 8700, badge: "Paste", emoji: "🍅", bg: "#f5e9df", image: "images/products/Gino Party Jollof Tomato Paste.jpg", about: "Gino Party Jollof Tomato Paste. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "chicken-flavour-by-25", name: "Chicken Flavour", detail: "By 25", category: "Seasonings", price: 29300, badge: "By 25", emoji: "🧂", bg: "#f1ecdd", image: "images/products/Chicken Flavour, By 25.jpg", about: "Chicken Flavour, By 25.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "chicken-flavour-by-100", name: "Chicken Flavour", detail: "By 100", category: "Seasonings", price: 29300, badge: "By 100", emoji: "🧂", bg: "#f1ecdd", image: "images/products/Chicken Flavour, By 100.jpg", about: "Chicken Flavour, By 100.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] },
  { id: "masala-curry", name: "Masala Curry", detail: "Pack size not specified", category: "Seasonings", price: 9600, badge: "Seasoning", emoji: "🧂", bg: "#f1ecdd", image: "", about: "Masala Curry. Pack size was not specified in the product details provided.", storage: "Store in a cool, dry place and follow the storage guidance on the packaging.", pairWith: [] }
];

const categories = ["Rice", "Sugar", "Salt", "Cooking oil", "Flour & semovita", "Noodles", "Pasta", "Seasonings", "Tomato paste"];
const categoryEmojis = { Rice: "🌾", Sugar: "🧂", "Flour & semovita": "🌾", Noodles: "🍜", Pasta: "🍝", "Cooking oil": "🫒", Salt: "🧂", Seasonings: "🧂", "Tomato paste": "🍅" };
const storageKey = "zoa-market-store";

function loadStoredState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const cart = Object.fromEntries(Object.entries(saved.cart || {}).filter(([id, quantity]) =>
      products.some((product) => product.id === id) && Number.isSafeInteger(quantity) && quantity > 0
    ));
    const favorites = new Set(Array.isArray(saved.favorites)
      ? saved.favorites.filter((id) => products.some((product) => product.id === id))
      : []);
    return { cart, favorites };
  } catch (error) {
    console.warn("Could not restore the saved ZOA basket.", error);
    return { cart: {}, favorites: new Set() };
  }
}

const savedState = loadStoredState();
const state = { category: "All", search: "", sort: "featured", cart: savedState.cart, favorites: savedState.favorites, activeChatProduct: null };
const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const cartBackdrop = document.querySelector("#cart-backdrop");
const chatPanel = document.querySelector("#chat-panel");
const chatMessages = document.querySelector("#chat-messages");
let toastTimer;

function saveStoredState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ cart: state.cart, favorites: [...state.favorites] }));
  } catch (error) {
    console.warn("Could not save the ZOA basket in this browser.", error);
  }
}

function normalizeText(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function normalizePackText(value) {
  return normalizeText(value.replace(/(\d+)\s*(kilograms?|kg)\b/gi, "$1kg")
    .replace(/(\d+)\s*(litres?|liters?|l)\b/gi, "$1litre")
    .replace(/(\d+)\s*(millilitres?|milliliters?|ml)\b/gi, "$1ml")
    .replace(/(\d+)\s*(grams?|g)\b/gi, "$1g"));
}

function productSearchScore(product, query) {
  const normalizedQuery = query.toLowerCase().replace(/(\d+)\s*(kilograms?|kg|grams?|g|millilitres?|milliliters?|ml|litres?|liters?|l)\b/gi, (_, amount, unit) => {
    const canonicalUnit = /^(l|litre|litres|liter|liters)$/i.test(unit) ? "litre"
      : /^(gram|grams|g)$/i.test(unit) ? "g"
        : /^(millilitre|millilitres|milliliter|milliliters|ml)$/i.test(unit) ? "ml"
          : "kg";
    return `${amount} ${canonicalUnit}`;
  });
  const compactQuery = normalizeText(normalizedQuery);
  const queryTokens = normalizedQuery.match(/[a-z0-9]+/g) || [];
  if (!queryTokens.length) return 0;

  const searchable = `${product.name} ${product.detail} ${product.id} ${product.price} ${product.price.toLocaleString("en-NG")}`;
  const searchableTokens = searchable.toLowerCase().match(/[a-z0-9]+/g) || [];
  const categoryTokens = product.category.toLowerCase().match(/[a-z0-9]+/g) || [];
  const compactSearchable = normalizeText(`${searchable} ${product.category}`);
  const aliases = product.category === "Noodles" && product.name.toLowerCase().includes("mim")
    ? ["mamee", "mee mee"]
    : [];
  const aliasTokens = aliases.flatMap((alias) => alias.split(" "));
  const tokenScore = (tokens) => queryTokens.map((token) => [...tokens, ...aliasTokens].reduce((best, candidate) => {
    if (candidate === token) return Math.max(best, 5);
    if (/^[a-z]+$/.test(token) && /^[a-z]+$/.test(candidate)) {
      if (candidate.startsWith(token)) return Math.max(best, 4);
      if (candidate.includes(token)) return Math.max(best, 3);
    }
    if (/^[a-z]+$/.test(token) && /^[a-z]+$/.test(candidate)
      && token.length >= 4 && levenshteinDistance(token, candidate) <= 1) return Math.max(best, 1);
    return best;
  }, 0));
  const coreScores = tokenScore(searchableTokens);
  const allScores = tokenScore([...searchableTokens, ...categoryTokens]);
  if (allScores.some((score) => !score)) return 0;
  if (normalizeText(product.category) === compactQuery) return 100 + allScores.reduce((sum, score) => sum + score, 0);

  const coreMatch = coreScores.every((score) => score > 0);
  const baseScore = coreMatch ? 30 : 5;
  return baseScore + allScores.reduce((sum, score) => sum + score, 0)
    + (compactSearchable.includes(compactQuery) ? 20 : 0)
    + (normalizeText(product.name).includes(compactQuery) ? 8 : 0);
}

function levenshteinDistance(left, right) {
  if (Math.abs(left.length - right.length) > 1) return 2;
  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let row = 1; row <= left.length; row += 1) {
    const current = [row];
    for (let column = 1; column <= right.length; column += 1) {
      current[column] = Math.min(
        current[column - 1] + 1,
        previous[column] + 1,
        previous[column - 1] + (left[row - 1] === right[column - 1] ? 0 : 1)
      );
    }
    previous = current;
  }
  return previous[right.length];
}

function money(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(value);
}

function filteredProducts() {
  let result = products
    .map((product) => ({ product, score: state.search ? productSearchScore(product, state.search) : 1 }))
    .filter(({ product, score }) => (state.category === "All" || product.category === state.category) && score > 0);
  if (state.search && !categories.some((category) => normalizeText(category) === normalizeText(state.search))) {
    const hasCoreMatches = result.some(({ score }) => score >= 30 && score < 100);
    if (hasCoreMatches) result = result.filter(({ score }) => score >= 30 && score < 100);
  }
  if (state.search) result.sort((a, b) => b.score - a.score);
  result = result.map(({ product }) => product);
  if (state.sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
  return result;
}

function renderSearchSuggestions(matches = products
  .map((product) => ({ product, score: productSearchScore(product, state.search) }))
  .filter((item) => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 5)
  .map((item) => item.product)) {
  const suggestions = document.querySelector("#search-suggestions");
  const input = document.querySelector("#search-input");
  suggestions.replaceChildren();
  if (!state.search) {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    return;
  }

  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "search-suggestion-empty";
    empty.textContent = "No products found. Try a shorter search or check the spelling.";
    suggestions.append(empty);
  } else {
    matches.forEach((product) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "search-suggestion";
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", "false");
      option.dataset.searchProduct = product.id;
      option.innerHTML = `<span><strong>${product.name}</strong><small>${product.detail} · ${product.category}</small></span><b>${money(product.price)}</b>`;
      suggestions.append(option);
    });
  }
  suggestions.hidden = false;
  input.setAttribute("aria-expanded", "true");
}

function selectSearchProduct(product) {
  const input = document.querySelector("#search-input");
  state.category = "All";
  state.search = `${product.name} ${product.detail === "Pack size not specified" ? "" : product.detail}`.trim();
  input.value = state.search;
  renderCategories();
  renderProducts();
  renderSearchSuggestions();
  document.querySelector("#search-suggestions").hidden = true;
  input.setAttribute("aria-expanded", "false");
  requestAnimationFrame(() => document.querySelector(`#product-${product.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
}

function renderProducts() {
  const result = filteredProducts();
  document.querySelector("#product-result-count").textContent = `${result.length} ${result.length === 1 ? "product" : "products"}`;
  document.querySelector("#empty-state").hidden = result.length > 0;
  document.querySelector("#product-result-count").setAttribute("aria-live", "polite");
  document.querySelector("#empty-state p").textContent = state.category === "All"
    ? "Try a shorter name, a different spelling, or clear your search to browse everything."
    : "Try a shorter name or clear the category filter to search the full catalog.";
  productGrid.innerHTML = result.map((product) => `
    <article class="product-card" id="product-${product.id}">
      <div class="product-image" style="--product-bg:${product.bg}">
        ${product.image ? `<img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false" />` : ""}
        <span class="product-emoji" aria-hidden="true" ${product.image ? "hidden" : ""}>${product.emoji}</span>
        <span class="product-badge ${product.badgeType || ""}">${product.badge}</span>
        <button class="wishlist-button ${state.favorites.has(product.id) ? "is-saved" : ""}" type="button" data-favorite="${product.id}" aria-label="${state.favorites.has(product.id) ? "Remove from" : "Add to"} favorites">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-detail">${product.detail}</div>
        <button class="product-question" type="button" data-ask-product="${product.id}" aria-label="Ask ZOA about ${product.name}, ${product.detail}">Ask ZOA about it →</button>
        <div class="product-bottom"><span class="product-price">${money(product.price)}${product.oldPrice ? `<del>${money(product.oldPrice)}</del>` : ""}</span><button class="add-button" type="button" data-add="${product.id}"><span>+</span> Add</button></div>
      </div>
    </article>`).join("");
}

function renderCategories() {
  document.querySelector("#category-grid").innerHTML = `
    <button class="category-card ${state.category === "All" ? "selected" : ""}" data-category="All" type="button" aria-pressed="${state.category === "All"}"><span class="category-emoji all-emoji">✳</span><span>Everything</span></button>
    ${categories.map((category) => `<button class="category-card ${state.category === category ? "selected" : ""}" data-category="${category}" type="button" aria-pressed="${state.category === category}"><span class="category-emoji">${categoryEmojis[category]}</span><span>${category}</span></button>`).join("")}`;
}

function cartCount() {
  return Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
}

function addProductToCart(product) {
  state.cart[product.id] = (state.cart[product.id] || 0) + 1;
  saveStoredState();
  renderCart();
  showToast(`${product.name} added to your basket`);
}

function renderCart() {
  const count = cartCount();
  const entries = Object.entries(state.cart).filter(([, quantity]) => quantity > 0);
  const subtotal = entries.reduce((total, [id, quantity]) => total + products.find((product) => product.id === id).price * quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#cart-toggle").setAttribute("aria-label", `Shopping cart, ${count} ${count === 1 ? "item" : "items"}`);
  document.querySelector("#drawer-count").textContent = `(${count})`;
  document.querySelector("#cart-empty").hidden = entries.length > 0;
  document.querySelector("#order-form").hidden = entries.length === 0;
  document.querySelector("#cart-subtotal").textContent = money(subtotal);
  document.querySelector("#cart-items").innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `<div class="cart-item"><div class="cart-item-image">${product.image ? `<img src="${product.image}" alt="" onerror="this.replaceWith(document.createTextNode('${product.emoji}'))" />` : product.emoji}</div><div><p class="cart-item-name">${product.name}</p><span class="cart-item-variant">${product.detail}</span><span class="cart-item-price">${money(product.price)} each</span><div class="quantity-control"><button type="button" data-quantity="${id}" data-change="-1" aria-label="Remove one ${product.name}, ${product.detail}">−</button><span>${quantity}</span><button type="button" data-quantity="${id}" data-change="1" aria-label="Add one ${product.name}, ${product.detail}">+</button></div><button class="remove-item-button" type="button" data-remove-product="${id}" aria-label="Remove ${product.name}, ${product.detail} from cart">Remove</button></div><span class="cart-item-total">${money(product.price * quantity)}</span></div>`;
  }).join("");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function appendChatMessage(text, sender, actions = []) {
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  if (actions.length) {
    const buttons = document.createElement("div");
    buttons.className = "chat-suggestions";
    actions.forEach((action) => {
      const button = action.url ? document.createElement("a") : document.createElement("button");
      button.className = "chat-action";
      if (action.url) {
        button.href = action.url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
      } else {
        button.type = "button";
      }
      if (action.productId) button.dataset.chatAdd = action.productId;
      else if (action.cart) button.dataset.chatCart = "true";
      else if (!action.url) button.dataset.chatPrompt = action.prompt;
      button.textContent = action.label;
      buttons.append(button);
    });
    message.append(buttons);
  }
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findProductsInQuestion(query) {
  const normalizedQuery = normalizePackText(query);
  const aliases = {
    "mim-ee-noodles-70g": ["mamee", "mimee", "mee mee"],
    "mim-ee-noodles-100g": ["mamee", "mimee", "mee mee"],
    "indomie-regular-chicken-70g": ["indomie"],
    "indomie-super-pack-120g": ["indomie"],
    "indomie-onion-70g": ["indomie"],
    "indomie-hungryman-180g": ["indomie"],
    "indomie-belleful": ["indomie"],
    "kings-veg-oil-1l": ["kings oil"],
    "kings-veg-oil-2l": ["kings oil"],
    "kings-veg-oil-3l": ["kings oil"],
    "kings-veg-oil-5l": ["kings oil"],
    "kings-veg-oil-25l": ["kings oil"]
  };
  const namedMatches = products.filter((item) =>
    normalizedQuery.includes(normalizePackText(item.name))
    || normalizedQuery.includes(normalizePackText(item.id))
  );
  const matches = namedMatches.length ? namedMatches : products.filter((item) =>
    (aliases[item.id] || []).some((alias) => normalizedQuery.includes(normalizePackText(alias)))
  );
  if (matches.length < 2) return matches;
  const sizeMatches = matches.filter((item) =>
    item.detail !== "Pack size not specified"
    && normalizedQuery.includes(normalizePackText(item.detail).match(/\d+(?:kg|litre|ml|g)/)?.[0] || "no-match")
  );
  return sizeMatches.length ? sizeMatches : matches;
}

function whatsappAction(label, message) {
  return { label, url: `https://wa.me/2349035915493?text=${encodeURIComponent(message)}` };
}

function answerProductQuestion(question) {
  const query = question.toLowerCase();
  const categoryAliases = {
    "Cooking oil": ["oil", "vegetable oil"],
    "Flour & semovita": ["flour", "semovita", "wheat"],
    "Tomato paste": ["tomato", "paste"]
  };
  const category = categories.find((name) => normalizeText(query).includes(normalizeText(name)))
    || categories.find((name) => (categoryAliases[name] || []).some((alias) => normalizeText(query).includes(normalizeText(alias))));
  const categoryProducts = category ? products.filter((item) => item.category === category) : [];
  const categoryName = categoryProducts[0]?.category || category || "";
  const mentionsAvailability = /\b(available|availability|in stock|stock|sold out|out of stock|have any|have you got|do you have)\b/.test(query);
  const mentionsPrice = /\b(price|prices|cost|costs|how much|cheapest|lowest|affordable)\b/.test(query);
  const mentionedProducts = findProductsInQuestion(query);
  const hasProductFollowUp = /\b(it|them|this|that|one|same|price|cost|size|details)\b/.test(query)
    || query.includes("how much");
  const activeProduct = products.find((item) => item.id === state.activeChatProduct);
  const product = mentionedProducts.length === 1
    ? mentionedProducts[0]
    : mentionedProducts.length === 0 && hasProductFollowUp ? activeProduct : null;
  if (product) state.activeChatProduct = product.id;
  const productActions = (items) => items.slice(0, 5).map((item) => ({
    label: `Add ${item.name}${item.detail !== "Pack size not specified" ? ` · ${item.detail}` : ""}`,
    productId: item.id
  }));
  const availabilityActions = (items) => items.slice(0, 5).map((item) => ({
    label: `${item.name} · ${item.detail}`,
    prompt: `Is ${item.name} ${item.detail} available?`
  }));
  const followUpActions = [
    { label: "Browse categories", prompt: "Show product categories" },
    { label: "Check delivery", prompt: "Do you deliver?" },
    { label: "Contact ZOA", prompt: "How can I contact ZOA?" }
  ];

  if (/^(hi|hello|hey|good morning|good afternoon|good evening|how are you)\b/.test(query.trim())) {
    return {
      text: "Hello! I’m ZOA Market’s product guide. I can help you browse products, compare listed prices, check what’s in the catalog, and prepare an order request. What would you like to do?",
      actions: [
        { label: "Browse products", prompt: "Show product categories" },
        { label: "Check availability", prompt: "What products are available?" },
        { label: "How to order", prompt: "How do I place an order?" },
        { label: "Contact the team", prompt: "How can I contact ZOA?" }
      ]
    };
  }

  if (/\b(thank you|thanks|cheers)\b/.test(query)) {
    return { text: "You’re welcome! Is there anything else I can help you find?", actions: followUpActions };
  }

  if (/\b(open|opening|close|closing|hours|what time)\b/.test(query)) {
    return {
      text: "ZOA Market’s listed opening hours are Monday–Saturday, 9:00 am–6:00 pm. For a public holiday or today’s hours, please confirm with the team.",
      actions: [
        whatsappAction("Ask about today’s hours", "Hello ZOA Market, are you open today and what time do you close?"),
        { label: "Get directions", url: "https://www.google.com/maps/search/?api=1&query=1%20Tokura%20Street%20off%20Omorege%20AIT%20Road%20Alagbado%20Lagos%20State" }
      ]
    };
  }

  if (/\b(deliver|delivery|pickup|pick up|collect|shipping|delivery fee)\b/.test(query)) {
    return {
      text: "You can request delivery or pickup when you send an order enquiry. I can’t confirm delivery coverage, timing, or fees; the ZOA team will confirm those with you before the order is confirmed.",
      actions: [
        whatsappAction("Ask about delivery", "Hello ZOA Market, do you deliver to my area? Please let me know the delivery fee and estimated time."),
        { label: "How to place an order", prompt: "How do I place an order?" }
      ]
    };
  }

  if (/\b(how do i order|how to order|place an order|how can i order|ordering|order|checkout|payment|pay online|payment method)\b/.test(query)) {
    return {
      text: "To place an order: add items to your basket, open Your cart, enter your name and phone number, choose delivery or pickup, then select Continue to WhatsApp. The team will confirm availability, final prices, delivery fees, and next steps. Sending the request does not confirm the order or take payment.",
      actions: [
        { label: "Browse products", prompt: "Show product categories" },
        whatsappAction("Ask about payment", "Hello ZOA Market, what payment methods do you accept and when should I pay?")
      ]
    };
  }

  if (/\b(contact|address|phone|email|whatsapp)\b/.test(query)) {
    return {
      text: "You can reach ZOA Market at +234 903 591 5493 or akinrinadedare80@gmail.com. Visit 1 Tokura Street, off Omorege, AIT Road, Alagbado, Lagos State. Opening hours: Monday–Saturday, 9:00 am–6:00 pm.",
      actions: [
        whatsappAction("Message ZOA Market", "Hello ZOA Market, I have a question."),
        { label: "Get directions", url: "https://www.google.com/maps/search/?api=1&query=1%20Tokura%20Street%20off%20Omorege%20AIT%20Road%20Alagbado%20Lagos%20State" }
      ]
    };
  }

  if (mentionsAvailability && product) {
    if (product.availability === "available") {
      return {
        text: `${product.name} (${product.detail}) is marked available in the catalog. Stock can change, so please confirm with the team before travelling or paying.`,
        actions: [
          whatsappAction("Confirm stock on WhatsApp", `Hello ZOA Market, please confirm whether ${product.name} (${product.detail}) is currently in stock and confirm the price.`),
          { label: "Add to basket", productId: product.id }
        ]
      };
    }
    if (product.availability === "unavailable") {
      return {
        text: `${product.name} (${product.detail}) is currently marked out of stock. Please check with the team in case it has been restocked or an alternative is available.`,
        actions: [whatsappAction("Ask about restock", `Hello ZOA Market, is ${product.name} (${product.detail}) still out of stock, or has it been restocked?`)]
      };
    }
    return {
      text: `${product.name} (${product.detail}) is listed in our catalog, but I don’t have a live stock update, so I can’t confirm whether it’s available right now. Ask the team to check before placing your order.`,
      actions: [
        whatsappAction("Ask the team to check", `Hello ZOA Market, could you please confirm whether ${product.name} (${product.detail}) is currently available and its current price?`),
        { label: "Add to basket", productId: product.id }
      ]
    };
  }

  if (query.includes("category") || query.includes("categories") || (query.includes("browse") && !category)) {
    return {
      text: "Which part of the catalog would you like to explore?",
      actions: categories.map((name) => ({ label: name, prompt: `Show ${name}` }))
    };
  }
  if (category && (query.includes("show") || query.includes("list") || query.includes("browse") || query.includes("what") || query.includes("products"))) {
    return {
      text: `Here are the ${categoryProducts.length} ${categoryName.toLowerCase()} products in the catalog. Listed prices may change; the team will confirm current prices and stock. Choose an item to add it to your basket.`,
      actions: productActions(categoryProducts)
    };
  }
  if (/\b(cheapest|lowest price|most affordable|lowest priced)\b/.test(query)) {
    const cheapest = [...products].sort((a, b) => a.price - b.price).slice(0, 3);
    return {
      text: `The three lowest listed prices are ${cheapest.map((item) => `${item.name} (${item.detail}) at ${money(item.price)}`).join("; ")}. These are catalog prices; please confirm current prices with the team.`,
      actions: productActions(cheapest)
    };
  }
  if (mentionsPrice && !product) {
    if (!category) {
      return { text: "I can compare the listed prices. Which category are you interested in?", actions: categories.map((name) => ({ label: name, prompt: `Compare ${name} prices` })) };
    }
    return { text: `Here are the listed ${categoryName} prices: ${categoryProducts.map((item) => `${item.name} (${item.detail}) — ${money(item.price)}`).join("; ")}`, actions: productActions(categoryProducts) };
  }
  if (/allerg|ingredient|peanut|tree nut|\bnuts?\b|gluten|celiac|lactose|vegan|vegetarian|dairy.free/.test(query)
    || /contain|free from|free of|safe to eat/.test(query)) {
    return { text: "I can share the descriptions shown in our shop, but I don’t have verified full ingredient or allergen information. Please check the product label or ask our team before ordering.", actions: followUpActions };
  }

  if (mentionedProducts.length > 1 && !product) {
    return {
      text: mentionsAvailability
        ? "I found a few sizes or varieties. Which one would you like me to check for availability?"
        : "I found more than one size or variety. Which one do you mean?",
      actions: mentionedProducts.slice(0, 5).map((item) => ({
        label: `${item.name} · ${item.detail}`,
        prompt: mentionsAvailability
          ? `Is ${item.name} ${item.detail} available?`
          : `Tell me about ${item.name} ${item.detail}`
      }))
    };
  }

  if (product) {
    if (/\b(store|keep|fresh|storage)\b/.test(query)) {
      return { text: `${product.name}: ${product.storage}`, actions: followUpActions };
    }
    if (/\b(pair|with|together|goes|go well)\b/.test(query)) {
      if (!product.pairWith.length) {
        return { text: `I don’t have confirmed pairing suggestions for ${product.name} yet. ${product.about} Contact ZOA Market for recommendations.`, actions: followUpActions };
      }
      const pairings = product.pairWith.map((id) => products.find((item) => item.id === id).name);
      return { text: `${product.name} goes nicely with ${pairings.join(" and ")}. ${product.about}`, actions: followUpActions };
    }
    const price = product.oldPrice
      ? `${money(product.price)} (on sale from ${money(product.oldPrice)})`
      : money(product.price);
    return {
      text: `${product.about} The listed price is ${price} for ${product.detail}. Prices may change; please confirm with the team.`,
      actions: [
        { label: "Add to basket", productId: product.id },
        { label: "Check availability", prompt: `Is ${product.name} ${product.detail} available?` },
        { label: "How should I store it?", prompt: `How should I store ${product.name}?` }
      ]
    };
  }

  if (mentionsAvailability) {
    if (mentionedProducts.length > 1) {
      return {
        text: "I found a few sizes or varieties. Which one would you like me to check?",
        actions: mentionedProducts.slice(0, 5).map((item) => ({
          label: `${item.name} · ${item.detail}`,
          prompt: `Is ${item.name} ${item.detail} available?`
        }))
      };
    }
    const checkTarget = category ? `${category} products` : "the products you’re interested in";
    return {
      text: category
        ? `The catalog lists ${categoryProducts.length} ${category.toLowerCase()} products, but I don’t have live stock updates for them. Tell me the size or product name you want, or ask the team to check.`
        : "I can show what’s listed in the catalog, but live stock is not connected, so I can’t truthfully say what is in stock right now. Ask the team to check a product for you.",
      actions: [
        ...(category ? availabilityActions(categoryProducts) : [{ label: "Browse products", prompt: "Show product categories" }]),
        whatsappAction("Check with the team", `Hello ZOA Market, could you please confirm current availability for ${checkTarget}?`)
      ]
    };
  }

  if (/\b(all|how many|products|sell|carry|catalog|catalogue|stock)\b/.test(query)) {
    return { text: `The catalog lists ${products.length} products across ${categories.join(", ")}. Stock is not live-updated here, but I can help you find an item and ask the team to check it.`, actions: categories.map((name) => ({ label: name, prompt: `Show ${name}` })) };
  }
  if (/\b(sale|deal|promo|promotion|offer)\b/.test(query)) {
    const promotions = products.filter((item) => item.badgeType === "sale");
    return promotions.length
      ? { text: `Products marked as promotions: ${promotions.map((item) => `${item.name} (${item.detail}) — ${money(item.price)}`).join("; ")}. Contact ZOA Market to confirm the promotion details and availability.`, actions: productActions(promotions) }
      : { text: "No products are currently marked as promotions in the catalog. Contact ZOA Market for current offers.", actions: followUpActions };
  }
  if (/\b(breakfast|pair|recommend|suggest)\b/.test(query)) {
    return { text: "I can suggest products from the catalog, but I can’t verify stock or make dietary recommendations. Which category would you like to browse?", actions: categories.map((name) => ({ label: name, prompt: `Show ${name}` })) };
  }
  return {
    text: "I’m not sure I understood that yet. I can help you find a product, check its listed price, explain ordering or delivery, or connect you with the ZOA team. What are you looking for?",
    actions: [
      { label: "Browse products", prompt: "Show product categories" },
      { label: "How to order", prompt: "How do I place an order?" },
      { label: "Check availability", prompt: "What products are available?" },
      { label: "Contact the team", prompt: "How can I contact ZOA?" }
    ]
  };
}

function sendChatMessage(text) {
  const question = text.trim();
  if (!question) return;
  appendChatMessage(question, "user");
  const answer = answerProductQuestion(question);
  appendChatMessage(answer.text, "assistant", answer.actions || []);
}

function setChatOpen(open) {
  if (open) setCartOpen(false);
  const wasOpen = chatPanel.classList.contains("open");
  chatPanel.classList.toggle("open", open);
  chatPanel.setAttribute("aria-hidden", String(!open));
  document.querySelector("#chat-launcher").setAttribute("aria-expanded", String(open));
  if (open) {
    if (!chatMessages.children.length) {
      appendChatMessage("Hi! I’m the ZOA Market product guide. Ask me about products, listed prices, order steps, delivery, or opening hours. I can’t see live stock, but I can help you ask the team to check.", "assistant", [
        { label: "Browse products", prompt: "Show product categories" },
        { label: "Check availability", prompt: "What products are available?" },
        { label: "How to order", prompt: "How do I place an order?" },
        { label: "Contact the team", prompt: "How can I contact ZOA?" }
      ]);
    }
    document.querySelector("#chat-input").focus();
  } else if (wasOpen) {
    document.querySelector("#chat-launcher").focus();
  }
}

function setCartOpen(open) {
  if (open) setChatOpen(false);
  cartDrawer.classList.toggle("open", open);
  cartBackdrop.classList.toggle("open", open);
  cartDrawer.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) document.querySelector("#close-cart").focus();
}

document.querySelector("#category-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderCategories();
  renderProducts();
});

document.querySelector("#shop-all-link").addEventListener("click", () => {
  state.category = "All";
  renderCategories();
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.id === "shop-all-link"));
  renderProducts();
});

document.querySelectorAll("[data-nav-category]").forEach((link) => {
  link.addEventListener("click", () => {
  state.category = link.dataset.navCategory;
    document.querySelectorAll(".category-card").forEach((card) => card.classList.toggle("selected", card.dataset.category === state.category));
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.toggle("active", item === link));
    renderProducts();
  });
});

document.querySelector("#chat-launcher").addEventListener("click", () => setChatOpen(true));
document.querySelector("#chat-close").addEventListener("click", () => setChatOpen(false));
document.querySelector("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  sendChatMessage(input.value);
  input.value = "";
  input.focus();
});
chatMessages.addEventListener("click", (event) => {
  const button = event.target.closest("[data-chat-prompt]");
  if (button) sendChatMessage(button.dataset.chatPrompt);
  const cartButton = event.target.closest("[data-chat-cart]");
  if (cartButton) setCartOpen(true);
  const addButton = event.target.closest("[data-chat-add]");
  if (addButton) {
    const product = products.find((item) => item.id === addButton.dataset.chatAdd);
    if (!product) return;
    state.activeChatProduct = product.id;
    addProductToCart(product);
    addButton.disabled = true;
    addButton.textContent = "Added to basket";
    appendChatMessage(
      `${product.name} (${product.detail}) is in your basket. Would you like to check its availability or review your basket?`,
      "assistant",
      [
        { label: "Check availability", prompt: `Is ${product.name} ${product.detail} available?` },
        { label: "Review basket", cart: true }
      ]
    );
  }
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const firstMatch = products
    .map((product) => ({ product, score: productSearchScore(product, state.search) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)[0];
  if (firstMatch && state.search) selectSearchProduct(firstMatch.product);
});
document.querySelector("#search-input").addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  if (state.search) {
    state.category = "All";
    renderCategories();
  }
  renderProducts();
  renderSearchSuggestions();
});
document.querySelector("#search-suggestions").addEventListener("click", (event) => {
  const option = event.target.closest("[data-search-product]");
  if (!option) return;
  const product = products.find((item) => item.id === option.dataset.searchProduct);
  if (product) selectSearchProduct(product);
});
document.querySelector("#clear-search").addEventListener("click", () => {
  const input = document.querySelector("#search-input");
  input.value = "";
  state.search = "";
  state.category = "All";
  renderCategories();
  renderProducts();
  renderSearchSuggestions();
  input.focus();
});
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
  if (event.key === "Escape") {
    document.querySelector("#search-suggestions").hidden = true;
    document.querySelector("#search-input").setAttribute("aria-expanded", "false");
    setCartOpen(false);
    setChatOpen(false);
  }
});
document.querySelector("#sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const askButton = event.target.closest("[data-ask-product]");
  if (askButton) {
    const product = products.find((item) => item.id === askButton.dataset.askProduct);
    setChatOpen(true);
    sendChatMessage(`Tell me about ${product.name} (${product.detail})`);
  }
  if (addButton) {
    const product = products.find((item) => item.id === addButton.dataset.add);
    if (product) addProductToCart(product);
  }
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    saveStoredState();
    renderProducts();
  }
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-product]");
  if (removeButton) {
    const id = removeButton.dataset.removeProduct;
    const product = products.find((item) => item.id === id);
    if (!product || !state.cart[id]) return;
    delete state.cart[id];
    saveStoredState();
    renderCart();
    showToast(`${product.name} removed from your basket`);
    return;
  }

  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  const id = button.dataset.quantity;
  state.cart[id] += Number(button.dataset.change);
  if (state.cart[id] <= 0) delete state.cart[id];
  saveStoredState();
  renderCart();
});

document.querySelectorAll('input[name="fulfilment"]').forEach((input) => {
  input.addEventListener("change", () => {
    const isDelivery = document.querySelector('input[name="fulfilment"]:checked').value === "Delivery";
    const addressField = document.querySelector("#delivery-address-field");
    const address = document.querySelector("#delivery-address");
    addressField.hidden = !isDelivery;
    address.required = isDelivery;
  });
});

document.querySelector("#order-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = Object.entries(state.cart).filter(([, quantity]) => quantity > 0);
  if (!entries.length) return;

  const form = event.currentTarget;
  const customerName = form.elements.customerName.value.trim();
  const customerPhone = form.elements.customerPhone.value.trim();
  const fulfilment = form.elements.fulfilment.value;
  const deliveryAddress = form.elements.deliveryAddress.value.trim();
  const orderNote = form.elements.orderNote.value.trim();
  const subtotal = entries.reduce((total, [id, quantity]) =>
    total + products.find((product) => product.id === id).price * quantity, 0
  );
  const itemLines = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `• ${quantity} × ${product.name} (${product.detail}) — ${money(product.price * quantity)}`;
  });
  const orderDetails = [
    "Hello ZOA Market, I’d like to place an order request:",
    "",
    ...itemLines,
    "",
    `Estimated items subtotal: ${money(subtotal)} (please confirm current prices)`,
    `Name: ${customerName}`,
    `Phone: ${customerPhone}`,
    `Fulfilment: ${fulfilment}`,
    ...(fulfilment === "Delivery" ? [`Delivery address: ${deliveryAddress}`, "Please confirm the delivery fee and estimated delivery time."] : ["I will pick up from 1 Tokura Street, off Omorege, AIT Road, Alagbado."]),
    ...(orderNote ? [`Order note: ${orderNote}`] : []),
    "",
    "Please confirm availability, final total, and next steps."
  ].join("\n");
  window.location.assign(`https://wa.me/2349035915493?text=${encodeURIComponent(orderDetails)}`);
});

document.querySelector("#cart-toggle").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.querySelector("#start-shopping").addEventListener("click", () => setCartOpen(false));

renderCategories();
renderProducts();
renderCart();