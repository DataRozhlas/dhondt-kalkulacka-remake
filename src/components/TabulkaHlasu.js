import { useState } from "react";
import Select from "./Select";
import Caption from "./Caption";
import Thead from "./Thead";
import Tbody from "./Tbody";

const rawData = [
  ["ANO", 1500113, 29.64, 78, 2017],
  ["ODS", 572962, 11.32, 25, 2017],
  ["Piráti", 546393, 10.79, 22, 2017],
  ["SPD", 538574, 10.64, 22, 2017],
  ["KSČM", 393100, 7.76, 15, 2017],
  ["ČSSD", 368347, 7.27, 15, 2017],
  ["KDU-ČSL", 293643, 5.8, 10, 2017],
  ["TOP 09", 268811, 5.31, 7, 2017],
  ["STAN", 262157, 5.18, 6, 2017],
  ["ČSSD", 1016829, 20.45, 50, 2013],
  ["ANO", 927240, 18.65, 47, 2013],
  ["KSČM", 741044, 14.91, 33, 2013],
  ["TOP 09", 596357, 11.99, 26, 2013],
  ["ODS", 384174, 7.72, 16, 2013],
  ["Úsvit", 342339, 6.88, 14, 2013],
  ["KDU-ČSL", 336970, 6.78, 14, 2013],
  ["ČSSD", 1155267, 22.08, 56, 2010],
  ["ODS", 1057792, 20.22, 53, 2010],
  ["TOP 09", 873833, 16.7, 41, 2010],
  ["KSČM", 589765, 11.27, 26, 2010],
  ["Věci veřejné", 569127, 10.88, 24, 2010],
  ["ODS", 1892475, 35.38, 81, 2006],
  ["ČSSD", 1728827, 32.32, 74, 2006],
  ["KSČM", 685328, 12.81, 26, 2006],
  ["KDU-ČSL", 386706, 7.22, 13, 2006],
  ["Zelení", 336487, 6.29, 6, 2006],
  ["ČSSD", 1440279, 30.2, 70, 2002],
  ["ODS", 1166975, 24.47, 58, 2002],
  ["KSČM", 882653, 18.51, 41, 2002],
  ["Koalice", 680671, 14.21, 31, 2002],
  ["ČSSD", 1928660, 32.31, 74, 1998],
  ["ODS", 1656011, 27.74, 63, 1998],
  ["KSČM", 658550, 11.03, 24, 1998],
  ["KDU-ČSL", 537013, 9.0, 20, 1998],
  ["Unie svobody", 513596, 8.6, 19, 1998],
  ["ODS", 1794560, 29.62, 68, 1996],
  ["ČSSD", 1602250, 26.44, 61, 1996],
  ["KSČM", 626136, 10.33, 22, 1996],
  ["KDU-ČSL", 489349, 8.08, 18, 1996],
  ["SPR-RSČ", 485072, 8.01, 18, 1996],
  ["ODA", 385369, 6.36, 13, 1996],
];

const nazvySloupcu = [
  "Strana",
  "Hlasů na mandát",
  "Mandátů",
  "Hlasů",
  "Procent hlasů",
];

const TabulkaHlasu = () => {
  const [vybranyRok, setVybranyRok] = useState(2017);
  const data = rawData
    .filter((strana) => strana[4] === vybranyRok)
    .map((strana) => {
      let result = [];
      result.push(strana[0]);
      result.push(Math.floor(strana[1] / strana[3]).toLocaleString("cs"));
      result.push(strana[3].toLocaleString("cs"));
      result.push(strana[1].toLocaleString("cs"));
      result.push(`${strana[2].toLocaleString("cs")} %`);
      return result;
    });
  const zmenRok = (e) => {
    setVybranyRok(Number(e.target.value));
  };
  let velkaStrana = [0, "50 000"];
  data.forEach((strana) => {
    velkaStrana =
      strana[1].replace(/\s/g, "") < velkaStrana[1].replace(/\s/g, "")
        ? strana
        : velkaStrana;
  });
  let malaStrana = [0, "0"];
  data.forEach((strana) => {
    malaStrana =
      strana[1].replace(/\s/g, "") > malaStrana[1].replace(/\s/g, "")
        ? strana
        : malaStrana;
  });

  return (
    <>
      <div>
        <Select onChange={zmenRok} />
      </div>
      <div>
        <p>
          <strong>
            Jeden hlas pro {velkaStrana[0]} měl{" "}
            {(
              malaStrana[1].replace(/\s/g, "") /
              velkaStrana[1].replace(/\s/g, "")
            ).toFixed(2)}
            × větší váhu než hlas pro {malaStrana[0]}.
          </strong>
        </p>
      </div>
      <table className="table table--striped">
        <Caption text="Kolik hlasů potřebovaly strany, aby získaly jeden poslanecký mandát" />
        <Thead data={nazvySloupcu} />
        <Tbody data={data} />
      </table>
    </>
  );
};

export default TabulkaHlasu;
