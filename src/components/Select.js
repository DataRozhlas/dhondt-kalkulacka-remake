const Select = ({onChange}) => {
  return (
    <>
      <label htmlFor="volby">Vyberte volby do sněmovny </label>

      <select name="volby" id="volby" onChange={onChange}>
        <option value="2017">2017</option>
        <option value="2013">2013</option>
        <option value="2010">2010</option>
        <option value="2006">2006</option>
        <option value="2002">2002</option>
        <option value="1998">1998</option>
        <option value="1996">1996</option>
      </select>
    </>
  );
};

export default Select;
