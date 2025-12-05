//Menu hamburguesa
document.addEventListener('DOMContentLoaded', function() {
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
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            hamburgerLines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });

    // Funcion de los botones
    //botones "Take Course" "Our Courses" "Explore Courses"
    document.querySelectorAll('.primary-btn, .accent-btn, .secondary-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const buttonText = this.textContent.trim();
            
            switch(true) {
                case buttonText.includes('Our courses'):
                case buttonText.includes('Explore Courses'):
                    alert(' Redirigiendo al catálogo de cursos...\n\nPróximamente podrás explorar todos nuestros cursos disponibles.');
                    break;
                    
                case buttonText.includes('Help me choose'):
                    alert(' Asistente de selección de cursos activado!\n\nTe ayudaremos a encontrar el curso perfecto según tus objetivos.');
                    showCourseAssistant();
                    break;
                    
                case buttonText.includes('See all'):
                    const sectionTitle = this.closest('.collection')?.querySelector('h2')?.textContent || 
                                       this.closest('.section')?.querySelector('h2')?.textContent;
                    alert(`Mostrando todos los cursos de: ${sectionTitle}\n\nEsta funcionalidad estará disponible próximamente.`);
                    break;
                    
                case buttonText.includes('Subscribe'):
                    const emailInput = this.closest('.subscribe-form')?.querySelector('input[type="email"]');
                    if (emailInput && emailInput.value) {
                        alert(`¡Gracias por suscribirte, ${emailInput.value}!\n\nRecibirás nuestras últimas actualizaciones y ofertas exclusivas.`);
                        emailInput.value = '';
                    } else {
                        alert('Por favor, ingresa tu correo electrónico para suscribirte.');
                    }
                    break;
                    
                case buttonText.includes('Explore this course'):
                    const courseTitle = this.closest('.testimonial-content')?.querySelector('.course-info p')?.textContent;
                    alert(` Explorando: ${courseTitle}\n\nTe redirigiremos a la página detallada del curso.`);
                    break;
                    
                default:
                    alert('¡Acción realizada con éxito!\n\nEsta funcionalidad estará completamente operativa en la versión final.');
            }
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('.toggle-btn').forEach(b => {
                b.classList.remove('active');
            });

            this.classList.add('active');
            
            // Mostrar mensaje selección
            const selection = this.textContent.trim();
            const message = selection === 'For myself' ? 
                ' Modo individual activado - Mostrando cursos para desarrollo personal' :
                ' Modo equipo activado - Mostrando programas para capacitación corporativa';
            updateCourseFinder(selection);
        });
    });
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
                this.style.backgroundColor = 'var(--primary-color)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 300);
            }
        });
    });
    document.querySelectorAll('.finder-form p').forEach(item => {
        item.addEventListener('click', function() {
            const currentText = this.querySelector('.highlight').textContent;
            const options = getDropdownOptions(this.textContent);
            if (options.length > 0) {
                showDropdown(this, options, currentText);
            }
        });
    });

    // traductor
    createLanguageSwitcher();
    document.querySelectorAll('.course-card, .featured-course, .instructor-profile').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
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
    
    const levels = mode === 'For myself' ? 
        ['Beginner', 'Intermediate', 'Advanced'] : 
        ['Team Training', 'Executive Level', 'Departmental'];
    
    const durations = mode === 'For myself' ? 
        ['2-4 weeks', '1-3 months', 'Self-paced'] : 
        ['Team Workshops', 'Quarterly Programs', 'Yearly Training'];
    
    formItems[0].querySelector('.highlight').textContent = topics[0];
    formItems[1].querySelector('.highlight').textContent = levels[0];
    formItems[2].querySelector('.highlight').textContent = durations[0];
}

