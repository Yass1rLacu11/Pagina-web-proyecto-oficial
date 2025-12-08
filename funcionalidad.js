document.addEventListener('DOMContentLoaded', function() {
    //MENU HAMBURGUESA
    const menuBtn = document.querySelector('.menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                hamburgerLines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgerLines[1].style.opacity = '0';
                hamburgerLines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                hamburgerLines[0].style.transform = 'none';
                hamburgerLines[1].style.opacity = '1';
                hamburgerLines[2].style.transform = 'none';
            }
        });
    }
    
    // Cerrar menú al hacer clic en enlaces
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburgerLines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });

    //FUNCIONES DE BOTONES
function cargarCursosEnHome() {
    console.log("🔄 Cargando cursos en página principal...");
    
    // CURSOS PARA "TRENDING ON UNIVERSITY OF NEW HAVEN"
    const trendingContainer = document.querySelector('.collection.trending .course-carousel');
    if (trendingContainer) {
        console.log("📊 Encontrado contenedor Trending");
        trendingContainer.innerHTML = '';
        
        // Cursos específicos para Trending
        const trendingCursos = [
            {
                id: 'data-science-business',
                titulo: 'Data Science for Business',
                duracion: '4-5 hours per week',
                fechaInicio: 'Starting Jan 14, 2026',
                imagen: 'Images/discusioncolaborativa.png',
                instructor: 'Prof. David Wilson',
                precio: '$199.99',
                nivel: 'Advanced',
                rating: '4.9'
            },
            {
                id: 'health-care-economics',
                titulo: 'Health Care Economics',
                duracion: '3-4 hours a week',
                fechaInicio: 'Starting Feb 18, 2026',
                imagen: 'Images/graficas.jpg',
                instructor: 'Dr. Maria Rodriguez',
                precio: '$149.99',
                nivel: 'Intermediate',
                rating: '4.7'
            },
            {
                id: 'digital-health',
                titulo: 'Digital Health',
                duracion: '3-4 hours per week',
                fechaInicio: 'Starting Feb 11, 2026',
                imagen: 'Images/digitalhealth.jpg',
                instructor: 'Dr. James Kim',
                precio: '$129.99',
                nivel: 'Intermediate',
                rating: '4.5'
            },
            {
                id: 'bioinformatics',
                titulo: 'Bioinformatics and Genomics',
                duracion: '3-4 hours per week',
                fechaInicio: 'Starting Mar 1, 2026',
                imagen: 'Images/bioinformatica.jpg',
                instructor: 'Dr. Samantha Lee',
                precio: '$179.99',
                nivel: 'Advanced',
                rating: '4.9'
            }
        ];
        
        trendingCursos.forEach(curso => {
            const card = document.createElement('article');
            card.className = 'course-card trending-card';
            card.setAttribute('data-course-id', curso.id);
            card.innerHTML = `
                <img src="${curso.imagen}" alt="${curso.titulo}" 
                     onerror="this.src='https://via.placeholder.com/300x180/006400/ffffff?text=Course+Image'">
                <div class="card-info">
                    <h3>${curso.titulo}</h3>
                    <p class="course-duration">${curso.duracion}</p>
                    <p class="course-date">${curso.fechaInicio}</p>
                    <div class="course-meta-trending" style="display:none;">
                        <span class="instructor">👨‍🏫 ${curso.instructor}</span>
                        <span class="price">💰 ${curso.precio}</span>
                        <span class="rating">⭐ ${curso.rating}/5.0</span>
                        <span class="level">🎯 ${curso.nivel}</span>
                    </div>
                </div>
            `;
            trendingContainer.appendChild(card);
            console.log(`Añadido curso Trending: ${curso.titulo}`);
        });
    }
    
    // CURSOS PARA "CAREFULLY CRAFTED TO MEET YOUR GOALS"
    const craftedContainer = document.querySelector('.collection.crafted .course-carousel');
    if (craftedContainer) {
        console.log("🎨 Encontrado contenedor Crafted");
        craftedContainer.innerHTML = '';
        
        // Cursos específicos para Carefully Crafted
        const craftedCursos = [
            {
                id: 'chemistry',
                titulo: 'Chemistry Course',
                descripcion: 'Master advanced chemistry principles with practical applications in various industries.',
                duracion: '4-5 hours per week',
                imagen: 'Images/place.jpg',
                instructor: 'Dr. Robert Chen',
                precio: '$99.99',
                nivel: 'Advanced',
                rating: '4.8'
            },
            {
                id: 'ai-course',
                titulo: 'AI Course',
                descripcion: 'Fundamentals of Artificial Intelligence and Machine Learning with real-world applications.',
                duracion: '3-4 hours per week',
                imagen: 'Images/estudioso.jpg',
                instructor: 'Dr. Thomas Wong',
                precio: '$159.99',
                nivel: 'Beginner',
                rating: '4.6'
            },
            {
                id: 'cisco',
                titulo: 'CISCO Course',
                descripcion: 'Complete networking certification training with CISCO technologies and protocols.',
                duracion: '5-6 hours per week',
                imagen: 'Images/cisco.png',
                instructor: 'Alex Martinez',
                precio: '$249.99',
                nivel: 'Intermediate',
                rating: '4.7'
            },
            {
                id: 'oracle',
                titulo: 'ORACLE Course',
                descripcion: 'Professional database administration with ORACLE technologies and best practices.',
                duracion: '4-5 hours per week',
                imagen: 'Images/oracle.png',
                instructor: 'Jennifer Park',
                precio: '$229.99',
                nivel: 'Advanced',
                rating: '4.8'
            }
        ];
        
        craftedCursos.forEach(curso => {
            const card = document.createElement('article');
            card.className = 'course-card crafted-card';
            card.setAttribute('data-course-id', curso.id);
            card.innerHTML = `
                <img src="${curso.imagen}" alt="${curso.titulo}"
                     onerror="this.src='https://via.placeholder.com/300x180/006400/ffffff?text=Course+Image'">
                <div class="card-info">
                    <h3>${curso.titulo}</h3>
                    <p class="course-description">${curso.descripcion}</p>
                    <div class="course-details-crafted">
                        <span class="duration">🕒 ${curso.duracion}</span>
                        <span class="separator">•</span>
                        <span class="level">🎯 ${curso.nivel}</span>
                        <span class="separator">•</span>
                        <span class="price">💰 ${curso.precio}</span>
                    </div>
                    <div class="course-instructor" style="margin-top: 8px; font-size: 0.85rem; color: #666;">
                        Instructor: ${curso.instructor}
                    </div>
                </div>
            `;
            craftedContainer.appendChild(card);
            console.log(`✅ Añadido curso Crafted: ${curso.titulo}`);
        });
    }
    
    // CURSOS PARA "JUST ANNOUNCED - FEATURED"
    const featuredGrid = document.querySelector('.featured-courses-grid');
    if (featuredGrid) {
        console.log("🌟 Encontrado contenedor Featured");
        featuredGrid.innerHTML = '';
        
        // Cursos específicos para Featured
        const featuredCursos = [
            {
                id: 'tech-ethics',
                titulo: 'Tech Ethics: Critical Thinking in the Age of Apps, Algorithms, and AI',
                duracion: '2.5 hours',
                fechaInicio: 'Start today',
                imagen: 'Images/famososharvad.jpg',
                instructor: 'Dr. Sarah Johnson',
                precio: '$89.99',
                nivel: 'Intermediate',
                rating: '4.8'
            },
            {
                id: 'winning-mindset',
                titulo: 'Building a Winning Mindset: Flexibility and Resiliency at Work',
                duracion: '2.5 hours',
                fechaInicio: 'Start today',
                imagen: 'Images/universityofnewhaven.png',
                instructor: 'Michael Chen',
                precio: '$79.99',
                nivel: 'Beginner',
                rating: '4.6'
            }
        ];
        
        featuredCursos.forEach(curso => {
            const article = document.createElement('article');
            article.className = 'featured-course';
            article.setAttribute('data-course-id', curso.id);
            article.innerHTML = `
                <div class="course-image">
                    <img src="${curso.imagen}" alt="${curso.titulo}"
                         onerror="this.src='https://via.placeholder.com/300x200/006400/ffffff?text=Course+Image'">
                </div>
                <div class="course-content">
                    <h3>${curso.titulo}</h3>
                    <div class="course-meta">
                        <span class="duration">${curso.duracion}</span>
                        <span class="divider">•</span>
                        <span class="start-date">${curso.fechaInicio}</span>
                    </div>
                    <div class="course-features" style="margin-top: 10px; font-size: 0.9rem; color: #666;">
                        <span>👨‍🏫 ${curso.instructor}</span> • 
                        <span>🎯 ${curso.nivel}</span> • 
                        <span>⭐ ${curso.rating}/5.0</span>
                    </div>
                </div>
            `;
            featuredGrid.appendChild(article);
            console.log(`✅ Añadido curso Featured: ${curso.titulo}`);
        });
    }
    
    // AÑADIR EVENTOS DE CLIC A TODAS LAS TARJETAS
    console.log("🖱️ Añadiendo eventos de clic a tarjetas...");
    document.querySelectorAll('.course-card, .featured-course').forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Evitar que se active si se hace clic en un botón dentro de la tarjeta
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            const courseId = this.getAttribute('data-course-id');
            console.log(`🎯 Clic en curso ID: ${courseId}`);
            
            if (courseId) {
                // Redirigir a la página de detalle del curso
                window.location.href = `curso-detalle.html?course=${courseId}`;
            } else {
                console.warn('⚠️ No se encontró ID de curso, redirigiendo al catálogo');
                window.location.href = 'catalogo.html';
            }
        });
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    console.log("✅ Todos los cursos cargados correctamente");
}
    
    //BOTÓN "OUR COURSES" - Redirige a catálogo
    document.querySelectorAll('.primary-btn').forEach(btn => {
        if (btn.textContent.includes('Our courses') || btn.textContent.includes('Explore Courses')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'catalogo.html';
            });
        }
    });

    //CLICK EN TARJETAS DE CURSO - Redirige a detalle
    document.querySelectorAll('.course-card, .featured-course').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (!e.target.closest('button')) {
                const titulo = this.querySelector('h3')?.textContent || '';
                let cursoId;
                
                if (titulo.includes('Tech Ethics')) cursoId = 'tech-ethics';
                else if (titulo.includes('Winning Mindset')) cursoId = 'winning-mindset';
                else if (titulo.includes('Data Science')) cursoId = 'data-science';
                else if (titulo.includes('Health Care')) cursoId = 'health-care';
                else cursoId = 'general-course';
                
                window.location.href = `curso-detalle.html?course=${cursoId}`;
            }
        });
    });

    //SEGURIDAD EN ENLACES
    // Previene errores con páginas que no existen
    document.querySelectorAll('.nav-links a, .footer-col a').forEach(link => {
        const href = link.getAttribute('href');
        
        // Si el enlace no es a una página existente
        if (href && href.startsWith('#') && !href.includes('-section')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('⏳ Esta sección estará disponible próximamente.');
            });
        }
    });

    // OTRAS FUNCIONALIDADES
    // Botones toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.toggle-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            updateCourseFinder(this.textContent.trim());
        });
    });

    // Carruseles
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
            }
        });
    });

    // Dropdowns
    document.querySelectorAll('.finder-form p').forEach(item => {
        item.addEventListener('click', function() {
            const currentText = this.querySelector('.highlight').textContent;
            const options = getDropdownOptions(this.textContent);
            if (options.length > 0) {
                showDropdown(this, options, currentText);
            }
        });
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Traductor
    createLanguageSwitcher();
    animateCourseCounters();
});
function findClosestCarousel(element) {
    return element.closest('.header-controls')?.nextElementSibling || 
           element.closest('.just-announced-section')?.querySelector('.featured-courses-container') ||
           element.closest('.collection')?.querySelector('.course-carousel') ||
           element.closest('.instructor-section')?.querySelector('.instructor-carousel');
}

