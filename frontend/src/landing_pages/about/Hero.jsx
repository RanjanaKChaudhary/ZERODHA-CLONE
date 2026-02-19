function Hero() {
  return (
    <div className="container px-5">
      <div className="row mt-5 mb-5 padding-10 text-muted">
        <h1 className="fs-3 text-center mt-5 mb-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row  border-top text-muted">
        <div className="col-6 mt-5 px-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology.
          </p>

          <p>
            We named the company Zerodha, a combination of Zero and "Rodha", the
            Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 mt-5 px-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="">Rainmatter,</a> our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day.Catch up on the
            latest updates on our blog or see what the media is saying about us
            or learn more about our business and product philosophies.
          </p>
        </div>
      </div>

      <div className="container px-5">
        <div className="row mt-5 border-top">
          <h1 className="text-center mt-5 mb-4 fs-3 text-muted">People</h1>
          <div className="col-6 mt-5 text-center text-muted">
            <img
              src="media/images/profile.jpeg"
              alt="CEO Image"
              className="rounded-circle"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
            <h5 className="mt-3">Ranjana Chaudhary</h5>
            <h6 >Founder,CEO</h6>
          </div>

          <div className="col-6 mt-5 padding-5">
            <p>
              Ranjana bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader.</p>

              <p>Today, Zerodha has changed the landscape of the Indian broking
              industry. He is a member of the SEBI Secondary Market Advisory
              Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              
              <p>Playing football is her zen.</p>
              <p>Connect on <a href="" >Homepage / TradingQnA / Twitter</a></p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
