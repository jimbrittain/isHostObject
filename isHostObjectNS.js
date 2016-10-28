"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
// this only works if you don't pollute the global namespace;
if(!('isHostObject' in adr)){
    /**
      * @function isHostObject
      * @version 1.0.0
      * @param o {all}
      * @return {Boolean}
      * @description - attempts to determine if supplied value is a host (browser-supplied) object or function rather than user generated. Can only work if global namespace remains unpolluted;
     **/
    adr.isHostObject = function(o){
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
}
