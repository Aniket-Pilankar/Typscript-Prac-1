const FourMappedTypes = () => {
  type MyflexibleDogInfo = {
    name: string;
  } & Record<string, string>;

  const dog: MyflexibleDogInfo = {
    name: "Jimmy",
    asd: "adf",
  };

  // Example One

  type Two = {
    name: string;
    [key: string]: string;
  };

  const two: Two = {
    name: "Bob",
    age: "12",
  };

  // Example 2

  interface Three {
    firstName: string;
    lastName: string;
  }

  type OptionalFlag<T> = {
    [Property in keyof T]: boolean;
  };

  type Ingo = OptionalFlag<Three>;

  return <div>FourMappedTypes</div>;
};
export default FourMappedTypes;
