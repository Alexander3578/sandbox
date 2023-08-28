// DESCRIPTION:
//     In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//
// You can define the object attributes during initialization, like this:
//
// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:
//
// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// SOLUTION

function animal(obj){

    return "This " + obj.color +" "+ obj.name + " has " + obj.legs + " legs.";
}