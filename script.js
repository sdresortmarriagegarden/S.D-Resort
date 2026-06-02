const icon = (name) => `<i data-lucide="${name}"></i>`;
const SUPABASE_URL = "https://hhvcxxplbcskbowdisms.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_hwA1AJG5L2G5FcVkZ0-CIA_YZJYgSRo";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhodmN4eHBsYmNza2Jvd2Rpc21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNzg1NjksImV4cCI6MjA5NTk1NDU2OX0.yfFgwVgIUx8VUwKUcoC25qPuBw3yF8ldbl_aKprsDOQ";

const stats = [
  ["calendar", "12+", "Years of Excellence"],
  ["heart", "2000+", "Happy Couples"],
  ["users", "5000+", "Guest Capacity"],
];

const aboutFeatures = [
  ["sparkles", "Royal Decor", "Handpicked designers create breathtaking themes tailored to your dreams."],
  ["music-2", "Live Entertainment", "Classical to contemporary, the finest performers for your celebration."],
  ["utensils", "Grand Catering", "Award-winning chefs serving authentic Indian and international cuisine."],
  ["car", "Valet Parking", "Organized valet parking support for 500+ vehicles in our expansive parking area."],
  ["shield-check", "Full Security", "24/7 professional security for a safe and worry-free event."],
];

const services = [
  ["heart", "Wedding Ceremony", "Sagai - Phere - Reception", "Complete wedding planning from traditional sagai to grand receptions. Our expert team ensures every ritual is performed with grace and splendor.", "assets/wedding-hall-sikar-stage.webp"],
  ["party-popper", "Engagement & Family Functions", "Milestones Celebrated", "Turn special family milestones into unforgettable celebrations with theme decoration, seating, and hospitality curated for you.", "assets/marriage-garden-sikar-seating.webp"],
  ["camera", "Pre-Wedding Shoots", "Garden & Hall Backdrops", "Capture your love story in our wedding venue in Sikar with garden pathways, decorated entry, and elegant photography settings.", "assets/wedding-venue-sikar-garden-lawn.webp"],
  ["flower-2", "Reception Decor", "Stage - Entry - Seating", "Elegant reception arrangements with decorated entrances, stage backdrops, guest seating, lighting, and garden ambience.", "assets/sd-resort-marriage-garden-front-gate.webp"],
  ["music", "Sangeet & Mehendi", "Dance Night - Henna Ceremony", "Create magical evenings with live performances, vibrant decor, and enchanting pre-wedding settings.", "assets/wedding-hall-sikar-stage.webp"],
  ["utensils-crossed", "Royal Catering", "Indian - Continental - Chinese", "Experience culinary excellence with custom menus designed to delight every wedding guest.", "assets/marriage-garden-sikar-seating.webp"],
];

const room = {
  title: "Comfort Stay Rooms",
  subtitle: "Guest Comfort",
  image: "assets/wedding-guest-rooms-sikar.webp",
  desc: "Clean, comfortable AC and Non-AC rooms are available inside the marriage garden for families, elderly guests, and close relatives who need rest during long celebrations.",
  badge: "AC / Non-AC",
  amenities: [["bed", "Family Stay"], ["droplets", "Attached Bath"], ["wifi", "WiFi"], ["coffee", "Refreshments"]],
  features: ["AC and Non-AC room options", "Attached bathroom facilities", "Comfortable bedding for wedding guests", "Easy access to hall, lawn, and parking"],
};

const gardenFeatures = [
  ["trees", "700+ Square Meter Area", "Beautiful event space with greenery, seating zones, and wedding-friendly open areas."],
  ["flower-2", "Exotic Flower Beds", "Marigold, jasmine, rose, and chrysanthemum gardens in bloom."],
  ["sunset", "Sunset Lawns", "Open-air lawns made for evening celebrations and sunset views."],
  ["music", "Open-Air Stage", "A stage area for live music and performances under the stars."],
  ["camera", "Photo Spots", "15+ curated spots for pre-wedding shoots and portraits."],
  ["heart", "Romantic Walkways", "Fairy-lit stone pathways for a magical ambience."],
  ["coffee", "Garden Cafe", "Al fresco dining with panoramic garden views."],
  ["wind", "Natural Breeze", "Open-air planning with fresh natural ventilation."],
  ["leaf", "Organic Gardens", "Chemical-free green spaces for a safe guest environment."],
];

