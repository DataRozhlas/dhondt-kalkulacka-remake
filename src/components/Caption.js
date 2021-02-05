const Caption = ({ text }) => {
  return <caption>{text}</caption>;
};

Caption.defaultProps = {
    text: "Tabulka"
}

export default Caption;
