// in js , the for-in loop allows you to loop through the properites of an object.
// the statement of code found within the loop body will be executed once for each property of the object.
var colors ={
    primary : 'Blue',
    secondary : 'red',
     teritary : 'white'
}
for(var color in colors){
    console.log(color +'->'+colors[color])
}
var colorsArray =['Yellow' , 'Green' , 'Orange' , 'Pink']
for(var color in colorsArray){
   console.log( color+' ->' +colorsArray[color])
}