function updateCourseFinder(mode) {
    const formItems = document.querySelectorAll('.finder-form p');
    const topics = mode === 'For myself' ? 
        ['Business Skills', 'Technology', 'Personal Development'] : 
        ['Team Management', 'Corporate Strategy', 'Leadership Training'];
    
    formItems[0].querySelector('.highlight').textContent = topics[0];
}

function getDropdownOptions(context) {
    if (context.includes('Topic')) {
        return ['Business & Management', 'Technology & Data', 'Health & Medicine'];
    } else if (context.includes('Level')) {
        return ['Beginner', 'Intermediate', 'Advanced'];
    } else if (context.includes('Length')) {
        return ['Short (1-4 weeks)', 'Medium (1-3 months)', 'Long (3-6 months)'];
    }
    return [];
}

function showDropdown(element, options, current) {
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';
    dropdown.style.cssText = `
        position: absolute;
        background: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        min-width: 200px;
    `;
    
    options.forEach(option => {
        const item = document.createElement('div');
        item.textContent = option;
        item.style.cssText = `
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 3px;
            margin: 2px 0;
        `;
        item.onmouseover = () => item.style.backgroundColor = '#f5f5f5';
        item.onmouseout = () => item.style.backgroundColor = '';
        item.onclick = () => {
            element.querySelector('.highlight').textContent = option;
            dropdown.remove();
            if (option !== current) {
                showNotification(`Filtro actualizado a: ${option}`);
            }
        };
        dropdown.appendChild(item);
    });
    
    const rect = element.getBoundingClientRect();
    dropdown.style.left = rect.left + 'px';
    dropdown.style.top = (rect.bottom + 5) + 'px';
    
    document.body.appendChild(dropdown);

    setTimeout(() => {
        const closeDropdown = (e) => {
            if (!dropdown.contains(e.target) && !element.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        };
        document.addEventListener('click', closeDropdown);
    }, 100);
}

function createLanguageSwitcher() {
    const langSwitcher = document.createElement('div');
    langSwitcher.id = 'language-switcher';
    langSwitcher.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1000;
        background: white;
        border-radius: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s;
    `;
    
    langSwitcher.innerHTML = `
        <div style="display: flex; align-items: center; padding: 8px 15px;">
            <span style="margin-right: 8px; font-size: 1.2em;">🇺🇸</span>
            <span style="font-weight: 600; font-size: 0.9em;">EN</span>
            <span style="margin-left: 8px; font-size: 0.8em;">▼</span>
        </div>
        <div id="language-options" style="display: none; background: white;">
            <div class="lang-option" data-lang="en" style="padding: 10px 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🇺🇸</span>
                <span>English</span>
            </div>
            <div class="lang-option" data-lang="es" style="padding: 10px 15px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">🇪🇸</span>
                <span>Español</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(langSwitcher);
    
    const translations = {
        en: {
            nav: ['Programs', 'For Organizations', 'Stories', 'Blog']
        },
        es: {
            nav: ['Programas', 'Para Organizaciones', 'Historias', 'Blog']
        }
    };
    
    let currentLang = 'en';
    
    langSwitcher.querySelector('div:first-child').addEventListener('click', function(e) {
        e.stopPropagation();
        const options = document.getElementById('language-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                const t = translations[newLang];
                
                document.querySelectorAll('.nav-links a').forEach((link, index) => {
                    if (index >= 1 && index <= 4) {
                        link.textContent = t.nav[index-1];
                    }
                });
                
                showNotification(`🌍 Idioma cambiado a ${newLang === 'en' ? 'English' : 'Español'}`);
            }
            
            document.getElementById('language-options').style.display = 'none';
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            document.getElementById('language-options').style.display = 'none';
        }
    });
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
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function animateCourseCounters() {
    const counters = document.querySelectorAll('.course-meta .duration');
    counters.forEach(counter => {
        counter.style.opacity = '0.8';
        counter.style.transition = 'all 0.3s';
        
        counter.addEventListener('mouseenter', () => {
            counter.style.opacity = '1';
            counter.style.transform = 'scale(1.1)';
        });
        
        counter.addEventListener('mouseleave', () => {
            counter.style.opacity = '0.8';
            counter.style.transform = 'scale(1)';
        });
    });
}

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});