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
        this.setName();
    }
    WineCharacteristic.prototype.setName = function () {
        var name = "";
        switch (this.trait) {
            case winetrait_enum_1.WineTrait.Sweetness:
                name = "Sweetness";
                break;
            case winetrait_enum_1.WineTrait.Acidity:
                name = "Acidity";
                break;
            case winetrait_enum_1.WineTrait.Alcohol:
                name = "Alcohol";
                break;
            case winetrait_enum_1.WineTrait.Body:
                name = "Body";
                break;
        }
        this.name = name;
    };
    return WineCharacteristic;
}());
exports.WineCharacteristic = WineCharacteristic;
//# sourceMappingURL=winecharacteristic.model.js.map