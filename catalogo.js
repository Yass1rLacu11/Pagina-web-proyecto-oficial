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
    
    // Función para renderizar cursos
    function renderCourses(filter = 'all') {
        if (!grid) return;
        
        grid.innerHTML = '';
        
        Object.entries(cursosCatalogo).forEach(([id, curso]) => {
            if (filter === 'all' || curso.categoria === filter) {
                const card = document.createElement('div');
                card.className = 'course-card-detailed';
                card.innerHTML = `
                    <img src="${curso.imagen}" alt="${curso.titulo}" style="width:100%; height:180px; object-fit:cover;">
                    <div class="course-card-content">
                        <h3>${curso.titulo}</h3>
                        <div class="course-meta">
                            <span class="instructor">👨‍🏫 ${curso.instructor}</span>
                            <span class="level">🎯 ${curso.nivel}</span>
                        </div>
                        <div class="course-rating">⭐ ${curso.rating}/5.0</div>
                        <div class="course-duration">🕒 ${curso.duracion}</div>
                        <div class="course-price">${curso.precio}</div>
                        <button class="enroll-btn" data-course="${id}">Enroll Now</button>
                    </div>
                `;
                grid.appendChild(card);
            }
        });
        
        // Si no hay cursos, mostrar mensaje
        if (grid.children.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px;">No courses found in this category.</p>';
        }
    }
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCourses(this.dataset.filter);
        });
    });
    
    // Búsqueda
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.course-card-detailed');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const instructor = card.querySelector('.instructor').textContent.toLowerCase();
                card.style.display = (title.includes(term) || instructor.includes(term)) ? 'block' : 'none';
            });
        });
    }
    
    grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('enroll-btn')) {
            const courseId = e.target.dataset.course;
            window.location.href = `curso-detalle.html?course=${courseId}`;
        }
    });
    
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter');
    
    if (filterParam === 'trending') {
        renderCourses('technology');
        document.querySelector('.filter-btn[data-filter="technology"]')?.classList.add('active');
    } else if (filterParam === 'featured') {
        renderCourses('all');
        document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
    } else {
        // Mostrar todos
        renderCourses();
    }
});