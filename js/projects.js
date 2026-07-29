/**
 * Projects Showcase & Case Study Modal Module - Roaa Ahmed Portfolio
 */

const projectsData = {
    'medfinder': {
        title: 'MedFinder',
        category: 'Healthcare Platform',
        role: 'Frontend Developer',
        cover: 'assets/MedFinder-Cover.png',
        video: 'assets/Medfinder-Demo.mp4',
        github: 'https://github.com/roaa676',
        liveDemo: 'https://github.com/roaa676',
        overview: 'A healthcare web application that enables users to search for medicines, check pharmacy availability, reserve medications, and manage reservations through a responsive and user-friendly interface integrated with REST APIs.',
        problem: 'Patients frequently spend hours physically searching across localized pharmacies for critical prescribed medications, leading to dangerous treatment delays.',
        solution: 'Engineered a high-performance Angular single-page application featuring debounced query searches, real-time availability badges, localized pharmacy reservation workflows, and responsive dashboards.',
        features: [
            'Medicine Search',
            'Pharmacy Locator',
            'Reservation System',
            'User Authentication',
            'REST API Integration',
            'Responsive UI Layout'
        ],
        techStack: ['Angular', 'TypeScript', 'PrimeNG', '.Net', 'Bootstrap', 'REST API', 'Swagger'],
        techHighlights: 'Built using Angular, TypeScript interfaces for strict type safety, RxJS BehaviorSubjects for state management, PrimeNG and Bootstrap UI components, and Postman for REST API integration and testing.',
        responsibilities: 'Frontend Developer. Designed and implemented all client views, reactive forms validation, search debounce streams, responsive layouts, and REST API integration services.',
        challenges: 'Handling high-frequency keystrokes during medicine searches caused unnecessary server API load. Implemented RxJS debounceTime(300) and distinctUntilChanged() operators to optimize network queries by 65%.'
    },
    'learning-diagnoses': {
        title: 'Learning Difficulties Diagnoses',
        category: 'AI-Assisted Learning Platform',
        role: 'Full Stack Developer',
        cover: 'assets/Grad-Cover.png',
        video: 'assets/Grad-Demo.mp4',
        github: 'https://github.com/roaa676',
        liveDemo: 'https://github.com/roaa676',
        overview: 'An AI-assisted graduation project designed to support the early detection of learning difficulties through intelligent assessment workflows, personalized reports, and interactive dashboards. Developed as a full-stack web application using Angular for the frontend and Laravel for the backend.',
        problem: 'Early diagnostic screening for learning difficulties is often delayed due to specialist backlogs and lack of accessible cognitive assessment tools for parents and teachers.',
        solution: 'Developed an interactive diagnostic assessment portal in Angular with a PHP Laravel backend and MySQL database that guides users through cognitive tests and renders personalized progress dashboards.',
        features: [
            'AI-Assisted Assessment Workflow',
            'User Authentication & Access Controls',
            'Analytics & Performance Dashboard',
            'Detailed Diagnosis Reports',
            'Database Management (MySQL)',
            'Responsive Multi-Device UI'
        ],
        techStack: ['Angular', 'TypeScript', 'PrimeNG', 'PHP', 'Laravel', 'MySQL', 'REST API', 'Postman'],
        techHighlights: 'Developed with Angular, TypeScript, PrimeNG UI components, PHP Laravel backend, MySQL database management, and REST APIs tested via Postman.',
        responsibilities: 'Full Stack Developer. Architected the assessment workflow UI, real-time response capture state, backend database endpoints, and mobile-responsive layout.',
        challenges: 'Preserving complex test state across multi-page cognitive evaluation steps without loss on browser refresh. Integrated Angular reactive state persistence with optimized database queries.'
    },
    'task-management': {
        title: 'Task Management System',
        category: 'Project Management Platform',
        role: 'Frontend Developer',
        cover: 'assets/TasksIMG.png',
        video: 'assets/Task-Management.mp4',
        github: 'https://github.com/roaa676',
        liveDemo: 'https://github.com/roaa676',
        overview: 'A modern task management application that streamlines project organization through drag-and-drop boards, task categorization, status tracking, and an intuitive responsive interface.',
        problem: 'Fragmented team communication and static task lists make daily project tracking difficult for development teams.',
        solution: 'Architected a dynamic Kanban board SPA with Angular and PrimeNG, enabling visual drag-and-drop status shifts and persistent local state.',
        features: [
            'Drag & Drop Kanban Board',
            'Task Categorization & Management',
            'Project Category Organization',
            'PrimeNG Component UI',
            'LocalStorage Offline Persistence',
            'Responsive Mobile-First UI'
        ],
        techStack: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'Reactive Forms', 'Bootstrap', 'LocalStorage'],
        techHighlights: 'Angular, TypeScript, RxJS BehaviorSubject state streams, PrimeNG UI components, Reactive Forms validation, Bootstrap responsive grid, and LocalStorage browser persistence.',
        responsibilities: 'Frontend Developer. Built component architecture, local storage sync hooks, drag-and-drop state handlers, and reactive validation logic.',
        challenges: 'Synchronizing drag-and-drop board state shifts smoothly without full re-renders. Utilized RxJS subject streams and Angular structural directive trackBy keys for 60fps UI performance.'
    },
    'quick-pick': {
        title: 'Quick Pick',
        category: 'React E-Commerce SPA',
        role: 'Frontend Developer (React)',
        cover: 'assets/QuickPick-Cover.png',
        video: 'assets/Quick-Pick.mp4',
        github: 'https://github.com/roaa676',
        liveDemo: 'https://github.com/roaa676',
        overview: 'A responsive e-commerce web application built with React that allows users to browse products, filter categories, manage a shopping cart, and enjoy a seamless shopping experience through efficient state management.',
        problem: 'E-commerce web applications often experience inconsistent shopping cart state across header counters, product detail views, and checkout pages.',
        solution: 'Built a global state management system in React using Context API and custom hooks to synchronize item quantities, cart badges, and price totals across all views.',
        features: [
            'Shopping Cart & Live Badge Counter',
            'Product Category Filtering',
            'Context API Global State Management',
            'FakeStore REST API Integration',
            'LocalStorage Persistence',
            'Responsive Shopping UI'
        ],
        techStack: ['React.js', 'Context API', 'React Router', 'Bootstrap', 'FakeStore API', 'LocalStorage', 'ES6+'],
        techHighlights: 'Developed with React.js, JavaScript (ES6+), React Context API, React Router navigation, Bootstrap responsive UI, FakeStore API integration, and LocalStorage cart state persistence.',
        responsibilities: 'Frontend Developer (React). Built cart context provider, product catalog views, quantity management hooks, responsive layout styles, and REST API integration.',
        challenges: 'Maintaining cart items and quantity state when navigating between views or reloading. Combined React Context API with LocalStorage sync hooks to persist shopping state.'
    },
    'wanderlust-travel': {
        title: 'Wanderlust',
        category: 'Premium Travel Landing Page',
        role: 'Frontend Developer & UI Implementation',
        cover: 'assets/Tourism-Cover.png',
        video: 'assets/Tourism-Demo.mp4',
        github: 'https://github.com/roaa676',
        liveDemo: 'https://github.com/roaa676',
        overview: 'A modern travel landing page focused on delivering an immersive user experience through elegant layouts, cinematic visuals, reusable UI components, responsive design, and refined micro-interactions.',
        problem: 'Traditional travel booking sites suffer from cluttered layouts, slow rendering speeds, and weak visual engagement.',
        solution: 'Engineered an award-grade landing page focusing on fluid micro-interactions, responsive typography, lazy-loaded imagery, and clean CSS Grid/Flexbox layouts.',
        features: [
            'Hero Image & Video Slider',
            'Interactive Destination Showcase',
            'Travel Experiences Section',
            'Animated Statistics Counter',
            'Newsletter Subscription Form',
            'Smooth Micro-interactions'
        ],
        techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'CSS Grid', 'Flexbox', 'Responsive Design'],
        techHighlights: 'Handcrafted HTML5 & CSS3 markup, modern CSS Grid and Flexbox layouts, native ES6+ JavaScript micro-interactions, and 100% responsive fluid design.',
        responsibilities: 'Frontend Developer & UI Implementation. Handcrafted HTML/CSS markup, responsive break-point styles, slider integrations, and micro-interaction animations.',
        challenges: 'Maintaining 60fps animations on mobile viewports with large media files. Utilized GPU hardware acceleration (transform/opacity) and image lazy-loading.'
    }
};

