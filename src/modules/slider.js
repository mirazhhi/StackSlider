import DOM from './query';

export default class Slider {
    constructor () {
        this.slides = DOM.querySelectorByClass( 'slides' );
        this.pagination = DOM.querySelectorByClass( 'pagination' );
        this.prev = DOM.querySelectorByClass( 'pagination-previous' );
        this.next = DOM.querySelectorByClass( 'pagination-next' );
        this.paginationList = DOM.querySelectorByClass( 'pagination-list' );

    }

    listElements () {
        return DOM.findElements( this.slides, 'li' );
    }

    run () {
        this.bootPagination()
        this.updateSlideShow()

        setInterval( this.updateSlideShow.bind( this ), 3000 );

        this.next.addEventListener("click", (e) => {
            this.updateSlideShow();
        });

        this.prev.addEventListener("click", (e) => {
            this.updateSlideShow(true);
        });

        console.log('Slider is Running...')
    }
}