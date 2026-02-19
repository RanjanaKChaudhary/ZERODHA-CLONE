export default function Hero() {
  return (
    <div className="container p-5"  style={{backgroundColor:"whitesmoke"}}>

      
      <div className="row align-items-center mb-3">
        <div className="col-md-8">
          <h2 className="mb-0">Support Portal</h2>
        </div>

        <div className="col-md-4 text-end">
          <button className="btn btn-primary">
            My tickets
          </button>
        </div>
      </div>

      
      <div className="row">
        <div className="col">
          <div className="d-flex align-items-center border rounded px-3 py-2" style={{backgroundColor:"white"}}>
            <i className="fa-solid fa-magnifying-glass text-muted me-2" ></i>
            <input 
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>

    </div>
  );
}
