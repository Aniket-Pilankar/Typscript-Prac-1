// This snippet shows the pickObjectKeys() function, which iterates over the keys array and creates a new object with the keys specified in the array.
// https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript

const OneOD = () => {
  function pickObjectKeys<T, U extends keyof T>(obj: T, keys: U[]) {
    // const result = {} as T;
    const result = {} as Pick<T, U>;
    for (const key of keys) {
      if (key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  }

  const language = {
    name: "TypeScript",
    age: 8,
    extensions: ["ts", "tsx"],
  };

  const ageAndExtensions = pickObjectKeys(language, ["age", "extensions"]);
  const ageAndExtensionsTwo = pickObjectKeys(language, []);
  console.log("ageAndExtensions:", ageAndExtensions);

  // TWO

  function identity<T>(value: T): T {
    return value;
  }

  const result = identity(123);
  const resultTWO = identity<number>(123);

  // Three

  async function fetchApi(path: string) {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
  }

  // asyn function will always return a promise 
  const a = fetchApi("asd");

  async function fetchApiTwo<T>(path: string): Promise<T> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
  }

  const b = fetchApiTwo("asd");

  type User = {
    name: string;
  };

  async function fetchApiThree<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch(`https://example.com/api${path}`);
    return response.json();
  }

  const data = await fetchApiThree<User[]>('/users') // look for documentation

  return <div>indesx</div>;
};
export default OneOD;
