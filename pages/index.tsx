import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Card = (props: any) => <div {...props}>{props.children}</div>;
const HeaderButton = (props: any) => (
  <div
    style={{
      color: "#444444",
      textDecoration: "none",
      padding: "8px 10px",
      display: "block",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    }}
  >
    {props.children}
  </div>
);
const Separator = () => (
  <hr
    style={{
      margin: "18px 0",
      border: 0,
      borderTop: "1px solid #eeeeee",
      borderBottom: "1px solid #ffffff",
    }}
  />
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          height: "84px",
          width: "100%",
          position: "sticky",
        }}
      >
        <div style={{ height: "80px", display: "flex" }}>
          <img
            style={{ margin: "10px", marginBottom: "0px" }}
            height="58px"
            src="./logo.png"
          />
          <div
            style={{
              height: "80px",
              backgroundImage: "url(../header-background.png)",
              backgroundRepeat: "repeat-x",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img height="80px" src="../banner.png" />
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "4px", backgroundColor: "#800000" }}
        />
              <div
        style={{
          width: "100%",
          minWidth: "1056px",
          height: "34px",
          boxShadow: "0px 3px 3px rgb(0 0 0 / 25%)",
          backgroundColor: "#EDEDED",
          borderBottom: "1px solid #C4C4C4",
          display: "flex",
        }}
      >
        <HeaderButton>Home</HeaderButton>
        <HeaderButton>Careers</HeaderButton>
        <HeaderButton>Investors</HeaderButton>
        <HeaderButton>Non-frens</HeaderButton>
      </div>

      </div>
      
      <main className={styles.main}>
        <Card
          style={{
            backgroundColor: "white",
            width: "50%",
            border: "1px solid #C4C4C4",
            boxShadow: "1px 1px 5px #888888",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          Fren Capital is a quantitative trading company dedicated to producing
          exceptional returns by adhering to mathematical and statistical
          methods.
          <Separator />
          <div>
            Long Island
            <br />
            Fren Capital LLC
            <br />
            600 Route 25A
            <br />
            East Setauket, New York 11733
            <br />
            USA
          </div>
          <Separator />
          <div>
            Long Island
            <br />
            Fren Capital LLC
            <br />
            600 Route 25A
            <br />
            East Setauket, New York 11733
            <br />
            USA
          </div>
        </Card>
        <Card
          style={{
            marginTop: 25,
            backgroundColor: "white",
            width: "50%",
            border: "1px solid #C4C4C4",
            boxShadow: "1px 1px 5px #888888",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          Copyright ?? 2022 Fren Capital LLC. All rights reserved. {"\n"}
          www.frencapital.com is the the only official Fren Capital LLC website.
          Other websites purporting to be associated with our firm or our funds
          are non-frens.
        </Card>
      </main>
    </div>
  );
}
