// ===============================
// ELEMENTS
// ===============================

const enterBtn = document.getElementById("enterBtn");

const backgroundVoice =
    document.getElementById("backgroundVoice");

const mainContent =
    document.getElementById("mainContent");

const videoBtn =
    document.getElementById("videoBtn");

const videoContainer =
    document.getElementById("videoContainer");

const teacherVideo =
    document.getElementById("teacherVideo");


// ===============================
// ENTER CELEBRATION
// ===============================

enterBtn.addEventListener("click", function () {

    // Start background voice
    backgroundVoice.volume = 0.5;

    backgroundVoice.play()
        .then(() => {
            console.log("Background voice started");
        })
        .catch((error) => {
            console.log("Audio could not start:", error);
        });


    // Change button
    enterBtn.innerHTML =
        "✨ Celebration Started ❤️";


    // Scroll to main website

    setTimeout(function () {

        mainContent.scrollIntoView({
            behavior: "smooth"
        });

    }, 500);

});


// ===============================
// VIDEO BUTTON
// ===============================

videoBtn.addEventListener("click", function () {

    videoContainer.classList.add("show");

    videoBtn.innerHTML =
        "❤️ Enjoy the Video";

    videoContainer.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ===============================
// VIDEO EVENTS
// ===============================

teacherVideo.addEventListener("play", function () {

    // Lower background voice
    backgroundVoice.volume = 0.1;

});


teacherVideo.addEventListener("pause", function () {

    // Restore background voice
    backgroundVoice.volume = 0.5;

});


teacherVideo.addEventListener("ended", function () {

    // Restore background voice
    backgroundVoice.volume = 0.5;

});


// ===============================
// REVEAL ANIMATION
// ===============================

const sections =
    document.querySelectorAll(
        ".teacher-section, .message-section, .video-section, .final-section"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(50px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});