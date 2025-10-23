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

// Load Profile
fetch(`${API_BASE}/profile`)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        document.getElementById("name").innerText = data.name || "Sampurna Niyogi";
        document.getElementById("role").innerText = data.role || "Software Engineer";
        document.getElementById("about-me").innerText = data.about || "";
        document.getElementById("email").innerText = data.email || "";
        document.getElementById("linkedin").href = data.linkedin || "#";
        document.getElementById("github").href = data.github || "#";
    })
    .catch(error => {
        console.error('Failed to fetch profile:', error);
        document.getElementById("name").innerText = "Error loading data";
    });

// Load Skills
fetch(`${API_BASE}/skills`)
    .then(res => res.json())
    .then(skills => {
        const container = document.getElementById("skills-container");
        skills.forEach(cat => {
            const div = document.createElement("div");
            div.className = "skill-card";
            div.innerHTML = `<h3>${cat.category}</h3><ul>${cat.skills.map(s => `<li>${s}</li>`).join("")}</ul>`;
            container.appendChild(div);
        });
    });

// Load Projects
fetch(`${API_BASE}/projects`)
    .then(res => res.json())
    .then(projects => {
        const container = document.getElementById("projects-container");
        projects.forEach(proj => {
            const div = document.createElement("div");
            div.className = "project-card";
            div.innerHTML = `
                <img src="${proj.image_url}" alt="${proj.title}" width = "100">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
                <div class="detailed-description">
                    <p>${proj.detailed_description.replace(/\n/g, '<br>')}</p>
                </div>
                <a href="${proj.link}" target="_blank">View Project</a>
            `;
            div.addEventListener('click', (event) => {
                // IMPORTANT: Only toggle if the user didn't click the link itself!
                if (event.target.tagName !== 'A') {
                    div.classList.toggle('active');
                }
            });
            container.appendChild(div);
        });
    });

fetch(`${API_BASE}/education`)
    .then(res => res.json())
    .then(educationList => {
        const container = document.getElementById("education-container");
        educationList.reverse();
        educationList.forEach(edu => {
            const div = document.createElement("div");
            div.className = "project-card";
            let disciplineHtml = '';
            if (edu.discipline) {
                disciplineHtml = `<p class="education-discipline">${edu.discipline}</p>`;
            }
            
            div.innerHTML = `
                <h3>${edu.degree}</h3>
                ${disciplineHtml}
                <p class="education-institution">${edu.institution}</p>
                <p class="education-timeline">${edu.timeline}</p>
                
            `;
            container.appendChild(div);
        });
    });


// Mobile Sidebar Toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Open sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
});

// Close sidebar
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Close sidebar when clicking a link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
});