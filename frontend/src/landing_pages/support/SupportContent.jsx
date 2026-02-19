export default function SupportContent() {
  return (
    <div className="container p-5 px-5 ">
      <div className="row">

        {/* LEFT COLUMN */}
        <div className="col-lg-8 px-5">
          <div className="accordion" id="supportAccordion">

            {/* 1. Account Opening */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accountOpening"
                >
                  <i className="bi bi-plus-circle text-primary fs-5"></i>
                  <span>Account Opening</span>
                </button>
              </h2>

              <div
                id="accountOpening"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul >
                    <li><a href="#">Resident individual</a></li>
                    <li><a href="#">Minor</a></li>
                    <li><a href="#">Non Resident Indian (NRI)</a></li>
                    <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                    <li><a href="#">Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Your Zerodha Account */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#zerodhaAccount"
                >
                  <i className="bi bi-person-circle text-primary fs-5"></i>
                  <span>Your Zerodha Account</span>
                </button>
              </h2>

              <div
                id="zerodhaAccount"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul >
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Segments</a></li>
                    <li><a href="#">Nominee</a></li>
                    <li><a href="#">Account modification</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Kite */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kite"
                >
                  <i className="bi bi-graph-up text-primary fs-5"></i>
                  <span>Kite</span>
                </button>
              </h2>

              <div
                id="kite"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul >
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Holdings</a></li>
                    <li><a href="#">Positions</a></li>
                    <li><a href="#">Charts</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Funds */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#funds"
                >
                  <i className="bi bi-cash-stack text-primary fs-5"></i>
                  <span>Funds</span>
                </button>
              </h2>

              <div
                id="funds"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul >
                    <li><a href="#">Add funds</a></li>
                    <li><a href="#">Withdraw funds</a></li>
                    <li><a href="#">Fund statement</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Console */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#console"
                >
                  <i className="bi bi-speedometer2 text-primary fs-5"></i>
                  <span>Console</span>
                </button>
              </h2>

              <div
                id="console"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul >
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Statements</a></li>
                    <li><a href="#">Tax reports</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Coin */}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed d-flex align-items-center gap-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#coin"
                >
                  <i className="bi bi-piggy-bank text-primary fs-5"></i>
                  <span>Coin</span>
                </button>
              </h2>

              <div
                id="coin"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li><a href="#">Mutual funds</a></li>
                    <li><a href="#">SIP</a></li>
                    <li><a href="#">ELSS</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-4">
            <ul className="small p-4"
            style={{ backgroundColor: "rgba(255, 192, 203, 0.2)",borderLeft:"6px solid orange"}}>
              <li>
                <a href="#" style={{ textDecoration: "underline" }}>
                  Special live trading session on<br/>
                   Sunday, February 1, 2026
                </a>
              </li><br/>
              <li>
                <a href="#" style={{ textDecoration: "underline" }}>
                  Quantity Freeze Limits for indices<br/>
                   from February 01, 2026
                </a>
              </li>
            </ul>

        
          <div className="border">

  <h6 className="fw-semibold bg-light px-3 py-2 mb-0">
    Quick links
  </h6>

  <ol className="list-group list-group-flush">
    <li className="list-group-item">
      <a href="#" className="text-decoration-none">
        1. Track account opening
      </a>
    </li>
    <li className="list-group-item">
      <a href="#" className="text-decoration-none">
        2. Track segment activation
      </a>
    </li>
    <li className="list-group-item">
      <a href="#" className="text-decoration-none">
        3. Intraday margins
      </a>
    </li>
    <li className="list-group-item">
      <a href="#" className="text-decoration-none">
        4. Kite user manual
      </a>
    </li>
    <li className="list-group-item">
      <a href="#" className="text-decoration-none">
        5. Learn how to create a ticket
      </a>
    </li>
  </ol>

</div>

        </div>

      </div>
    </div>
  );
}
