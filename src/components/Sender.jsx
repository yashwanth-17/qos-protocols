import Form from "./Form";

export default function Sender({ algo, setAlgo, handleChange, handleSubmit }) {
  return (
    <div className="col sender">
      <p className="title">Sender side</p>
      <div className="form">
        <div className="inputgrp">
          <label htmlFor="data" className="form-label">
            Enter data to send
          </label>
          <input
            type="number"
            id="data"
            className="form-control"
            onChange={(e) => handleChange(e, "data")}
          />
        </div>
        <div className="options">
          <p>Choose any one algorithm</p>
          <div className="form-check radiogrp">
            <input
              className="form-check-input"
              type="radio"
              name="option"
              id="A"
              onClick={() => setAlgo("leaky")}
            />
            <label className="form-check-label" htmlFor="A">
              Leaky Bucket
            </label>
          </div>
          <div className="form-check radiogrp">
            <input
              className="form-check-input"
              type="radio"
              name="option"
              id="B"
              onClick={() => setAlgo("token")}
            />
            <label className="form-check-label" htmlFor="B">
              Token Bucket
            </label>
          </div>
          {algo ? <Form handleChange={handleChange} /> : null}
        </div>
        <button className="btn btn-success send" onClick={handleSubmit}>
          send
        </button>
      </div>
    </div>
  );
}
