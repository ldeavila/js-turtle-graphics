/**
 * Returns true if input is literally up, down, left, or right
 *
 * @param input
 * @returns {boolean}
 */
function validateCommand(input) {
  let regEx = /(^(up|down|left|right)$)/;

  return regEx.test(input);
}

export {validateCommand}
