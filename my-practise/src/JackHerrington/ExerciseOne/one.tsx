import houses from "./houses";
const One = () => {
  interface House {
    name: string;
    planets: string | Array<string>;
  }

  interface HouseWithID {
    id: number;
    name: string;
    planets: string | Array<string>;
  }

  function findHouses(houses: string): HouseWithID[];
  function findHouses(
    houses: string,
    filter: (house: House) => boolean
  ): HouseWithID[];
  function findHouses(houses: House[]): HouseWithID[];
  function findHouses(
    houses: House[],
    filter: (house: House) => boolean
  ): HouseWithID[];

  function findHouses(
    data: string | House[],
    filter?: (house: House) => boolean
  ): HouseWithID[] {
    // if(typeof data === 'string')
    const houses: House[] = typeof data === "string" ? JSON.parse(data) : data;

    return (filter ? houses.filter(filter) : houses).map((house, index) => ({
      ...house,
      id: houses.indexOf(house),
    }));
  }

  console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  );

  console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

  return <div>one</div>;
};
export default One;
