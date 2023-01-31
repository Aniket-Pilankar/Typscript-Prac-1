const Two = () => {
  // function forEachUsingReduce<T>(arr: T[], cb: (val: T) => void): void {
  const forEachUsingReduce = <T,>(arr: T[], cb: (val: T) => void): void => {
    arr.reduce((a, c) => {
      cb(c);
      return undefined;
    }, undefined);
  };

  forEachUsingReduce(["a", "b", "c"], (val) => console.log(val));

  const filterUsingReduce = <T,>(arr: T[], cb: (val: T) => boolean): T[] => {
    return arr.reduce((a, c) => (cb(c) ? [...a, c] : a), [] as T[]);
  };

  console.log(filterUsingReduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (val) => val > 2));
  console.log(
    filterUsingReduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (val) => val > 2 && val < 6)
  );

  const mapUsingReduce = <T, U>(arr: T[], cb: (val: T) => U) => {
    return arr.reduce((a, c) => [...a, cb(c)], [] as U[]);
  };

  console.log(mapUsingReduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (val) => val + 1));

  return <div>Two</div>;
};
export default Two;
