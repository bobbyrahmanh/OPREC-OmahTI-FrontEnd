let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

let isMoreProjectsOpened = false;

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

const toggleButton = document.getElementById("toggle-names");
const hiddenNames = document.querySelectorAll(".hidden-name");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;

  hiddenNames.forEach((name) => {
    name.style.display = isExpanded ? "list-item" : "none";
  });

  toggleButton.textContent = isExpanded ? "Show less" : "+3 more";
  toggleButton.style.textDecoration = "underline";
});

const toggleImages = document.getElementById("toggle-images");
const hiddenImages = document.querySelectorAll(".hidden-images");
let isExpandedImages = false;

toggleImages.addEventListener("click", () => {
  isExpandedImages = !isExpandedImages;

  hiddenImages.forEach((name) => {
    name.style.display = isExpandedImages ? "list-item" : "none";
  });

  toggleImages.innerHTML = isExpandedImages
    ? '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" fill="black" stroke="white" stroke-width="40"/></svg>Collapse'
    : '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" fill="black" stroke="white" stroke-width="40"/></svg>More';
});

function toggleContributor() {
  const moreContributor = document.querySelector(".more-contributors-name");
  const contributor = document.querySelector(".contributors-name");
  const button = document.querySelector(".contributors-name-button");
  const defaultContributorList = document.querySelector(".contributor-list");
  console.log("moreContributor", moreContributor);

  if (
    moreContributor.style.display === "none" ||
    moreContributor.style.display === ""
  ) {
    contributor.style.display = "block";
    moreContributor.style.display = "block";

    defaultContributorList.style.display = "none";

    button.textContent = "Show less";
  } else {
    contributor.style.display = "block";
    moreContributor.style.display = "none";

    defaultContributorList.style.display = "block";

    button.textContent = "+3 more";
  }
}

function toggleProjects() {
  const moreProjects = document.querySelectorAll(".more-projects");
  const button = document.querySelector(".more-button");
  const startText = document.querySelector(".share-banner-container");
  const iconPath = button.querySelector(".button-icon path");
  const buttonText = button.querySelector(".button-text");
  const buttonStyle = button.querySelector(".more-button");
  const backgroundBorder = document.querySelector(".latest-projects-list");

  if (isMoreProjectsOpened) {
    isMoreProjectsOpened = false;

    buttonText.textContent = "More";
  } else {
    isMoreProjectsOpened = true;

    buttonText.textContent = "Collapse";
  }

  moreProjects.forEach((item) => {
    item.classList.toggle("hide-projects");
  });
}
