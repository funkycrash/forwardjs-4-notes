# Rethinking Async
Speaker: Kyle Simpson [web](http://getify.me/)

## Agenda - Async Patterns
* Parallel vs Async
* Callbacks
* Thunks
* Promises
* Generators/Coroutines
* Event Reactive Programmation (observables)
* CSP Communicating Sequenciatial Patterns

### Parallel vs Async
* Parallel threads are treated independently, even if they're share by the same core.
* Parallelism is complex. In JavaScript only one function is runned at a given time.
* In JavaScript there is the event loop running. (Each function coming in comes at the end of the loop). This is called **Asynchronous**.
* JavaScript is single threaded.

#### Concurrency 
* How are the tasks managed ?
* Micro level tasks are independent but macro level tasks are interleved.
* It will feels like 
* When there is a time dependency (waiting for a result before next step), then coordination becomes very complex.


#### Callbacks

```JavaScript
setTimeout(function(){
    console.log('callback!');
    }, 1000);
```

* There is a **now** and a **later**
* We are identifying an entry point in the function where we can call back later in that function.
* There is a gap in the function.
* Callbacks == Continuations
* We have callbacks because there is a **TIME DEPENDENCE**
* Can lead to *Callback hell* when there are too many callbacks it becomes a mess.
* **You have to manage the state of the callbacks over time**

#### Inversion of Control
* How do you check that people are calling your callbacks as you planned it?
    * not too early
    * not too late
    * not too  many times etc...

* The most likely places to look for bugs: Asynchronous programming and global variables.
* The brain works in a sequencial manner, we are able to respond to events though.
* We need to have Sync-looking asynchronous code (JavaScript), because this is how our brain works.
    * Syncrhonous
    * Sequential
    * Blocking

#### Thunks
* A thunk is a function that doesn't need any time to 
* The function becomes a value that has the state saved inside.
* An Async thunk has everything it needs except the callback. Now thunk is a value and to retrieve the value I need to pass it the callback.
* Async thunk Represents a **future value**. It needs a **Callback**
* I'm allowing that thunk to be a time-agnostic value. All the statement issues become more easy.

#### Promises
* A promise is a **future value**, very similar concept than the thunk
* We can pass it around and reason about the promise in the same way we would have the value.
* The promises were designed to give us back the trust
    * only resolved once
    * either success OR error
    * messages passed/kept
    * exceptions become errors
    * immutable once resolved
* Promises are mediator that operate in a way we can trust

#### Flow control with promises
* You call `.then()` to chain the promises together and control the flow.
* You can anly pass 1 value to the promise.
* It returns `resolved` and `rejected`
* If you need more values in one promise you need to pass them in an `Array` or `Object`
* If you pass a function to a `.then()` whatever the function returns becomes a succesful promise resolution.
* If an error happens in the `.then()` an exception is thrown and all other `.then()` will be ignored and the promise will be rejected.
* `.catch(fn)` is the same thing than `then(null, fn)`

#### Map 
`Map()` takes a list and runs an operation on each item and the result is a list where each item has been transformed.
```JavaScript
[1,2,3,4,5].map(function doubleIt(x){
    return x * 2;
    });
```

We get a **NEW array** in the same order than the original

#### Reduce
`reduce()` says we going to start with the initial state, and it deals with the type of value. 
```JavaScript
[1,2,3,4,5].reduce(function sumIt(x,y){
    return x + y;
    },0); //15 
```

#### Abstractions
`Promise.all()` takes an array of Promises and will not be resolved until all the Promises are not resolved.

`Promise.race()` takes all the Promoses and the first on that comes out is the one being accepted.
```JavaScript
Promise.race([
    p,
    new Promise(function(_, reject){
        setTiemout(function(){
            reject("Timeout!!");
            }, 3000);
    })
])
.then(
    success,
    error
);

```


#### Generators 
* In JavaScript a function will always **run to completion**
* Generators are going to give us a Function, that can run and part way through running can pause.
* Using the `yield` keyword.
```JavaScript
function* gen(){
    console.log("hello");
    yield;
    console.log("world");
}

var it = gen();
it.next(); //hello
it.next(); //world

```

* It's cooperative code. The inside of the function knows where to **pause**, and the outside code knows where to **resume**.
* A generator doesn't have to finish if you don't want to finish it.
* Generator + sequence task allows us to have synchronous looking asynchronous code.

#### Observables
* Promises are really good for discrete values
* **Observable** is an interface that creates a new Promise each time a new value comes in
* Libraries like [RXJS](http://rxjs.codeplex.com/) allow us to to this easily

#### CSP - Commuicating Sequential Processes (AKA Go-style concurrency)
* Models concurrency using Channels
* Channel is a stream that can only have 1 piece of data in it.
* 








