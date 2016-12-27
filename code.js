


let slider = (() => {

    let init,
        _exports,
        config,
        elements,
        createElement,
        buildNavigation;

    elements = {
        slides: document.getElementsByClassName( "slide" ),
        slideButtons: document.getElementsByClassName( "slide_buttons" )[0],
    };

    config = () => {
        console.log("Hello My Config");
    };

    createElement = ( elName, elConfig ) => {
        let el;
        el = document.createElement( elName );
        if (!elConfig) return el;
        for (let key in elConfig) {
            el.setAttribute(key, elConfig[key]);
        }
        return el;
    };

    buildNavigation = () => {
        let slideNavEl;
        slideNavEl = [];
        for (let i = 0, len = elements.slides.length; i < len; i++) {
            slideNavEl.push(createElement("a", {
                "class": "slide_btn",
                "data-id": i,
            }));
            elements.slideButtons.appendChild(slideNavEl[i]);
        }
    };


    init = () => {
        config();
        buildNavigation();
    };



    _exports = {};
    _exports.init = init;
    return _exports;
})();



slider.init();