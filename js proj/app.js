let arrows = document.querySelectorAll(".arrow");
let movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let counter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth /400);
        counter++;
        if (itemNum-(3+counter)+(3-ratio)>=0){
            movieLists[i].style.transform=`translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`
        }
        else{
            movieLists[i].style.transform = "translateX(0)";
            counter = 0;
        }
    });
    console.log(Math.floor(window.innerWidth /400));
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar,.nav-container,.toggle-icon,.sidebar,.left-menu-icon,.toggle,.movie-list-item-title,.movie-list-item-desc,#my-profile"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
