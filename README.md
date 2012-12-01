SteamScroller
=============

SteamScroller is a javascript tool that lets you scroll through a web page at various speeds.

Basic Usage
===========

```javascript

var scrollTo = 1000;
var speed = 5;
steamScroller(scrollTo, speed);

```

Usage With Callbacks, Chaining
====================

```javascript

var scrollFast = function() {
	steamScroller(100000, 20);
}

var scrollTop = function() {
	steamScroller(0, 5, scrollFast);
}

var scroll1000 = function() {
	steamScroller(1000, 5, scrollTop);
}
scroll1000();
```