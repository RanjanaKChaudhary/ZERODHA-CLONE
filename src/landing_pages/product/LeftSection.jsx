function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="p-4">
            <img src={imageURL} />
          </div>
        </div>

        <div className="col-2"></div>

        <div className="col-5 mt-5">
          <div className="p-4">
            <h2 style={{ color: "#2f2e2e" }}>{productName}</h2>
            <p className="mt-4">{productDescription}</p>
            <a href={tryDemo}>
              tryDemo<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              learnMore<i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <div className="mt-4">
                <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg" />
                </a>
                <a href={appStore} style={{marginLeft:"50px"}}>
                    <img src="media/images/appstoreBadge.svg" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
