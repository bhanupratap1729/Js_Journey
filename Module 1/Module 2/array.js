// array provides you a ordered collection of data

var arr = [12 , 'absv', true , 12.3]
console.log(arr)
// accessing the element 

 var a =arr[0]
 console.log(a)
// replacing element of an array using index
 arr[3] = 'frarari'
 console.log(arr)

 console.log( 'The length of the array', arr.length)

 // inbuilt  js array methods

 var arr2 = [23 , 34 , 45 , 56]

 // pop method :- remove one element form the last

 arr2.pop()
 console.log('poped array', arr2)
// Push Method :- add an element in array


arr2.push(100)

console.log( 'push array',arr2)

// Shift  Methods
 var d = arr2.shift()
 console.log(d)
 console.log(arr2)

 // unshift Methods

 arr2.unshift(10021)
 console.log("unshift Program ", arr2)