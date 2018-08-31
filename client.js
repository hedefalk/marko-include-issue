var myComponent = require('./hello.marko');
 
myComponent.renderSync({ name:'Marko' }).appendTo(document.body);