document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeButton = document.querySelector('.close-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    // Function to open the modal
    function openModal(imgSrc, title) {
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Animation for modal opening
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }
    
    // Function to close the modal
    function closeModal() {
        // Animation for modal closing
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Add click event to all gallery items
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            const imgSrc = this.src;
            const imgTitle = this.getAttribute('data-title');
            openModal(imgSrc, imgTitle);
        });
    });
    
    // Close modal when clicking the X button
    closeButton.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Add preloading for images
    function preloadImages() {
        galleryItems.forEach(img => {
            const src = img.getAttribute('src');
            const preloadLink = document.createElement('link');
            preloadLink.href = src;
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            document.head.appendChild(preloadLink);
        });
    }
    
    // Call preload function
    preloadImages();
});