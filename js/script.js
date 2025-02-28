const element = document.getElementById("white-div");
const navBar = document.querySelector("#navbar ul li a[href='#aboutUs']");

function scrollToAbout(){
    element.scrollIntoView(true);
}

navBar.addEventListener("click",(event) => {
    event.preventDefault();
    element.scrollIntoView({behavior: "smooth"});
});
