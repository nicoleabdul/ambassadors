const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// Get the "Attendance" heading element
const toggleAttendance = document.querySelector('.toggle-attendance');

// Get the attendance paragraph
const attendanceParagraph = document.querySelector('.attendance-paragraph');

// Add a click event listener to the "Attendance" heading
toggleAttendance.addEventListener('click', () => {
  // Toggle the 'visible' class on the attendance paragraph
  attendanceParagraph.classList.toggle('visible');
});

// Get the arrow icon and the target element to scroll to
// const arrowIcon = document.querySelector(".arrow-icon");
// const secondServeCard = document.querySelector("#secondServeCard");

// Add a click event listener to the arrow icon
// arrowIcon.addEventListener("click", function() {
    // Scroll to the second serve card when the arrow is clicked
//    secondServeCard.scrollIntoView({ behavior: "smooth" });
// });


const toursItems = document.querySelectorAll('.tours__item');

toursItems.forEach(item => {
    const arrow = item.querySelector('.arrow');
    const content = item.querySelector('.tours__content');

    arrow.addEventListener('click', () => {
        item.classList.toggle('open');
        content.classList.toggle('open');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleContents = document.querySelectorAll(".toggle-content");
    
    toggleContents.forEach((toggleContent) => {
        toggleContent.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
