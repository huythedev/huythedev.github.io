const toggleSwitch = document.querySelector("#darkmode-toggle");
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    sunIcon.style.opacity = "0";
    moonIcon.style.opacity = "1";
  } else {
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0";
  }
});
