const API_BASE = "https://my-portfolio-backend-yd8u.onrender.com";

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
});

/* ===================== PROJECTS ===================== */

function loadProjects() {

    const projects = [
        {
            title: "AI-based self-checkout system",
            description: "Smart retail solution enabling queue-free shopping through automated checkout workflows.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755186086/Poster_-_Queue-Free_Shopping_1_sdv85q.jpg",
            link: "https://github.com/SampurnaNiyogi/Smart-Bengal-Hackathon",
            detailed_description: `
<strong>Problem it solves</strong><br>
Long checkout queues reduce efficiency and customer experience in retail environments.<br><br>

<strong>Tech Stack</strong><br>
Flask, Firebase (Firestore), Streamlit, OpenCV, Pyzbar<br><br>

<strong>What I built</strong><br>
• Developed backend services for real-time cart synchronization and automated billing.<br>
• Integrated barcode scanning and biometric authentication workflows.<br>
• Designed the system to minimize checkout latency and manual intervention.
`
        },
        {
            title: "Notes App",
            description: "Simple backend application for creating and managing notes using CRUD operations.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755186304/Poster_-_A_Simple_Notes_Application_Built_with_FastAPI_edgqev.jpg",
            link: "https://github.com/SampurnaNiyogi/MyNotes-Using-FastAPI-Basics-",
            detailed_description: `
<strong>Tech Stack</strong><br>
FastAPI, MongoDB, Jinja2<br><br>

Implemented core CRUD operations, server-side rendering, and database persistence to understand backend request handling.
`
        },
        {
            title: "Smart Recipe",
            description: "Intelligent recipe discovery and management platform with AI-based recommendations.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1755107060/SmartRecipe_-_A_full-stack_application_for_discovering_managing_and_creating_recipes._It_imports_a_large_public_recipe_dataset_into_MongoDB_supports_powerful_search_and_filtering_and_lets_users_add_or_edit_t_u6mabb.jpg",
            link: "https://github.com/SampurnaNiyogi/Smart-Recipe",
            detailed_description: `
<strong>Problem it solves</strong><br>
Managing and discovering relevant recipes becomes inefficient without intelligent search and recommendations.<br><br>

<strong>Tech Stack</strong><br>
FastAPI, MongoDB, Beanie ODM, Vue.js, Firebase, JWT<br><br>

<strong>What I built</strong><br>
• Designed backend APIs for recipe management, search, and authentication.<br>
• Implemented TF-IDF based recipe recommendations.<br>
• Built a rule-based chatbot for ingredient substitution and cooking assistance.
`
        },
        {
            title: "ShieldNET: AI-Powered WAF",
            description: "Anomaly-based web application firewall for detecting SQL injection and XSS attacks.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761157667/shieldNetdp_vppy5l.png",
            link: "https://github.com/SampurnaNiyogi/AI-powered-Web-Application-Firewall",
            detailed_description: `
<strong>Problem it solves</strong><br>
Signature-based WAFs struggle to detect novel and zero-day web attacks.<br><br>

<strong>Tech Stack</strong><br>
Python, FastAPI, PyTorch, Hugging Face Transformers (DistilBERT), Docker, Nginx<br><br>

<strong>What I built</strong><br>
• Integrated a Transformer-based model to learn normal HTTP request patterns.<br>
• Implemented loss-based anomaly scoring for detecting malicious traffic.<br>
• Analyzed false positives caused by traffic distribution shifts and threshold sensitivity.
`
        },
        {
            title: "Obstacle-Avoiding & Line Following Robot Car",
            description: "Autonomous robot capable of line tracking and dynamic obstacle avoidance.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761154708/Untitled_design_ffgscv.jpg",
            link: "https://github.com/SampurnaNiyogi/Line-Following-Obstacle-Avoidance-Robot-Car",
            detailed_description: `
<strong>Tech Stack</strong><br>
Arduino, IR Sensors, Ultrasonic Sensor, Servo Motor, Motor Driver<br><br>

Built an autonomous robot with dynamic motor control, obstacle detection, and path tracking.
`
        },
        {
            title: "BlockSim: Blockchain Simulator",
            description: "Basic blockchain simulation to understand block creation, hashing, and chain validation.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1761157320/blocksim_dp_zva5ik.png",
            link: "https://github.com/SampurnaNiyogi/BlockSim",
            detailed_description: `
<strong>Tech Stack</strong><br>
Node.js, Crypto Library<br><br>

Implemented block creation, hashing, chain validation, and tamper detection to simulate blockchain behavior.
`
        },
        {
            title: "Chemical Plant Equipment Monitor",
            description: "Industrial telemetry monitoring system for analyzing equipment parameters across processing units.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1765366282/ChatGPT_Image_Dec_10_2025_04_59_49_PM_dtjsxb.png",
            link: "https://github.com/SampurnaNiyogi/fossee2k25-WinterTask",
            detailed_description: `
<strong>Problem it solves</strong><br>
Monitoring industrial equipment parameters across multiple processing units is difficult without centralized analytics.<br><br>

<strong>Tech Stack</strong><br>
Django REST Framework, React.js, PyQt5, Pandas, SQLite, JWT<br><br>

<strong>What I built</strong><br>
• Designed REST APIs for telemetry ingestion and CSV parsing.<br>
• Built web and desktop dashboards for real-time visualization.<br>
• Implemented automated PDF reporting for operational analysis.
`
        },
        {
            title: "Developer Learning Platform (Backend)",
            description: "Backend services for a developer learning platform inspired by competitive coding platforms.",
            image_url: "https://res.cloudinary.com/djw8w0yxl/image/upload/v1766310885/Dev-learning-platform_jsa2k1.jpg",
            link: "https://github.com/SampurnaNiyogi/dev-learning-platform",
            detailed_description: `
        <strong>Problem it solves</strong><br>
        Learning platforms often lack clean backend design for scalable problem management and user workflows.<br><br>

        <strong>Tech Stack</strong><br>
        Java, Spring Boot, REST APIs, Git, GitHub<br><br>

        <strong>What I built</strong><br>
        • Designed layered backend architecture (Controller → Service → DTO).<br>
        • Built RESTful APIs for problem management and user workflows.<br>
        • Focused on clean API contracts, validation, and extensibility.<br><br>

        <strong>Status</strong><br>
        In Progress
        `
        }
    ];

    const featuredTitles = [
        "Chemical Plant Equipment Monitor",
        "Developer Learning Platform (Backend)",
        "Smart Recipe",
        "AI-based self-checkout system"
    ];

    const featuredContainer = document.getElementById("featured-projects");
    const allContainer = document.getElementById("all-projects");
    const viewAllBtn = document.getElementById("viewAllBtn");

    if (!featuredContainer || !allContainer || !viewAllBtn) return;

    featuredContainer.innerHTML = "";
    allContainer.innerHTML = "";

    projects.forEach(project => {
        const card = createProjectCard(project);
        if (featuredTitles.includes(project.title)) {
            featuredContainer.appendChild(card);
        } else {
            allContainer.appendChild(card);
        }
    });

    viewAllBtn.addEventListener("click", () => {
        allContainer.style.display = "grid";
        viewAllBtn.style.display = "none";
        allContainer.scrollIntoView({ behavior: "smooth" });
    });
}

function createProjectCard(project) {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
        <img src="${project.image_url}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="detailed-description">
            ${project.detailed_description}
        </div>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    div.addEventListener("click", (e) => {
        if (e.target.tagName !== "A") {
            div.classList.toggle("active");
        }
    });

    return div;
}


/* ===================== MOBILE SIDEBAR ===================== */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");
    });
}

if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
}

sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
});

/* ===================== CERTIFICATE MODAL ===================== */

const certificateCards = document.querySelectorAll(
    "#certifications-container .project-card img"
);

const certificateModal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

// Open modal
certificateCards.forEach(img => {
    img.addEventListener("click", (e) => {
        e.stopPropagation();
        modalImage.src = img.src;
        certificateModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

// Close modal (X button)
modalClose.addEventListener("click", closeModal);

// Close modal (click outside image)
certificateModal.addEventListener("click", (e) => {
    if (e.target === certificateModal) {
        closeModal();
    }
});

// Close modal (ESC key)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

function closeModal() {
    certificateModal.classList.remove("active");
    modalImage.src = "";
    document.body.style.overflow = "auto";
}
