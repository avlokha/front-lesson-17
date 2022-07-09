//1
const hideButton = document.querySelector(".btn");
hideButton.addEventListener("click", function removeButton() {
  hideButton.remove();
});

//2

const imgBody = document.querySelector("body");
const divBlock = document.createElement("div");
divBlock.setAttribute("class", "script-image");
divBlock.innerHTML = `
    <img src="https://picsum.photos/id/1/200/300" alt="img-pc"/>
        `;
imgBody.appendChild(divBlock);

//3
// const characters = [
//   {
//     first_name: "Harry",
//     last_name: "Potter",
//     house: "Gryffindor",
//     image: "http://hp-api.herokuapp.com/images/harry.jpg",
//     actor: "Daniel Radcliffe",
//   },
//   {
//     first_name: "Hermione",
//     last_name: "Granger",
//     house: "Gryffindor",
//     image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
//     actor: "Emma Watson",
//   },
//   {
//     first_name: "Ron",
//     last_name: "Weasley",
//     house: "Gryffindor",
//     image: "http://hp-api.herokuapp.com/images/ron.jpg",
//     actor: "Rupert Grint",
//   },
//   {
//     first_name: "Draco",
//     last_name: "Malfoy",
//     house: "Slytherin",
//     image: "http://hp-api.herokuapp.com/images/draco.jpg",
//     actor: "Tom Felton",
//   },
// ];

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function imageImage(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class=character-card><p>${el.first_name}${el.last_name}</p><p>House: ${el.house}</p> <img src="${el.image}"></div>
    
        `;
  });
  return characterCard;
}
let charactersHTML = imageImage(characters).join("");
const charactersLi = document.getElementById("characters-list");
charactersLi.innerHTML = charactersHTML;
