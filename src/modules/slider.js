import DOM from './query';

export default class Slider {
    constructor () {
        this.slides = DOM.querySelectorByClass( 'slides' );
        this.pagination = DOM.querySelectorByClass( 'pagination' );
        this.prev = DOM.querySelectorByClass( 'pagination-previous' );
        this.next = DOM.querySelectorByClass( 'pagination-next' );
        this.paginationList = DOM.querySelectorByClass( 'pagination-list' );

        // slide state
        this.index = false;
        this.count = 0;
    }

    listElements () {
        return DOM.findElements( this.slides, 'li' );
    }

    updateState ( el ) {
        this.index = el;
    }

    injectTriggersElement ( el, index ) {
        el.innerHTML = `<a class="pagination-link is-current" aria-label="Page ` + index + `" aria-current="page">` + index + `</a>`;
        this.paginationList.appendChild(el);
    }

    bootPagination () {
        let lists = this.listElements()
        this.paginationList.innerHTML = '';

        for (let i = 0,
            index = 1,
            len = lists.length; i < len; i++ , index++) {

            lists[i].setAttribute("id", "index-" + index);

            DOM.createElement("li", index, {
                "data-index": index,
            }, this.injectTriggersElement.bind(this));
        }
    }

    updateSlideShow (prev) {
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

    run () {
        this.bootPagination()
        // window.addEventListener("load", this.bootPagination);
        
        console.log('Slider is Running...')
        console.log(this.slides);
    }
}