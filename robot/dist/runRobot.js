"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runRobot(state, robot, roadGraph, memory) {
    for (var turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log("Done in " + turn + " turns");
            break;
        }
        var action = robot(state, memory);
        state = state.move(action.direction, roadGraph);
        memory = action.memory;
        console.log("Moved to " + action.direction);
    }
}
exports.runRobot = runRobot;
