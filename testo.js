var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// On reprend notre élément personnalisé 'super-heros' précédent
customElements.define('super-hero', /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        var template = document.getElementById('super-hero');
        // On récupère le contenu de notre template :
        var templateContent = template.content;
        // On ajoute le contenu de notre template au DOM de l'ombre
        var shadowRoot = _this.attachShadow({ mode: 'open' })
            .appendChild(templateContent.cloneNode(true));
        return _this;
    }
    return class_1;
}(HTMLElement)));
