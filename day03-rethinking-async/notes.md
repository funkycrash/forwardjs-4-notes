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
* Async thunk Represents a **future value**.
* I'm allowing that thunk to be a time-agnostic value. All the statement issues become more easy.




















