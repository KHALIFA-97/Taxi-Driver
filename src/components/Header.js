import React from 'react';

function Header() {
  return (
    <header>
      <video src="/company-website-reactjs/video.mp4" loop autoPlay muted></video>
      <h1>Parisian Elegance on Wheels: Your Journey, Our Pride!</h1>
        <div className="row">
          <h2 className="call-us">Call Us : &ensp;+33 25 89 65 96 &nbsp;<i className="fa fa-phone" style={{ fontSize: '30px', color: 'white' }}></i></h2>
        </div>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