const gallery = [
  ["assets/wedding-hall-sikar-stage.webp", "Wedding Stage Setup in Sikar", "Hall"],
  ["assets/marriage-garden-sikar-seating.webp", "Garden Sofa Seating", "Garden"],
  ["assets/sd-resort-marriage-garden-front-gate.webp", "Front Gate Entrance", "Entrance"],
  ["assets/wedding-guest-rooms-sikar.webp", "Guest Room for Wedding Families", "Rooms"],
  ["assets/wedding-venue-sikar-garden-lawn.webp", "Garden Pathway and Lawn", "Garden"],
];

const testimonials = [
  ["Kavita & Deepak Singh", "Wedding Reception - Aug 2024", "Our reception decor, stage setup, and catering were beautifully managed. The hall looked graceful and every guest felt welcomed."],
  ["Neha & Rohan Verma", "Engagement - Feb 2025", "The garden setting made our engagement feel special. Seating, lighting, and hospitality were handled with so much care."],
  ["Sunita & Amit Joshi", "Sangeet Ceremony - Mar 2025", "The open lawn, music setup, and family arrangements were perfect for our sangeet. A truly memorable celebration."],
];

const hallTypes = [
  ["Crown", "Grand Royal Hall", "1500-2000 guests"],
  ["Leaf", "Emerald Garden Lawn", "800-1200 guests"],
  ["Castle", "Royal Banquet Hall", "500-800 guests"],
  ["Sparkle", "Pearl Mini Hall", "200-500 guests"],
];

