"use strict";
function buildGraph(edges) {
    var graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        }
        else {
            graph[from].push(to);
        }
    }
    for (var _i = 0, _a = edges.map(function (r) { return r.split("-"); }); _i < _a.length; _i++) {
        var _b = _a[_i], from = _b[0], to = _b[1];
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
function runRobot(state, robot, memory) {
    for (var turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log("Done in " + turn + " turns");
            break;
        }
        var action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log("Moved to " + action.direction);
    }
}
function randomPick(array) {
    var choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}
var VillageState = /** @class */ (function () {
    function VillageState(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    VillageState.prototype.move = function (destination) {
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
    return VillageState;
}());
VillageState.random = function (parcelCount) {
    if (parcelCount === void 0) { parcelCount = 5; }
    var parcels = [];
    for (var i = 0; i < parcelCount; i++) {
        var address = randomPick(Object.keys(roadGraph));
        var place = void 0;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place: place, address: address });
    }
    return new VillageState("Post Office", parcels);
};
var roads = [
    "Alice's House-Bob's House",
    "Alice's House-Post Office",
    "Daria's House-Ernie's House",
    "Ernie's House-Grete's House",
    "Grete's House-Shop",
    "Marketplace-Post Office",
    "Marketplace-Town Hall",
    "Alice's House-Cabin",
    "Bob's House-Town Hall",
    "Daria's House-Town Hall",
    "Grete's House-Farm",
    "Marketplace-Farm",
    "Marketplace-Shop",
    "Shop-Town Hall"
];
var roadGraph = buildGraph(roads);
var places = [{ place: "Post Office", address: "Alice's House" }];
var first = new VillageState("Post Office", places);
var next = first.move("Alice's House");
console.log({ parcers: first.parcels, place: first.place });