export function initProjects() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const showcaseCards = document.querySelectorAll('.showcase-card');

    // Video Demo Modal Elements
    const demoModal = document.getElementById('demoModal');
    const modalVideo = document.getElementById('modalVideoPlayer');
    const modalTitle = document.getElementById('modalTitleText');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    // Rich Case Study Modal Elements
    const caseStudyModal = document.getElementById('caseStudyModal');
    const csCloseBtn = document.getElementById('csCloseBtn');

    // Category Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter') || 'all';

            showcaseCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'grid';
                    card.style.animation = 'modalFadeIn 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Rich Case Study Modal Renderer
    document.querySelectorAll('.open-case-study-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const data = projectsData[projectId];

            if (data && caseStudyModal) {
                // Populate Case Study Modal UI
                document.getElementById('csTitle').textContent = data.title;
                document.getElementById('csCategory').textContent = data.category;
                document.getElementById('csRole').textContent = data.role;
                document.getElementById('csHeroImg').src = data.cover;
                document.getElementById('csOverview').textContent = data.overview;
                document.getElementById('csProblem').textContent = data.problem;
                document.getElementById('csSolution').textContent = data.solution;
                document.getElementById('csTechHighlights').textContent = data.techHighlights;
                document.getElementById('csResponsibilities').textContent = data.responsibilities;
                document.getElementById('csChallenges').textContent = data.challenges;

                // Render Features List
                const featuresContainer = document.getElementById('csFeaturesList');
                featuresContainer.innerHTML = data.features.map(f => `
                    <div class="cs-feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${f}</span>
                    </div>
                `).join('');

                // Render Tech Stack Badges
                const stackContainer = document.getElementById('csTechStackList');
                stackContainer.innerHTML = data.techStack.map(s => `
                    <span class="stack-tag">${s}</span>
                `).join('');

                // Set Action Buttons
                const csDemoBtn = document.getElementById('csDemoBtn');
                const csGithubBtn = document.getElementById('csGithubBtn');

                if (csDemoBtn) {
                    csDemoBtn.onclick = () => {
                        caseStudyModal.close();
                        if (demoModal && modalVideo) {
                            modalVideo.src = data.video;
                            if (modalTitle) modalTitle.textContent = `${data.title} Demo Walkthrough`;
                            demoModal.showModal();
                            modalVideo.play().catch(err => console.log('Autoplay blocked:', err));
                        }
                    };
                }

                if (csGithubBtn) {
                    csGithubBtn.href = data.github;
                }

                caseStudyModal.showModal();
            }
        });
    });

    // Video Demo Modal Handlers
    document.querySelectorAll('.play-demo-btn, .watch-demo-link').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const videoSrc = trigger.getAttribute('data-video');
            const title = trigger.getAttribute('data-title') || 'Project Demo';

            if (videoSrc && demoModal && modalVideo) {
                modalVideo.src = videoSrc;
                if (modalTitle) modalTitle.textContent = title;
                demoModal.showModal();
                modalVideo.play().catch(err => console.log('Autoplay blocked:', err));
            }
        });
    });

    function closeVideoModal() {
        if (demoModal && modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
            modalVideo.src = '';
            demoModal.close();
        }
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeVideoModal);
    if (csCloseBtn) csCloseBtn.addEventListener('click', () => caseStudyModal?.close());

    // Close on backdrop click for both modals
    [demoModal, caseStudyModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                const rect = modal.getBoundingClientRect();
                const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                    rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
                if (!isInDialog) {
                    if (modal === demoModal) closeVideoModal();
                    else modal.close();
                }
            });

            modal.addEventListener('cancel', (e) => {
                e.preventDefault();
                if (modal === demoModal) closeVideoModal();
                else modal.close();
            });
        }
    });
}
