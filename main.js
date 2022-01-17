/** @format */

//Global Variables

const ulElement = document.getElementById("navbar__list"); // get ul tag
const sections = document.querySelectorAll("section"); // get all section tags

for (const section of sections) {
  //get section data-nav
  const dataNavContent = section.getAttribute("data-nav");
  //creat li
  let li = document.createElement("li");
  //creat link
  let link = document.createElement("a");
  // creat a content text with dataNavContent
  linkText = link.innerHTML = dataNavContent;
  //  add class menu__link to link
  link.setAttribute("class", "menu__link");
  //  add href attr with # value
  link.setAttribute("href", "#");

  li.append(link); // append link in li element
  ulElement.append(li); // append li in ul element

  // stop Default action for links
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // use scroll into view to go to section content by clicking on nav links
    section.scrollIntoView({ behavior: "smooth" });
  });
}
////
// when i use scroll make this event
////
addEventListener("scroll", () => {
  for (const section of sections) {
    const boundRect = section.getBoundingClientRect(); // get sections view postion
    //remove class active
    section.classList.remove("your-active-class");
    // add class active
    if (boundRect.top >= 0 && boundRect.top < 300) {
      section.classList.add("your-active-class");

      //add class active to nav links
      let links = document.querySelectorAll("#navbar__list li a");
      let sectionData = section.getAttribute("data-nav");

      for (const link of links) {
        link.classList.remove("active"); // remove class active from all links
        if (link.innerHTML == sectionData) {
          link.classList.add("active"); // add class active for link after check
        }
      }
    }
  }
});
////
// Hide fixed navigation bar while not scrolling
////
let headerBar = document.querySelector(".page__header"); // header

window.addEventListener("scroll", () => {
  headerBar.style.display = "block"; // with scroll show header
  this.clearTimeout; // clear
  checkScroll();
});
// check if no scroll hide header nav bar
function checkScroll() {
  setTimeout(() => {
    if (window.scrollY === 0) {
      headerBar.style.display = "block"; // if scrollY = 0 leave headerNav with display block
    } else {
      headerBar.style.display = "none"; // hide header without scrolling
    }
  }, 10000);
}
//start Scroll to Top

let getFooter = document.querySelector("footer");
let createBtn = document.createElement("button");
let btnId = createBtn.setAttribute("id", "top");
let btnContent = document.createTextNode("up");

createBtn.append(btnContent);

getFooter.after(createBtn)


const topBtn = document.getElementById("top");   //get btn Id
  window.onscroll = () => {

      if(window.scrollY >= 600){
          topBtn.style.display = "block";       // check scroll > 600 show btn
      }else{
          topBtn.style.display = "none";          // check scroll < 600 hide btn
      }
  }
// start function to click to top
topBtn.onclick = ()=> {
    window.scrollTo({
      top : 0,
      behavior : 'smooth',
    });
}
// start toggle nav bar with screen



 let btnDropDown = document.getElementById("dropDownAction");
 let ulSections = document.querySelector(".navbar__menu ul");

 btnDropDown.addEventListener("click",() =>{
        ulSections.classList.toggle("toggle");
 })
