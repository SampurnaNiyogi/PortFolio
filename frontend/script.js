const API_BASE = "http://127.0.0.1:8000"; // Backend URL

// Load Profile
fetch(`${API_BASE}/profile`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("name").innerText = data.name || "Sampurna Niyogi";
        document.getElementById("role").innerText = data.role || "Software Engineer";
        document.getElementById("about-me").innerText = data.about || "";
        document.getElementById("email").innerText = data.email || "";
        document.getElementById("linkedin").href = data.linkedin || "#";
        document.getElementById("github").href = data.github || "#";
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
                <a href="${proj.link}" target="_blank">View Project</a>
            `;
            container.appendChild(div);
        });
    });


