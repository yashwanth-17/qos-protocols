import "./anim.css";

export default function Anim({ status }) {
  return (
    <div className="anim">
      {status === "sending" ? (
        <div className="anim-container">
          <div className="anim-chevron"></div>
          <div className="anim-chevron"></div>
          <div className="anim-chevron"></div>
        </div>
      ) : null}
    </div>
  );
}
