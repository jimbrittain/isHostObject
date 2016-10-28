"use strict";
describe("isHostObject Test Suite", function(){
    var __imns = function(){ return window; }
    var adr = __imns();
    var obj = {}, arr = [];
    var Cheese = function(){ this.x = 1; };
    it("isHostObject is a function", function(){ expect(typeof adr.isHostObject === 'function').toBe(true); });
    it("isHostObject: {Object} = true", function(){ expect(adr.isHostObject({})).toBe(true); });
    it("isHostObject: {Array} = true", function(){ expect(adr.isHostObject([])).toBe(true); });
    it("isHostObject: {UserObject} = false", function(){ 
        var n = new Cheese();
        expect(adr.isHostObject(n)).toBe(false); });
});
