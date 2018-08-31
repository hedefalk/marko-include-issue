// var myComponent = require('./hello.marko');
var myComponent = require('./index.marko');
 
myComponent.renderSync({ name:'Marko' }).appendTo(document.body);