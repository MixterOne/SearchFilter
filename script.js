let characters = {
    data: [{
          name: "Ippo Makunouchi",
          age: 24,
          occupation: "Boxer",
          fightingStyle: "In-Fighter",
          image: "images/1.png",
        },
        {
          name: "Mamoru Takamura",
          age: 30,
          occupation: "Boxer",
          fightingStyle: "Jolt-Counter",
          image: "images/2.png",
        },
        {
          name: "Tatsuya Kimura",
          age: 28,
          occupation: "Boxer",
          fightingStyle: "Out-Boxer",
          image: "images/4.png",
        },
        {
          name: "Masaru Aoki",
          age: 28,
          occupation: "Boxer",
          fightingStyle: "In-Fighter",
          image: "images/3.png",
        },
        {
          name: "Ichirou Miyata",
          age: 26,
          occupation: "Boxer",
          fightingStyle: "Out-Boxer",
          image: "images/5.png",  
        },
        {
          name: "Takeshi Sendō",
          age: 27,
          occupation: "Boxer",
          fightingStyle: "In-Fighter",
          image: "images/6.png",
        },
      ]
}

for(let i of characters.data){
    let card = document.createElement("div");
    card.classList.add("card", i.fightingStyle, "hide");



    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("characters-name");
    name.innerText = i.name.toUpperCase();
    container.appendChild(name);

    let age = document.createElement("h6");
    age.innerText = "age: " + i.age;
    container.appendChild(age);

    let occupation = document.createElement("h6");
    occupation.innerText = "Occupation: " + i.occupation;
    container.appendChild(occupation)

    card.appendChild(container);
    document.getElementById("characters").appendChild(card);

}

// parameter button 
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
    //check if value
    if (value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add("active");
    }
    else{
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop all cards
  elements.forEach((element) => {
    //display all cards "all"
    if(value == "all") {
      element.classList.remove("hide");
    }else {
      //Check if element contains category class
      if(element.classList.contains(value)){
        //display element based category
        element.classList.remove("hide");
      } else{
        //hide other elements
        element.classList.add("hide");

      }
    }
  })
}

//Search
document.getElementById("search").addEventListener("click",() => {
  //initialization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".characters-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if(element.innerText.includes(searchInput.toUpperCase())){
      //display matching card
      cards[index].classList.remove("hide");
    }else {
      //hide others
      cards[index].classList.add("hide");
    }
  })
});

// all characters
window.onload = () => {
  filterProduct("all");
}