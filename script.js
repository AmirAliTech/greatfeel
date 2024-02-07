const AboutDropdown = document.getElementById("about__dropdown");
const ServiceDropdown = document.getElementById("Service__dropdown");
const conceptDropdown = document.getElementById("concept__dropdown");
const startDropdown = document.getElementById("start__dropdown");

function showAboutDropdown() {
  AboutDropdown.classList.remove("d-none");
  AboutDropdown.classList.add("d-block");
}

function hideAboutDropdown() {
  AboutDropdown.classList.remove("d-block");
  AboutDropdown.classList.add("d-none");
}

function showServiceDropdown() {
  ServiceDropdown.classList.remove("d-none");
  ServiceDropdown.classList.add("d-block");
}

function hideServiceDropdown() {
  ServiceDropdown.classList.remove("d-block");
  ServiceDropdown.classList.add("d-none");
}
function showConceptDropdown() {
  conceptDropdown.classList.remove("d-none");
  conceptDropdown.classList.add("d-block");
}

function hideConceptDropdown() {
  conceptDropdown.classList.remove("d-block");
  conceptDropdown.classList.add("d-none");
}
function showstartDropdown() {
  startDropdown.classList.remove("d-none");
  startDropdown.classList.add("d-block");
}

function hidestartDropdown() {
  startDropdown.classList.remove("d-block");
  startDropdown.classList.add("d-none");
}