function getDropdownOptions(context) {
    if (context.includes('Topic')) {
        return ['Business & Management', 'Technology & Data', 'Health & Medicine', 'Arts & Humanities', 'Science & Engineering'];
    } else if (context.includes('Level')) {
        return ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
    } else if (context.includes('Length')) {
        return ['Short (1-4 weeks)', 'Medium (1-3 months)', 'Long (3-6 months)', 'Self-paced'];
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
                showNotification(` Filtro actualizado a: ${option}`);
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
      // bandera
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
    
    // Traducciones
    const translations = {
        en: {
            nav: ['Programs', 'For Organizations', 'Stories', 'Blog'],
            hero: {
                title: 'Universidad 1970 Online',
                subtitle: 'Learn, lead, transform',
                description: 'Building the competence, curiosity, and confidence of learners on our campuses and around the world.'
            },
            courses: 'Our courses',
            featured: 'Just Announced!',
            individual: 'Learn as an individual',
            trending: 'Trending on University Of New Haven',
            instructors: 'Learn from the best in the industry',
            newsletter: 'Stay tuned for more',
            articles: 'Learn more with free articles and webinars',
            footer: {
                topics: 'Programs by Topic',
                types: 'Programs by Type',
                organizations: 'For Organizations'
            }
        },
        es: {
            nav: ['Programas', 'Para Organizaciones', 'Historias', 'Blog'],
            hero: {
                title: 'Universidad 1970 Online',
                subtitle: 'Aprende, lidera, transforma',
                description: 'Desarrollando la competencia, curiosidad y confianza de los estudiantes en nuestros campus y alrededor del mundo.'
            },
            courses: 'Nuestros cursos',
            featured: '¡Recién Anunciado!',
            individual: 'Aprende como individuo',
            trending: 'Tendencias en Universidad Of New Haven',
            instructors: 'Aprende de los mejores en la industria',
            newsletter: 'Mantente informado',
            articles: 'Aprende más con artículos y webinars gratis',
            footer: {
                topics: 'Programas por Tema',
                types: 'Programas por Tipo',
                organizations: 'Para Organizaciones'
            }
        }
    };
    
    let currentLang = 'en';
    langSwitcher.querySelector('div:first-child').addEventListener('click', function(e) {
        e.stopPropagation();
        const options = document.getElementById('language-options');
        const isVisible = options.style.display === 'block';
        options.style.display = isVisible ? 'none' : 'block';
        langSwitcher.style.transform = isVisible ? '' : 'scale(1.05)';
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                translatePage(newLang);

                const flag = newLang === 'en' ? '🇺🇸' : '🇪🇸';
                const code = newLang.toUpperCase();
                langSwitcher.querySelector('span:first-child').textContent = flag;
                langSwitcher.querySelector('span:nth-child(2)').textContent = code;

                document.getElementById('language-options').style.display = 'none';
                langSwitcher.style.transform = '';
                
                showNotification(`Idioma cambiado a ${newLang === 'en' ? 'English' : 'Español'}`);
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            document.getElementById('language-options').style.display = 'none';
            langSwitcher.style.transform = '';
        }
    });
    
    function translatePage(lang) {
        const t = translations[lang];
        
        document.querySelectorAll('.nav-links a').forEach((link, index) => {
            link.textContent = t.nav[index];
        });
        
        const heroSection = document.querySelector('.hero-banner-section');
        if (heroSection) {
            heroSection.querySelector('h1').textContent = t.hero.title;
            heroSection.querySelector('h2').textContent = t.hero.subtitle;
            heroSection.querySelector('p').textContent = t.hero.description;
        }

        const elementsToTranslate = {
            '.our-courses-section .section-tag': t.courses,
            '.just-announced-section h2': t.featured,
            '.individual-learning-section h2': t.individual,
            '.course-collections-section .trending h2': t.trending,
            '.instructor-section h2': t.instructors,
            '.newsletter-section h2': t.newsletter,
            '.articles-webinars-section h2': t.articles
        };
        
        Object.entries(elementsToTranslate).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = text;
        });

        document.querySelectorAll('.footer-col h3').forEach((header, index) => {
            if (index === 0) header.textContent = t.footer.topics;
            else if (index === 1) header.textContent = t.footer.types;
            else if (index === 2) header.textContent = t.footer.organizations;
        });
    }
}

function showCourseAssistant() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <h3 style="color: var(--primary-color); margin-bottom: 20px;">🎯 Asistente de Selección de Cursos</h3>
        <p style="margin-bottom: 20px;">Responde estas preguntas para encontrar el curso perfecto:</p>
        
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 600;">1. ¿Cuál es tu objetivo principal?</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                <option>Avanzar en mi carrera actual</option>
                <option>Cambiar de profesión</option>
                <option>Desarrollo personal</option>
                <option>Certificación profesional</option>
            </select>
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 600;">2. ¿Cuánto tiempo puedes dedicar semanalmente?</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                <option>1-3 horas</option>
                <option>3-5 horas</option>
                <option>5-10 horas</option>
                <option>10+ horas</option>
            </select>
        </div>
        
        <div style="margin-bottom: 25px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 600;">3. Área de interés</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                <option>Tecnología y Data Science</option>
                <option>Negocios y Management</option>
                <option>Salud y Medicina</option>
                <option>Artes y Humanidades</option>
                <option>Ciencias e Ingeniería</option>
            </select>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancel-assistant" style="padding: 10px 20px; background: #f5f5f5; border: none; border-radius: 4px; cursor: pointer;">
                Cancelar
            </button>
            <button id="find-courses" style="padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">
                Encontrar Cursos
            </button>
        </div>
    `;
    
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    document.getElementById('cancel-assistant').addEventListener('click', () => {
        modal.remove();
        overlay.remove();
    });
    
    document.getElementById('find-courses').addEventListener('click', () => {
        modal.remove();
        overlay.remove();
        showNotification('🎉 ¡Perfecto! Hemos encontrado 12 cursos que se ajustan a tus necesidades. Redirigiendo...');
        setTimeout(() => {
        }, 1500);
    });

    overlay.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
    });
}

function animateCourseCounters() {

    const counters = document.querySelectorAll('.course-meta .duration');
    counters.forEach(counter => {
        const originalText = counter.textContent;
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
    
    // Animación CSS
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


window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    setTimeout(() => {
        const visitorCount = Math.floor(Math.random() * 1000) + 500;
        console.log(`👥 ${visitorCount} personas están explorando cursos actualmente`);
    }, 2000);
});