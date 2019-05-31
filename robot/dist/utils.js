"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.buildGraph = buildGraph;
function randomPick(array) {
    var choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
exports.randomPick = randomPick;
