import Seo from "@/component/common/Seo";
import Screen from "@/component/common/Screen";
import { Col, Container, Row } from "react-bootstrap";
import Destinations from "@/component/Screens/Home/Destinations";
import SearchEngine from "@/component/Screens/Home/SearchEngine";
import Features from "@/component/Screens/Home/Features";
import TravelOffers from "@/component/Screens/Home/TravelOffers";



export default function Home() {
  return (
    <>
      <Seo />
      <Screen>
        {/* <Breadcrumb /> */}

        <section>
          <SearchEngine />
        </section>

        <section>
          <Destinations />
        </section>



        <section>
          <Features />
        </section>
        <section style={{  background :"whitesmoke" , padding : "5%" , marginTop : 100}}>
          <Container>
            <Row>

              <div>

                <h2> Descargo de responsabilidad </h2>
              </div>

              <Col>
                <h5 style={{ fontWeight: "normal" }}>
                  Reservas Baratas no está afiliada a ninguna aerolínea, proveedor de viajes ni entidad gubernamental.
                </h5>
                <h5 style={{ fontWeight: "normal" }}>
                  Somos un agregador independiente que conecta a los usuarios con ofertas de vuelos, opciones de reserva y servicios relacionados con viajes.
                </h5>
              </Col>
            </Row>
          </Container>
        </section>
        <section style={{ marginTop: "150px" }}>
          <TravelOffers />
        </section>



      </Screen>
    </>
  );
}
