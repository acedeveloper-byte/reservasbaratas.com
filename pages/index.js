import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Seo from "@/component/common/Seo";
import Screen from "@/component/common/Screen";
import Breadcrumb from "@/component/common/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import Destinations from "@/component/Screens/Home/Destinations";
import FlightCountries from "@/component/Screens/Home/FlightCountries";
import LookFlight from "@/component/Screens/Home/LookFlight";
import SearchEngine from "@/component/Screens/Home/SearchEngine";



export default function Home() {
  return (
    <>
      <Seo />
      <Screen>
        {/* <Breadcrumb /> */}

        <section>
          <SearchEngine/>
        </section>

        <section>
          <Destinations />
        </section>
        <section>
          <FlightCountries />
        </section>
        <section>
          <LookFlight />
        </section>






      </Screen>
    </>
  );
}
