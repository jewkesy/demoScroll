# demoScroll.js
Script to continuously scroll your web page up and down

## Overview
Designed to automatically scroll down the web page, then back to top to repeat.  Used for presentations where there is no interaction from a user, but the content exceeds the display.

## Getting Started
Add the following to the bottom of your `<body>` tag: -
```
<script type="text/javascript" src="https://cdn.rawgit.com/jewkesy/demoScroll/dist/js/demoScroll.js"></script>
```

Add the following to your querystring: -
```
?demoScroll=true
```
This will add the necessary event listeners upon page load.

## Options
Control the speed of both the down scroll and the up scroll with the following params: -
```
?demoScroll=true&downSpeed=15000&upSpeed=1000
```

The default value for `downSpeed` is 50000 and the default for `upSpeed` is 1000 

## Dependancies
JQuery is required
