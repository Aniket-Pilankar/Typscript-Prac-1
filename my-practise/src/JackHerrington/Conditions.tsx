interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

const Conditions = () => {
  return <div>Conditions</div>;
};
export default Conditions;
