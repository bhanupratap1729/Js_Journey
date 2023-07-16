// in js object are in key value pair

var person = {
    firstName : 'Bhanu',
    lastName : 'Pratap',
    age : 22,
    ownsCar : false

}
console.log(person)


// dot notation 
 console.log(person.age)

 // bracket notation
 console.log(person['firstName'])


 var cap ={
    firstName : 'Steve',
    lastName : 'Rogers',
    age : 102,
    friends : ['Bucky Barnes' , 'Bruce Banner' , 'Tony stark'],
    isAvenger: true,
    address : {
        state : 'new York',
        city :{
            name : 'brooklyn',
            pincode : 122334
        }
    }
 } 
 console.log(cap.friends[1]) // bruce Banner

 console.log(cap.address.city.name)  // brooklyn
 cap.isAvenger = false
 console.log(cap)
 cap.movies =['age of ultron', 'civil war' , 'first avenger']
 console.log(cap)

 delete cap.age
 console.log(cap)