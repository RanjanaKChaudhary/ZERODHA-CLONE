function Brokerage() {
  return (
    <div className="container-xl my-5">
      <nav className="nav nav-tabs border-bottom mb-5">
        <a className="nav-link active border-0 ps-0 fs-3" href="#">
          Equity
        </a>
        <a className="nav-link border-0 fs-3" href="#">
          Currency
        </a>
        <a className="nav-link border-0 fs-3" href="#">
          Commodity
        </a>
      </nav>

      <table className="table table-sm align-middle table-striped table-bordered ">
        <thead>
          <tr>
            <th></th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&O - Futures</th>
            <th>F&O - Options</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-muted">
            <td>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>STT / CTT</td>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.025% on the sell side</td>
            <td>
              <ul className="mb-0 ps-3">
                <li>0.125% of intrinsic value (exercised)</li>
                <li>0.1% on sell side (premium)</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>Transaction charges</td>
            <td>
              NSE: 0.00297% <br /> BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00297% <br /> BSE: 0.00375%
            </td>
            <td>
              NSE: 0.00173% <br /> BSE: 0
            </td>
            <td>
              NSE: 0.03503% (premium) <br />
              BSE: 0.0325% (premium)
            </td>
          </tr>

          <tr>
            <td>GST</td>
            <td colSpan="4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>

          <tr>
            <td>SEBI charges</td>
            <td colSpan="4">₹10 / crore</td>
          </tr>

          <tr>
            <td>Stamp charges</td>
            <td>0.015% or ₹1500 / crore</td>
            <td>0.003% or ₹300 / crore</td>
            <td>0.002% or ₹200 / crore</td>
            <td>0.003% or ₹300 / crore</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center fs-5 mt-4 ">
        <a href="#">Calculate your costs upfront</a> using our brokerage
        calculator
      </p>

      <div className="row mt-5">
        <h2 className="fs-3 mb-3">Charges for account opening</h2>

        <div className="col-12">
          <table className="table table-sm table-bordered align-middle">
            <thead>
              <tr>
                <th>Type of account</th>
                <span>
                  <th>Charges</th>
                </span>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span className="badge bg-success">free</span>
                </td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td>
                  <span className="badge bg-success">free</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-5">
          <h2 className="fs-3 mb-3">Demat AMC (Annual Maintenance Charge)</h2>
          <div className="col-12">
            <table className="table table-sm table-bordered align-middle">
              <thead>
                <tr>
                  <th>Value of holdings</th>
                  <span>
                    <th>AMC</th>
                  </span>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td>
                    <span className="badge bg-success">free</span>
                  </td>
                </tr>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td>
                    <span className="badge bg-success">free</span>
                  </td>
                </tr>
                <tr>
                  <td>₹4 lakh - ₹10 lakh</td>
                  <td>₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹ 300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>

            <p className="small-text-muted">
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA). BSDA account holders cannot hold
              more than one demat account. To learn more about BSDA,{" "}
              <a href="#">click here</a>.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <h2 className="fs-3 mb-3">Charges for optional value added services</h2>
          <div className="col-12">
            <table className="table table-sm table-bordered align-middle">
              <thead>
                <tr>
                  <th>Service</th>
                  <span>
                    <th>Billing Frquency</th>
                  </span>
                  <span>
                    <th>Charges</th>
                  </span>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tickertape</td>
                  <td>
                    <span>Monthly / Annual</span>
                  </td>
                  <td>
                    <span>Free: 0 | Pro: 249/2399</span>
                  </td>
                </tr>

                <tr>
                  <td>Smallcase </td>
                  <td>
                    <span>Per transaction </span>
                  </td>
                  <td>
                    <span>Buy & Invest More: 100 | SIP: 10</span>
                  </td>
                </tr>

                <tr>
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 500 | Personal: Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div></div>
        </div>

        <div className="container my-5">
  <div className="row mb-2">
    <div className="col-12">
      <h2 className="fs-3">Charges explained</h2>
    </div>
  </div>

  <div className="row g-4 small text-muted">
  <div className="col-lg-6 p-5 col-md-12">
    <h3 className="fs-6">Securities/Commodities transaction tax</h3>

    <p>
      Tax by the government when transacting on the exchanges. Charged as above
      on both buy and sell sides when trading equity delivery. Charged only on
      selling side when trading intraday or on F&O.
    </p>

    <p>
      When trading at Zerodha, STT/CTT can be a lot more than the brokerage we
      charge. Important to keep a tab.
    </p>

    <h3 className="fs-6">Transaction/Turnover Charges</h3>

    <p>
      Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
    </p>

    <p>
      has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000
      per crore w.e.f 01.01.2016.
    </p>

    <p>
      BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per
      crore of gross turnover.
    </p>

    <p>
      BSE has revised transaction charges for group A, B and other non
      exclusive scrips at ₹375 per crore of turnover on flat rate basis.
    </p>

    <p>
      has revised transaction charges in M, MT, TS and MS groups to ₹275 per
      crore of gross turnover.
    </p>

    <h3 className="fs-6">Call & trade</h3>

    <p>
      Additional charges of ₹50 per order for orders placed through a dealer.
    </p>

    <h3 className="fs-6">Stamp charges</h3>

    <p>
      Stamp charges by the Government of India as per the Indian Stamp Act of
      1899.
    </p>

    <h3 className="fs-6">NRI brokerage charges</h3>

    <p>
      For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O.
    </p>

    <p>
      a PIS account, 0.5% or ₹200 per executed order for equity.
    </p>

    <p>₹500 + GST as yearly account maintenance charges (AMC).</p>

    <h3 className="fs-6">Account with debit balance</h3>

    <p>
      If the account is in debit balance, any order placed will be charged ₹40
      per executed order.
    </p>

    <h3 className="fs-6">
      Charges for Investor's Protection Fund Trust (IPFT) by NSE
    </h3>

    <ul>
      <li>Equity and Futures - ₹10 per crore + GST.</li>
      <li>Options - ₹50 per crore + GST.</li>
      <li>Currency - ₹0.05 per lakh + GST.</li>
      <li>Margin Trading Facility (MTF)</li>
    </ul>

    <ul>
      <li>MTF Interest: 0.04% per day.</li>
      <li>MTF Brokerage: 0.3% or ₹20 per order.</li>
      <li>MTF pledge charge: ₹15 + GST per ISIN.</li>
    </ul>
  </div>

  <div className="col-lg-6 p-5 col-md-12">
    <h3 className="fs-6">GST</h3>

    <p>
      Tax levied by the government on the services rendered. 18% of (brokerage
      + SEBI charges + transaction charges).
    </p>

    <h3 className="fs-6">SEBI Charges</h3>

    <p>
      Charged at ₹10 per crore + GST by Securities and Exchange Board of India.
    </p>

    <h3 className="fs-6">DP (Depository participant) charges</h3>

    <p>
      ₹15.34 per scrip charged when stocks are sold, irrespective of quantity.
    </p>

    <p>
      Female demat account holders get a discount of ₹0.25 per transaction.
    </p>

    <p>
      Debit transactions of mutual funds & bonds get an additional discount.
    </p>

    <h3 className="fs-6">Pledging charges</h3>

    <p>₹30 + GST per pledge request per ISIN.</p>

    <h3 className="fs-6">AMC (Account maintenance charges)</h3>

    <p>For BSDA demat account: Zero charges if holding value is less than ₹4L.</p>

    <p>
      For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly.
    </p>

    <h3 className="fs-6">Corporate action order charges</h3>

    <p>₹20 + GST charged for Console orders.</p>

    <h3 className="fs-6">Off-market transfer charges</h3>

    <p>₹25 per transaction.</p>

    <h3 className="fs-6">Physical CMR request</h3>

    <p>
      First request is free. ₹20 + ₹100 courier + GST thereafter.
    </p>

    <h3 className="fs-6">Payment gateway charges</h3>

    <p>₹9 + GST (not on UPI).</p>

    <h3 className="fs-6">Delayed Payment Charges</h3>

    <p>18% yearly or 0.05% per day on debit balance.</p>

    <h3 className="fs-6">
      Trading using 3-in-1 account with block functionality
    </h3>

    <ul>
      <li>Delivery & MTF Brokerage: 0.5%</li>
      <li>Intraday Brokerage: 0.05%</li>
    </ul>
  </div>
</div>


  <div>
    <h3 className="fs-6">Disclaimer</h3>
<p className="small text-muted">
  For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
</p>

  </div>
</div>

      </div>
    </div>
  );
}

export default Brokerage;
