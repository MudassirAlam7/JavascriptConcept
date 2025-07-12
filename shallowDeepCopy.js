//shallow copy copies the top level properties of an object or array but nested object are 
//still copy by reference

const original = {
    name : "Mudassir",
    age : 25,
    address : {
        city : "Delhi",
    }
}

// const shallowCopy = {...original}
const shallowCopy = Object.assign({}, original)

shallowCopy.address.city= "Mumbai"
// console.log(original, shallowCopy);


// Deep copy copies everything recursively including nested objects and arrays. so the clone is 
// fully independent 

// const deepCopy = JSON.parse(JSON.stringify(original))

const deepCopy = structuredClone(original)
deepCopy.address.city = "Jaipur"


console.log(original, deepCopy);