function renderCards() {
  document.getElementById("statsGrid").innerHTML = stats.map(([i, value, label]) => `<article class="stat-card">${icon(i)}<strong>${value}</strong><span>${label}</span></article>`).join("");

  document.getElementById("aboutFeatures").innerHTML = aboutFeatures.map(([i, title, desc]) => `
    <article class="feature-card"><div class="icon-wrap">${icon(i)}</div><h3>${title}</h3><p>${desc}</p></article>
  `).join("");

  document.getElementById("servicesGrid").innerHTML = services.map(([i, title, sub, desc, image]) => `
    <article class="service-card">
      <div class="card-image"><img src="${image}" alt="${title}" loading="lazy" /><span class="card-icon">${icon(i)}</span></div>
      <div class="card-body"><p class="eyebrow">${sub}</p><h3>${title}</h3><p>${desc}</p><a href="#booking" class="text-link">Enquire Now -></a></div>
    </article>
  `).join("");

  document.getElementById("roomsGrid").innerHTML = `
    <article class="room-card featured">
      <div class="card-image">
        <img src="${room.image}" alt="${room.title}" loading="lazy" />
        <span class="badge-pill">${room.badge}</span>
      </div>
      <div class="card-body">
        <p class="eyebrow">${room.subtitle}</p><h3>${room.title}</h3><p>${room.desc}</p>
        <div class="amenities">${room.amenities.map(([i, label]) => `<span>${icon(i)}${label}</span>`).join("")}</div>
        <ul>${room.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      </div>
    </article>
    <article class="rooms-info-panel">
      <p class="eyebrow">Rooms Inside Our Marriage Hall</p>
      <h3>Designed for family comfort during celebrations</h3>
      <p>Our room facility is planned for wedding families who need a peaceful private space during functions. Guests can freshen up, rest between ceremonies, keep belongings safely, and stay close to the main hall and garden throughout the event.</p>
      <div class="room-info-grid">
        <span>${icon("snowflake")} AC and Non-AC options</span>
        <span>${icon("users")} Family-friendly stay</span>
        <span>${icon("shield-check")} Secure premises</span>
        <span>${icon("car")} Close to parking</span>
      </div>
      <p>For room availability, our team coordinates directly with the event booking so arrangements match your function schedule and guest needs.</p>
      <a href="#booking" class="btn btn-gold">Discuss Room Requirements</a>
    </article>
  `;

  document.getElementById("gardenFeatures").innerHTML = gardenFeatures.map(([i, title, desc]) => `
    <article class="garden-card"><div class="icon-wrap">${icon(i)}</div><div><h3>${title}</h3><p>${desc}</p></div></article>
  `).join("");

  document.getElementById("testimonialGrid").innerHTML = testimonials.map(([name, event, text], index) => `
    <article class="testimonial-card ${index === 1 ? "featured-testimonial" : ""}">
      <div class="stars">${Array.from({ length: 5 }, () => icon("star")).join("")}</div>
      <blockquote>"${text}"</blockquote>
      <div class="guest"><span class="avatar">${initials(name)}</span><div><strong>${name}</strong><span>${event}</span></div></div>
    </article>
  `).join("");
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function renderGallery(active = "All") {
  const categories = ["All", "Hall", "Garden", "Rooms", "Entrance"];
  document.getElementById("galleryFilters").innerHTML = categories.map((cat) => `<button class="${cat === active ? "active" : ""}" data-filter="${cat}">${cat}</button>`).join("");
  const filtered = active === "All" ? gallery : gallery.filter((item) => item[2] === active);
  document.getElementById("galleryGrid").innerHTML = filtered.map(([src, title, cat]) => `
    <article class="gallery-item" data-src="${src}" data-title="${title}" data-category="${cat}" tabindex="0">
      <img src="${src}" alt="${title}" loading="lazy" />
      <div class="gallery-caption"><small>${cat}</small><h3>${title}</h3></div>
    </article>
  `).join("");
  refreshIcons();
}

function renderBooking() {
  document.getElementById("hallPanel").innerHTML = `
    <aside class="side-stack">
      <section class="glass-card map-card">
        <h3>Find Us Here</h3>
        <p>Visit S.D. Resort & Marriage Garden or enquire before planning your event.</p>
        <div class="map-embed clean-map">
          <iframe
            title="S.D. Resort & Marriage Garden map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9486170350883!2d75.12091769999999!3d27.595122600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca5e7f61bdeaf%3A0x5066305300558558!2sS.D.%20Resort%20%26%20Marriage%20Garden!5e0!3m2!1sen!2sin!4v1780221718675!5m2!1sen!2sin">
          </iframe>
        </div>
      </section>
      <section class="glass-card"><h3>Need Help?</h3><div class="contact-list">
        <a href="tel:+919653987886">${icon("phone")} +91 96539 87886</a>
        <a href="tel:+919983739485">${icon("phone")} +91 99837 39485</a>
        <a href="mailto:sdresortmarriagegarden@gmail.com">${icon("mail")} sdresortmarriagegarden@gmail.com</a>
        <span>${icon("clock")} 10:00 AM - 10:00 PM</span>
        <span>${icon("map-pin")} NH-52, Dhod Rd, Sikar, Rajasthan 332001</span>
      </div></section>
    </aside>
    <form class="booking-form" data-form="hall">
      <h3>${icon("calendar-days")} Marriage Hall / Party Booking</h3>
      <p>Fill in the details below and our event team will contact you with availability and arrangements.</p>
      <div class="form-grid">
        ${field("Full Name *", "name", "text", "Your Name", true)}
        ${field("Phone *", "phone", "tel", "Your Phone Number", true)}
        ${field("Email", "email", "email", "your@email.com", false, "full")}
        ${selectField("Event Type *", "event", ["Wedding", "Reception", "Engagement", "Sangeet / Mehendi", "Haldi Ceremony", "Anniversary", "Family Function", "Other"], true)}
        ${selectField("Preferred Hall", "hall", hallTypes.map((h) => `${h[1]} (${h[2]})`))}
        ${field("Event Date *", "date", "date", "", true)}
        ${field("Expected Guests *", "guests", "number", "e.g. 500", true)}
        ${textareaField("Special Requirements", "message", "Tell us about decorations, catering, DJ, photography...", "full")}
      </div>
      <button type="submit" class="btn btn-gold">Submit Hall Booking Enquiry</button>
    </form>`;
}

function field(label, name, type, placeholder = "", required = false, extra = "") {
  return `<div class="field ${extra}"><label>${label}</label><input type="${type}" name="${name}" placeholder="${placeholder}" ${required ? "required" : ""} /></div>`;
}

function selectField(label, name, options, required = false, extra = "") {
  return `<div class="field ${extra}"><label>${label}</label><select name="${name}" ${required ? "required" : ""}><option value="">Select</option>${options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
}

function textareaField(label, name, placeholder, extra = "") {
  return `<div class="field ${extra}"><label>${label}</label><textarea name="${name}" placeholder="${placeholder}"></textarea></div>`;
}

function setupInteractions() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const scrollTop = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    scrollTop.classList.toggle("visible", window.scrollY > 500);
  });

  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.innerHTML = icon(open ? "x" : "menu");
    refreshIcons();
  });
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = icon("menu");
      refreshIcons();
    }
  });
  scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  setupHeroSlider();
  setupGallery();
  setupTabsAndForms();
}

function setupHeroSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = document.getElementById("slideDots");
  let current = 0;

  dots.innerHTML = slides.map((_, index) => `<button aria-label="Show slide ${index + 1}" class="${index === 0 ? "active" : ""}" data-slide="${index}"></button>`).join("");
  const update = (index) => {
    current = index;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
    document.getElementById("heroTitle").textContent = slides[current].dataset.title;
    document.getElementById("heroSubtitle").textContent = slides[current].dataset.subtitle;
    document.getElementById("heroTagline").textContent = slides[current].dataset.tagline;
  };
  dots.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) update(Number(button.dataset.slide));
  });
  setInterval(() => update((current + 1) % slides.length), 5000);
  setTimeout(() => document.querySelector(".hero-content").classList.add("visible"), 250);
}

function setupGallery() {
  document.getElementById("galleryFilters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) renderGallery(button.dataset.filter);
  });
  document.getElementById("galleryGrid").addEventListener("click", openGalleryItem);
  document.getElementById("galleryGrid").addEventListener("keydown", (event) => {
    if (event.key === "Enter") openGalleryItem(event);
  });
  document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function openGalleryItem(event) {
  const item = event.target.closest(".gallery-item");
  if (!item) return;
  document.getElementById("lightboxImage").src = item.dataset.src;
  document.getElementById("lightboxImage").alt = item.dataset.title;
  document.getElementById("lightboxCaption").textContent = `${item.dataset.category} - ${item.dataset.title}`;
  document.getElementById("lightbox").classList.add("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
}

function setupTabsAndForms() {
  document.querySelectorAll(".booking-panel").forEach((panel) => {
    panel.addEventListener("submit", handleBookingSubmit);
  });
}

async function handleBookingSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const title = "Hall Booking Enquiry Sent!";
  const message = "Thank you. Our event team will contact you within 24 hours with availability and arrangement details.";
  submitButton.disabled = true;
  submitButton.textContent = "Sending Enquiry...";
  clearFormError(form);

  try {
    await saveBookingEnquiry(form);
    form.replaceWith(successMarkup(title, message));
    refreshIcons();
    setTimeout(() => {
      renderBooking();
      setupTabsAndForms();
      refreshIcons();
    }, 5000);
  } catch (error) {
    showFormError(form, error.message || "Unable to send enquiry. Please call us directly.");
    submitButton.disabled = false;
    submitButton.textContent = "Submit Hall Booking Enquiry";
  }
}

async function saveBookingEnquiry(form) {
  const formData = new FormData(form);
  const payload = {
    full_name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim() || null,
    event_type: String(formData.get("event") || "").trim(),
    preferred_hall: String(formData.get("hall") || "").trim() || null,
    event_date: String(formData.get("date") || "").trim(),
    expected_guests: Number(formData.get("guests")),
    special_requirements: String(formData.get("message") || "").trim() || null,
    page_url: window.location.href,
    user_agent: navigator.userAgent,
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/event_enquiries`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to send enquiry. Please call us directly.");
  }
}

function showFormError(form, message) {
  const error = document.createElement("p");
  error.className = "form-error";
  error.textContent = message;
  form.appendChild(error);
}

function clearFormError(form) {
  form.querySelector(".form-error")?.remove();
}

function successMarkup(title, message) {
  const wrapper = document.createElement("section");
  wrapper.className = "success-card";
  wrapper.innerHTML = `${icon("party-popper")}<h3>${title}</h3><p>${message}</p>`;
  return wrapper;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

window.refreshPageIcons = refreshIcons;

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  renderGallery();
  renderBooking();
  setupInteractions();
  refreshIcons();
});
