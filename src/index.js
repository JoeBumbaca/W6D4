const DOMNodeCollection = require("./dom_node_collection.js");
 
 
 window.$l = function(arg) {
   if (arg instanceof HTMLElement) {
  
     return new DOMNodeCollection([arg]);
   }
   else {
     let nodeList = document.querySelectorAll(arg);
     let arr = Array.from(nodeList);
     return new DOMNodeCollection(arr);
   }
  
  
 };

//  window.$l = $l;('li)


