const submitBtn = document.querySelector(".submit");
const formInputs = document.querySelectorAll(".form input");
const defoultImage = document.querySelector(".content img");

const nameInput = document.querySelector(".name");
const jobInput = document.querySelector(".job");
const growthInput = document.querySelector(".growth");
const avatarInput = document.querySelector(".avatar");

submitBtn.addEventListener("click", () => {
  if (!formInputs.values) {
    return;
  }

  let obj = {
    name: nameInput.value,
    job: jobInput.value,
    growth: growthInput.value,
    image: avatarInput.value,
  };
  let data = JSON.parse(localStorage.getItem("resume")) || [];
  data.push(obj);
  localStorage.setItem("resume", JSON.stringify(data));
});
