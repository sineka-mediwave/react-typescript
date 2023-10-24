let message;
message = "abc";

console.log(message);
// let endsWithC = (<string>message).endsWith("c");
// let endsWithC = (message as string).endsWith("c");

let drawPoint = (point: { x: number; y: number }) => {
  console.log(point);
};

drawPoint({
  x: 1,
  y: 2,
});
