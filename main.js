"use strict";
var aa = {
    aa: undefined
};
function getOrigin(value) { }
// getOrigin({}); //Error
getOrigin({ ethnicity: 'abc' }); //OK
getOrigin({ breed: 'def' }); //OK
// getOrigin({ethnicity: 'abc', breed: 'def'});//Error
var foo = "string";
var bar = { id: "dddd", name: "llllll" };
