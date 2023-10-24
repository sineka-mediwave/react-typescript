# TypeScript Fundamentals

Typescript is a superset of javascript, so valid javascript is also valid typescript. It has strong typing as c for defining variables and it makes easier to debug them. It has object-oriented features like classes, constructor, access modifiers (public & private fields properties)

- Type annotations
- Arrow functions
- Interfaces
- Classes
- Constructors
- Access modifiers
- Properties
- Modules

## Type Assertions

```
let endsWithC = (<string>message).endsWith("c");
let endsWithC = (message as string).endsWith("c");
```

type annotation

```
let drawPoint = (point: { x: number; y: number }) => {
  console.log(point);
};

drawPoint({
  x: 1,
  y: 2,
});
```
