
function repeat(n, action) {
    for(let i=0; i<n; i++) {
        action(i);
    }
}

function filter(array, test) {
    let filteredElements = [];

    for(let element of array) {
        if (test(element)) {
            filteredElements.push(element)
        }
    }
    return filteredElements;
}

function map(array, transform) {
    let tranformedElements = [];
    for(let element of array) {
        tranformedElements.push(transform(element));
    }
    return tranformedElements;
}

function reduce(array, combine, start) {
    let current = start;
    for(let element of array) {
        current = combine(current, element)
    }
    return current;
}

let elements = [
    {
        name: 'Hola',
        valid: true,
        value: 1
    },
    {
        name: 'Yo no',
        valid: false,
        value: 3
    },
    {
        name: 'Mundo',
        valid: true,
        value: 2
    }
]

//Find greater;
console.log(reduce(elements, (a,b) => a.value > b.value ? a : b, elements[0]));