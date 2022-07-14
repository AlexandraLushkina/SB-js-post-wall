import { renderPagination, renderPage } from "./render.js";

async function createApp() {
  const response = await fetch("https://gorest.co.in/public-api/posts");
  const articlesList = await response.json();

  const pageParams = new URLSearchParams(window.location.search);
  const pageNumber = pageParams.get("page");
  renderPagination(articlesList.meta.pagination.pages, pageNumber || 1);
  if (pageNumber) {
    const pageResponse = await fetch(
      `https://gorest.co.in/public-api/posts?page=${pageNumber}`
    );
    const pageArticles = await pageResponse.json();
    renderPage(pageArticles.data);
  } else {
    renderPage(articlesList.data);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  createApp();
});
