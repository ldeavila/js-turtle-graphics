import * as utils from './utils.js';

describe('utils.module.js', () => {

  describe('validateCommand()', () => {

    it('should return true when the input value is up', () => {
      expect(utils.validateCommand('up')).toBe(true);
    });

    it('should return true when the input value is down', () => {
      expect(utils.validateCommand('down')).toBe(true);
    });

    it('should return true when the input value is left', () => {
      expect(utils.validateCommand('left')).toBe(true);
    });

    it('should return true when the input value is right', () => {
      expect(utils.validateCommand('right')).toBe(true);
    });

  });
});
