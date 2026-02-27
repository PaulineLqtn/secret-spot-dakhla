document.addEventListener("DOMContentLoaded", () => {

  fetch("./content/faq.md")
    .then(res => res.text())
    .then(md => {

      const renderer = new marked.Renderer();
      renderer.link = (token) => {
        const href = token.href;
        const title = token.title ? ` title="${token.title}"` : "";
        const text = token.text;
        return `<a href="${href}"${title} target="_blank" rel="noopener noreferrer">${text}</a>`;
      };
      marked.setOptions({ renderer });

      const html = marked.parse(md);
      const container = document.getElementById("faq-content");

      // Découper par questions
      const blocks = html.split("<h2>");

      blocks.slice(1).forEach(block => {
        const [title, ...rest] = block.split("</h2>");
        const content = rest.join("</h2>");

        container.insertAdjacentHTML("beforeend", `
          <div class="faq-item">
            <h4 class="pt-2 faq-question">${title}</h4>
            <div class="faq-answer">${content}</div>
          </div>
        `);
      });

      // ⚡ Ajouter le toggle FAQ APRÈS injection
      document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
          const item = question.closest(".faq-item");
          item.classList.toggle("active");
        });
      });

    })
    .catch(err => console.error("FAQ load error:", err));

});
