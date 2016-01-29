import {Component} from 'angular2/core';

let app = Component({
  selector: 'app'
})
  .View({
    templateUrl: './app/app.component.html'
  })
  .Class({
    constructor: function () {
      this.message = 'Canvas will go here.';
    }
  });

export {app};
