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
});

// --- REMOVED PROFILE, SKILLS, AND EDUCATION FETCH CALLS ---
// These are now static in HTML. Removing the fetch calls stops the "Error loading data" message.

// Load Projects (Still dynamic)
fetch(`${API_BASE}/projects`)
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById("projects-container");
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
    })
    .catch(error => {
        console.error("Error loading projects:", error);
    });


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