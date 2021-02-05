import Th from "./Th";

const Thead = ({ data }) => {
  return (
    <thead>
      <tr>
        {data.map((d, i) => (
          <Th key={i} text={d} />
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
