class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }


  html(str) {
    if(str) {
      for (let i = 0; i < this.htmlElements.length; i++ ) {
        let ele = this.htmlElements[i];
        ele.innerHTML = str;
      }      
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }
  empty() {
    for (let i = 0; i < this.htmlElements.length; i++) {
      let ele = this.htmlElements[i];
      ele.innerHTML = '';
    }
  }

  append(arg) {

    if (typeof arg === 'string') {
      for (let i = 0; i < this.htmlElements.length; i++) {
        // debugger
        let ele = this.htmlElements[i];
        ele.innerHTML += arg;
      }
     

          }
    else if (arg instanceof HTMLElement) {
      // for (let i = 0; i < arg.length; i++) {
      //   let arg2 = arg[i];
        for (let j = 0; j < this.htmlElements.length; j++) {
          let ele = this.htmlElements[j];
          ele.innerHTML += arg.outerHTML;

        }
      }
    else {
      for (let i = 0; i < arg.length; i++) {
           let arg2 = arg[i];
        for (let j = 0; j < this.htmlElements.length; j++) {
          let ele = this.htmlElements[j];
          ele.innerHTML += arg.outerHTML;

        }}
      }
    }

  

}


module.exports = DOMNodeCollection;