var skillsButton = document.getElementById('toggleSkills');
var skills = document.getElementById('skills-section');
skillsButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
