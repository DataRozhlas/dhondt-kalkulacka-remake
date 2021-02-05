import Td from "./Td";

const Tr = ({ data }) => {
  return (
    <tr>
      {data.map((polozka, i) => (
        <Td key={i} text={polozka} />
      ))}
    </tr>
  );
};

export default Tr;
