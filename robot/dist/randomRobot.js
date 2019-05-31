"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
exports.randomRobot = function (roads) {
    var roadGraph = utils_1.buildGraph(roads);
    return function (state) {
        return { direction: utils_1.randomPick(roadGraph[state.place]) };
    };
};
