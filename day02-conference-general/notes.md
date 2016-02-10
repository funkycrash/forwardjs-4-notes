# Day 02 general

## Session01: SVG and GreenSock for Complex Animation
Speaker: Sarah Drasner [website](http://sarahdrasnerdesign.com/)

#### Additional resources
* [https://css-tricks.com/productive-in-react/]


## Session02: From jQuery to Flux to Elm
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

## Session03: Building Web Sites that Work Everywhere
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
* Modernizr
```
if (Modernizr.fontface) {
    //...dosomething
}
```

#### Polyfills and fallbacks
mimics a standard API to avoir a rewrite


## Session04: Node, npm, and Service Oriented Architecture
Service Oriented Architecture is a design pattern that works really well for node for several reasons
* Easier debugging
* Allowing smaller teams to take responsability on smaller systems.
* Smaller teams are better teams


## Session05: Future of the Immersive web
Speakers: 
* Brandon Jones, Google 
* Tony Parisi, WeVR
* Gavan Wilhite, Altspace VR
* Diego Marcos, MozVR
* Mike Blix, Samsung
* Gavan Wichita

#### Why VR ? Why should we take it seriously
1. Electronics (to do VR) are really cheap now.
2. As developpers we understand this way better than several years ago
3. API and frameworks are out there

#### Uses cases
* Education is a really good use case
* Medecine 
* Simple experiences

#### How to do VR?
* Attend meetups (almost every day in the week)
* Non of the current browser have support for webVR now. But you can get new [browsers](http://webvr.info/)


## Sessions06: Using ES2015 in Your Applications Today
* Using ES6 today is safe, most of the features of the specs are available by most browsers (91%)
* `let` and `const` are great additions
* `let` allows you to use a value and scope it to the current block
* `const` enables you to define a const trhoughout your app

```JavaScript
// NOTE: Constants can be declared with uppercase or lowercase, but a common
// convention is to use all-uppercase letters.

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will fail silently in Firefox and Chrome (but does not fail in Safari)
MY_FAV = 20;

// will print 7
console.log("my favorite number is: " + MY_FAV);

// trying to redeclare a constant throws an error 
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will also fail
var MY_FAV = 20; 

// MY_FAV is still 7
console.log("my favorite number is " + MY_FAV);

// Assigning to A const variable is a syntax error
const A = 1; A = 2;

// const requires an initializer
const FOO; // SyntaxError: missing = in const declaration

// const also works on objects
const MY_OBJECT = {"key": "value"};

// Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
MY_OBJECT = {"OTHER_KEY": "value"};

// However, object attributes are not protected,
// so the following statement is executed without problems
MY_OBJECT.key = "otherValue";
```

* Arrow Functions are interesting but it's mostly syntax sugar
* Object Literal Extensions

```JavaScript 
var a = 103, bar = 'foo'

var obj = {
    a, //a:a, object shorthand
    m(z) {return z + this.a},
    [bar]: 104, // computed Property names
    get getA() {return this.a}
}
```

* String templating [more info](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings)
* Set. Set objects are collections of values, you can iterate its elements in insertion order. A value in the Set may only occur once; it is unique 
in the Set's collection.
* Map. The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
* WeakSet. WeakSet objects are collections of objects. An object in the WeakSet may only occur once; it is unique in the WeakSet's collection.
** The main differences to the Set object are:
** In contrast to Sets, WeakSets are collections of objects only and not of arbitrary values of any type.
The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an object stored in the WeakSet, they can be garbage collected. That also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.
* WeakMap
** Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
** The key in a WeakMap is held weakly.  What this means is that, if there are no other strong references to the key, then the entire entry will be removed from the WeakMap by the garbage collector.
* Symbol. Every Symbol is unique `Symbol("foo") === Symbol("foo"); // false` [good use of Symbol](http://blog.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)

#### What are my options?
##### Client SPA 49+ gives 91% of ES6
no module import/export








