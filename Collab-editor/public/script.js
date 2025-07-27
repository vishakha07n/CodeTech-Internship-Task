const socket = io();
const editor = document.getElementById('editor');
const typingStatus = document.getElementById('typing-status');
const themeToggle = document.getElementById('themeToggle');

// Get username from localStorage
let username = localStorage.getItem("username") || "Anonymous";
let typing = false;

// Emit changes with username
editor.addEventListener("input", () => {
  typing = true;
  socket.emit("text-changed", {
    username: username,
    content: editor.value
  });
});

// Show others' changes and typing status
socket.on("receive-text", (data) => {
  if (!typing) {
    editor.value = data.content;
  }
  typing = false;

  typingStatus.innerText = `✏️ ${data.username} is typing...`;

  setTimeout(() => {
    typingStatus.innerText = "";
  }, 2500);
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("username");
      window.location.href = "/login.html";
    }
  });
}
