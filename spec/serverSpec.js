"use strict";
const route = require("../src/Rotes/Route.js");
// here i will test the router is working or not
it("expect route to respond ", () => {
    expect(route.get("http://localhos:3000/?name=50&width=300&height=500")).toBeTruthy;
});
