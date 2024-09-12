import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function HomeRegist() {
  return (
    <>
      <Header />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registration</h1>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto">REGISTRATION FORM</h1>
              <h3 className="mx-auto mt-5 mb-2">
                Choose Categories Participant for Registration AISEEF 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="/registration/indonesiaparticipants" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5">
                Indonesia Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="/registration/internationalparticipants" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5">
              International Participant{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
