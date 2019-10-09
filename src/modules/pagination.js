export default class Pagination {
    injectTriggersElement(el, index) {
        el.innerHTML = `<a class="pagination-link" aria-label="Page ` + index + `" aria-current="page">` + index + `</a>`;
        this.paginationList.appendChild(el);
    }

    bootPagination() {
        this.lists = this.listElements()
        this.paginationList.innerHTML = '';

        for (let i = 0,
            index = 1,
            len = this.lists.length; i < len; i++ , index++) {

            this.lists[i].setAttribute("id", "index-" + index);

            DOM.createElement("li", index, {
                "data-index": index,
            }, this.injectTriggersElement.bind(this));
        }
    }


    this.paginationList.addEventListener("click", (e) => {
        let target = e.target, index;
        if (target.tagName !== "a".toUpperCase()) return;

        target.classList.add('is-current');
        index = target.parentElement.getAttribute("data-index");
        // DRY
        let showEl = this.slideOut(index);

        this.updateSlideShow(showEl);

    });
}