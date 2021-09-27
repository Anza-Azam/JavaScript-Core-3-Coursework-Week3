# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Answer: 
line 4 has block scope variable and other console.log will print global variable because it would not have access to function variable and function has not been called or assigned.
## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer: 10
console.log(y will give reference error)
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);
Answer: 9


const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
Answer {x:10}, y is an object with property x equal to nine so when the function is called with y , val is y
and val.x is 9 , it therefore changes its value to 10 by adding 1 to it and returns it after that on the next line when
y object is printed it will display {x:10} because 1 is added to y.x's previous value.
