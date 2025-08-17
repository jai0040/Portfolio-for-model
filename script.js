// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Modal functionality
function openModal(serviceType) {
  const modal = document.getElementById("serviceModal")
  const modalBody = document.getElementById("modalBody")

  const serviceDetails = {
    fashion: {
      title: "Fashion Modeling",
      icon: "👗",
      price: "From $500/day",
      description: "Professional fashion modeling for editorial shoots, lookbooks, and brand campaigns.",
      includes: [
        "Full day shoot (8 hours)",
        "Multiple outfit changes",
        "Professional hair & makeup consultation",
        "High-resolution edited photos",
        "Usage rights for agreed platforms",
        "Travel within city limits",
      ],
      experience:
        "5+ years in fashion modeling with top brands including Vogue, Harper's Bazaar, and luxury fashion houses.",
    },
    commercial: {
      title: "Commercial Modeling",
      icon: "📸",
      price: "From $800/day",
      description: "Brand campaigns, product photography, and advertising shoots for commercial clients.",
      includes: [
        "Full day commercial shoot",
        "Product integration expertise",
        "Brand guideline adherence",
        "Multiple concept execution",
        "Extended usage rights",
        "Social media content creation",
      ],
      experience: "Extensive experience with major brands including Nike, Apple, and luxury lifestyle companies.",
    },
    runway: {
      title: "Runway Modeling",
      icon: "✨",
      price: "From $300/show",
      description: "Professional runway modeling for fashion shows, presentations, and special events.",
      includes: [
        "Runway walk performance",
        "Fitting sessions",
        "Backstage preparation",
        "Multiple outfit presentations",
        "Professional attitude",
        "Event networking",
      ],
      experience: "Featured in Paris Fashion Week, New York Fashion Week, and major designer showcases.",
    },
    portrait: {
      title: "Portrait Sessions",
      icon: "🎭",
      price: "From $400/session",
      description: "Professional headshots, beauty photography, and personal branding sessions.",
      includes: [
        "2-hour portrait session",
        "Multiple looks and styles",
        "Professional retouching",
        "10+ high-resolution images",
        "Personal branding consultation",
        "Social media ready formats",
      ],
      experience: "Specialized in creating compelling personal brand imagery for professionals and creatives.",
    },
  }

  const service = serviceDetails[serviceType]

  modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${service.icon}</div>
            <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 0.5rem; color: #333;">${service.title}</h2>
            <div style="font-size: 1.2rem; font-weight: 600; color: #8B5CF6; margin-bottom: 1rem;">${service.price}</div>
        </div>
        
        <p style="color: #666; margin-bottom: 2rem; line-height: 1.6;">${service.description}</p>
        
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 1rem; color: #333;">What's Included:</h3>
        <ul style="color: #555; margin-bottom: 2rem; padding-left: 1.5rem;">
            ${service.includes.map((item) => `<li style="margin-bottom: 0.5rem;">${item}</li>`).join("")}
        </ul>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
            <h4 style="color: #333; margin-bottom: 0.5rem;">Experience:</h4>
            <p style="color: #666; font-size: 0.9rem; line-height: 1.5;">${service.experience}</p>
        </div>
        
        <div style="text-align: center;">
            <button onclick="scrollToSection('contact'); closeModal();" style="background: #333; color: white; border: none; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                Book This Service
            </button>
        </div>
    `

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("serviceModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("serviceModal")
  if (event.target === modal) {
    closeModal()
  }
}

// PDF Download functionality
function downloadPortfolio() {
  // Using jsPDF library
  const { jsPDF } = window.jspdf
  const doc = new jsPDF()

  // Add content to PDF
  doc.setFontSize(24)
  doc.text("Alexandra Chen", 20, 30)
  doc.setFontSize(16)
  doc.text("Professional Model Portfolio", 20, 45)

  doc.setFontSize(12)
  doc.text("Contact Information:", 20, 70)
  doc.text("Email: alexandra@modelportfolio.com", 20, 85)
  doc.text("Phone: +1 (555) 123-4567", 20, 100)
  doc.text("Location: New York, NY", 20, 115)

  doc.text("Services:", 20, 140)
  doc.text("• Fashion Modeling - From $500/day", 25, 155)
  doc.text("• Commercial Modeling - From $800/day", 25, 170)
  doc.text("• Runway Modeling - From $300/show", 25, 185)
  doc.text("• Portrait Sessions - From $400/session", 25, 200)

  doc.text("Experience:", 20, 225)
  doc.text("• 150+ Projects Completed", 25, 240)
  doc.text("• 50+ Brands Worked With", 25, 255)
  doc.text("• 25+ Magazine Features", 25, 270)

  // Save the PDF
  doc.save("Alexandra-Chen-Portfolio.pdf")
}

// Navigation scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.98)"
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)"
    nav.style.boxShadow = "none"
  }
})

// Add click handlers for navigation links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Form submission
  const form = document.querySelector(".contact-form form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message! I'll get back to you soon.")
      form.reset()
    })
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".portfolio-item, .service-card, .testimonial-card")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

function openAvailabilityModal() {
  document.getElementById('availabilityModal').style.display = 'block';
}

function closeAvailabilityModal() { 
  document.getElementById('availabilityModal').style.display = 'none';
}

const albumData = {
  portrait1: [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop"
  ],
  portrait2: [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=800&fit=crop"
  ],
  portrait3: [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop"
  ],
  citylife: [
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=700&h=350&fit=crop",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=700&h=350&fit=crop"
  ],
  beachvibes: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&h=350&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&h=350&fit=crop"
  ],
  portrait4: [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400&h=600&fit=crop"
  ],
  portrait5: [
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop"
  ],
  portrait6: [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=600&fit=crop"
  ]
};

let currentAlbum = null;
let currentPhotoIndex = 0;

document.querySelectorAll('.portfolio-item.album').forEach(item => {
  item.addEventListener('click', function() {
    const album = this.getAttribute('data-album');
    openAlbumModal(album, 0);
  });
});

function openAlbumModal(album, index) {
  currentAlbum = album;
  currentPhotoIndex = index;
  const albumPhotos = albumData[album];
  if (!albumPhotos) return;
  document.getElementById('albumModal').style.display = 'block';
  showAlbumPhoto();
}

function closeAlbumModal() {
  document.getElementById('albumModal').style.display = 'none';
}

function showAlbumPhoto() {
  const albumPhotos = albumData[currentAlbum];
  const photoUrl = albumPhotos[currentPhotoIndex];
  document.getElementById('albumPhotos').innerHTML = `
    <img src="${photoUrl}" alt="Album Photo" style="max-width:100%;max-height:60vh;display:block;margin:0 auto;">
    <div style="text-align:center;margin-top:1rem;">Photo ${currentPhotoIndex + 1} of ${albumPhotos.length}</div>
  `;
}

function prevAlbumPhoto() {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    showAlbumPhoto();
  }
}

function nextAlbumPhoto() {
  const albumPhotos = albumData[currentAlbum];
  if (currentPhotoIndex < albumPhotos.length - 1) {
    currentPhotoIndex++;
    showAlbumPhoto();
  }
}

// Optional: Close modal on outside click
window.addEventListener('click', function(event) {
  const modal = document.getElementById('albumModal');
  if (event.target === modal) {
    closeAlbumModal();
  }
});