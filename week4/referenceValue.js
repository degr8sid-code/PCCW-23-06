//pass by Reference
function updateObject(myObj)
{
    myObj.name = 'Wheel'
}

var myObj = {
    name:'Ferris'
}

//pass by Value
let ogValue = 3;
function updateValue(ogValue)
{
    ogValue += 5;
    //console.log(ogValue);
    return ogValue;
}
console.log("old value: " + ogValue);
let ogValueNew = updateValue(ogValue);
console.log("new value after function call" + ogValueNew);