export default function Form({ handleChange }) {
  return (
    <div>
      <div className="col mt-2">
        <input
          type="number"
          className="form-control"
          placeholder="Outflow Rate"
          aria-label="Outflow Rate"
          onChange={(e) => handleChange(e, "outFlow")}
        />
      </div>
      <div className="col mt-2">
        <input
          type="number"
          className="form-control"
          placeholder="Bucket size"
          aria-label="Bucket size"
          onChange={(e) => handleChange(e, "bucketSize")}
        />
      </div>
    </div>
  );
}
