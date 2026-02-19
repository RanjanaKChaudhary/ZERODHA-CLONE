function Universe() {
  return (
    <div className="container my-5">
      
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="fw-normal">The Zerodha Universe</h1>
          <p className="text-muted mt-3">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
      </div>

      <div className="row text-center g-5 text-muted ">
        
        <div className="col-md-4 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="mb-3"
            style={{ height: "45px", width: "auto" }}
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/sensibullLogo.svg"
            className="mb-3"
            style={{ height: "45px", width: "auto" }}
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/tijori.svg"
            className="mb-3"
            style={{ height: "45px", width: "auto" }}
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/streakLogo.png"
            className="mb-3"
            style={{ height: "45px", width: "auto" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/smallcaseLogo.png"
            className="mb-3"
            style={{ height: "48px", width: "auto" }}
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="media/images/dittoLogo.png"
            className="mb-3"
            style={{ height: "50px", width: "auto" }}
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Universe;