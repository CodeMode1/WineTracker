"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wine = void 0;
var winecharacteristic_model_1 = require("./winecharacteristic.model");
var winetrait_enum_1 = require("./winetrait.enum");
var Wine = /** @class */ (function () {
    function Wine(obj) {
        if (obj === void 0) { obj = {}; }
        var id = obj.id, name = obj.name, type = obj.type, age = obj.age, production = obj.production, description = obj.description, _a = obj.characteristics, characteristics = _a === void 0 ? [
            new winecharacteristic_model_1.WineCharacteristic({ trait: winetrait_enum_1.WineTrait.Sweetness }),
            new winecharacteristic_model_1.WineCharacteristic({ trait: winetrait_enum_1.WineTrait.Acidity }),
            new winecharacteristic_model_1.WineCharacteristic({ trait: winetrait_enum_1.WineTrait.Tannin }),
            new winecharacteristic_model_1.WineCharacteristic({ trait: winetrait_enum_1.WineTrait.Alcohol }),
            new winecharacteristic_model_1.WineCharacteristic({ trait: winetrait_enum_1.WineTrait.Body })
        ] : _a;
        this.id = id;
        this.name = name;
        this.type = type;
        this.age = age;
        this.production = production;
        this.description = description;
        this.characteristics = [];
        if (characteristics != undefined && characteristics.length) {
            for (var _i = 0, characteristics_1 = characteristics; _i < characteristics_1.length; _i++) {
                var characteristic = characteristics_1[_i];
                this.characteristics.push(new winecharacteristic_model_1.WineCharacteristic(characteristic));
            }
        }
    }
    return Wine;
}());
exports.Wine = Wine;
//# sourceMappingURL=wine.model.js.map