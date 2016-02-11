import * as turtle from './turtle.js';

describe('turtle.js', () => {

  describe('create() with no spec', () => {
    let myTurtle;

    beforeEach(() => {
      myTurtle = turtle.create();
    });

    describe('get()', () => {
      let result;

      beforeEach(() => {
        result = myTurtle.get();
      });

      it('should have an x coordinate of 300', function () {
        expect(result.x).toBe(300);
      });

      it('should have an y coordinate of 300', function () {
        expect(result.y).toBe(300);
      });

    });

    describe('set()', () => {
      it('should not change the x,y values when no spec is passed in', () => {
        myTurtle.set();
        let result = myTurtle.get();

        expect(result.x).toBe(300);
        expect(result.y).toBe(300);
      });

      it('should change the x value to 100 and maintain y value as 300', () => {
        myTurtle.set({x: 100});
        let result = myTurtle.get();

        expect(result.x).toBe(100);
        expect(result.y).toBe(300);
      });

      it('should change the x,y value to 100', () => {
        myTurtle.set({x: 100, y: 100});
        let result = myTurtle.get();

        expect(result.x).toBe(100);
        expect(result.y).toBe(100);
      });

    });

  });

  describe('create() with spec', () => {
    let myTurtle;

    beforeEach(() => {
      let spec = {x: 100, y: 100};
      myTurtle = turtle.create(spec);
    });

    describe('get()', () => {
      it('should have x,y values of 100,100', () => {
        let result = myTurtle.get();

        expect(result.x).toBe(100);
        expect(result.y).toBe(100);
      });

    });

  });

});
