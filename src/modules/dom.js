export default class DOM {
    static querySelectorByClass ( className ) {
        return window.document.getElementsByClassName( className )[0];
    }

    static findElements ( context, findElement ) {
        return context.querySelectorAll( findElement );
    }


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