import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {Component} from 'angular2/core';
import {app} from './app.component.js';

BrowserDomAdapter.makeCurrent();

describe('app.component.js', () => {
  it('should have the text "Canvas will go here."', injectAsync([TestComponentBuilder], (tcb) => {
      //TODO: Figure how to not have to use overrideTemplate() when using templateUrl in component
      return tcb.overrideTemplate(app, '<div>{{message}}</div>')
        .createAsync(app).then((fixture) => {
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          expect(compiled).toHaveText('Canvas will go here.');
        });
    })
  );
});
