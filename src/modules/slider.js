import DOM from './query';

export default class Slider {
    constructor () {
        this.slides = DOM.querySelectorByClass( 'slides' );
        this.pagination = DOM.querySelectorByClass( 'pagination' );
        this.prev = DOM.querySelectorByClass( 'pagination-previous' );
        this.next = DOM.querySelectorByClass( 'pagination-next' );
        this.paginationList = DOM.querySelectorByClass( 'pagination-list' );

        // slide state
        this.current = false;
        this.count = 0;
        this.startCountIndex = 0;

        this.lists = [];
    }

    listElements () {
        return DOM.findElements( this.slides, 'li' );
    }

    updateCurrentSlide ( el ) {
        this.current = el;
    }

    injectTriggersElement ( el, index ) {
        el.innerHTML = `<a class="pagination-link" aria-label="Page ` + index + `" aria-current="page">` + index + `</a>`;
        this.paginationList.appendChild( el );
    }

    bootPagination () {
        this.lists = this.listElements()
        this.paginationList.innerHTML = '';

        for (let i = 0,
            index = 1,
            len = this.lists.length; i < len; i++ , index++) {

            this.lists[i].setAttribute("id", "index-" + index);

            DOM.createElement("li", index, {
                "data-index": index,
            }, this.injectTriggersElement.bind( this ));
        }
    }

    slideOut ( index ) {
        console.log(index);
        let showEl = document.querySelector( "#index-" + index );

        showEl.classList.add( "out" );

        if ( this.current && this.current !== showEl ) {
            this.current.classList.remove("out");
        }

        return showEl;
    };

    updateSlideShow ( prev ) {
        prev
            ? this.count-- 
            : this.count++;

        let showEl = this.slideOut( this.count );
        this.updateCurrentSlide( showEl );

        if ( this.count === this.startCountIndex ) {
            this.count = this.lists.length;
        }

        if ( this.count === this.lists.length ) {
            this.count = this.startCountIndex;
        }
    };


    

    run () {
        this.bootPagination()
        this.updateSlideShow()
        setInterval( this.updateSlideShow.bind( this ), 3000 );
        // window.addEventListener("load", this.bootPagination);

        this.next.addEventListener("click", (e) => {
            this.updateSlideShow();
        });

        this.prev.addEventListener("click", (e) => {
            this.updateSlideShow(true);
        });

        this.paginationList.addEventListener("click", (e) => {
            let target = e.target, index;
            if (target.tagName !== "a".toUpperCase()) return;

            target.classList.add('is-current');
            index = target.parentElement.getAttribute("data-index");
            // DRY
            let showEl = this.slideOut(index);

            this.updateSlideShow(showEl);

        });
        
        console.log('Slider is Running...')
    }
}