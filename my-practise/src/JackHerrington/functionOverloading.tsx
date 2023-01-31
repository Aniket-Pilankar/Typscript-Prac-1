/* eslint-disable @typescript-eslint/no-unused-vars */
const FunctionOverloadTypescript = () => {
  /** @link{https://github.com/jherr/no-bs-ts/blob/master/series-1/episode-4/parseCoordinate.ts} */

  // For unknown read
  /** https://www.geeksforgeeks.org/what-is-an-unknown-type-and-when-to-use-it-in-typescript/ */

  const aOne: unknown = "sdfsdf";
  const bOne = aOne;
  console.log("bOne:", bOne);
  // const cOne: number = aOne; // Throws error
  // const [first, setFirst] = useState<string>(aOne); // Throws error

  interface Coordinates {
    x: number;
    y: number;
  }

  const parseCoordinatefromObject = (obj: Coordinates) => {
    return {
      ...obj,
    };
  };
  const parseCoordinatefromNumber = (x: number, y: number) => {
    return {
      x,
      y,
    };
  };

  const a = parseCoordinatefromObject({
    x: 1,
    y: 2,
  });
  const b = parseCoordinatefromNumber(1, 2);

  // Solution

  function parseCoordinate(obj: Coordinates): Coordinates;
  function parseCoordinate(x: number, y: number): Coordinates;
  function parseCoordinate(str: string): Coordinates;

  function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinates {
    let coord: Coordinates = {
      x: 0,
      y: 0,
    };

    if (arg1 && typeof arg1 === "object") {
      coord = {
        ...(arg1 as Coordinates),
      };
    } else if (typeof arg1 === "string") {
      (arg1 as string).split(",").forEach((s) => {
        const [key, val] = s.trim().split(":");
        coord[key as "x" | "y"] = Number(val);
      });
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }

    return coord;
  }

  console.log(parseCoordinate({ x: 100, y: 200 }));
  console.log(parseCoordinate(100, 200));
  console.log(parseCoordinate("x:100, y:200"));

  // Ex - 2

  function add(str1: string, str2: string): string;
  function add(str1: number, str2?: number): number;
  // function add(str1: unknown, str2: unknown): unknown {
  function add(str1: any, str2: any): any {
    // Note we can also use `any` type here as per https://www.tutorialsteacher.com/typescript/function-overloading
    return str1 + str2;
  }

  const aTwo = add("a", "b");
  const bTwo = add(1, 2);
  const cTwo = add(1);
  console.log("aTwo:", aTwo);
  console.log("bTwo:", bTwo);

  return <div>Funcion Overload</div>;
};

export default FunctionOverloadTypescript;
