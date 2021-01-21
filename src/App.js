import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Receiver from "./components/Receiver";
import Sender from "./components/Sender";
import Anim from "./components/Anim";
import leaky from "./functions/leaky";
import token from "./functions/token";

function App() {
  const [algo, setAlgo] = useState(null);
  const [state, setState] = useState({
    data: 0,
    outFlow: 0,
    bucketSize: 0,
  });
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState(null);
  const [lost, setLost] = useState(null);

  function handleChange(e, type) {
    let newState = { ...state };
    newState[type] = Number(e.target.value);
    setState(newState);
  }

  function handleSubmit() {
    if (algo) {
      setStatus("sending");
      const { data, bucketSize, outFlow } = state;
      console.log(state);
      setTimeout(() => {
        const { received_packets, packets_lost } =
          algo === "leaky"
            ? leaky(outFlow, bucketSize, data)
            : token(outFlow, bucketSize, data);
        setResult(received_packets);
        setLost(packets_lost);
        setStatus("sent");
      }, 5000);
    }
  }

  function handleStatus() {
    if (status === "sending") return "Sending...";
    else if (status === "sent") return "Packets Lost";
    else return null;
  }

  return (
    <div className="d-flex box">
      <Sender
        algo={algo}
        setAlgo={setAlgo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Receiver result={result} />
      {status ? (
        <div className={"status" + (status === "sent" ? " sent" : "")}>
          {status === "sent" ? (
            <p className="text-center lost">{lost}</p>
          ) : null}
          <p className={status === "sending" ? "mt-5" : ""}>{handleStatus()}</p>
          <Anim status={status} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
