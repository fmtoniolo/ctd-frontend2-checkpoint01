let titleReference = document.querySelector("#title");
let descriptionReference = document.getElementById("description");
let imageUrlReference = document.getElementById("imageUrl");
let submitButtonReference = document.getElementById("submitButton");
let cardsContainerReference = document.querySelector(".cardsContainer");
let formReference = document.getElementById("form");
let posts = [];

function NewPost() {
  this.title = titleReference;
  this.description = descriptionReference;
  this.link = imageUrlReference;
}

function addPost() {
  posts.push(
    new NewPost(
      titleReference.value,
      descriptionReference.value,
      imageUrlReference.value
    )
  );

  if (posts.length > 1) {
    posts.pop();
  }
}

submitButtonReference.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    titleReference.value == "" ||
    descriptionReference.value == "" ||
    imageUrlReference.value == ""
  ) {
    alert("Preencha todos os campos!");
  } else {
    addPost();
    for (let post of posts) {
      cardsContainerReference.innerHTML += `
    <div class="card">
            <img
              src="${post.link.value}"
            />
            <div class="textContainer">
              <h2><b>${post.title.value}</b></h2>
              <p>${post.description.value}</p>
            </div>
          </div>
    `;
    }
  }

  formReference.reset();
});