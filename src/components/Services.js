import Card from "../components/Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">OUR FARES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                <div className="col-md-4 mb-2">
                  <Card
                    title="Paris-Paris"
                    img="card1.png"
                    text={
                      <ul>
                        <li><strong>Pickup Address:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Destination:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Price:</strong>  From 35 €</li>

                      </ul>
                    }
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <Card
                    title="Paris-CDG"
                    img="cdg.png"
                    text={
                      <ul>
                        <li><strong>Pickup Address:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Destination:</strong> Charles de gaulle</li>
                        &nbsp;
                        <li><strong>Price:</strong>  From 75 €</li>

                      </ul>
                    }
                  />
                </div>                
                <div className="col-md-4 mb-2">
                  <Card
                    title="Paris-Orly"
                    img="ory.png"
                    text={
                      <ul>
                        <li><strong>Pickup Address:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Destination:</strong> Orly</li>
                        &nbsp;
                        <li><strong>Price:</strong>  From 59 €</li>

                      </ul>
                    }
                  />
                </div>                
                <div className="col-md-4 mb-2">
                  <Card
                    title="Paris-Beauvais"
                    img="beauvais.png"
                    text={
                      <ul>
                        <li><strong>Pickup Address:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Destination:</strong> Beauvais</li>
                        &nbsp;
                        <li><strong>Price:</strong>  From 169 €</li>

                      </ul>
                    }
                  />
                </div>                
                <div className="col-md-4 mb-2">
                  <Card
                    title="Paris-Disney"
                    img="Disneyland.png"
                    text={
                      <ul>
                        <li><strong>Pickup Address:</strong> Paris</li>
                        &nbsp;
                        <li><strong>Destination:</strong> Disney</li>
                        &nbsp;
                        <li><strong>Price:</strong> From 95 €</li>

                      </ul>
                    }
                  />
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
