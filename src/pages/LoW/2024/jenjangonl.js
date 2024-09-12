import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const jenjangonl = () => {
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
                href="https://drive.google.com/file/d/17dfEHg6yaPvJe4wLIqjZhXBMaw7rUBsp/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                University{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1r_EG9Y2m4Ij8q-CpU8WLvNNdt5kyVJf9/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Senior High School{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1QC7qmjjm1lA6y8C5h58oOcCqbPeAeEel/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Junior High School{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1jhNbs982iy7_kgb5tBaPKeJa_f7H6IZz/view?usp=sharing"
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

export default jenjangonl;
