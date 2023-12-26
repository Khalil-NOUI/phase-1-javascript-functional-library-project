

function myEach(collection, callback) {
   for ([key, value] of Object.entries(collection)) {
    callback(key, value)
   }
   return collection
}

///////////////////////////////////////////////////

function myMap(collection, callback) {
    let results = [];
    for (let value of Object.values(collection)) {
        results.push(callback(value))
    }
    return results
}

////////////////////////////////////////////


function myReduce(collection, callback, acc) {

    let array = Object.values(collection)
    
    
    if (typeof acc === "undefined" ) {
        acc = array[0] ;
        array.shift()
    }
 
    
    for (let val of array) {
        
        acc = callback(acc, val, array)
        
    }
    
    return acc
}

/////////////////////////////////

function myFind(collection, predicate) {

    let found;

    let array = Object.values(collection)

    for (let value of array) {

        if (predicate(value)) {
            found = value
            break
    }}

    // console.log(found)
    return found
}

////////////////////////////////////////////µ


function myFilter(collection, predicate) {

    let results = [];

    let array = Object.values(collection)

    for (let value of array) {

        if (predicate(value)) {
        
        results.push(value)
    }}
    return results
   
}

///////////////////////////////////////////////


function mySize(collection) {

    let array = Object.values(collection)
    console.log(array.length)
    return array.length
}

///////////////////////////////////////////////

function myFirst(array, n) {
    let converted = Object.values(array)
    let res;

        if (typeof n === "undefined") {
            return res = converted[0]
        }
        else {
            return res = converted.slice(0, n)
        }
        
}

////////////////////////////////////////////


function myLast(array, n) {
    let converted = Object.values(array)
    let res;

        if (typeof n === "undefined") {
            return res = converted.pop()
        }
        else {
            return res = converted.slice(-n)
        }
}

myLast([5, 4, 3, 2, 1], 3);


//////////////////////////////////////////

function myKeys(object) {
    return Object.keys(object)
    
}

//////////////////////////////////////////

function myValues(object) {
    return Object.values(object)
    
}


/////////////////////////////////////////


function mySortBy(array, callback) {
    
    function comparator(a, b) {
        
        if (typeof a === "number") {
            return (callback(a) - callback(b))
        }

        else if ( typeof a === "string") {
            return (String(callback(a)).localeCompare(String(callback(b))))}
       
        else if ( typeof a === "object") {
            const nameA = callback(a) 
            const nameB = callback(b); 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                     return 1;
                }
                return 0;
        } 
    }
    let newArr = [...array].sort(comparator);
  
    console.log(newArr);

    return newArr;
  }

 ///////////////////////////////////////////////////////

// function myFlatten(array, shallow, newArr=[]) {
//     shallow === true ? newArr = array.flat(): newArr = array.flat(Infinity);
//     return newArr ;
// }
     

///////////////////////////////////////////////////////

function myFlatten(array, shallow, newArr = []) {

    for (let value of array) {

        if (Array.isArray(value) && shallow) {
            newArr.push(...value); 
        } 
        else if (!shallow && Array.isArray(value)) {
            myFlatten(value, false, newArr); 
        } 
        else {
            newArr.push(value);
        }
    }
    return newArr;
};
///////////////////////////////////////////////////////////