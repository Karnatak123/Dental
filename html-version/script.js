// Data
const services = [
    {
        id: 1,
        title: "Teeth Whitening",
        description: "Professional teeth whitening for a brighter, confident smile",
        iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        iconClass: "pink"
    },
    {
        id: 2,
        title: "Regular Check-ups",
        description: "Comprehensive dental examinations and preventive care",
        iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        iconClass: "teal"
    },
    {
        id: 3,
        title: "Cosmetic Procedures",
        description: "Transform your smile with our cosmetic dentistry services",
        iconPath: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        iconClass: "pink"
    },
    {
        id: 4,
        title: "Dental Implants",
        description: "Permanent tooth replacement solutions for missing teeth",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        iconClass: "teal"
    },
    {
        id: 5,
        title: "Crowns & Bridges",
        description: "Restore damaged teeth with custom crowns and bridges",
        iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        iconClass: "pink"
    },
    {
        id: 6,
        title: "Emergency Care",
        description: "Immediate dental care when you need it most",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        iconClass: "teal"
    },
    {
        id: 7,
        title: "Extractions",
        description: "Safe and comfortable tooth extraction procedures",
        iconPath: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z",
        iconClass: "pink"
    },
    {
        id: 8,
        title: "Fillings & Sealants",
        description: "Protect and restore your teeth from decay",
        iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        iconClass: "teal"
    }
];

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        text: "Excellent service! The staff is very professional and caring. My teeth whitening results exceeded my expectations.",
        date: "2 weeks ago"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        rating: 5,
        text: "Best dental clinic in Zirakpur. Dr. and team are highly skilled. Got my dental implant done here - painless procedure!",
        date: "1 month ago"
    },
    {
        id: 3,
        name: "Anita Verma",
        rating: 5,
        text: "Very clean and modern clinic. The online booking system made it so convenient. Highly recommend for families.",
        date: "3 weeks ago"
    },
    {
        id: 4,
        name: "Vikram Singh",
        rating: 5,
        text: "Had an emergency dental issue and they accommodated me the same day. Professional, caring, and affordable.",
        date: "1 week ago"
    }
];

const faqs = [
    {
        id: 1,
        question: "What are your clinic timings?",
        answer: "We are open Monday to Friday from 9:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM."
    },
    {
        id: 2,
        question: "Do you accept insurance?",
        answer: "Yes, we accept most major dental insurance plans. Please contact us with your insurance details for verification."
    },
    {
        id: 3,
        question: "Is emergency dental care available?",
        answer: "Yes, we provide emergency dental care. Please call us immediately at 9988556934 for urgent dental issues."
    },
    {
        id: 4,
        question: "How do I book an appointment?",
        answer: "You can book an appointment online through our website, call us at 9988556934, or visit our clinic directly."
    },
    {
        id: 5,
        question: "Do you provide teeth whitening services?",
        answer: "Yes, we offer professional teeth whitening services with visible results in just one session."
    }
];

// Render Services
function renderServices() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = services.map((service, index) => `
        <div class="service-card" onclick="openBookingModal()">
            <div class="service-icon service-icon-${service.iconClass}">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.iconPath}"/>
                </svg>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <p class="service-link">Book Now →</p>
        </div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    testimonialsGrid.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card">
            <svg class="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <div class="testimonial-rating">
                ${'<span class="star">★</span>'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <p class="author-name">${testimonial.name}</p>
                <p class="author-date">${testimonial.date}</p>
            </div>
        </div>
    `).join('');
}

// Render FAQs
function renderFaqs() {
    const accordion = document.querySelector('.accordion');
    accordion.innerHTML = faqs.map(faq => `
        <div class="accordion-item" data-faq-id="${faq.id}">
            <div class="accordion-header" onclick="toggleAccordion(${faq.id})">
                <button class="accordion-question">${faq.question}</button>
                <svg class="accordion-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
            <div class="accordion-content">
                <p class="accordion-answer">${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMobile = document.querySelector('.nav-mobile');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    navMobile.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
    const navMobile = document.querySelector('.nav-mobile');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    navMobile.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// Accordion Toggle
function toggleAccordion(faqId) {
    const item = document.querySelector(`[data-faq-id="${faqId}"]`);
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(accordionItem => {
        accordionItem.classList.remove('active');
        accordionItem.querySelector('.accordion-content').style.maxHeight = '0';
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Booking Modal
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('bookingModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeBookingModal();
    }
});

// Handle Booking Form Submission
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    // Log form data (in real app, this would be sent to backend)
    console.log('Booking submitted:', formData);
    
    // Show toast notification
    showToast();
    
    // Reset form
    this.reset();
    
    // Close modal
    closeBookingModal();
});

// Show Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 5000);
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderTestimonials();
    renderFaqs();
});

// Close mobile menu on resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});
