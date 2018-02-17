const collections = [1, [2, [4, [5, [6]], 3]]];
console.log(collections[0]);

function find(array, criteriaFn) {
    let current = array;
    console.log(`Init: ${current}`);
    let next = [];
    while (current) {
        console.log("I'm current!");
        if (criteriaFn(current)) {
          console.log(`@ retrun current: ${current}`);
          console.log(`@ return next: ${next}`);
            return current;
        }
        if (Array.isArray(current)) {
            for (let i = 0; i < current.length; i++) {
                console.log(`before push current: ${current}`);
                console.log(`before push  next: ${next}`);
                next.push(current[i]);
                console.log(`after push current: ${current}`);
                console.log(`after push  next: ${next}`);
            }
        }
        console.log(`before shift  current: ${current}`);
        console.log(`before shift  next: ${next}`);
        curent = next.shift();
        console.log(`after shift  current: ${current}`);
        console.log(`after shift  next: ${next}`);
    }
    return null;
}

//test code
find(collections, n => n > 5);
console.log(`after function collections: ${collections}`);
console.log(`after function current: ${current}`);
console.log(`after function next: ${next}`);