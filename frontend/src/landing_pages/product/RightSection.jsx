function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-md-5">
          <div className="pe-4">
            <h2 className="mb-4" style={{ color: "#2f2e2e" }}>
              {productName}
            </h2>

            <p className="text-muted mb-4">
              {productDescription}
            </p>

            <a href={learnMore} className="text-decoration-none fw-medium">
              Learn more <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>

            <div className="mt-4 d-flex gap-4">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  height="40"
                />
              </a>

              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-7 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
