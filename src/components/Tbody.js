import Tr from "./Tr";

const Tbody = ({ data }) => {
  return (
    <tbody>
      {data.map((strana, i) => (
        <Tr key={i} data={strana} />
      ))}
    </tbody>
  );
};

export default Tbody;
