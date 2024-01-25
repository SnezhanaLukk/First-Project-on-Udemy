for (let coun = 1; coun <=100; coun=coun+1)
{
    let output="";
    if (coun%3 == 0) output= output+"Fizz";
    if (coun%5 == 0) output= output+"Buzz";
console.log(output || coun);
}