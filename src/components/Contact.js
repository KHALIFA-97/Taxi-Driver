import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
function Contact() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="contact"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="/company-website-reactjs/img/sn.png" className="img-fluid" style={{ height: "300px", width: "300px" }} />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">CONTACT US</h2>
             <p className="main-p">
               <ul>
                 <li>
                   <strong><FaEnvelope /> E-mail :</strong> ishaksaidi@gmail.com
                 </li>
                 &nbsp;
                 <li>
                   <strong><FaPhone /> Phone :</strong> +33 07 25 12 36
                 </li>
                 &nbsp;
                 <li>
                   <strong><FaWhatsapp /> WhatsApp :</strong> +33 07 25 12 36
                 </li>
               </ul>
             </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
