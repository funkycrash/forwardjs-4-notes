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
* `.extent` gives us the maximum and minimum value
* Most of the functions are getters and setters
```JavaScript
console.log(xScale(500)); //100
console.log(xScale.domain());//[0, 1000]
```

* `.clamp(true)` will only allow the biggest value to be the max value of the `.range` we pass
    * For example, with the default domain and range of [0,1], an input value of 2 will return an output value of 2. If clamping is enabled, the normalized domain parameter t is clamped to the range [0,1], such that the return value of the scale is always within the scale's output range.

#### Time Formats
```JavaScript
var format = d3.time.format("%Y-%m-%d");
var date = format.parse("2011-01-01"); // returns a Date Sat Jan 01 2011 00:00:00 GMT-0800 (PST)
var stringDate = format(new Date(2011, 0, 1)); // returns a string 2011-01-01

```

#### Using SVGs
* D3 allows us to create SVGs through generators `arc()`, `line()`, `symbol()`
* We can also use the components passing them arrays of data.

#### Loading external resources
* `d3.json()` Creates a request for the JSON file at the specified url with the mime type "application/json". 
    * If a callback is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the parsed JSON.
* `d3.csv()` Creates a request for the CSV file at the specified url with the mime type "text/csv"

#### Working with arrays
```JavaScript
var expenses = [
  {"name":"jim","amount":34,"date":"11/12/2015"},
  {"name":"carl","amount":120.11,"date":"11/12/2015"},
  {"name":"jim","amount":45,"date":"12/01/2015"},
  {"name":"stacy","amount":12.00,"date":"01/04/2016"},
  {"name":"stacy","amount":34.10,"date":"01/04/2016"},
  {"name":"stacy","amount":44.80,"date":"01/05/2016"}
];
var expensesByName = d3.nest()
  .key(function(d) { return d.name; })
  .entries(expenses);

```

#### Maps
* TopoJSON is better than GeoJSON because it eliminates the overlapping lines. 80% smaller
* https://github.com/mbostock/topojson
* LeafletJS
* Google Maps
* Mapzen

#### Drawing on a map
* `queue()` to defer loading or wait until all resources 
```
<script src="http://d3js.org/queue.v1.min.js"></script>
    queue()
    .defer(d3.json, 'states.json')
    .defer(d3.json, 'cities.json')
    .await(makeMyMap);
```


#### Workflow for making awesome viz
1. Find a data set
2. First see what in the data is important to show and display
Then Clean the data for d3

r2d3.us






