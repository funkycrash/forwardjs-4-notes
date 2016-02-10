# Day 02 general

## Session01 SVG and GreenSock for Complex Animation
Speaker: Sarah Drasner [website](http://sarahdrasnerdesign.com/)

#### Additional resources
* [https://css-tricks.com/productive-in-react/]


## Session02 From jQuery to Flux to Elm
Speaker: Richard feldman [github](https://github.com/rtfeldman)
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


#### Insights
Deffered effort jQuery but hard to maintain (great for prototyping)
Flux+React: Simpler system more maintainable
Elm: Simplest system, most maintanable

## Session03 Building Web Sites that Work Everywhere
Speaker: Dr Doris Chen

#### Cross Browser Testing
Tools:
* Site Scan (Free)
* Browser Screenshots (Free)
* Windows virtual machines (Free)
* Remote (Free)
* BrowserStack

#### Using CSS Prefixes
* Autoprefixer with Grunt
* prefix-free tool

#### Feature Detection











