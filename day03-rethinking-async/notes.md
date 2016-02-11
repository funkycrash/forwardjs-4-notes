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
