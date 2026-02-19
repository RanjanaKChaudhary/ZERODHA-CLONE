

export default function Pricing(){
    return (
    <div className="row mt-5">
  <div className="col-6 p-5">  
    <div>
      <h1 className="fs-2">Unbeatable pricing</h1>
      <p>
        We pioneered the concept of discount broking and price transparency in India.
        Flat fees and no hidden charges.
      </p>
      <a href="" className="mx-4">
        See pricing <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>
  </div>

  <div className="col-6 p-5">  
    <div className="row">

      <div className="col d-flex align-items-center">
        <img src="media/images/pricing-eq.svg" style={{ width: "60%" }} />
        <p className="small mt-0">Free account opening</p>
      </div>

      <div className="col d-flex align-items-center mb-4">
        <img src="media/images/pricing.svg" style={{ width: "60%" }} />
        <p className="small mt-0">
          Free equity delivery and direct mutual funds
        </p>
      </div>

      <div className="col d-flex align-items-center">
        <img src="media/images/other-trades.svg" style={{ width: "60%" }} />
        <p className="small mt-0">Intraday and F&O</p>
      </div>

    </div>
  </div>
</div>

)
};  