import DOM from './dom';
/**
 * Pagination
 *
 * @export
 * @class Pagination
 */
export default class Pagination {
    constructor ( listContainer, lists, tick ) {
        this.listContinaer = listContainer;
        this.lists = lists;
        this.tick = tick;

        this.oldTarget = null;
    }

    injectTriggersElement ( el, index ) {
        el.innerHTML = `<a class="pagination-link" aria-label="Page ` + index + `" aria-current="page">` + index + `</a>`;
        this.listContinaer.appendChild( el );
    }

    bootPagination () {
        this.listContinaer.innerHTML = '';

        for (let i = 0,
            index = 1,
            len = this.lists.length; i < len; i++ , index++) {

            this.lists[i].setAttribute('id', 'index-' + index);

            DOM.createElement('li', index, {
                'data-index': index,
            }, this.injectTriggersElement.bind( this ));
        }
    }

    paginationAction ( e ) {
        if (typeof e === 'object') {

            // continue write is herer
            let target = e.target, index;
        }

        if ( target.tagName !== "a".toUpperCase() ) return;

        target.classList.add( 'is-current' );
        index = target.parentElement.getAttribute( 'data-index' );

        if ( this.oldTarget && this.oldTarget !== target ) this.oldTarget.classList.remove( 'is-current' );
        
        this.oldTarget = target
        this.tick.slideTick( index ).updateCurrentSlide();
    }
}