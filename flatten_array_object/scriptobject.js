function flattenObject(obj, parent = "") {
    let result = {};

    for (let key in obj) {
        let newKey = parent ? parent + "." + key : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            let nested = flattenObject(obj[key], newKey);
            result = { ...result, ...nested };
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

// Sample Input
const input = {
    name: "Alex",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

// Function Call
const output = flattenObject(input);

// Sample Output
console.log(output);
