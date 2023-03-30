

// harish code
// This API supports category wise news. Here is a complete list of all categories.

// national = not working
// business = working
// sports  = not working
// world = not working
// politics = not working
// technology =  working
// startup = not working
// entertainment = working
// miscellaneous = working
// hatke = working
// science = working
// automobile = working
// apple = working

// const searchInput = document.getElementById("search-input");
// const recentSearches = document.getElementById("recent-searches");
// const newsContainer = document.getElementById("news-container");
// let searchHistory = [];

// function getNews(searchTerm) {
//   // Clear the news container
//   newsContainer.innerHTML = "";

//   // Fetch news data
//   fetch(`https://inshorts.deta.dev/news?category=${searchTerm}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Display the news articles
//       console.log(data);
//       data.data.forEach((article) => {
//         const newsCard = document.createElement("div");
//         newsCard.classList.add("news-card");

//         const newsTitle = document.createElement("div");
//         newsTitle.classList.add("news-card-title");
//         newsTitle.innerText = article.title;
//         console.log(newsTitle);

//         const newsContent = document.createElement("div");
//         newsContent.classList.add("news-card-content");
//         newsContent.innerText = article.content;

//         newsCard.appendChild(newsTitle);
//         newsCard.appendChild(newsContent);
//         newsContainer.appendChild(newsCard);
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   // Update recent searches
//   if (searchHistory.indexOf(searchTerm) === -1) {
//     searchHistory.push(searchTerm);

//     const searchLink = document.createElement("a");
//     searchLink.classList.add("search-link");
//     searchLink.href = "#";
//     searchLink.innerText = searchTerm;
//     searchLink.addEventListener("click", () => {
//       searchInput.value = searchTerm;
//       getNews(searchTerm);
//     });

//     const searchItem = document.createElement("span");
//     searchItem.classList.add("search-item");
//     searchItem.appendChild(searchLink);

//     recentSearches.insertBefore(searchItem, recentSearches.firstChild);
//   }
// }

// searchInput.addEventListener("keydown", (event) => {
//   if (event.keyCode === 13) {
//     const query = searchInput.value.trim();
//     if (query.length > 0) {
//       getNews(query);
//       searchInput.value = "";
//     }
//   }
// });

let suggestions = [
  "marry Farnandis",
 "Channel",
 "CodingLab",
 "CodingNepal",
 "YouTube",
 "YouTuber",
 "YouTube Channel",
 "Blogger",
 "Bollywood",
 "Vlogger",
 "Vechiles",
 "Facebook",
 "Freelancer",
 "Facebook Page",
 "Designer",
 "Developer",
 "Web Designer",
 "Web Developer",
 "Login Form in HTML & CSS",
 "How to learn HTML & CSS",
 "How to learn JavaScript",
 "How to became Freelancer",
 "How to became Web Designer",
 "How to start Gaming Channel",
 "How to start YouTube Channel",
 "What does HTML stands for?",
 "What does CSS stands for?",
];
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;      //variable webLink is declared to store the search query URL.

// if user press any key and release
inputBox.onkeyup = (e)=>{
 let userData = e.target.value; //user enetered data
 let emptyArray = [];
 if(userData){
     icon.onclick = ()=>{
         webLink = `https://www.google.com/search?q=${userData}`;
         linkTag.setAttribute("href", webLink);
         linkTag.click();
     }
     emptyArray = suggestions.filter((data)=>{
         //filtering array value and user characters to lowercase and return only
          // those words which are start with user enetered chars
         return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
     });
     emptyArray = emptyArray.map((data)=>{
         // passing return data inside li tag
         return data = `<li>${data}</li>`;
     });
     searchWrapper.classList.add("active"); //show autocomplete box
     showSuggestions(emptyArray);
     let allList = suggBox.querySelectorAll("li");
     for (let i = 0; i < allList.length; i++) {
         //adding onclick attribute in all li tag
         allList[i].setAttribute("onclick", "select(this)");
     }
 }else{
     searchWrapper.classList.remove("active"); //hide autocomplete box
 }
}

function select(element){
 let selectData = element.textContent;
 inputBox.value = selectData;
 icon.onclick = ()=>{
     webLink = `https://www.google.com/search?q=${selectData}`;
     linkTag.setAttribute("href", webLink);
     linkTag.click();
 }
 searchWrapper.classList.remove("active");
}

function showSuggestions(list){
 let listData;
 if(!list.length){
     userValue = inputBox.value;
     listData = `<li>${userValue}</li>`;
 }else{
   listData = list.join('');
 }
 suggBox.innerHTML = listData;
}
