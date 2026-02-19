
export default function Hero(){
    return (
        
        <div className="container">
            <div className="row">
            
                <div className=" col text-center my-5  ">
                    <h1 className="fs-3">Charges</h1>
                    <p className="text-muted  py-2 fs-5" style={{color:"rgb(233, 230, 230)"}}>List of all charges and taxes</p> 
                </div>
            </div>

            <div className="row p-3 text-center">
                
                    <div className="col-md-4 p-3">
                        <div className="p-5"><img src="media/images/pricing-eq.svg" alt="Image"/></div>
                        <h2>Free equity delivery</h2>
                        <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="p-5"><img src="media/images/other-trades.svg" alt="Image"/></div>
                        <h2>Intraday & F&O trades</h2>
                        <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="p-5"><img src="media/images/pricing-eq.svg" alt="Image"/></div>
                        <h2>Free direct MF</h2>
                        <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            
        </div>
)
};  