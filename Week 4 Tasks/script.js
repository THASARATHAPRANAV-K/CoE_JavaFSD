// Main Script - script.js

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("courses")) {
        loadCourses();
    }
    if (document.getElementById("instructors")) {
        loadInstructors();
    }
});

// Function to load courses dynamically
function loadCourses() {
    try {
        const courses = [
            { id: 1, name: "Web Development", description: "Learn HTML, CSS, JavaScript, and React to build stunning web applications." },
            { id: 2, name: "Data Science", description: "Analyze big data with Python, machine learning, and AI-driven techniques." },
            { id: 3, name: "Cyber Security", description: "Learn ethical hacking, penetration testing, and securing digital assets." },
            { id: 4, name: "Cloud Computing", description: "Master AWS, Azure, and Google Cloud to deploy scalable cloud solutions." },
            { id: 5, name: "Artificial Intelligence", description: "Dive into deep learning, neural networks, and AI-powered applications." },
            { id: 6, name: "Blockchain Technology", description: "Understand cryptocurrency, smart contracts, and decentralized apps." },
            { id: 7, name: "Mobile App Development", description: "Build Android & iOS apps using Flutter, React Native, and Swift." },
            { id: 8, name: "Game Development", description: "Develop 2D & 3D games using Unity and Unreal Engine." },
            { id: 9, name: "DevOps", description: "Master CI/CD pipelines, Docker, Kubernetes, and infrastructure automation." },
            { id: 10, name: "Big Data Analytics", description: "Process and analyze large datasets with Hadoop, Spark, and data lakes." }
        ];

        const courseContainer = document.getElementById("courses");
        courseContainer.innerHTML = ""; 

        courses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("course-card");
            courseCard.innerHTML = `
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <button onclick="enrollCourse('${course.name}')">Enroll Now</button>
            `;
            courseContainer.appendChild(courseCard);
        });
    } catch (error) {
        console.error("Error loading courses:", error);
        document.getElementById("courses").innerHTML = `<p style="color: red;">Failed to load courses.</p>`;
    }
}

// Function to load instructors dynamically
function loadInstructors() {
    try {
        const instructors = [
            { name: "John Doe", designation: "Senior Web Developer", experience: "8 Years", skills: ["HTML", "CSS", "JavaScript", "React"], photo: "assets/instructors/john.jpg" },
            { name: "Jane Smith", designation: "Machine Learning Expert", experience: "6 Years", skills: ["Python", "TensorFlow", "Data Science"], photo: "assets/instructors/jane.jpg" },
            { name: "David Johnson", designation: "Python Developer", experience: "7 Years", skills: ["Django", "Flask", "APIs"], photo: "assets/instructors/david.jpg" },
            { name: "Emily Davis", designation: "Java Engineer", experience: "9 Years", skills: ["Java", "Spring Boot", "Microservices"], photo: "assets/instructors/emily.jpg" },
            { name: "Michael Brown", designation: "Cyber Security Consultant", experience: "10 Years", skills: ["Ethical Hacking", "Penetration Testing"], photo: "assets/instructors/michael.jpg" },
            { name: "Sarah Wilson", designation: "React & Frontend Developer", experience: "5 Years", skills: ["React", "Next.js", "Tailwind CSS"], photo: "assets/instructors/sarah.jpg" },
            { name: "Chris Evans", designation: "Data Scientist", experience: "6 Years", skills: ["SQL", "Machine Learning", "Big Data"], photo: "assets/instructors/chris.jpg" },
            { name: "Sophia Miller", designation: "Blockchain Developer", experience: "4 Years", skills: ["Solidity", "Smart Contracts"], photo: "assets/instructors/sophia.jpg" },
            { name: "Olivia Taylor", designation: "UI/UX Designer", experience: "7 Years", skills: ["Figma", "Adobe XD", "User Research"], photo: "assets/instructors/olivia.jpg" },
            { name: "Daniel Lee", designation: "C++ Engineer", experience: "8 Years", skills: ["C++", "Game Development", "Data Structures"], photo: "assets/instructors/daniel.jpg" }
        ];

        const instructorContainer = document.getElementById("instructors");
        instructorContainer.innerHTML = "";

        instructors.forEach(instructor => {
            const instructorCard = document.createElement("div");
            instructorCard.classList.add("instructor-card");
            instructorCard.innerHTML = `
                <img src="${instructor.photo}" alt="${instructor.name}">
                <h3>${instructor.name}</h3>
                <p class="designation">${instructor.designation}</p>
                <p><strong>Experience:</strong> ${instructor.experience}</p>
                <div class="skills">
                    ${instructor.skills.map(skill => `<span>${skill}</span>`).join("")}
                </div>
            `;
            instructorContainer.appendChild(instructorCard);
        });
    } catch (error) {
        console.error("Error loading instructors:", error);
        document.getElementById("instructors").innerHTML = `<p style="color: red;">Failed to load instructors.</p>`;
    }
}

// Function to handle course enrollment
function enrollCourse(courseName) {
    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    enrolledCourses.push(courseName);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    alert(`Successfully enrolled in ${courseName}!`);
}
