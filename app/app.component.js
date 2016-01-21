import {Component} from 'angular2/core';

let app = Component({
  selector: 'app'
})
  .View({
    template: '<div>{{message}}</div>'
  })
  .Class({
    constructor: function () {
      this.message = 'Canvas will go here.'
    }
  });

export {app}
