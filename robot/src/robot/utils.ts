export function buildGraph(edges: Array<string>) {
    let graph = Object.create(null);

    function addEdge(from: string, to: string) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

export function randomPick(array: Array<string>) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

