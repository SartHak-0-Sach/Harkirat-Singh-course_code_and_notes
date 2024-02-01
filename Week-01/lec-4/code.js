function square(n)
{
    return n*n;
}

function cube(n)
{
    return n*n*n;
}

function sumOfNums(n)
{
    var sum = 0;
    for(let i = 0; i<n; i++)
    sum+=i;

    return sum;
}

function sumOfSomething(random_function_name1, random_function_name2)
{
    return random_function_name1(random_function_name2);
}

console.log(sumOfNums(64));
console.log(sumOfSomething(sumOfNums, square(8)));
console.log(sumOfSomething(sumOfNums, cube(4)));
