import { renderPost, renderComments } from "./render.js";

async function createPostPage() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  const postResponse = await fetch(
    `https://gorest.co.in/public-api/posts/${postId}`
  );
  const postInfo = await postResponse.json();
  const { title, body } = postInfo.data;
  renderPost(title, body);

  const commentsResponse = await fetch(
    `https://gorest.co.in/public-api/comments?post_id=${postId}`
  );
  const comments = await commentsResponse.json();
  renderComments(comments.data);
}
document.addEventListener("DOMContentLoaded", function () {
  createPostPage();
});
