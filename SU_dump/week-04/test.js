/* functions */
function add(a, b) {
    return a + b
}

const multiply = (a, b) => {
    return a * b
}

console.log("Examples with + operator:")
console.log(`4 + 5 = ${add(4, 5)}`)
console.log(`"abcd" + "efg" = ${add("abcd", "efg")}`)
console.log(`"abcd" + null = ${add("abcd", null)}`)
console.log(`"abcd" + 1 = ${add("abcd", 1)}`)
console.log(`"1" + 1 = ${add("1", 1)}`)
console.log(`1 + "1" = ${add(1, "1")}`)
console.log(`1 + true = ${add(1, true)}`)
console.log(`1 + null = ${add(1, null)}`)
console.log(`1 + undefined = ${add(1, undefined)}`)
console.log(`0.1 + 0.2 = ${add(0.1, 0.2)}`)
console.log(`"b" + "a" + + "a" + "a": ${"b" + "a" + + "a" + "a"}`)

console.log("\nOther JavaScript \"puzzlers\":")
console.log(`typeof NaN is: ${typeof NaN}`)
console.log(`parseInt(0.01): ${parseInt(0.01)}`)
console.log(`parseInt(0.0000001): ${parseInt(0.0000001)}`)

/* call by reference vs call by value */
console.log("\nCall by reference vs call by value:")
let referenceObject = {
    name: "Jörn"
}
let value = "Auerbach"

function doSomething(r, v) {
    console.log(`referenceObject.name: ${referenceObject.name}`)
    r.name = "Björn"  /* overrides referenceObject.name */
    console.log(`referenceObject.name: ${referenceObject.name}`)

    console.log(`value: ${value}`)
    v = "Meier"  /* does not override variablevalue */
    console.log(`v: ${v}`)
    console.log(`value: ${value}`)
}

doSomething(referenceObject, value)

/* Hoisting */
console.log("\nHoisting (var vs let):")
if (true) {
    var iVar = "iVar von außen erreichbar."
    let iLet = "iLet nicht von außen erreichbar."
}
console.log(iVar)
try {
    console.log(iLet)
} catch (e) {
    console.log(`iLet wirft Fehler: ${e.message}`)
}

console.log("\nmap, filter, reduce")
const arr = [1, 2, 3, 4, 5]
console.log(`arr: ${arr}`)
let mappedArr = arr.map((x) => x + 1)
console.log(`map: ${mappedArr}`)
let filteredArr = arr.filter((x) => x > 2)
console.log(`filter: ${filteredArr}`)
let reducedArr = arr.reduce((previous, current) => previous + current)
console.log(`reduce: ${reducedArr}`)