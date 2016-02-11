let create = function (spec = {}) {
  // canvas will be 600,600 pixels in size. We default to starting in middle
  let {x = 300, y = 300} = spec;

  let turtle = {
    x,
    y
  };

  let get = function () {
    return turtle;
  };

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
