function toggleMenu() {
  const navbar = document.querySelector('.navbar nav');
  navbar.classList.toggle('show');
}


  // });

let shadowX = 0, shadowY = 0;
document.addEventListener("mousemove", (e) => {
  dot.style.opacity = "1";
  shadow.style.opacity = "1";

  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

  shadowX += (e.clientX - shadowX) * 0.1;
  shadowY += (e.clientY - shadowY) * 0.1;
  shadow.style.transform = `translate(${shadowX}px, ${shadowY}px)`;
});




  // const form = document.getElementById("contact-form");
  // const successMessage = document.getElementById("success-message");

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault(); // Prevent default form submission

  //   const formData = new FormData(form);

  //   fetch("https://formspree.io/f/meokgdrw", {
  //     method: "POST",
  //     body: formData,
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       form.reset(); // Clear form
  //       successMessage.style.display = "block"; // Show message
  //     } else {
  //       alert("Something went wrong. Try again.");
  //     }
  //   })
  //   .catch(error => {
  //     alert("Error: " + error.message);
  //   });
  // });

  // function scrollToCenter(id) {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center'
  //     });
  //   }
  // }
  //  const scrollUp = document.querySelector('.scroll-indicator-up');
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 300) {
  //     scrollUp.style.display = 'flex';
  //   } else {
  //     scrollUp.style.display = 'none';
  //   }
  // });