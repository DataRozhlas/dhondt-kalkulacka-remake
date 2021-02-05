import Caption from "./Caption";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Tabulka1Kraj = () => {
  const nazvySloupcu = [
    "Strana",
    "Mandátů skutečně",
    "Mandátů, kdyby byl jen jeden volební kraj",
    "Rozdíl"
  ];
  const data = [
    ["ANO", "78", "64", "-14"],
    ["ODS", "25", "24", "-1"],
    ["Piráti", "22", "23", "+1"],
    ["SPD", "22", "23", "+1"],
    ["KSČM", "15", "17", "+2"],
    ["ČSSD", "15", "15", "0"],
    ["KDU-ČSL", "10", "12", "+2"],
    ["TOP 09", "6", "11", "+5"],
    ["STAN", "6", "11", "+5"],
  ];
  return (
    <div>
      <table className="table table--striped">
        <Caption text="Volby 2017: O kolik mandátů víc nebo míň by jim přinesla jedna kandidátka pro celou republiku" />
        <Thead data={nazvySloupcu} />
        <Tbody data={data} />
      </table>
    </div>
  );
};

export default Tabulka1Kraj;
