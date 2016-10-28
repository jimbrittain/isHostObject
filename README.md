# Javascript isHostObject function
isHostObject attempts to determine if a supplied object or function is a host object. This is only possible as long as the User does not pollute the global namespace (e.g. window).
## Usage
```
    var o = {} 
    isHostObject(o) === true
    var Cheese = new function(){ this.x = 1; };
    o = new Cheese();
    isHostObject(o) === false
```

## Methodology

```
var isHostObject = function(o){
    if(typeof o === 'object' || typeof o === 'function'){
        var is = false;
        try {
            if('constructor' in o && 'name' in o.constructor){
                if(o.constructor.name in window){ is = true; }
            } else if('constructor' in o){
                var c = o.constructor.toString().match(/function (.{1,})\(/)[1];
                if(c in window){ is = true; }
            }
        } catch(e){
        }
        return is; }
    return false; };
```

## Issues

* Need to test on using ES6 definitions, imports etc.
* Further testing to ensure User and Browser methods and objects are not confused.
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
