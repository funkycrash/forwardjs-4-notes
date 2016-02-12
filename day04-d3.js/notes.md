# D3.JS - Data-driven documents
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
* `enter()` Returns the enter selection: placeholder nodes for each data element for which no corresponding existing DOM element was found in the current selection.
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
