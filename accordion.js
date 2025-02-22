document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-container .question, .first-question");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      const answer = faq.nextElementSibling;
      const icon = faq.querySelector("img");

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingBottom = "0";
        icon.src = "assets/images/icon-plus.svg";
        icon.classList.remove("minus");
        icon.classList.add("plus");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingBottom = "20px";
        icon.src = "assets/images/icon-minus.svg";
        icon.classList.remove("plus");
        icon.classList.add("minus");
      }
    });
  });
});

