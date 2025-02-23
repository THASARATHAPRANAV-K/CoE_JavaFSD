// Notifications Script - notifications.js

document.addEventListener("DOMContentLoaded", function () {
    displayNotifications();
});

function displayNotifications() {
    const today = new Date().toLocaleDateString();
    const notificationBox = document.getElementById("announcements");

    if (!notificationBox) return;

    notificationBox.innerHTML = `
        <div class="notification">
            <p>📢 <strong>Reminder:</strong> Your next course starts on <span class="highlight">${today}</span>. Don't miss it!</p>
        </div>
        <div class="notification">
            <p>🎉 <strong>New Feature:</strong> Live chat with instructors is now available!</p>
        </div>
    `;
}
