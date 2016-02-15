//TODO: take in a turtle instance instead of a position.

let up = function ({position, context}) {
  let {x,y} = position;
  y = (y === 0) ? y : y - 10;

  context.lineTo(x, y);
  context.stroke();

  return {x, y}
};

let down = function ({position, context}) {
  let {x,y} = position;
  y = (y === 600) ? y : y + 10;

  context.lineTo(x, y);
  context.stroke();

  return {x, y}

};

let left = function ({position, context}) {
  let {x,y} = position;
  x = (x === 0) ? x : x - 10;

  context.lineTo(x, y);
  context.stroke();

  return {x, y}
};

let right = function ({position, context}) {
  let {x,y} = position;
  x = (x === 600) ? x : x + 10;

  context.lineTo(x, y);
  context.stroke();

  return {x, y}
};

let move = function ({method, position, context}) {

  let methods = {up, right, down, left};

  return methods[method]({position, context});

};

export {up, right, down, left, move}
