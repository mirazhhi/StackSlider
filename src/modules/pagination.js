import DOM from './dom';
/**
 * Pagination
 *
 * @export
 * @class Pagination
 */
export default class Pagination {
    /**
     * Creates an instance of Pagination.
     * @param {*} listContainer
     * @param {*} lists
     * @param {*} tick
     * @memberof Pagination
     */
    constructor ( listContainer, lists, tick ) {
        this.listContinaer = listContainer;
        this.lists = lists;
        this.tick = tick;

        this.oldTarget = null;
    }

    /**
     * Render pagination items
     *
     * @param {*} el
     * @param {*} index
     * @memberof Pagination
     */
    injectTriggersElement ( el, index ) {
        el.innerHTML = `<a class="pagination-link" aria-label="Page ` + index + `" aria-current="page">` + index + `</a>`;
        this.listContinaer.appendChild( el );
    }

    /**
     * Load Pagination Instance
     *
     * @memberof Pagination
     */
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

    /**
     * 
     *
     * @param {*} e
     * @returns
     * @memberof Pagination
     */
    paginationAction ( e ) {
        if (typeof e === 'object') {
            if (target.tagName !== "a".toUpperCase()) return;

            target.classList.add('is-current');
            index = target.parentElement.getAttribute('data-index');

            if (this.oldTarget && this.oldTarget !== target) this.oldTarget.classList.remove('is-current');

            this.oldTarget = target
            this.tick.slideTick(index).updateCurrentSlide();
        }

        if (typeof e === 'number') {
            DOM.querySelectorByClass('pagination-list').querySelector(`[data-index="${e}"] a`).classList.add('is-current');

            if (this.oldTarget && this.oldTarget !== e) DOM.querySelectorByClass('pagination-list').querySelector(`[data-index="${this.oldTarget}"] a`).classList.remove('is-current');

            this.oldTarget = e
        }
    }
}