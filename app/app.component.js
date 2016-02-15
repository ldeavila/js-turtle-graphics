import {Component} from 'angular2/core';
import * as utils from './utils/utils.js';
import * as turtle from './turtle/turtle.js';
import * as movement from './turtle/movement/movement.js';

let initialize = function () {
  let context;
  let canvas = document.getElementById('turtle-canvas');
  let myTurtle = turtle.create();

  if (canvas.getContext) {
    context = canvas.getContext('2d');
    context.beginPath();
    let position = myTurtle.get();
    context.moveTo(position.x, position.y);
  }
  return {myTurtle, context};
};

let {myTurtle, context} = initialize();

/**
 * Listens for keyup events with keyCode value of 13, the enter/return key, and validates the
 *
 * @param event -  A keyup DOM event
 * @param command - An Angular local variable
 */
let onKeyUp = function (event, command) {

  if (event.keyCode === 13) {
    //TODO: Clear input element

    if (utils.validateCommand(command)) {

      let config = {
        method: command,
        position: myTurtle.get(),
        context: context
      };
      myTurtle.set(movement.move(config));

      this.message = ``;
    } else {
      this.message = `Syntax Error: Unknown command '${command}' `;
    }
  }
};

//////////

let App = Component({
  selector: 'app'
})
  .View({
    templateUrl: './app/app.component.html'
  })
  .Class({
    constructor: function () {
      this.message = ``;
      this.onKeyUp = onKeyUp;
    }
  });

export {App};
