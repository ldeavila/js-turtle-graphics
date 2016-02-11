/**
 * Constructs a turtle object that can be used to store the locaiton of the turtle on the canvas
 *
 * @param spec A specification object {x: number, y: number}. x,y default to 300,300 if no specificaiton is given
 *
 * @returns {Object}
 */
let create = function (spec = {}) {
  // canvas will be 600,600 pixels in size. We default to starting in middle
  let {x = 300, y = 300} = spec;

  let turtle = {
    x,
    y
  };

  /**
   * Retrieves the turtle state
   *
   * @returns {{x, y}}
   */
  let get = function () {
    return turtle;
  };

  /**
   *  Updates the turtle state
   *
   * @param spec {x: number, y: number} where x,y are optional and have no effect if omitted
   */
  let set = function (spec = {}) {
    let {x = turtle.x, y = turtle.y} = spec;

    turtle.x = x;
    turtle.y = y;
  };

  return Object.freeze({
    get,
    set
  });

};

export {create}
