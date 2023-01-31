const Three = () => {
  const data = [
    {
      name: "A",
      number: 1,
    },
    {
      name: "C",
      number: 3,
    },
    {
      name: "D",
      number: 4,
    },
  ];

  //   Task : Take keys in one array and values in other arr of respective field

  //    I mistakely taken arr: T[] as arr: T
  function pluck<T, U extends keyof T>(arr: T[], key: U) {}

  pluck(data, "name");

  //   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% EVENT MAP

  interface BaseEvent {
    time: number;
    user: string;
  }

  interface EventMap {
    addToCart: BaseEvent & { quantity: number; productID: string };
    checkout: BaseEvent;
  }

  function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name]
  ) {
    console.log("name:", name);
    console.log("data:", data);
  }

  sendEvent("addToCart", {
    productID: "asdasd",
    quantity: 1000,
    time: 10101010,
    user: "BOB",
  });

  sendEvent("checkout", { time: 222222, user: "Henry" });
  sendEvent("checkout", { time: 222222, user: "Henry" });

  return <div>Three</div>;
};
export default Three;
