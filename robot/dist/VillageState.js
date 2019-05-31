"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var VillageState = /** @class */ (function () {
    function VillageState(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    VillageState.prototype.move = function (destination, roadGraph) {
        var _this = this;
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        var parcels = this.parcels.map(function (p) {
            if (p.place != _this.place)
                return p;
            return { place: destination, address: p.address };
        }).filter(function (p) { return p.place != p.address; });
        return new VillageState(destination, parcels);
    };
    VillageState.prototype.random = function (parcelCount, roadGraph) {
        if (parcelCount === void 0) { parcelCount = 5; }
        var parcels = [];
        for (var i = 0; i < parcelCount; i++) {
            var address = utils_1.randomPick(Object.keys(roadGraph));
            var place = void 0;
            do {
                place = utils_1.randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({ place: place, address: address });
        }
        return new VillageState("Post Office", parcels);
    };
    return VillageState;
}());
exports.VillageState = VillageState;
