import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const kategori = () => {
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
            <h3>
              Choose based on the Category of the event you are participating in
            </h3>
          </div>
          <div className=" wrapper-btn text-center">
            <Link
              href="https://drive.google.com/file/d/1VEN5ToFoa8jdB9FpNeeXGIn64v7MPsL6/view?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Special Award{" "}
              </a>
            </Link>
            <Link href="/LoW/2024/jenjangofl" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                AISEEF OFFLINE{" "}
              </a>
            </Link>
            <Link href="/LoW/2024/jenjangonl" legacyBehavior>
              <a
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                AISEEF ONLINE{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default kategori;
