"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WineCharacteristic = void 0;
var winetrait_enum_1 = require("./winetrait.enum");
var WineCharacteristic = /** @class */ (function () {
    function WineCharacteristic(obj) {
        if (obj === void 0) { obj = {}; }
        var id = obj.id, name = obj.name, description = obj.description, trait = obj.trait, level = obj.level;
        this.id = id;
        this.name = name;
        this.description = description;
        this.trait = trait;
        this.level = level;
    }
    WineCharacteristic.prototype.getName = function () {
        switch (this.trait) {
            case winetrait_enum_1.WineTrait.Sweetness:
                return "Sweetness";
            case winetrait_enum_1.WineTrait.Acidity:
                return "Acidity";
            case winetrait_enum_1.WineTrait.Alcohol:
                return "Alcohol";
            case winetrait_enum_1.WineTrait.Body:
                return "Body";
        }
    };
    return WineCharacteristic;
}());
exports.WineCharacteristic = WineCharacteristic;
//# sourceMappingURL=winecharacteristic.model.js.map