import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
import {it, describe, expect, injectAsync, TestComponentBuilder} from 'angular2/testing';
import {App} from './app.component.js';

BrowserDomAdapter.makeCurrent();

describe('app.component.js', () => {
  it('should have the text "Canvas will go here."',
    injectAsync([TestComponentBuilder], (tcb) => {
      //TODO: Figure how to not have to use overrideTemplate() when using templateUrl in component
      return tcb.overrideTemplate(App, '<div>{{message}}</div>')
        .createAsync(App).then((fixture) => {
          fixture.detectChanges();
          let compiled = fixture.debugElement.nativeElement;
          expect(compiled).toHaveText('Canvas will go here.');
        });
    })
  );
});
