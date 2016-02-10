# Advanced JS Foundations
* HTTP v2 changes the game in optimizing resource loading. No concatenating anymore but smaller resources are better => parallel connexion

## Resources to go deeper
* Advanced JS: Foundations instructor notes: https://github.com/getify/You-Dont-Know-JS
* ECMA 6.0 http://www.ecma-international.org/ecma-262/6.0/index.html
* http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
* https://davidwalsh.name/javascript-objects-deconstruction

## Agenda
### Scope, closures 
* Nested Scope
* Hoisting
* Closure

#### Difference between scripting and compiled language
* Does the language have path to be interpreted before run?
* JS is pre-processed before being run. (Compiler) Checks the syntax 
* The JS compiler creates `bytecode` and is architecture specific: Chrome on Mac OSX will not be able to run the `bytecode` from Chrome on Windows
* The compiler takes less information so that the language is compiled faster.
* Who is going to do the looking?
1. Execution engine VM
2. Scope manager
3. Compiler

#### How do you know if this is a function declaration (duh)
* A function is a function if the very first word in the statement is `function`

#### Compilation steps
* Compiler speaks to the scope manager
* Declarations, `var` and `function` happen here (no assignment yet) pre-process
* Once compilation is over execution happens

#### Execution engine
Take the following declaration `var foo = "bar"`
* `foo` is LHS - left hand side reference *target*
* `bar` is RHS - right hand side reference *source* 
* A LHS is defined by if there is an assignment or not. If it's not an LHS then it's an RHS.

#### Key difference between function declaration and function expression
`var foo = function bar() {}` is a function expression
`function baz(){}` is a function declaration

#### ALWAYS name your functions expressions for 3 reasons
1. The name of a function name is read-only. It is a trustable reference. If you need a self-reference
2. Stack traces become more readable (debug is easier to understand since the named function is displayed)
3. Code becomes more self descriptive.

#### Lexical Scope and Dynamic Scope
* Lexical scope is when writing code. *Fixed decision about scoping made on author time.*
* Dynamic scope is defined during runtime.

#### IIFE - Immediately Invoked Function Expression
```JavaScript
(function bob(){
    console.log('yo');
})();
```

And with a unary operator (`!` or `+` or `-` etc...) Because if `function` is the first word then a declaration and is **NOT** executable right away. We want to have a function expression, so we use an operator.

```JavaScript
!function bob(){
    console.log('yo');
}();
```

#### Block Scope
A block is a lighter version of an `IIFE`.
The let statement declares a block scope local variable, optionally initializing it to a value.
```JavaScript
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
```

**Warning**: you want to put the `let` at the top of your block (so that if the block is 100 lines long, you know that there is a block scope)

#### Hoisting
* All declarations, both functions and variables, are hoisted to the top of the containing scope, before any part of your code is executed.
* Functions are hoisted first, and then variables.
* Function declarations have priority over variable declarations, but not over variable assignments.

**Kyle recommends hoisting for functions but not for variables**
This allows the code to be divided in executable code and then functional code.

#### Closures 
Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
When a function is declared it receives a `closure` from all the variable it retains.
When a function is in another scope and we access variables from that function then we can say it's working because of closure.


# Object-Orienting
The `new` keword does 4 things
1. Create a brand empty new object
2. Takes that new created object and links it to another object*
3. Calls the function with the this keyword pointed at that new created object
4. If that functions doesn't return any object. The new keyword assumes that you wanted to return `this`.

#### Prototype
* A constructor makes an object **linked to** its own **prototype**
* Prototype **is not** retroactive inheritence.
* Each object comes from a constructor call
* [[Prototype]] is the linkage up the chain and **not** copying down the chain

#### Inheritance
* Linkage relationship and **IS NOT** a copy relationship.
* It's delegation.
* constructor do two tasks into one
** Object creation
** Object initialisation
* Object linked to other objects
* [[Prototype]] "delegation" intentional decision to move some mechanics to separate objects


























