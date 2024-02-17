function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="/company-website-reactjs/img/rxh.png.png" className="img-fluid" style={{ height: "300px", width: "900px" }} />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              Within our economy-class taxi services, we wholeheartedly embody our motto:<strong>"Parisian Elegance on Wheels: Your Journey, Our Pride!"</strong>We are committed to providing an exceptional travel experience, where comfort blends with Parisian elegance, all at advantageous rates. Every journey with us becomes a celebration of your path, and we take pride in placing your satisfaction at the core of our service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
