
// Get references to form elements
var form = document.getElementById('resumeForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var educationInput = document.getElementById('education');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
var profileImageInput = document.getElementById('profileImage');
var resumeName = document.getElementById('resumeName');
var resumeEmail = document.getElementById('resumeEmail');
var resumeEducation = document.getElementById('resumeEducation');
var resumeExperience = document.getElementById('resumeExperience');
var resumeSkills = document.getElementById('resumeSkills');
var resumeImage = document.getElementById('resumeImage');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get values from the form
    var name = nameInput.value;
    var email = emailInput.value;
    var education = educationInput.value;
    var experience = experienceInput.value;
    var skills = skillsInput.value;
    // Update resume output
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumeEducation.textContent = education;
    resumeExperience.textContent = experience;
    resumeSkills.textContent = skills;
    // Handle image upload
    var file = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                resumeImage.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        resumeImage.src = ''; // Clear image if no file is selected
    }
});
