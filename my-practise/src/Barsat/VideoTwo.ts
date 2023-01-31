/* eslint-disable @typescript-eslint/no-unused-vars */

export {};

function error(message: string): never {
  throw new Error("THis is an error");
}

const a: never = error("I will not return");
const b: string = error("I will not return");

// 2
/** Exclude null and undefined from T */
export type NoEmpty<T> = T extends undefined | null ? never : T;

// 3 keyof

type Person = {
  name: string;
  age: number;
  location: string;
};

const john: Person = {
  name: "bob",
  age: 20,
  location: "goa",
};

const todo = {
  list: "string",
  id: 1,
};

type newTyp = keyof Person
type newTypasda = typeof john


function logAccess(obj: Person, key: keyof Person) {
  //   return proxy(obj);
}

// can also be written in Generics
function logAccessTow<T>(obj: T, key: keyof T) {
  //   return proxy(obj);
}
logAccess(john, "age");
logAccessTow(todo, "id");

// 4 Mapped Typed

type Point = {
  x: number;
  y: number;
};

/** For this there is an buildin type function
 *
 * type ReadonlyPoint = Readonly<Point>;
 *
 */
// EXAMPLE 1:-
// type ReadonlyPoint = {
//   readonly x: number;
//   readonly y: number;
// };

// EXAMPLE 2:-
// type ReadonlyPoint = Readonly<Point>;

// EXAMPLE 3:- With mapped object
// type ReadonlyPoint = {
//    //   readonly [key in "x" | "y"]: number // 1
//   //   readonly [key in "x" | "y"]: Point[key];  // 2 so Instead of hard coding the value we can use

//   readonly [key in keyof Point]: Point[key]; // 3 so Instead of hard coding the value we can use
// };

// // const origin: Point = {
//     const origin: ReadonlyPoint = {
//         x: 0,
//         y: 0,
//       };

// EXAMPLE 3:- With mapped object with generics
// type Readonly<T> = {
//   readonly [key in keyof T]: T[key];
// };

// const origin: Point = {
const origin: Readonly<Point> = {
  x: 0,
  y: 0,
};

// >>>>>>>>>>>>>>>>>>>>> UNCOMMENT THIS
// origin.x = 100; // This should throw an error as we dont want anyone to change the origin value

// 5 Difference between interface and types

// type InputOnChange = (newValue: InputValue) => void;
interface InputOnChange {
  (newValue: InputValue): void;
}

type InputValue = string;

type InputType = "text" | "email";

/**
 *
 * for TYPE this can be also written as
 * type InputOnChange = (newValue: InputValue) => void
 *
 * For interface
 *
 */

export type InputProps = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};

// 6 New control flow with const

function foo(args: unknown) {
  const isArgString = typeof args === "string";
  if (isArgString) {
    console.log(args.toUpperCase());
  }
}

// 7

type Attributes = {
  color?: string;
  font?: string;
  [data: string]: string | undefined;
};

/**wrong way */
const classic: Attributes = {
  colour: "red", // As we mentioned [data: string]: string | undefined; the missed-speling of the `colour` is considered as string
  font: "Helvetica",
  "data-name": "classic",
};

/**correct wat */

type AttributesOne = {
  color?: string;
  font?: string;
  [data: `data-${string}`]: string | undefined;
};

const classicOne: AttributesOne = {
  // colour: "red", // Now this throws an error
  font: "Helvetica",
  "data-name": "classic",
};

// 8 DeepReadonly

type ExampleOne = {
  a: number;
};

const exOne: Readonly<ExampleOne> = {
  a: 1,
};

// exOne.a = 20; // will throw an error

type ExampleTwo = {
  a: {
    b: number;
  };
};

const exTwo: Readonly<ExampleTwo> = {
  a: {
    b: 123,
  },
};

exTwo.a.b = 100; // This will not throw an error
