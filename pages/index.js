import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Seo from "@/component/common/Seo";
import Screen from "@/component/common/Screen";
import Breadcrumb from "@/component/common/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";



export default function Home() {
  return (
    <>
    <Seo />
        <Screen>
        <Breadcrumb />
          <section>
            
          </section>
          <section>
            <Container>
              <Row>
                <Col>
                  <div>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Screen>
    </>
  );
}
