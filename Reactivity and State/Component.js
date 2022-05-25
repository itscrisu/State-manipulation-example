// We can define all of this as a class and then use the class to create objects, but i don't enjoy using syntax sugar for this particular example. I think it's more readable to just use the object literal syntax.

// Now we this you already have like a little framework to create Components and manipulate their state in a reactive way (Immutable). 

const Component = (function () {
  const Constructor = function (options) {
    this.element = options.element;
    this.data = options.data;
    this.template = options.template;
  }

  // RENDER METHOD
  Constructor.prototype.render = function () {
    const element = document.querySelector(this.element);
    if (!element) return;
    element.innerHTML = this.template(this.data);
    console.log(this.data);
  };

  // UPDATE STATE METHOD
  Constructor.prototype.setState = function (object) {
    for (let key in object) {
      if (Object.hasOwn(this.data, key)) {
        this.data[key] = object[key];
      }
    }
    this.render();
  };

  // INMUTABLE STATE
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data))
  };

  return Constructor;

})(); // this is an anonymous function that returns an object.


// With this example you can probably guess wich framework is "the best" for getting into the world of frontend frameworks. You guessed it (or i hope you do) it's Vue.js. 

// If you go to the official documentation, you will find that the first example of Vue.js is to create a new instance of Vue, and then bind your main element to the instance, and then other data that you want to render:

// In your <template>
// <div id="app">{{message}}</div>

// In your <script> 
// const app = new Vue({
//   element: "#app",
//   data: {
//     message: "Hello Vue!",
//   }
// })