export default class Tick {
    constructor () {

        // slide state
        this.current = false;
        this.count = 0;
        this.startCountIndex = 0;

        this.lists = [];
    }


    updateCurrentSlide(el) {
        this.current = el;
    }

    slideOut(index) {

        let showEl = document.querySelector("#index-" + index);

        showEl.classList.add("out");

        if (this.current && this.current !== showEl) {
            this.current.classList.remove("out");
        }

        return showEl;
    };

    updateSlideShow(prev) {
        prev
            ? this.count--
            : this.count++;

        this.setCounter();
        let showEl = this.slideOut(this.count);
        this.updateCurrentSlide(showEl);
    };

    setCounter() {
        if (this.count === this.startCountIndex) {
            return this.count = this.lists.length;
        }

        if (this.count === this.lists.length) {
            return this.count = this.startCountIndex;
        }
    }
}