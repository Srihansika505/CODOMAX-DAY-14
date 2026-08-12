// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// Close mobile menu after selecting a section

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });


// ==============================
// DARK / LIGHT MODE
// ==============================

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ==============================
// DYNAMIC GREETING
// ==============================

const greeting =
    document.getElementById("greeting");

const hour =
    new Date().getHours();

if (hour < 12) {

    greeting.textContent =
        "Good Morning! 👋";

} else if (hour < 18) {

    greeting.textContent =
        "Good Afternoon! 👋";

} else {

    greeting.textContent =
        "Good Evening! 👋";

}


// ==============================
// PROJECT FILTER
// ==============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        const filter =
            this.getAttribute("data-filter");

        projects.forEach(function (project) {

            const category =
                project.getAttribute("data-category");

            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ==============================
// SCROLL TO TOP
// ==============================

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ==============================
// CONTACT FORM VALIDATION
// ==============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name")
            .value.trim();

        const email =
            document.getElementById("email")
            .value.trim();

        const message =
            document.getElementById("message")
            .value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color =
                "red";

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email.";

            formMessage.style.color =
                "red";

            return;

        }


        formMessage.textContent =
            "Message submitted successfully!";

        formMessage.style.color =
            "green";

        contactForm.reset();

    }
);