var about = document.getElementById("AboutMe")
var projects = document.getElementById("Proj")
var hobbies = document.getElementById("other")

function openAbout() {
    about.style.transform="transalteX(0)";
    projects.style.transform="translateX(100%)";
    hobbies.style.tranform="translateX(100%)";
    about.style.color="#FFFFFF";
    projects.style.color="#000000";
    hobbies.style.transform="#000000"
}

function openProjects() {
    about.style.transform="transalteX(100%)";
    projects.style.transform="translateX(0)";
    hobbies.style.tranform="translateX(100%)";
    about.style.color="#000000";
    projects.style.color="#FFFFFF";
    hobbies.style.transform="#000000"
}

function openHobbies() {
    about.style.transform="transalteX(100%)";
    projects.style.transform="translateX(100%)";
    hobbies.style.tranform="translateX(0)";
    about.style.color="#000000";
    projects.style.color="#000000";
    hobbies.style.transform="#FFFFFF"
}