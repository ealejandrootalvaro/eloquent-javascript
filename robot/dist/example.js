"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VillageState_1 = require("./VillageState");
var utils_1 = require("./utils");
var randomRobot_1 = require("./randomRobot");
var runRobot_1 = require("./runRobot");
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
var roadGraph = utils_1.buildGraph(roads);
var places = [
    { place: "Post Office", address: "Alice's House" }
];
var state = new VillageState_1.VillageState("Post Office", places);
runRobot_1.runRobot(state, randomRobot_1.randomRobot(roads), roadGraph);
