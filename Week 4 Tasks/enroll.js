// Enroll Script - enroll.js

function enrollCourse(courseName) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please log in before enrolling in a course.");
        window.location.href = "login.html";
        return;
    }

    let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    if (enrolledCourses.includes(courseName)) {
        alert(`You are already enrolled in ${courseName}.`);
        return;
    }

    enrolledCourses.push(courseName);
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));

    alert(`✅ Successfully enrolled in ${courseName}!`);
}
