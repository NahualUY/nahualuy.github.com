angular.module('indexApp', ['ngStorage'])
    .controller('IndexController', function($localStorage) {
        var _this = this;
        _this.storage = $localStorage.$default({
            nodo: null
        });
        _this.nodo = _this.storage.nodo;

        _this.seleccionarNodo = function(nodo) {
            _this.storage.nodo = nodo;
            _this.nodo = _this.storage.nodo;
        };
});