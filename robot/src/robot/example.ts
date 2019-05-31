import {VillageState} from './VillageState';
import {buildGraph} from './utils';

import { randomRobot } from './randomRobot';
import { runRobot } from './runRobot';

const roads = [
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

const roadGraph = buildGraph(roads);
let places = [
    { place: "Post Office", address: "Alice's House" }];

let state = new VillageState("Post Office", places);

runRobot(state, randomRobot(roads), roadGraph);