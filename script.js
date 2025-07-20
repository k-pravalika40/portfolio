document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Text Animation ---
    if (document.querySelector('#typed-text')) {
        var options = {
            strings: [
                'AI Enthusiast',
                'Full Stack Developer',
                'Data Science Learner',
                'Problem Solver'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        };
        var typed = new Typed('#typed-text', options);
    }

    // --- Active navigation link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));

    // --- UX Polish: Dynamic Header & Back to Top Button ---
    const header = document.querySelector('header');
    const backToTopBtn = document.querySelector('.back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));


    // --- Case Study Modal Logic ---
    const projectDetails = {
        eventconnect: {
            title: "EventConnect - Smart Event Planning Platform",
            description: "This full-stack application streamlines event planning by connecting users with local vendors based on location, budget, and ratings. It features a smart recommendation system to suggest venues and services, real-time availability checking via an intuitive calendar interface, and a robust review and rating system to ensure quality and reliability.",
            learnings: "The primary challenge was designing a scalable database schema to handle complex relationships between events, users, and vendors. I learned a great deal about geospatial queries for the 'nearby' feature and implementing secure, role-based authentication.",
            tags: "<span>React</span><span>Node.js</span><span>MongoDB</span><span>Maps API</span>",
            demoLink: "#",
            codeLink: "#"
        },
        nextbrain: {
            title: "NextBrain AI - Powered Collaborative Editor",
            description: "A real-time, text-based collaborative editor powered by the MERN stack and Socket.IO. What sets it apart are the AI-driven features, including code auto-completion via a trained model and intelligent content suggestions to help overcome writer's block. It's designed for seamless teamwork.",
            learnings: "Implementing real-time synchronization with WebSockets was a fantastic learning experience. The most complex part was integrating a lightweight AI model for suggestions without introducing significant latency, which required careful optimization of the backend logic.",
            tags: "<span>React</span><span>Express.js</span><span>MongoDB</span><span>Socket.IO</span><span>AI</span>",
            demoLink: "#",
            codeLink: "#"
        },
        crisisguardian: {
            title: "CrisisGuardian AI - Intelligent Bug Detection",
            description: "This is a proactive bug detection system that uses machine learning and static code analysis to identify bugs, security vulnerabilities, and code smells before they reach production. It integrates directly into CI/CD pipelines to provide automated feedback to developers on every commit, improving code quality and security.",
            learnings: "This project was a deep dive into abstract syntax trees (ASTs) and creating custom linting rules. The main challenge was training a machine learning model to accurately classify code 'smells' with a low false-positive rate, which involved extensive feature engineering from the code structure itself.",
            tags: "<span>Python</span><span>Scikit-learn</span><span>TensorFlow</span><span>CI/CD</span>",
            demoLink: "#",
            codeLink: "#"
        }
    };

    const modalBackdrop = document.getElementById('project-modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectName = btn.dataset.project;
            const projectData = projectDetails[projectName];

            if (projectData) {
                document.getElementById('modal-title').textContent = projectData.title;
                document.getElementById('modal-description').textContent = projectData.description;
                document.getElementById('modal-learnings').textContent = projectData.learnings;
                document.getElementById('modal-tags').innerHTML = projectData.tags;
                document.getElementById('modal-demo-link').href = projectData.demoLink;
                document.getElementById('modal-code-link').href = projectData.codeLink;
                modalBackdrop.classList.add('show');
            }
        });
    });

    function closeModal() {
        modalBackdrop.classList.remove('show');
    }

    if(modalBackdrop) {
        modalCloseBtn.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

});