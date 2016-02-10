# Day 02 general

## SVG and GreenSock for Complex Animation
Speaker: Sarah Drasner [website](http://sarahdrasnerdesign.com/)

#### Additional resources
* [https://css-tricks.com/productive-in-react/]


## From jQuery to Flux to Elm

#### Validating inputs

##### jQuery 
App states go in the DOM and stores nothing

```
function getGenres() {
    return $("genres").map(...);
}
```

then check if `isValid()`
then use jQuery to manipulate the DOM

##### Flux
State is stored in the store
`store.genre` 
lookup and then check if `isValid()`
Use React to mutate the DOM with `React.js`

##### Elm
State is stored in the model
`model.genre` 
lookup then check if `isValid()`
Elm returns the desired view of the DOM with `view()`
