import Pagination from './pagination';

/**
 * Tick
 *
 * @export
 * @class Tick
 */
export default class Tick {
    /**
     * Creates an instance of Tick.
     * @param {*} lists
     * @memberof Tick
     */
    constructor ( lists ) {
        this.current = false;
        this.count = 0;
        this.startCountIndex = 0;

        this.lists = lists;
        this.showElement;

        this.pagination = new Pagination
    }

    /**
     * Update Current Slide
     *
     * @memberof Tick
     */
    updateCurrentSlide () {
        this.current = this.showElement;
    }

    /**
     * Tick Action
     *
     * @param {*} index
     * @returns
     * @memberof Tick
     */
    slideTick ( index ) {

        this.showElement = document.querySelector( "#index-" + index );

        this.showElement.classList.add( "out" );

        if ( this.current && this.current !== this.showElement ) {
            this.current.classList.remove( "out" );
        }

        return this;
    };

    /**
     * Update slide Show Scenes
     *
     * @param {*} prev
     * @memberof Tick
     */
    updateSlideShow ( prev ) {
        prev
            ? this.count--
            : this.count++;

        this.setCounter();

        this.slideTick( this.count ).updateCurrentSlide();

        // we need update the pagination blocks
        this.pagination.paginationAction(this.count);
    };

    /**
     * Setting Counter index
     *
     * @returns
     * @memberof Tick
     */
    setCounter () {
        if ( this.count === this.startCountIndex ) {
            return this.count = this.lists.length;
        }

        if ( this.count === this.lists.length ) {
            return this.count = this.startCountIndex;
        }
    }
}