document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(item);
    });

    
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.color = 'var(--accent-metallic)';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.color = 'var(--text-primary)';
    });

    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            
            filterBtns.forEach(b => b.classList.remove('active'));
            
            btn.classList.add('active');
            
            
            
            gridItems.forEach(item => {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 300);
            });
        });
    });

    
    const revealSections = document.querySelectorAll('.section-title, .about-image, .about-text p, .memory-item, .contact-content, .phi-item, .contact-info, .form-group, .grid-item');
    revealSections.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index % 5 * 0.1}s`;
        observer.observe(el);
    });

    
    const contactForm = document.getElementById('proper-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.innerText;
            btn.innerText = 'SENDING...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = 'MESSAGE SENT!';
                btn.style.backgroundColor = 'var(--accent-metallic)';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = 'var(--text-primary)';
                }, 3000);
            }, 1500);
        });
    }

    
    const statement = document.querySelector('.statement-section h2');
    if (statement) {
        statement.style.opacity = '0';
        statement.style.transform = 'scale(0.9)';
        statement.style.transition = 'all 1.2s ease-out';
        observer.observe(statement);
    }
});
