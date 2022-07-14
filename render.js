export function renderPagination(number, currentPage) {
  const page = parseInt(currentPage);
  const container = document.getElementById("pagination");
  const pagesListElement = document.createElement("ul");
  pagesListElement.classList.add("pagination");

  const toFirst = renderPaginationButton("<<", "index.html", page === 1, false);
  pagesListElement.append(toFirst);
  const prev = renderPaginationButton(
    "Previous",
    page === 1 ? "index.html" : `index.html?page=${page - 1}`,
    page === 1,
    false
  );
  pagesListElement.append(prev);
  if (page - 1 > 0) {
    const first = renderPaginationButton(
      page - 1,
      `index.html?page=${page - 1}`,
      false,
      false
    );
    pagesListElement.append(first);
  }
  const current = renderPaginationButton(
    page,
    `index.html?page=${page}`,
    false,
    true
  );
  pagesListElement.append(current);
  if (page + 1 <= number) {
    const third = renderPaginationButton(
      page + 1,
      `index.html?page=${page + 1}`,
      false,
      false
    );
    pagesListElement.append(third);
  }
  if (page + 1 < number) {
    const dottes = renderPaginationButton("...", false, true, false);
    pagesListElement.append(dottes);
    const last = renderPaginationButton(
      number,
      `index.html?page=${number}`,
      false,
      false
    );
    pagesListElement.append(last);
  }
  const next = renderPaginationButton(
    "Next",
    page === 1 ? "index.html" : `index.html?page=${page + 1}`,
    page === number,
    false
  );
  pagesListElement.append(next);
  const toLast = renderPaginationButton(
    ">>",
    `index.html?page=${number}`,
    page === number,
    false
  );
  pagesListElement.append(toLast);

  container.append(pagesListElement);
}

export function renderPaginationButton(text, ref, isDisabled, isActive) {
  const nextElement = document.createElement("a");
  nextElement.classList.add("page-link");
  if (ref) {
    nextElement.href = ref;
  }
  nextElement.append(text);
  const nextLiElement = document.createElement("li");
  nextLiElement.classList.add("page-item");
  nextLiElement.classList.toggle("disabled", isDisabled);
  nextLiElement.classList.toggle("active", isActive);
  nextLiElement.append(nextElement);
  return nextLiElement;
}

export function renderPage(data) {
  const container = document.getElementById("list");
  container.classList.add("row", "mx-auto");
  for (let i = 0; i < data.length; i++) {
    const article = data[i];
    const divElement = document.createElement("div");
    divElement.classList.add("card", "col-sm-5", "p-0", "m-3");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title", "mb-5");
    title.append(article.title);
    cardBody.append(title);
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = "https://picsum.photos/600?t=" + i;
    image.alt = "Post image";
    const refElement = document.createElement("a");
    refElement.href = `post.html?id=${article.id}`;
    refElement.classList.add("btn", "btn-primary", "position-absolute");
    refElement.style.cssText += "bottom:10px;";
    refElement.append("Открыть пост");
    cardBody.append(refElement);
    divElement.append(image);
    divElement.append(cardBody);
    container.append(divElement);
  }
}

export function renderPost(title, body) {
  const postContainer = document.getElementById("post");
  const titleHeader = document.createElement("h1");
  titleHeader.classList.add("my-5");
  titleHeader.append(title);

  const dataElement = document.createElement("div");
  dataElement.classList.add("d-inline-flex");

  const image = document.createElement("img");
  image.src = "https://picsum.photos/350";
  image.alt = "Post image";

  const dataText = document.createElement("h4");
  dataText.classList.add("font-weight-light", "mx-5");
  dataText.append(body);

  dataElement.append(image);
  dataElement.append(dataText);

  postContainer.append(titleHeader);
  postContainer.append(dataElement);
}

export function renderComments(comments) {
  if (comments && comments.length) {
    const commentsContainer = document.getElementById("comments");
    const commentHeader = document.createElement("h4");
    commentHeader.classList.add("my-3");
    commentHeader.append("Комментарии:");
    commentsContainer.append(commentHeader);

    comments.forEach((comment) => {
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("alert", "alert-primary", "mx-5", "pb-0");
      const commentText = document.createElement("p");
      commentText.classList.add("font-weight-light");
      commentText.append(comment.body);
      const commentAuthor = document.createElement("h6");
      commentAuthor.append(comment.name);

      commentContainer.append(commentAuthor);
      commentContainer.append(commentText);
      commentsContainer.append(commentContainer);
    });
  } else {
    const commentsContainer = document.getElementById("comments");
    const commentHeader = document.createElement("h4");
    commentHeader.classList.add("my-3");
    commentHeader.append("Комментариев пока нет.");
    commentsContainer.append(commentHeader);
  }
}
