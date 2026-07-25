const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar')
const navLinks = document.querySelectorAll('.nav')

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show')
    })
})

const images = [
  "Asset/hasil foto drone 3.jpg",
  "Asset/hasil foto drone 2.jpg",
  "Asset/hasil foto drone 4.jpg",
  "Asset/hasil foto drone 5.jpg",
  "Asset/hasil foto drone.jpg"
];

let index = 0;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
  nextBtn.onclick = () => {
    index = (index + 1) % images.length;
    document.getElementById("sliderImage").src = images[index];
  };
}

if (prevBtn) {
  prevBtn.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = images[index];
  };
}

function openModal(id) {
   const messages = {
    1: "Optimize crop health and land management with aerial scanning.",
    2: "Capture cinematic footage with ultra-stable 4K clarity.",
    3: "Inspect infrastructure safely and efficiently.",
    4: "High-precision GPS and LiDAR-ready solutions.",
    5: "Thermal imaging and long-range flight for emergency missions."
    };
      document.getElementById("modalText").innerText = messages[id];
      document.getElementById("expertiseModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("expertiseModal").style.display = "none";
}

const form2 = document.getElementById("contactForm2");
const result2 = document.getElementById("resultMsg2");

const msg2 = document.getElementById("message2");
const count2 = document.getElementById("count2");

msg2.addEventListener("input", () => {
    count2.textContent = msg2.value.length;
});

document.getElementById("contactForm2").addEventListener("submit", function(e){
    e.preventDefault();

    let isValid = true;

    function showWarning(inputId, message) {
        const el = document.getElementById(inputId);
        const warning = el.parentElement.querySelector(".warning");
        warning.textContent = message;
        isValid = false;
    }

    document.querySelectorAll(".warning").forEach(w => w.textContent = "");

    let first = firstName2.value.trim();
    let last = lastName2.value.trim();
    let email = email2.value.trim();
    let phone = phone2.value.trim();
    let msg = message2.value.trim();
    let agree = agree2.checked;

    if(first === "") showWarning("firstName2", "First name required.");
    if(last === "") showWarning("lastName2", "Last name required.");

    if(email === "") showWarning("email2", "Email required.");
    else if(!email.includes("@")) showWarning("email2", "Invalid email.");

    if(phone === "") showWarning("phone2", "Phone required.");
    else if(isNaN(phone)) showWarning("phone2", "Numbers only.");

    if(msg === "") showWarning("message2", "Message cannot be empty.");

    if(!agree){
    document.getElementById("agreeWarning").textContent = "You must agree to the terms.";
    isValid = false;
} else {
    document.getElementById("agreeWarning").textContent = "";
}

    if(isValid){
        document.getElementById("resultMsg2").style.color = "green";
        document.getElementById("resultMsg2").textContent = "Form submitted successfully!";
    }

});

