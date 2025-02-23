document.addEventListener("DOMContentLoaded", function () {
    let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const enrolledList = document.getElementById("enrolledCourses");
    const achievements = document.getElementById("achievements");

    enrolledList.innerHTML = "";
    enrolled.forEach(course => {
        enrolledList.innerHTML += `<li>${course}</li>`;
    });

    achievements.innerText = enrolled.length >= 3 ? "🏆 Course Master - Completed 3+ Courses!" : "Keep Learning!";
});
