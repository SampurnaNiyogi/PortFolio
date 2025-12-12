const API_BASE = "https://my-portfolio-backend-yd8u.onrender.com"; // Backend URL

function isMobileDevice() {
    // A simple check for common mobile user agents
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', () => {
    if (isMobileDevice()) {
        const viewLinks = document.querySelectorAll('.view-resume-link');
        const downloadUrl = `${API_BASE}/resume/view`;

        viewLinks.forEach(link => {
            link.href = downloadUrl;
            link.setAttribute('target', '_blank');
            link.setAttribute('download', 'resume.pdf');
        });
    }
    
    // Initialize projects with static data
    loadProjects();
});

// --- REMOVED PROFILE, SKILLS, AND EDUCATION FETCH CALLS ---
// These are now static in HTML. Removing the fetch calls stops the "Error loading data" message.

function loadProjects() {
    // Static Project Data
    const projects = [
        {
            "_id": { "$oid": "689b53d614d5d1be87202b9d" },
            "title": "AI-based self-checkout system",
            "description": "An AI-based self-checkout solution enabling queue-free shopping through biometric login and smart cart interaction.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755186086/Poster_-_Queue-Free_Shopping_1_sdv85q.jpg",
            "link": "https://github.com/SampurnaNiyogi/Smart-Bengal-Hackathon",
            "detailed_description": "This project is a full-stack, cashier-less retail system built for the Smart Bengal Hackathon. It features a Python Flask backend with Firebase for database management and a Streamlit frontend. Key features include user authentication (with fingerprint option), live barcode scanning (OpenCV/pyzbar), interactive cart management, and automated PDF invoice generation."
        },
        {
            "_id": { "$oid": "689b540914d5d1be87202b9e" },
            "title": "Notes App",
            "description": "A simple Notes web application built with FastAPI, MongoDB, and Jinja2 templates.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755186304/Poster_-_A_Simple_Notes_Application_Built_with_FastAPI_edgqev.jpg",
            "link": "https://github.com/SampurnaNiyogi/MyNotes-Using-FastAPI-Basics-",
            "detailed_description": "This project is a simple, full-stack \"MyNotes\" application built with FastAPI. It demonstrates core web development concepts, using MongoDB for database persistence and Jinja2 for server-side HTML rendering. The app supports creating notes via an HTML form and dynamically displaying a list of all saved notes."
        },
        {
            "_id": { "$oid": "689ccd9216616417c029a363" },
            "title": "Smart Recipe",
            "description": "SmartRecipe is an intelligent recipe management platform that helps users discover, create, and manage personalized recipes using FastAPI, MongoDB, and an intuitive, responsive frontend.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755107060/SmartRecipe_-_A_full-stack_application_for_discovering_managing_and_creating_recipes._It_imports_a_large_public_recipe_dataset_into_MongoDB_supports_powerful_search_and_filtering_and_lets_users_add_or_edit_t_u6mabb.jpg",
            "link": "https://github.com/SampurnaNiyogi/Smart-Recipe",
            "detailed_description": "SmartRecipe is a modern, AI-driven recipe management system built with FastAPI and MongoDB. It enables users to browse, add, and customize recipes effortlessly, supporting images, categories, cuisines, and diet preferences. With a responsive, interactive frontend and asynchronous backend, SmartRecipe delivers seamless performance, making cooking discovery and meal planning both smarter and more enjoyable."
        },
        {
            "_id": { "$oid": "68f7ce91944ffc6e8c75e1a4" },
            "title": "ShieldNET: AI-Powered WAF",
            "description": "A deep-learning-based Web Application Firewall (WAF) using a Transformer model to detect and block SQL injection attacks in real-time.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761157667/shieldNetdp_vppy5l.png",
            "link": "https://github.com/SampurnaNiyogi/AI-powered-Web-Application-Firewall",
            "detailed_description": "This project builds an intelligent Web Application Firewall powered by DistilBERT that learns the structure of legitimate web requests through masked language modeling. Unlike traditional rule-based WAFs using regex based firewalls, it dynamically detects anomalies such as SQL injection, XSS, or bot probing in real time using loss-based anomaly scoring, enabling proactive defense against novel web attacks."
        },
        {
            "_id": { "$oid": "68f7cf0a944ffc6e8c75e1a5" },
            "title": "Obstacle-Avoiding & Line Following Robot Car",
            "description": "Autonomous line-following robot with IR sensors and servo-mounted ultrasonic obstacle detection, capable of dynamic path adjustment, speed control, and safe navigation around unexpected obstacles.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761154708/Untitled_design_ffgscv.jpg",
            "link": "https://github.com/SampurnaNiyogi/Line-Following-Obstacle-Avoidance-Robot-Car",
            "detailed_description": "This Arduino-based autonomous robot uses five IR sensors for precise line-following and a servo-mounted ultrasonic sensor to detect and avoid obstacles. It intelligently slows down at turns, dynamically adjusts motor speeds, and can leave the path to bypass objects, returning safely afterward. The design combines real-time sensor feedback, motor control logic, and adaptive path planning."
        },
        {
            "_id": { "$oid": "68f7cf53944ffc6e8c75e1a6" },
            "title": "BlockSim: Blockchain Simulator",
            "description": "A simple blockchain simulator built from scratch with Node.js to understand mining, transactions, and chain integrity.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761157320/blocksim_dp_zva5ik.png",
            "link": "https://github.com/SampurnaNiyogi/BlockSim",
            "detailed_description": "BlockSim is a foundational project demonstrating blockchain core principles from scratch using Node.js and the native crypto module. It implements essential features like block creation, SHA-256 hashing, and chain-linking. A built-in validation function proves the chain's immutability by successfully detecting any data tampering, ensuring data integrity."
        },
        {
            "_id": { "$oid": "6939593bae140badf33622a9" },
            "title": "Chemical Plant Equipment Monitor",
            "description": "A full-stack industrial telemetry and visualization system using Django REST API, React web dashboard, and PyQt5 desktop client.",
            "image_url": "https://res.cloudinary.com/djw8w0yxl/image/upload/v1765366282/ChatGPT_Image_Dec_10_2025_04_59_49_PM_dtjsxb.png",
            "link": "https://github.com/SampurnaNiyogi/fossee2k25-WinterTask",
            "detailed_description": "This project is a 3-tier system designed for monitoring critical process parameters such as Flowrate, Pressure, and Temperature in chemical equipment. A Django REST backend handles CSV ingestion, analytics generation using Pandas, JWT authentication, report creation using ReportLab/Matplotlib, and data history management. A React.js dashboard offers remote analytics, Chart.js visualization, dark/light theme toggle, and both client-side and server-side PDF export options. A PyQt5 desktop client provides control-room visualization with embedded Matplotlib plots, a QStackedWidget UI, real-time theme updates, and history retrieval dialogs."
        }
    ];

    const container = document.getElementById("projects-container");
    if (!container) return;
    
    container.innerHTML = ""; // Clear placeholder
    
    projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "project-card";
        div.innerHTML = `
            <img src="${proj.image_url}" alt="${proj.title}" width="100">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="detailed-description">
                <p>${proj.detailed_description.replace(/\n/g, '<br>')}</p>
            </div>
            <a href="${proj.link}" target="_blank">View Project</a>
        `;
        div.addEventListener('click', (event) => {
            if (event.target.tagName !== 'A') {
                div.classList.toggle('active');
            }
        });
        container.appendChild(div);
    });
}


// Mobile Sidebar Toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});