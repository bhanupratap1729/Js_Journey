// loops are the statement that can use to control a flow of program to do some repitative task

var a ='Hello js'
// the for loop

for(var i =0; i<10;i++){
    console.log(a)

}
// you have array and you have to square each and every number of that array

var num =[2,34,4,5,6,7]
var squaredArr =[]
/*
var firstSquare = num[0]* num[1]
var squaredArr ={firstSquare}
var secondSquare = num[1]*num[1]
squaredArr.push(firstSquare)
console.log(squaredArr) */
for( var i =0; i<num.length ; i++) {

    squaredArr.push(num[i]*num[i])

}

console.log(squaredArr);


