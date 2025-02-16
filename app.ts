const skillButton = document.getElementById('toggleSkills') as HTMLButtonElement
const skill = document.getElementById('skills-section') as  HTMLElement

skillButton.addEventListener('click', () => {
    if (skill.style.display === "none") {
        skill.style.display = "block"; 
    } else {
        skill.style.display = "none"; 
    }
})