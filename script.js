const logo = document.querySelector(".logo");
const people = document.querySelector(".people");
const jobs = document.querySelector(".jobs");
const growth = document.querySelector(".growth");
const block = document.querySelector(".block");

function readResume() {
  let data = JSON.parse(localStorage.getItem("resume")) || [];
  console.log(data);
  data.forEach((el) => {
    console.log(el);
    arr = data;

    const newDiv = document.createElement("div");

    let img = document.createElement("img");
    let textName = document.createElement("h1");
    let textJob = document.createElement("h1");
    let textGrowth = document.createElement("h1");

    img.src = el.image;
    textName.textContent = el.name;
    textJob.textContent = el.job;
    textGrowth.textContent = el.growth;

    growth.append(textGrowth);
    jobs.append(textJob);
    people.append(textName);
    newDiv.append(img);
    logo.append(newDiv);
  });
}
readResume();
