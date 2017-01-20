


let slider = (() => {
    let elements = {
        mask: document.getElementsByClassName('mask')[0],
        liEl() {
            return this.mask.querySelectorAll("li");
        },
        triggers: document.getElementsByClassName("triggers")[0],
        prev: document.getElementsByClassName("prev")[0],
        next: document.getElementsByClassName("next")[0],
    };

    let state = {
        index: false,
        count: 0,
    };


    let updateState = (el) => {
        state.index = el;
    };

    let createElement = (name, options, action) => {
        if (!(name || options)) return;

        let el = document.createElement(name);

        if (options) {
            for (let key in options) {
                el.setAttribute(key, options[key]);
            }
        }

        action(el);
    };


    let slideOut = (index) => {
        let showEl = document.querySelector("#index-" + index);
        showEl.classList.add("out");

        if (state.index && state.index !== showEl) {
            state.index.classList.remove("out");
        }

        return showEl;
    };


    createElement("li", {
        "data-bound": 1,
    },(el) => {

    });



    let updateSlideShow = (prev) => {
        if (!prev) {
            state.count++;
        } else {
            state.count--;
            console.log(state.count);
        }
        
        let showEl = slideOut(state.count);
        updateState(showEl);
        console.log(state.count);
        if (state.count === 5) {
            console.log("Room");
            state.count = 0;
        } else if (state.count === 1) {
            console.log("what");
            state.count = 5;
        }
    };





    window.addEventListener("load", () => {
        for (let i = 0,
             index = 1, 
             len = elements.liEl().length; i < len; i++, index++) {

            elements.liEl()[i].setAttribute("id", "index-" + index);

            createElement("li", {
                "data-index": index,
            },(el) => {
                el.innerHTML = index;
                elements.triggers.appendChild(el);
            });
        }

        

        updateSlideShow();
        setInterval(updateSlideShow, 3000);

    });


    elements.next.addEventListener("click", (e) => {
        updateSlideShow();
    });

    elements.prev.addEventListener("click", (e) => {
        updateSlideShow(true);
    });



    elements.triggers.addEventListener("click", (e) => {
        let target = e.target;
        if (target.tagName !== "li".toUpperCase()) return;

        index = target.getAttribute("data-index");

        let showEl = slideOut(index);

        updateState(showEl);

    });

})();