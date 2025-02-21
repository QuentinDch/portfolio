// project.js

export function loadProjects() {
  const projects = [
    {
      title: "Oyster.",
      description: "Design & development",
      link: "https://oyster-project.vercel.app",
    },
    {
      title: "Argent Bank – Web Application",
      description: "Banking dashboard",
      link: "https://github.com/QuentinDch/ArgentBank-opc-p10",
    },
    {
      title: "Sophie Bluel – Interior designer",
      description: "Interactive portfolio, full integration",
      link: "https://github.com/QuentinDch/Sophie-Bluel-opc-p6",
    },
  ];

  const template = document.getElementById("project-template");
  const container = document.getElementById("projects-list");

  if (!template || !container) return;

  projects.forEach((project) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".project__item-title").textContent = project.title;
    clone.querySelector(".project__item-description").textContent =
      project.description;
    clone.querySelector(".project__link").href = project.link;
    container.appendChild(clone);
  });
}
