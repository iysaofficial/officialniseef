import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const online2025 = () => {
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
              <h3>Choose based on the Level of the Online event you are participating in</h3>
            </div>
            <div className=" wrapper-btn text-center">
              <a
                href="https://drive.google.com/file/d/1TgQ84v7DGCiVaRXxSQ-7y7Wav51w5LCd/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                University{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1_vyA-DOp1c09swXDsmzpq1KRIqJHxZNT/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Senior High School{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1vbO-XV2YKHYFBkbzfjsXFxx6WXYbfPDS/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Junior High School{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1aSVe59pyrib8iSIbRtXEG1pO-sAOsWeK/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Elementary{" "}
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default online2025;
