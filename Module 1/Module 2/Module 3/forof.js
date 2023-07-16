// The for of statement creates a loop iterating over iterable objects.
// including : built-in string , array, array-like objects like nodelist and  also map and set
var scores = [20,45,46,67,78,34]
// syntax
for(var score of scores)
{
    score = score + 5
    console.log(score)

}

// method enteries()
let colors = ['red', 'while', 'Green']

for(var [index, color] of colors.entries()){
    console.log(index + '->' + color)

}


// string

 var str = 'scalar'
 for(var c of str){
    console.log(c)

 }