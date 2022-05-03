"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WineType = void 0;
var WineType = /** @class */ (function () {
    function WineType(obj) {
        if (obj === void 0) { obj = {}; }
        var value = obj.value, _a = obj.label, label = _a === void 0 ? "" : _a, _b = obj.isSelected, isSelected = _b === void 0 ? false : _b;
        this.value = value;
        this.label = label;
        this.isSelected = isSelected;
    }
    return WineType;
}());
exports.WineType = WineType;
//# sourceMappingURL=winetype.model.js.map