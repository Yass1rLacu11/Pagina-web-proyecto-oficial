//NUESTROS CATALOGOS
const cursosCatalogo = {
    'tech-ethics': {
        titulo: 'Tech Ethics: Critical Thinking in the Age of Apps, Algorithms, and AI',
        precio: '$89.99',
        duracion: '2.5 hours',
        categoria: 'technology',
        imagen: 'Images/famososharvad.jpg',
        rating: '4.8',
        instructor: 'Dr. Sarah Johnson',
        nivel: 'Intermediate'
    },
    'winning-mindset': {
        titulo: 'Building a Winning Mindset: Flexibility and Resiliency at Work',
        precio: '$79.99',
        duracion: '2.5 hours',
        categoria: 'business',
        imagen: 'Images/universityofnewhaven.png',
        rating: '4.6',
        instructor: 'Michael Chen',
        nivel: 'Beginner'
    },
    'data-science-business': {
        titulo: 'Data Science for Business',
        precio: '$199.99',
        duracion: '4-5 hours per week',
        categoria: 'technology',
        imagen: 'Images/discusioncolaborativa.png',
        rating: '4.9',
        instructor: 'Prof. David Wilson',
        nivel: 'Advanced'
    },
    'health-care-economics': {
        titulo: 'Health Care Economics',
        precio: '$149.99',
        duracion: '3-4 hours a week',
        categoria: 'healthcare',
        imagen: 'Images/graficas.jpg',
        rating: '4.7',
        instructor: 'Dr. Maria Rodriguez',
        nivel: 'Intermediate'
    },
    'digital-health': {
        titulo: 'Digital Health Innovation',
        precio: '$129.99',
        duracion: '3-4 hours per week',
        categoria: 'healthcare',
        imagen: 'Images/digitalhealth.jpg',
        rating: '4.5',
        instructor: 'Dr. James Kim',
        nivel: 'Intermediate'
    },
    'chemistry': {
        titulo: 'Advanced Chemistry Principles',
        precio: '$99.99',
        duracion: '4-5 hours per week',
        categoria: 'science',
        imagen: 'Images/place.jpg',
        rating: '4.8',
        instructor: 'Dr. Robert Chen',
        nivel: 'Advanced'
    },
    'bioinformatics': {
        titulo: 'Bioinformatics and Genomics',
        precio: '$179.99',
        duracion: '3-4 hours per week',
        categoria: 'science',
        imagen: 'Images/bioinformatica.jpg',
        rating: '4.9',
        instructor: 'Dr. Samantha Lee',
        nivel: 'Advanced'
    },
    'cisco': {
        titulo: 'CISCO Networking Certification',
        precio: '$249.99',
        duracion: '5-6 hours per week',
        categoria: 'technology',
        imagen: 'Images/cisco.png',
        rating: '4.7',
        instructor: 'Alex Martinez',
        nivel: 'Intermediate'
    },
    'oracle': {
        titulo: 'ORACLE Database Administration',
        precio: '$229.99',
        duracion: '4-5 hours per week',
        categoria: 'technology',
        imagen: 'Images/oracle.png',
        rating: '4.8',
        instructor: 'Jennifer Park',
        nivel: 'Advanced'
    },
    'ai-course': {
        titulo: 'Artificial Intelligence Fundamentals',
        precio: '$159.99',
        duracion: '3-4 hours per week',
        categoria: 'technology',
        imagen: 'Images/estudioso.jpg',
        rating: '4.6',
        instructor: 'Dr. Thomas Wong',
        nivel: 'Beginner'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.querySelector('.courses-grid');
    if (!grid) return;
    
    let itemsToShow = 3; // Mostrar 3 inicialmente
    const itemsPerLoad = 3; // Mostrar 3 más cada vez
    let currentFilter = 'all';
    let filteredCourses = [];
    
    // 1. FUNCIÓN PARA RENDERIZAR CURSOS
    function renderCourses() {
        // Filtrar cursos
        filteredCourses = Object.entries(cursosCatalogo)
            .filter(([id, curso]) => currentFilter === 'all' || curso.categoria === currentFilter)
            .map(([id, curso]) => ({ id, ...curso }));
        
        // Limpiar grid
        grid.innerHTML = '';
        
        // Si no hay cursos
        if (filteredCourses.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px; color:#666;">No hay cursos disponibles</p>';
            hideLoadMoreButton();
            return;
        }
        
        // Mostrar primeros N cursos
        const coursesToShow = filteredCourses.slice(0, itemsToShow);
        
        coursesToShow.forEach(({ id, ...curso }) => {
            const card = document.createElement('div');
            card.className = 'course-card-detailed';
            card.innerHTML = `
                <img src="${curso.imagen}" alt="${curso.titulo}" 
                     style="width:100%; height:180px; object-fit:cover; border-radius:8px 8px 0 0;">
                <div style="padding:15px; display:flex; flex-direction:column; height:calc(100% - 180px);">
                    <h3 style="margin:0 0 10px 0; font-size:16px; min-height:60px; line-height:1.4;">${curso.titulo}</h3>
                    
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:12px; color:#555;">
                        <span>👨‍🏫 ${curso.instructor}</span>
                        <span>🎯 ${curso.nivel}</span>
                    </div>
                    
                    <div style="margin-bottom:8px; color:#f39c12; font-weight:bold;">⭐ ${curso.rating}/5.0</div>
                    <div style="margin-bottom:8px; color:#555;">🕒 ${curso.duracion}</div>
                    <div style="font-weight:bold; color:#2ecc71; margin-bottom:15px; font-size:18px;">${curso.precio}</div>
                    
                    <div style="margin-top:auto;">
                        <button class="enroll-btn" 
                                data-course="${id}"
                                style="width:100%; padding:12px; background:#2ecc71; color:white; border:none; border-radius:5px; 
                                       cursor:pointer; font-weight:bold; font-size:14px; transition:background 0.3s;">
                            Inscribirse
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Configurar eventos de botones
        setupEnrollButtons();
        
        // Actualizar botón "Ver más"
        updateLoadMoreButton();
    }
    
    // 2. BOTÓN "VER MÁS" (SOLO ESTE)
    function updateLoadMoreButton() {
        // Eliminar botón anterior si existe
        const oldButton = document.querySelector('.load-more-container');
        if (oldButton) {
            oldButton.remove();
        }
        
        // Verificar si hay más cursos por mostrar
        const remainingCourses = filteredCourses.length - itemsToShow;
        
        if (remainingCourses > 0) {
            const container = document.createElement('div');
            container.className = 'load-more-container';
            container.style.cssText = `
                text-align: center;
                margin: 40px 0;
                padding-top: 20px;
                border-top: 1px solid #eee;
            `;
            
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.className = 'load-more-btn';
            loadMoreBtn.innerHTML = `
                <span style="font-size:18px; margin-right:8px;">↓</span>
                Ver más cursos (${remainingCourses} restantes)
            `;
            loadMoreBtn.style.cssText = `
                padding: 14px 40px;
                background: #2ecc71;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                transition: all 0.3s;
                box-shadow: 0 4px 12px rgba(46, 204, 113, 0.3);
            `;
            
            // Efectos hover
            loadMoreBtn.onmouseover = () => {
                loadMoreBtn.style.background = '#27ae60';
                loadMoreBtn.style.transform = 'translateY(-2px)';
                loadMoreBtn.style.boxShadow = '0 6px 16px rgba(39, 174, 96, 0.4)';
            };
            
            loadMoreBtn.onmouseout = () => {
                loadMoreBtn.style.background = '#2ecc71';
                loadMoreBtn.style.transform = 'translateY(0)';
                loadMoreBtn.style.boxShadow = '0 4px 12px rgba(46, 204, 113, 0.3)';
            };
            
            // Evento click
            loadMoreBtn.addEventListener('click', () => {
                // Añadir animación de carga
                loadMoreBtn.innerHTML = `<span style="font-size:18px;">⏳</span> Cargando...`;
                loadMoreBtn.disabled = true;
                
                // Simular carga (en producción sería instantáneo)
                setTimeout(() => {
                    itemsToShow += itemsPerLoad;
                    renderCourses();
                    
                    // Hacer scroll suave hacia los nuevos cursos
                    const newCards = document.querySelectorAll('.course-card-detailed');
                    if (newCards.length > 0) {
                        const lastCard = newCards[newCards.length - 1];
                        lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }, 300);
            });
            
            container.appendChild(loadMoreBtn);
            grid.parentNode.insertBefore(container, grid.nextSibling);
        } else if (itemsToShow > 3) {
            // Mostrar mensaje "Todos los cursos cargados"
            const container = document.createElement('div');
            container.className = 'all-loaded-message';
            container.style.cssText = `
                text-align: center;
                margin: 40px 0;
                padding: 20px;
                color: #7f8c8d;
                font-style: italic;
                border-top: 1px solid #eee;
            `;
            container.textContent = 'UNIVERSITY OF NEW HAVEN';
            
            grid.parentNode.insertBefore(container, grid.nextSibling);
        }
    }
    
    function hideLoadMoreButton() {
        const button = document.querySelector('.load-more-container');
        if (button) button.style.display = 'none';
    }
    
    // 3. BOTONES "INSCRIBIRSE"
    function setupEnrollButtons() {
        document.querySelectorAll('.enroll-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const courseId = this.dataset.course;
                
                if (courseId && cursosCatalogo[courseId]) {
                    // Guardar curso
                    localStorage.setItem('selectedCourse', JSON.stringify({
                        id: courseId,
                        ...cursosCatalogo[courseId]
                    }));
                    
                    // Redirigir
                    window.location.href = `curso-detalle.html?course=${courseId}`;
                }
            });
        });
    }
    
    // 4. FILTROS
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            itemsToShow = 3; // Resetear a 3 cursos
            renderCourses();
        });
    });
    
    // 5. BÚSQUEDA
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.course-card-detailed');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const instructor = card.querySelectorAll('span')[0].textContent.toLowerCase();
                card.style.display = (title.includes(term) || instructor.includes(term)) ? 'block' : 'none';
            });
        });
    }
    
    // 6. INICIALIZAR
    renderCourses();
});