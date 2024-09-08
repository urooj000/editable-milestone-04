
// Get references to form elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const profileImageInput = document.getElementById('profileImage') as HTMLInputElement;
const resumeName = document.getElementById('resumeName') as HTMLTableDataCellElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLTableDataCellElement;
const resumeEducation = document.getElementById('resumeEducation') as HTMLTableDataCellElement;
const resumeExperience = document.getElementById('resumeExperience') as HTMLTableDataCellElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLTableDataCellElement;
const resumeImage = document.getElementById('resumeImage') as HTMLImageElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    // Get values from the form
    const name = nameInput.value;
    const email = emailInput.value;
    const education = educationInput.value;
    const experience = experienceInput.value;
    const skills = skillsInput.value;
    
    // Update resume output
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumeEducation.textContent = education;
    resumeExperience.textContent = experience;
    resumeSkills.textContent = skills;
    
    // Handle image upload
    const file = profileImageInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                resumeImage.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    } else {
        resumeImage.src = ''; // Clear image if no file is selected
    }
});
