let globalVariable = "I can be accessed anywhere."
        let blockVariable = "I am global now."
function myFunction() 
{
    let functionVariable = "I can be accessed inside this function only."
    console.log(functionVariable2);
}

function myFunction2() 
{
    a = 0;
    let functionVariable2="I can be accessed inside this function (and the following block)."
    console.log(blockVariable);
    if (a == 0)
    {
        blockVariable = "I can be accessed inside this block only."
       // console.log(blockVariable);
    }
}
