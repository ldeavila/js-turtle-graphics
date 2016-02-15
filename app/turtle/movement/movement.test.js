import * as movement from './movement.js';

let context;

describe('movement.js', () => {
  beforeEach(() => {
    context = {
      lineTo: function (x, y) {
      },
      stroke: function () {
      }
    };

    spyOn(context, 'lineTo');
    spyOn(context, 'stroke');
  });

  describe('up()', () => {
    it('should return a y value of 290', () => {
      let position = {x: 300, y: 300};
      let result = movement.up({position: position, context: context});

      expect(result.y).toBe(290);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

    it('should return a y value of 0', () => {
      let position = {x: 300, y: 0};
      let result = movement.up({position: position, context: context});

      expect(result.y).toBe(0);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

  });

  describe('right()', () => {
    it('should return a x value of 310', () => {
      let position = {x: 300, y: 300};
      let result = movement.right({position: position, context: context});

      expect(result.x).toBe(310);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

    it('should return a x value of 600', () => {
      let position = {x: 600, y: 300};
      let result = movement.right({position: position, context: context});

      expect(result.x).toBe(600);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

  });

  describe('down()', () => {
    it('should return a y value of 600', () => {
      let position = {x: 300, y: 300};
      let result = movement.down({position: position, context: context});

      expect(result.y).toBe(310);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

    it('should return a y value of 600', () => {
      let position = {x: 300, y: 600};
      let result = movement.down({position: position, context: context});

      expect(result.y).toBe(600);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

  });

  describe('left()', () => {
    it('should return a x value of 290', () => {
      let position = {x: 300, y: 300};
      let result = movement.left({position: position, context: context});

      expect(result.x).toBe(290);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

    it('should return a x value of 0', () => {
      let position = {x: 0, y: 300};
      let result = movement.left({position: position, context: context});

      expect(result.x).toBe(0);
      expect(context.lineTo).toHaveBeenCalledWith(result.x, result.y);
      expect(context.stroke).toHaveBeenCalled();
    });

  });

  describe('move()', () => {
    it('should return a x value of 290', function () {
      let result = movement.move({method: 'left', position: {x: 300, y: 300}, context: context});

      expect(result.x).toBe(290);

    });

  });

});
