// Tournament Data - Placeholder for your actual tournament data
const tournaments = [
    {
        id: 1,
        name: "Decathlon x Bigshow Junior Badminton tournament",
        sport: "badminton",
        location: "RG Royal Sports Club, Bangalore",
        date: "Oct 9, 2022",
        description: "The premier badminton tournament featuring top player from across the state competing for the title.",
        image: "assets/RG1.png",
        highlights: [
            "160 players competing in a knockout format",
            "Over 100 spectators per game",
            "State-of-the-art facilities and organization"
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 2,
        name: "Bigshow Table Tennis Cup",
        sport: "table-tennis",
        location: "MSSTTA, Bangalore",
        date: "Nov 27, 2022",
        description: "A day-long table-tennis tournament bringing together young players for competitive matches",
        image: "assets/MSSTTA1.png",
        highlights: [
            "100+ players participating",
            "Professional referees and organization",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 3,
        name: "Bigshow Junior Championship",
        sport: "badminton",
        location: "Accolades, Bangalore",
        date: "Jan 9th, 2023",
        description: "A prestigious youth badminton tournament showcasing upcoming talent in various age categories.",
        image: "assets/accolades2.png",
        highlights: [
            "Age categories: U11, U13, U17, U19",
            "Cash Prize opportunities for winners!",
            "Professional referees and organization"
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 4,
        name: "Bigshow Sports Fest, 2023",
        sport: "Sports-Fest",
        location: "Dr. BR Ambedkar Stadium, Rajajinagar",
        date: "July 30-31, 2023",
        description: "An exciting tournament containing 5 sports, Athletics, Volleyball, Badminton, Basketball and Table Tennis!",
        image: "photos_page/photos/volley3.JPG",
        highlights: [
            "Professional Referees",
            "Men's, women's categories",
            "Cash prizes totaling Rs.50,000",
            "5 sports happening simultaneously across 2 days"
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 5,
        name: "Bigshow Junior Badminton League",
        sport: "badminton",
        location: "Twin Bee Sports Arena, Nagarbhavi",
        date: "April 30, 2023",
        description: "An inter-club badminton tournament featuring the best clubs competing for league victory.",
        image: "assets/twinbee2.png",
        highlights: [
            "75 badminton clubs participating",
            "High-level competition and sportsmanship",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 6,
        name: "Bigshow Junior and Senior Badminton Tournament",
        sport: "badminton",
        location: "Twin Bee Sports Arena, Nagarbhavi",
        date: "October 29, 2023",
        description: "A grassroots badminton tournament bringing together community players of all ages and skill levels.",
        image: "assets/twinbee1.png",
        highlights: [
            "Family-friendly environment",
            "Youth and adult divisions",
            "Community vendors and entertainment",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 7,
        name: "Bigshow Junior Badminton Tournament",
        sport: "badminton",
        location: "RG Royal Sports Club",
        date: "November 26, 2023",
        description: "A grassroots badminton tournament bringing together community players of all ages and skill levels.",
        image: "assets/RG2.png",
        highlights: [
            "Family-friendly environment",
            "Youth and adult divisions",
            "Community vendors and entertainment",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 8,
        name: "Bigshow Football Championship",
        sport: "football",
        location: "RG Royal Sports Club",
        date: "June 11, 2023",
        description: "An inter school football championship bringing together community players of all ages and skill levels.",
        image: "assets/football1.png",
        highlights: [
            "Family-friendly environment",
            "Competitive matches",
            "Youth and adult divisions",
            "Community vendors and entertainment",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    },
    {
        id: 9,
        name: "Karnataka Sports Fest",
        sport: "Sports-Fest",
        location: "Bangalore",
        date: "August, 2024",
        description: "An inter school Sports Fest bringing together community players of all ages and skill levels.",
        image: "assets/ksf1.png",
        highlights: [
            "5 Sports including Badminton, Volleyball, Basketball, Athletics, Football",
            "Family-friendly environment",
            "Competitive matches",
            "Multiple Sponsors like Bounce, Max-Protien and Wonderla",
            "Community vendors and entertainment",
        ],
        gallery: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ]
    }
];


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('#navbar');

// Mobile menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a nav item
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
// DOM Elements
const tournamentsGrid = document.getElementById('tournamentsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('tournament-modal');
const modalContent = document.getElementById('modal-tournament-details');
const closeModalBtn = document.querySelector('.close-modal');
const contactForm = document.getElementById('contactForm');

// Load tournaments on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTournaments('all');
    setupEventListeners();
    setupTestimonialSlider();
});

// Load tournaments based on filter
function loadTournaments(filter) {
    // Clear the grid
    tournamentsGrid.innerHTML = '';
    
    // Filter tournaments
    const filteredTournaments = filter === 'all' 
        ? tournaments 
        : tournaments.filter(tournament => tournament.sport === filter);
    
    // If no tournaments match the filter
    if (filteredTournaments.length === 0) {
        tournamentsGrid.innerHTML = `
            <div class="no-tournaments">
                <p>No tournaments found for this filter. Please try another category.</p>
            </div>
        `;
        return;
    }
    
    // Add tournaments to the grid
    filteredTournaments.forEach(tournament => {
        const tournamentCard = createTournamentCard(tournament);
        tournamentsGrid.appendChild(tournamentCard);
    });
}

// Create tournament card element
function createTournamentCard(tournament) {
    const card = document.createElement('div');
    card.className = 'tournament-card';
    card.dataset.id = tournament.id;
    
    card.innerHTML = `
        <div class="tournament-image">
            <img src="${tournament.image}" alt="${tournament.name}">
            <div class="sport-badge">${capitalizeFirstLetter(tournament.sport)}</div>
        </div>
        <div class="tournament-details">
            <h3>${tournament.name}</h3>
            <div class="tournament-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${tournament.location}</span>
                <span class="divider">|</span>
                <span><i class="far fa-calendar-alt"></i> ${tournament.date}</span>
            </div>
            <p class="tournament-description">${truncateText(tournament.description, 100)}</p>
            <a href="javascript:void(0)" class="tournament-link">View Details</a>
        </div>
    `;
    
    // Add click event to the card
    card.addEventListener('click', function() {
        openTournamentModal(tournament);
    });
    
    return card;
}

// Open tournament modal with details
function openTournamentModal(tournament) {
    modalContent.innerHTML = `
        <div class="modal-tournament-header">
            <h2>${tournament.name}</h2>
            <div class="sport-badge">${capitalizeFirstLetter(tournament.sport)}</div>
        </div>
        <div class="modal-tournament-image">
            <img src="${tournament.image}" alt="${tournament.name}">
        </div>
        <div class="modal-tournament-meta">
            <div class="meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${tournament.location}</span>
            </div>
            <div class="meta-item">
                <i class="far fa-calendar-alt"></i>
                <span>${tournament.date}</span>
            </div>
        </div>
        <div class="modal-tournament-description">
            <p>${tournament.description}</p>
        </div>
        <div class="tournament-highlights">
            <h4>Tournament Highlights</h4>
            <ul>
                ${tournament.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        </div>
        <h4>Gallery</h4>
        <div class="gallery-grid">
            ${tournament.gallery.map(image => `
                <div class="gallery-image">
                    <img src="${image}" alt="Tournament image">
                </div>
            `).join('')}
        </div>
        <div style="text-align: center; margin-top: 30px;">
            <a href="#contact" class="cta-button" onclick="closeModal()">Hire Us For Your Tournament</a>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load tournaments based on filter
            const filter = this.getAttribute('data-filter');
            loadTournaments(filter);
        });
    });
    
    // Close modal button
    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Here you would typically send the form data to your server
        // For this template, we'll just show a success message
        alert('Thank you for your inquiry! We will get back to you soon.');
        contactForm.reset();
    });
}

// Setup testimonial slider
function setupTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    // Show only the first testimonial initially
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Change testimonial every 5 seconds
    setInterval(() => {
        testimonials[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].style.display = 'block';
    }, 5000);
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close modal if open
        if (modal.style.display === 'block') {
            closeModal();
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.service-card, .tournament-card, .section-title');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize with animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.service-card, .tournament-card, .section-title');
    
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});