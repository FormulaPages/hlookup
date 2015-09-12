(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module", "formula-isblank"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module, require("formula-isblank"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.ISBLANK);
        global.HLOOKUP = mod.exports;
    }
})(this, function (exports, module, _formulaIsblank) {
    "use strict";

    module.exports = HLOOKUP;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

    var _ISBLANK = _interopRequireDefault(_formulaIsblank);

    function HLOOKUP(needle, table, index, exactmatch) {
        if (typeof needle === "undefined" || fn.ISBLANK(needle)) {
            return null;
        }

        var index = index || 0,
            row = table[0];

        for (var i = 0; i < row.length; i++) {

            if (exactmatch && row[i] === needle || row[i].toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
                return index < table.length + 1 ? table[index - 1][i] : table[0][i];
            }
        }

        return error.na;
    }
});
