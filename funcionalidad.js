// Menu hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgerLines[1].style.opacity = '0';
                hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            }
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !menuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            }
        });
    }
    
    // NAVEGACIÓN COMPLETA DEL HEADER
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si no es un enlace externo o mailto
            if (!this.href.includes('mailto:') && !this.href.includes('http')) {
                e.preventDefault();
                
                // Remover clase active de todos los enlaces
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Agregar clase active al enlace clickeado
                this.classList.add('active');
                
                // Cerrar menú móvil si está abierto
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburgerLines.forEach(line => {
                        line.style.transform = 'none';
                        line.style.opacity = '1';
                    });
                }
                
                // Navegar a la página
                const page = this.getAttribute('href');
                if (page && page !== '#') {
                    // Efecto de transición
                    document.body.style.opacity = '0.7';
                    document.body.style.transition = 'opacity 0.3s';
                    
                    setTimeout(() => {
                        window.location.href = page;
                    }, 300);
                }
            }
        });
    });
    
    // FUNCIONALIDAD DE BOTONES
    document.addEventListener('click', function(e) {
        // Botones primarios
        if (e.target.closest('.primary-btn')) {
            const btn = e.target.closest('.primary-btn');
            
            // Solo prevenir si no es un enlace mailto
            if (!btn.href || !btn.href.includes('mailto:')) {
                e.preventDefault();
            }
            
            // Efecto visual
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            const btnText = btn.textContent.trim();
            
            // Acciones específicas
            if (btnText.includes('Our courses') || 
                btnText.includes('Explore Courses') ||
                btnText === 'Browse All Courses' ||
                btnText.includes('Explore Certificates') ||
                btnText.includes('Explore Degrees') ||
                btnText.includes('Explore Executive')) {
                window.location.href = 'catalogo.html';
            }
            else if (btnText.includes('Back to Home')) {
                window.location.href = 'proyecto.html';
            }
            else if (btnText.includes('Speak with') || 
                     btnText.includes('Contact') ||
                     btnText.includes('Share Your')) {
                // Estos son enlaces mailto, dejar que funcionen normalmente
                return;
            }
            else {
                alert('¡Acción realizada con éxito!\n\nEsta funcionalidad estará completamente operativa en la versión final.');
            }
        }
        
        // Botones secundarios
        else if (e.target.closest('.secondary-btn')) {
            const btn = e.target.closest('.secondary-btn');
            e.preventDefault();
            
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            const btnText = btn.textContent.trim();
            
            if (btnText.includes('See all')) {
                window.location.href = 'catalogo.html';
            }
        }
        
        // Botones de acento
        else if (e.target.closest('.accent-btn')) {
            const btn = e.target.closest('.accent-btn');
            if ((btn.tagName === 'A' || btn.closest('a')) && 
                (!btn.href || btn.href === '#')) {
                e.preventDefault();
            }
            
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            const btnText = btn.textContent.trim();
            
            if (btnText === 'Subscribe') {
                const form = btn.closest('.subscribe-form');
                if (form) {
                    const emailInput = form.querySelector('input[type="email"]');
                    if (emailInput && emailInput.value) {
                        alert(`¡Gracias por suscribirte con: ${emailInput.value}!\nRecibirás nuestras novedades pronto.`);
                        emailInput.value = '';
                    } else {
                        alert('Por favor, ingresa tu correo electrónico.');
                    }
                }
            }
            else if (btnText === 'Help me choose') {
                showCourseAssistant();
            }
        }
    });
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = document.createElement('div');
            searchInput.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            searchInput.innerHTML = `
                <div style="background: white; padding: 2rem; border-radius: 10px; width: 90%; max-width: 500px; position: relative;">
                    <button id="close-search" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">×</button>
                    <h3 style="color: var(--primary-color); margin-bottom: 1.5rem;">Search Courses</h3>
                    <input type="text" id="search-input-field" placeholder="What do you want to learn?" style="width: 100%; padding: 1rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; margin-bottom: 1rem;">
                    <button id="search-submit" class="btn primary-btn" style="width: 100%; padding: 1rem;">
                        <i class="fas fa-search"></i> Search
                    </button>
                </div>
            `;
            
            document.body.appendChild(searchInput);
            
            // Enfocar el input
            setTimeout(() => {
                document.getElementById('search-input-field').focus();
            }, 100);
            
            // Cerrar búsqueda
            document.getElementById('close-search').addEventListener('click', function() {
                searchInput.remove();
            });
            
            // Submit búsqueda
            document.getElementById('search-submit').addEventListener('click', function() {
                const query = document.getElementById('search-input-field').value;
                if (query.trim()) {
                    searchInput.remove();
                    window.location.href = `catalogo.html?search=${encodeURIComponent(query)}`;
                }
            });
            
            // Cerrar con Escape
            document.addEventListener('keydown', function closeOnEscape(e) {
                if (e.key === 'Escape') {
                    searchInput.remove();
                    document.removeEventListener('keydown', closeOnEscape);
                }
            });
            
            // Cerrar haciendo clic fuera
            searchInput.addEventListener('click', function(e) {
                if (e.target === searchInput) {
                    searchInput.remove();
                }
            });
        });
    }

    // FUNCIONALIDAD DE CURSOS CLICABLES
    function setupCourseClickHandlers() {
        document.querySelectorAll('.course-card, .featured-course, .instructor-profile').forEach(element => {
            element.style.cursor = 'pointer';
            
            element.addEventListener('click', function(e) {
                // No hacer nada si se hizo clic en un botón
                if (e.target.closest('button') || e.target.tagName === 'BUTTON') {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                let courseId = this.getAttribute('data-course-id');
                
                // Si no tiene ID, intentar deducirlo
                if (!courseId) {
                    const title = this.querySelector('h3');
                    if (title) {
                        const titleText = title.textContent.toLowerCase();
                        if (titleText.includes('data science')) courseId = 'data-science-business';
                        else if (titleText.includes('health care')) courseId = 'health-care-economics';
                        else if (titleText.includes('digital health')) courseId = 'digital-health';
                        else if (titleText.includes('tech ethics')) courseId = 'tech-ethics';
                        else if (titleText.includes('winning mindset')) courseId = 'winning-mindset';
                        else courseId = 'general-course';
                    } else {
                        courseId = 'general-course';
                    }
                }
                
                // Navegar al detalle del curso
                document.body.style.opacity = '0.7';
                document.body.style.transition = 'opacity 0.3s';
                
                setTimeout(() => {
                    window.location.href = `curso-detalle.html?course=${courseId}`;
                }, 300);
            });
            
            // Efectos hover
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                this.style.transition = 'all 0.3s ease';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }
    
    // Cargar cursos en la página principal
    function cargarCursosEnHome() {
        // Solo ejecutar en la página principal
        if (!document.querySelector('.hero-banner-section')) {
            return;
        }
        
        // 1. Cursos Trending
        const trendingContainer = document.querySelector('.collection.trending .course-carousel');
        if (trendingContainer) {
            trendingContainer.innerHTML = '';
            
            const trendingCursos = [
                {
                    id: 'data-science-business',
                    titulo: 'Data Science for Business',
                    duracion: '4-5 hours per week',
                    fecha: 'Starting Jan 14, 2026',
                    imagen: 'Images/discusioncolaborativa.png',
                    categoria: 'technology'
                },
                {
                    id: 'health-care-economics',
                    titulo: 'Health Care Economics',
                    duracion: '3-4 hours a week',
                    fecha: 'Starting Feb 18, 2026',
                    imagen: 'Images/graficas.jpg',
                    categoria: 'healthcare'
                },
                {
                    id: 'digital-health',
                    titulo: 'Digital Health',
                    duracion: '3-4 hours per week',
                    fecha: 'Starting Feb 11, 2026',
                    imagen: 'Images/digitalhealth.jpg',
                    categoria: 'healthcare'
                },
                {
                    id: 'bioinformatics',
                    titulo: 'Bioinformatics and Genomics',
                    duracion: '3-4 hours per week',
                    fecha: 'Starting Mar 1, 2026',
                    imagen: 'Images/bioinformatica.jpg',
                    categoria: 'science'
                }
            ];
            
            trendingCursos.forEach(curso => {
                const card = document.createElement('article');
                card.className = 'course-card trending-course';
                card.setAttribute('data-course-id', curso.id);
                card.setAttribute('data-category', curso.categoria);
                card.innerHTML = `
                    <img src="${curso.imagen}" alt="${curso.titulo}" loading="lazy">
                    <div class="card-info">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.duracion} • ${curso.fecha}</p>
                    </div>
                `;
                trendingContainer.appendChild(card);
            });
        }
        
        // 2. Cursos Carefully Crafted
        const craftedContainer = document.querySelector('.collection.crafted .course-carousel');
        if (craftedContainer) {
            craftedContainer.innerHTML = '';
            
            const craftedCursos = [
                {
                    id: 'chemistry',
                    titulo: 'Chemistry Course',
                    descripcion: 'Advanced chemistry principles and applications',
                    imagen: 'Images/place.jpg',
                    categoria: 'science'
                },
                {
                    id: 'ai-course',
                    titulo: 'AI & Machine Learning Fundamentals',
                    descripcion: 'Fundamentals of Artificial Intelligence and Machine Learning',
                    imagen: 'Images/estudioso.jpg',
                    categoria: 'technology'
                },
                {
                    id: 'cisco',
                    titulo: 'CISCO Networking Certification',
                    descripcion: 'Networking certification and CISCO technologies',
                    imagen: 'Images/cisco.png',
                    categoria: 'technology'
                },
                {
                    id: 'oracle',
                    titulo: 'ORACLE Database Administration',
                    descripcion: 'Database administration and ORACLE technologies',
                    imagen: 'Images/oracle.png',
                    categoria: 'technology'
                }
            ];
            
            craftedCursos.forEach(curso => {
                const card = document.createElement('article');
                card.className = 'course-card crafted-course';
                card.setAttribute('data-course-id', curso.id);
                card.setAttribute('data-category', curso.categoria);
                card.innerHTML = `
                    <img src="${curso.imagen}" alt="${curso.titulo}" loading="lazy">
                    <div class="card-info">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descripcion}</p>
                    </div>
                `;
                craftedContainer.appendChild(card);
            });
        }
        
        // Configurar handlers después de cargar
        setTimeout(setupCourseClickHandlers, 100);
    }

    // Otras funciones
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.toggle-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            const selection = this.textContent.trim();
            updateCourseFinder(selection);
        });
    });
    
    // Carousel functionality
    document.querySelectorAll('.carousel-prev, .carousel-next').forEach(btn => {
        btn.addEventListener('click', function() {
            const isPrev = this.classList.contains('carousel-prev');
            const carousel = findClosestCarousel(this);
            
            if (carousel) {
                const scrollAmount = isPrev ? -300 : 300;
                carousel.scrollBy({ 
                    left: scrollAmount, 
                    behavior: 'smooth' 
                });
                
                // Efecto visual
                this.style.backgroundColor = 'var(--primary-color)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 300);
            }
        });
    });
    
    // Inicializar
    cargarCursosEnHome();
    setupCourseClickHandlers();
    
    // Marcar página activa en el header
    markActivePage();
    
    // Efecto de carga
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

//FUNCIONES AUXILIARES
function markActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'proyecto.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'proyecto.html') ||
            (currentPage === 'index.html' && linkPage === 'proyecto.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function findClosestCarousel(element) {
    return element.closest('.header-controls')?.nextElementSibling || 
           element.closest('.just-announced-section')?.querySelector('.featured-courses-container') ||
           element.closest('.collection')?.querySelector('.course-carousel') ||
           element.closest('.instructor-section')?.querySelector('.instructor-carousel');
}

function updateCourseFinder(mode) {
    const formItems = document.querySelectorAll('.finder-form p');
    if (formItems.length === 0) return;
    
    const topics = mode === 'For myself' ? 
        ['Business Skills', 'Technology', 'Personal Development'] : 
        ['Team Management', 'Corporate Strategy', 'Leadership Training'];
    
    formItems[0].querySelector('.highlight').textContent = topics[0];
}

function showCourseAssistant() {
    alert('🎯 Asistente de cursos activado\n\nPróximamente podrás recibir recomendaciones personalizadas basadas en tus intereses y objetivos profesionales.');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}