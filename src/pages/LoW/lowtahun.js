import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";

const bnr1 = "/assets/images/banner/bnr4.jpg";

const lowtahun = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="List of Winners" activeMenu="List of Winner" />
        </div>
        {/* <!-- inner page banner END --> */}

        <div class="container page">
          <div className="text-center">
            <h3>Select by the year of the event you are participating in</h3>
          </div>
          <div className=" wrapper-btn text-center">
            <Link href="/LoW/2024/kategori" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2024{" "}
              </a>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1yDfiFMAUrV8GKDapO9iwGMsm6dRnLWB5/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2023{" "}
              </a>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qXpDh4KdiyINGBL7nQFxZNFIa9OL-7k0/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                2022{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default lowtahun;
