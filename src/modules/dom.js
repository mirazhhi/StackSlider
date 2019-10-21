/**
 * DOM 
 *
 * @export
 * @class DOM
 */
export default class DOM {
    /**
     * GET element byClass
     *
     * @static
     * @param {*} className
     * @returns
     * @memberof DOM
     */
    static querySelectorByClass ( className ) {
        return window.document.getElementsByClassName( className )[0];
    }

    /**
     * GET elements with Context
     *
     * @static
     * @param {*} context
     * @param {*} findElement
     * @returns
     * @memberof DOM
     */
    static findElements ( context, findElement ) {
        return context.querySelectorAll( findElement );
    }

    /**
     * Create a new DOM element
     *
     * @static
     * @param {*} name
     * @param {*} index
     * @param {*} options
     * @param {*} action
     * @returns
     * @memberof DOM
     */
    static createElement ( name, index, options, action ) {
        if ( !(name || options) ) return;

        let el = document.createElement( name );

        if ( options ) {
            for ( let key in options ) {
                el.setAttribute( key, options[key] );
            }
        }

        action( el, index );
    };
}