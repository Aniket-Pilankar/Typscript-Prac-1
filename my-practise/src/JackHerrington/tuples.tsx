const Tuples = () => {
  function takeString(
    initialString: string
  ): [() => string, (v: string) => string] {
    let str = initialString;
    return [() => str, (v) => (str = v)];
  }

  const [set1getter, set1setter] = takeString("Hello");
  console.log("set1getter:", set1getter());
  console.log("set1setter:", set1setter("BOB"));

  return <div>Tuples</div>;
};
export default Tuples;
