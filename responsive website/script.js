document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").replace("#", "");
      document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Add event listener to project images
  document.querySelectorAll(".project img").forEach(image => {
    image.addEventListener("click", event => {
      const projectName = image.alt;
      const projectDescription = image.nextElementSibling.textContent;
      alert(`Project: ${projectName}\nDescription: ${projectDescription}`);
    });
  });
  