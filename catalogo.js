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
    let itemsToShow = 3;
    let currentFilter = 'all';
    let allCourses = [];

    function renderCourses() {
        if (!grid) return;
        
        // Filtrar cursos
        allCourses = Object.entries(cursosCatalogo)
            .filter(([id, curso]) => currentFilter === 'all' || curso.categoria === currentFilter)
            .map(([id, curso]) => ({ id, ...curso }));
        

        grid.innerHTML = '';
        allCourses.slice(0, itemsToShow).forEach(({ id, ...curso }) => {
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
                    <button class="enroll-btn" data-course="${id}">Inscribirse</button>
                </div>
            `;
            grid.appendChild(card);
        });
    
        addLoadMoreButton();
    }
    
    function addLoadMoreButton() {
        const oldBtn = document.querySelector('.load-more-container');
        if (oldBtn) oldBtn.remove();
    
        if (itemsToShow < allCourses.length) {
            const container = document.createElement('div');
            container.className = 'load-more-container';
            container.style.textAlign = 'center';
            container.style.margin = '30px 0';
            
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.className = 'load-more-btn';
            loadMoreBtn.textContent = `Ver más (${allCourses.length - itemsToShow} restantes)`;
            loadMoreBtn.style.padding = '12px 30px';
            loadMoreBtn.style.background = '#007bff';
            loadMoreBtn.style.color = 'white';
            loadMoreBtn.style.border = 'none';
            loadMoreBtn.style.borderRadius = '5px';
            loadMoreBtn.style.cursor = 'pointer';
            loadMoreBtn.style.fontSize = '16px';
            
            loadMoreBtn.addEventListener('click', () => {
                itemsToShow += 3;
                renderCourses();
            });
            
            container.appendChild(loadMoreBtn);
            grid.parentNode.insertBefore(container, grid.nextSibling);
        }
    }
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            itemsToShow = 3;
            renderCourses();
        });
    });
    
    // Inicializar
    renderCourses();
});