import { useState } from "react";
import "./App.css";
import { CiBitcoin } from "react-icons/ci";
import { GiSattelite } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { Progress } from "antd";
import { BsLightningCharge } from "react-icons/bs";

const twoColors = {
  "0%": "#FFFF00",
  "100%": "#FFD700",
};

function App() {
  const [count, setCount] = useState(33256600);
  const [charge, setCharge] = useState(500);
  const [usedCharge, setUsedCharge] = useState(500);
  const [progress, setProgress] = useState(100);
  const [animate, setAnimate] = useState(false);

  const onTap = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
    setCount((p) => ++p);
    setUsedCharge((p) => --p);
    setProgress((100 * usedCharge) / charge);
  };
  return (
    <div
      style={{ height: "40", fontFamily: "Dosis" }}
      className="d-flex justify-content-center  text-center flex-column align-items-center text-white col-12 "
    >
      <div
        className="w-100"
        style={{
          backgroundColor: "#322a47",
          color: "white",
          fontFamily: "Dosis",
        }}
      >
        Ali Coin
      </div>
      <div style={{ marginTop: 60 }} className="text-center">
        <h1 style={{ color: "white", fontSize: 40 }}>
          <CiBitcoin
            color="yellow"
            size={45}
            style={{ marginRight: 2, marginBottom: 4 }}
          />
          {count.toLocaleString()}
        </h1>
      </div>
      <p className="text-white">
        <GiSattelite /> Elite <IoIosArrowForward />
      </p>
      <BsCoin
        style={{ marginTop: 80 }}
        size={250}
        color="gold"
        className={`animated-button ${animate ? "animate" : ""}`}
        onClick={onTap}
      />
      <p style={{ fontFamily: "Lalezar" }}>بزن تا پولدارشی</p>

      <div
        style={{ marginTop: 40, textAlign: "left !important" }}
        className="text-left text-white col-10"
      >
        <BsLightningCharge size={16} />
        {usedCharge == 0 ? charge : usedCharge}/{charge}
        <Progress
          percent={progress}
          style={{ marginTop: 0 }}
          strokeColor={twoColors}
          showInfo={false}
        />
      </div>
    </div>
  );
}

export default App;
