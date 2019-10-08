import Slider from "./modules/slider";

(new Slider).run();

// let slider = (() => {

//     


//     let slideOut = (index) => {
//         let showEl = document.querySelector("#index-" + index);
//         showEl.classList.add("out");

//         if (state.index && state.index !== showEl) {
//             state.index.classList.remove("out");
//         }

//         return showEl;
//     };


//     createElement("li", {
//         "data-bound": 1,
//     }, (el) => {

//     });



//     





//     window.addEventListener("load", () => {
//         updateSlideShow();
//         setInterval(updateSlideShow, 3000);
//     });


//     elements.next.addEventListener("click", (e) => {
//         updateSlideShow();
//     });

//     elements.prev.addEventListener("click", (e) => {
//         updateSlideShow(true);
//     });



//     elements.triggers.addEventListener("click", (e) => {
//         let target = e.target;
//         if (target.tagName !== "li".toUpperCase()) return;

//         index = target.getAttribute("data-index");

//         let showEl = slideOut(index);

//         updateState(showEl);

//     });

// })();