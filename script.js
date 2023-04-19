let characters = {
    data: [{
          name: "Ippo Makunouchi",
          age: 17,
          occupation: "Boxer",
          fightingStyle: "In-Fighter",
          debutChapter: 1,
          debutEpisode: 1,
          image: "https://www.opovo.com.br/_midias/jpg/2023/02/24/hajime_no_ippo-21224483.jpg",
          description: "The main protagonist of the series. A shy high school student who helps his mother run a fishing boat business. After being saved from bullies by a professional boxer, he becomes inspired to take up boxing himself and starts training under the coach Kamogawa Genji. He eventually becomes a professional boxer and works his way up through the ranks, aiming to become the Japanese champion and eventually the world champion."
        },
        {
          name: "Mamoru Takamura",
          age: 22,
          occupation: "Boxer",
          fightingStyle: "Jolt-Counter",
          debutChapter: 1,
          debutEpisode: 1,
          image: "https://pm1.narvii.com/6373/13ee38a60751483c5e88777ac40b8d47cee0ff46_hq.jpg",
          description: "A five-weight world champion and one of the top-ranked boxers in the world. He serves as a mentor to Ippo and helps train him. He is known for his brash personality and tendency to tease Ippo, but is also fiercely loyal to him and his other friends."
        },
        {
          name: "Tatsuya Kimura",
          age: 17,
          occupation: "Boxer",
          fightingStyle: "Out-Boxer",
          debutChapter: 7,
          debutEpisode: 3,
          image: "https://pm1.narvii.com/5785/8b348430534aba0d85bceaa535ab12a201098e2a_00.jpg",
          description: "One of Ippo's classmates and a member of the Kamogawa gym. He initially starts boxing to lose weight, but soon becomes serious about the sport and develops a strong friendship with Ippo and Aoki. He is known for his cool-headedness and analytical mind, which make him a formidable opponent in the ring."
        },
        {
          name: "Masaru Aoki",
          age: 17,
          occupation: "Boxer",
          fightingStyle: "In-Fighter",
          debutChapter: 7,
          debutEpisode: 3,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHg_c93ao_Pe5XI8Z7n-kOpWNNq5FApSvSQ&usqp=CAU",
          description: "One of Ippo's classmates and a member of the Kamogawa gym. He is known for his unique slanting guard stance and his tendency to use unorthodox tactics in the ring, such as throwing objects at his opponents. Despite his goofball personality, he is a skilled and dedicated boxer who helps Ippo train for his matches."
        },
        {
          name: "Ichirou Miyata",
          age: 17,
          occupation: "Boxer",
          fightingStyle: "Out-Boxer",
          debutChapter: 10,
          debutEpisode: 5,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsWLzmPGJgU_2Se2OkZ5eNXG32dCPd0NV9g&usqp=CAU",
          description: "A skilled out-boxer and the son of a famous retired boxer. He has a long-standing rivalry with Ippo and the two have faced off several times in the ring. Despite their intense rivalry, they respect each other's skill and become close friends outside of the ring."
        },]
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