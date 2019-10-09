import DOM from './dom';
import Pagination from './pagination';
import Tick from './tick';

export default class Slider {
    constructor () {
        this.slides = DOM.querySelectorByClass( 'slides' );
        this.pagination = DOM.querySelectorByClass( 'pagination' );
        this.prev = DOM.querySelectorByClass( 'pagination-previous' );
        this.next = DOM.querySelectorByClass( 'pagination-next' );
        this.paginationList = DOM.querySelectorByClass( 'pagination-list' );

        this.lists = this.listElements();
        this.tick = new Tick( this.lists );
        this.pagination = new Pagination( this.paginationList, this.lists, this.tick );
    }

    listElements () {
        return DOM.findElements( this.slides, 'li' );
    }

    run () {
        this.listElements();
        this.pagination.bootPagination();
        this.tick.updateSlideShow();

        setInterval( this.tick.updateSlideShow.bind(this.tick), 3000 );

        this.next.addEventListener('click', ( e ) => {
            // remove setInterval
            this.tick.updateSlideShow();
        });

        this.prev.addEventListener('click', ( e ) => {
            // remove setInterval
            this.tick.updateSlideShow(true);
        });

        this.paginationList.addEventListener('click', ( e ) => {
            let event = e || event;
            this.pagination.paginationAction( event );
        });

        console.log('Slider is Running...')
    }
}