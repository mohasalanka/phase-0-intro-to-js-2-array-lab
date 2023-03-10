// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push (name)
}
console.log(cats)

function destructivelyPrependCat(name){
    cats.unshift(name)
}
console.log(cats)

function destructivelyRemoveLastCat(){
    cats.pop()
}
console.log(cats)

function destructivelyRemoveFirstCat(){
    cats.shift()
}
console.log(cats)

function appendCat(name){
    const arr = [...cats,name]
    return(arr)
}

function prependCat(name){
    const arr = [name,...cats]
    return(arr)
}

function removeLastCat(){
    const arr = cats.slice(0,-1);
    return arr;
}


function removeFirstCat(){
    const arr = cats.slice(1);
    return arr;

}
