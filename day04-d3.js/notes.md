# D3.JS - Data-driven documents
D3.js is a JavaScript library that allows data to be represented graphically on a web page. 
[Slides](http://yonet.github.io/d3-codeclass/#/)

* Selections are where people get confused in d3

## Agenda
* SVG
* Selections
* Update Pattern
* Scales
* Axis
* Loading External Data
* Working with Data methods
* Working with Geospatial data
* Creating maps
* Angular and d3.js


#### What is D3 using?
* SVG
    * doesnt support HTML attributes or styles
    * SVG is HTML element but you can't put another HTML inside an SVG
    * SVG size is **browser dependant**
    * There is no `background-color` we use `fill` to put color inside

#### Selection
* Selections are very much like `jQuery`
* `var paragraphs = d3.select("div").selectAll("p");` 
* D3 is working with the DOM and with Data points (you can change styles in the HTML through d3.js)
* We usually have a selection and attach **data points** to it
* This allows us to insert the data in Functions and modify the HTML based on those data points

```JavaScript
d3.select("body").selectAll("div")
    .data([4, 8, 15, 16, 23, 42])
  .enter().append("div")
    .text(function(d) { return d; });
```
Assuming that the body is initially empty, the above code will create six new DIV elements, append them to the body in order, and assign their text content as the associated (string-coerced) number:
```HTML
<div>4</div>
<div>8</div>
<div>15</div>
<div>16</div>
<div>23</div>
<div>42</div>
```

* Selection allow only to go down in the hierarchy
* Always put your selection in a variable so you can go back up to that selection

#### The Update Pattern
* `enter()` Returns the enter selection: placeholder nodes for each data element for which no corresponding existing DOM element was found in the current selection.
* `exit()` Returns the exit selection: existing DOM elements in the current selection for which no new data element was found.
* This takes care of the case when we have an unknown amount of **DOM elements** for the corresponding **Data Points** or vice-versa.

``` JavaScript
// Update…
    var p = d3.select("body").selectAll("p")
    .data([3, 7, 21, 31, 35, 42]);

    // Enter…
    p.enter().append("p")

    // Exit…
    p.exit().remove();
```

#### Scales
* `.domain` defines the scope of your data (min and max)
* `.range` defines the pixels to map to
* Most of the functions are getters and setters
```JavaScript
console.log(xScale(500)); //100
console.log(xScale.domain());//[0, 1000]
```

* `.clamp(true)` will only allow the biggest value to be the max value of the `.range` we pass
    * For example, with the default domain and range of [0,1], an input value of 2 will return an output value of 2. If clamping is enabled, the normalized domain parameter t is clamped to the range [0,1], such that the return value of the scale is always within the scale's output range.















