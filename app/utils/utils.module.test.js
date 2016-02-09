import * as utils from './utils.module.js';

describe('utils.module.js', () => {

  describe('validateInput()', () => {

    it('should return true when the input value is up', () => {
      expect(utils.validateInput('up')).toBe(true);
    });

    it('should return true when the input value is down', () => {
      expect(utils.validateInput('down')).toBe(true);
    });

    it('should return true when the input value is left', () => {
      expect(utils.validateInput('left')).toBe(true);
    });

    it('should return true when the input value is right', () => {
      expect(utils.validateInput('right')).toBe(true);
    });

  });
});
