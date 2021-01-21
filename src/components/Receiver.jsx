export default function Receiver({ result }) {
  return (
    <div className="col receiver">
      <p className="title">Receiver side</p>
      {result ? (
        <div className="info">
          <p className="result">{result}</p>
          <p>Packet{result !== 1 ? <span>s</span> : null} received</p>
        </div>
      ) : (
        <p className="text-muted null">no packets received</p>
      )}
    </div>
  );
}
