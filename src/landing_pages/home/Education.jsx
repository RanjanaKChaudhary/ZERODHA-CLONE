export default function Education() {
  return (
    <div className="row">
      <div className="col-6 p-5">
        <img
          src="media/images/education.svg"
          alt="Education Img"
          style={{ width: "80%" }}
        />
      </div>

      <div className="col-6 p-5">
        <div>
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
