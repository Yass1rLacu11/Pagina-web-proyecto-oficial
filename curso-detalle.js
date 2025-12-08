//TODOS LOS CURSOS
const cursosCompletos = {
    'tech-ethics': {
        id: 'tech-ethics',
        titulo: 'Tech Ethics: Critical Thinking in the Age of Apps, Algorithms, and AI',
        descripcion: 'This course explores ethical frameworks for technology development and deployment. Learn to identify and address ethical challenges in AI, algorithms, and digital platforms.',
        precio: '$89.99',
        precioOriginal: '$149.99',
        duracion: '2.5 hours',
        instructor: 'Dr. Sarah Johnson',
        nivel: 'Intermediate',
        rating: '4.8',
        reviews: '250 reviews',
        imagen: 'Images/famososharvad.jpg',
        modulos: [
            'Introduction to Tech Ethics',
            'Ethical Frameworks and Principles',
            'AI and Algorithmic Bias',
            'Privacy and Data Ethics',
            'Case Studies: Real-world Applications',
            'Implementing Ethical Practices in Organizations',
            'Future of Ethical Technology'
        ],
        objetivos: [
            'Understand core ethical principles in technology',
            'Identify bias in algorithms and AI systems',
            'Develop ethical guidelines for tech projects',
            'Apply ethical frameworks to real-world cases',
            'Navigate privacy and data protection issues'
        ],
        requisitos: [
            'Basic understanding of technology concepts',
            'No prior ethics knowledge required',
            'Internet connection',
            'Computer or mobile device'
        ]
    },
    
    'winning-mindset': {
        id: 'winning-mindset',
        titulo: 'Building a Winning Mindset: Flexibility and Resiliency at Work',
        descripcion: 'Develop the resilience and adaptability skills needed for professional success in today\'s dynamic work environment.',
        precio: '$79.99',
        precioOriginal: '$129.99',
        duracion: '2.5 hours',
        instructor: 'Michael Chen',
        nivel: 'Beginner',
        rating: '4.6',
        reviews: '180 reviews',
        imagen: 'Images/universityofnewhaven.png',
        modulos: [
            'Mindset Fundamentals: Growth vs Fixed',
            'Building Resilience in Difficult Situations',
            'Adaptability Skills for Changing Environments',
            'Overcoming Professional Challenges',
            'Maintaining Motivation and Focus',
            'Long-term Growth Strategies'
        ],
        objetivos: [
            'Develop a growth mindset for career advancement',
            'Build resilience in challenging work situations',
            'Learn adaptability techniques for changing industries',
            'Maintain motivation and productivity',
            'Create long-term professional development plan'
        ],
        requisitos: [
            'Openness to personal development',
            'No specific prior knowledge required',
            'Willingness to engage in self-reflection'
        ]
    },
    
    'data-science-business': {
        id: 'data-science-business',
        titulo: 'Data Science for Business',
        descripcion: 'Apply data science techniques to solve business problems and make data-driven decisions.',
        precio: '$199.99',
        precioOriginal: '$299.99',
        duracion: '4-5 hours per week',
        instructor: 'Prof. David Wilson',
        nivel: 'Advanced',
        rating: '4.9',
        reviews: '320 reviews',
        imagen: 'Images/discusioncolaborativa.png',
        modulos: [
            'Introduction to Business Data Science',
            'Statistical Analysis for Business Decisions',
            'Machine Learning Applications',
            'Data Visualization and Reporting',
            'Predictive Analytics',
            'Case Studies: Retail, Finance, Healthcare'
        ],
        objetivos: [
            'Apply data science techniques to business problems',
            'Make data-driven business decisions',
            'Use statistical analysis for market insights',
            'Create effective data visualizations',
            'Implement predictive models'
        ],
        requisitos: [
            'Basic statistics knowledge',
            'Familiarity with Excel or similar tools',
            'Business or management background helpful'
        ]
    },
    
    'health-care-economics': {
        id: 'health-care-economics',
        titulo: 'Health Care Economics',
        descripcion: 'Understand economic principles in healthcare systems and analyze healthcare markets.',
        precio: '$149.99',
        precioOriginal: '$229.99',
        duracion: '3-4 hours a week',
        instructor: 'Dr. Maria Rodriguez',
        nivel: 'Intermediate',
        rating: '4.7',
        reviews: '210 reviews',
        imagen: 'Images/graficas.jpg',
        modulos: [
            'Introduction to Health Economics',
            'Healthcare Market Analysis',
            'Cost-Benefit Analysis in Healthcare',
            'Health Insurance Economics',
            'Pharmaceutical Economics',
            'Policy Implications and Reform'
        ],
        objetivos: [
            'Understand economic principles in healthcare',
            'Analyze healthcare markets and systems',
            'Conduct cost-benefit analysis',
            'Evaluate health insurance models',
            'Understand policy implications'
        ],
        requisitos: [
            'Basic economics knowledge helpful',
            'Interest in healthcare systems',
            'No advanced math required'
        ]
    },
    
    'digital-health': {
        id: 'digital-health',
        titulo: 'Digital Health Innovation',
        descripcion: 'Explore the intersection of technology and healthcare, focusing on digital health solutions.',
        precio: '$129.99',
        duracion: '3-4 hours per week',
        instructor: 'Dr. James Kim',
        nivel: 'Intermediate',
        rating: '4.5',
        reviews: '190 reviews',
        imagen: 'Images/digitalhealth.jpg',
        modulos: [
            'Digital Health Fundamentals',
            'Telemedicine and Remote Care',
            'Health Data Analytics',
            'Wearable Technology',
            'Regulatory Considerations',
            'Future Trends in Digital Health'
        ],
        objetivos: [
            'Understand digital health technologies',
            'Explore telemedicine applications',
            'Analyze health data effectively',
            'Navigate regulatory requirements',
            'Identify innovation opportunities'
        ]
    },
    
    'chemistry': {
        id: 'chemistry',
        titulo: 'Advanced Chemistry Principles',
        descripcion: 'Master advanced chemistry concepts with practical applications in various industries.',
        precio: '$99.99',
        duracion: '4-5 hours per week',
        instructor: 'Dr. Robert Chen',
        nivel: 'Advanced',
        rating: '4.8',
        reviews: '240 reviews',
        imagen: 'Images/place.jpg',
        modulos: [
            'Advanced Organic Chemistry',
            'Physical Chemistry Applications',
            'Analytical Techniques',
            'Industrial Chemistry',
            'Environmental Chemistry',
            'Research Methodologies'
        ],
        objetivos: [
            'Master advanced chemistry concepts',
            'Apply chemistry principles in industry',
            'Use analytical techniques effectively',
            'Understand environmental implications',
            'Develop research skills'
        ]
    },
    
    'bioinformatics': {
        id: 'bioinformatics',
        titulo: 'Bioinformatics and Genomics',
        descripcion: 'Learn computational approaches to analyze biological data, focusing on genomics.',
        precio: '$179.99',
        duracion: '3-4 hours per week',
        instructor: 'Dr. Samantha Lee',
        nivel: 'Advanced',
        rating: '4.9',
        reviews: '280 reviews',
        imagen: 'Images/bioinformatica.jpg',
        modulos: [
            'Introduction to Bioinformatics',
            'Genomic Data Analysis',
            'Sequence Alignment',
            'Phylogenetics',
            'Structural Bioinformatics',
            'Clinical Applications'
        ]
    },
    
    'cisco': {
        id: 'cisco',
        titulo: 'CISCO Networking Certification',
        descripcion: 'Prepare for CISCO certification with comprehensive networking training.',
        precio: '$249.99',
        duracion: '5-6 hours per week',
        instructor: 'Alex Martinez',
        nivel: 'Intermediate',
        rating: '4.7',
        reviews: '310 reviews',
        imagen: 'Images/cisco.png',
        modulos: [
            'Networking Fundamentals',
            'CISCO IOS Basics',
            'Routing Protocols',
            'Switching Concepts',
            'Network Security',
            'Certification Preparation'
        ]
    },
    
    'oracle': {
        id: 'oracle',
        titulo: 'ORACLE Database Administration',
        descripcion: 'Master ORACLE database administration for enterprise applications.',
        precio: '$229.99',
        duracion: '4-5 hours per week',
        instructor: 'Jennifer Park',
        nivel: 'Advanced',
        rating: '4.8',
        reviews: '270 reviews',
        imagen: 'Images/oracle.png',
        modulos: [
            'Database Fundamentals',
            'SQL and PL/SQL',
            'Database Architecture',
            'Backup and Recovery',
            'Performance Tuning',
            'Security Management'
        ]
    },
    
    'ai-course': {
        id: 'ai-course',
        titulo: 'Artificial Intelligence Fundamentals',
        descripcion: 'Introduction to AI concepts, machine learning, and practical applications.',
        precio: '$159.99',
        duracion: '3-4 hours per week',
        instructor: 'Dr. Thomas Wong',
        nivel: 'Beginner',
        rating: '4.6',
        reviews: '220 reviews',
        imagen: 'Images/estudioso.jpg',
        modulos: [
            'Introduction to AI',
            'Machine Learning Basics',
            'Neural Networks',
            'Natural Language Processing',
            'Computer Vision',
            'AI Ethics and Future'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Obtener curso de URL
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('course') || 'tech-ethics';
    const curso = cursosCompletos[courseId] || cursosCompletos['tech-ethics'];

    const courseHeader = document.getElementById('course-header');
    if (courseHeader) {
        courseHeader.innerHTML = `
            <h1 class="course-title">${curso.titulo}</h1>
            <p class="course-description-brief">${curso.descripcion}</p>
            <div class="course-meta-detail">
                <div class="meta-item">
                    <span>🕒 ${curso.duracion}</span>
                </div>
                <div class="meta-item">
                    <span>👨‍🏫 ${curso.instructor}</span>
                </div>
                <div class="meta-item">
                    <span>🎯 ${curso.nivel}</span>
                </div>
                <div class="meta-item">
                    <span>⭐ ${curso.rating}/5.0 (${curso.reviews})</span>
                </div>
            </div>
        `;
    }

    // Llenar contenido principal
    const courseMain = document.getElementById('course-main');
    if (courseMain) {
        courseMain.innerHTML = `
            <div class="course-description">
                <h2>About This Course</h2>
                <p>${curso.descripcion}</p>
                
                <h3>What You'll Learn</h3>
                <ul class="learning-objectives">
                    ${curso.objetivos ? curso.objetivos.map(obj => `<li>${obj}</li>`).join('') : '<li>Detailed learning objectives coming soon</li>'}
                </ul>
                
                <h3>Course Content</h3>
                <ul class="module-list">
                    ${curso.modulos.map((mod, i) => `
                        <li>
                            <span>📚 Module ${i + 1}: ${mod}</span>
                            <span>▶️</span>
                        </li>
                    `).join('')}
                </ul>
                
                <h3>Requirements</h3>
                <ul class="requirements-list">
                    ${curso.requisitos ? curso.requisitos.map(req => `<li>${req}</li>`).join('') : '<li>No specific prerequisites</li>'}
                </ul>
                
                <h3>Instructor</h3>
                <div class="instructor-info">
                    <strong>${curso.instructor}</strong>
                    <p>Expert instructor with years of experience in the field.</p>
                </div>
            </div>
        `;
    }

    // Llenar card de inscripción
    const enrollmentCard = document.getElementById('enrollment-card');
    if (enrollmentCard) {
        const descuento = curso.precioOriginal ? 
            `<p><strike>${curso.precioOriginal}</strike> <span style="color: red; font-weight: bold;">Save ${Math.round((1 - parseFloat(curso.precio.replace('$', '')) / parseFloat(curso.precioOriginal.replace('$', ''))) * 100)}%</span></p>` : '';
        
        enrollmentCard.innerHTML = `
            <div class="price-tag">${curso.precio}</div>
            ${descuento}
            <button class="enroll-now-btn" id="enroll-now">Enroll Now</button>
            
            <div class="course-features">
                <p> Full lifetime access</p>
                <p> Certificate of completion</p>
                <p> 30-day money-back guarantee</p>
                <p> Access on mobile and TV</p>
                <p> Assignments and quizzes</p>
                <p> Instructor Q&A support</p>
            </div>
            
            <div class="action-buttons">
                <button class="add-to-cart-btn" id="add-to-cart">🛒 Add to Cart</button>
                <button class="wishlist-btn" id="wishlist">❤️ Add to Wishlist</button>
                <button class="share-btn" id="share">🔗 Share this course</button>
            </div>
        `;

        // Botones de acción
        document.getElementById('enroll-now').addEventListener('click', function() {
            alert(`🎉 Congratulations! You've enrolled in:\n\n"${curso.titulo}"\n\nCheck your email for login instructions.`);
        });

        document.getElementById('add-to-cart').addEventListener('click', function() {
            alert(`🛒 Course added to cart!\n\n"${curso.titulo}"\n\nContinue shopping or proceed to checkout.`);
        });

        document.getElementById('wishlist').addEventListener('click', function() {
            alert(`❤️ Course added to wishlist!\n\nWe'll notify you about discounts on this course.`);
        });

        document.getElementById('share').addEventListener('click', function() {
            const shareUrl = window.location.href;
            if (navigator.share) {
                navigator.share({
                    title: curso.titulo,
                    text: `Check out this course: ${curso.titulo}`,
                    url: shareUrl
                });
            } else {
                navigator.clipboard.writeText(shareUrl);
                alert('🔗 Link copied to clipboard!');
            }
        });
    }

    // Actualizar título de la página
    document.title = `${curso.titulo} - Universidad 1970 Online`;
});