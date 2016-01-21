import {Component} from 'angular2/core';

let componentConfig = {
  selector: 'app',
  template: '<div>Canvas will go here.</div>'
};

let classDefinitionObject = {
  constructor: function () {
  }
};

let app = Component(componentConfig).Class(classDefinitionObject);

export {app}
