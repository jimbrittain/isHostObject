"use strict";
/* global window, IMDebugger, $, __imns */
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
