import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import gambar
const Gambar = "/assets/images/News/et.png";

const CompNews6 = () => {
  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
          <PageTitleNews
            motherMenu="Media Coverage"
            activeMenu="This Lamongan Student Wins Silver Medal at the International Science Innovation Event"
          />
        </div>
      </div>
      <section className="News-detail">
        <div className="container">
          <div className="row">
            <div
              className="berita col-lg-9 mx-auto col-md-11 col-12 my-5 pt-3"
              data-aos="fade-up"
            >
              <h3 className="mb-3 text-center text-capitalize">
                ITB and Unsri Team Take 3rd Place at AISEEF 2024 with Learning
                Media Platform
              </h3>

              <div className="full-image text-center mb-5" data-aos="zoom-in">
                <Image
                  src={Gambar}
                  className="img-fluid"
                  alt="GAGAL"
                  width={600}
                  height={100}
                />
              </div>

              <p class="ratkankir">
                The Bandung Institute of Technology (ITB) team, in collaboration
                with Sriwijaya University (UNSRI), won a bronze medal in the
                ASEAN Innovative Science, Environmental, And Entrepreneur Fair
                (AISEEF) 2024 competition. The competition was organized by the
                Indonesian Young Scientist Association (IYSA) in collaboration
                with the Indonesia International Institute for Life-Sciences
                (I3L). The final presentation of this agenda was held on Friday
                (2/2/2024)..
              </p>

              <p class="ratkankir">
                The team members are Irfan Walhidayah, M Furqan Nazuli, Yuli
                Maulani (School of Electrical Engineering and Informatics ITB),
                Triana Manalu (School of Architecture Planning and Policy
                Development ITB) and Izzati Adha Pratitis (Nursing Science
                Sriwijaya University). The work they produced was titled &quot;BLS
                Sriwijaya: Innovation of Asynchronous Learning Media Basic Life
                Support as an Effort to Improve the Intellectual Capacity of
                Indonesian Students.&quot;
              </p>

              <p class="ratkankir">
                BLS Sriwijaya is a platform that aims to improve nursing
                students ability in basic life support (BHD) by utilizing
                information and communication technology. The work explains that
                the utilization of information and communication technology is
                very important in improving the ability of nursing students to
                overcome emergency situations such as respiratory arrest and
                cardiac arrest. They created a website-based learning media
                innovation that allows asynchronous learning, which allows
                self-learning. This research uses the Research and Development
                (R&D) method with the ADDIE model(Analysis, Design, Development,
                Implementation, Evaluation).
              </p>

              <p class="ratkankir">
                In-depth research on BHD shows that nursing students knowledge
                is influenced by the learning they participate in. Web-based
                learning media allows repeated access, anytime and anywhere,
                according to students needs. This is particularly important as
                nurses are often the first to attend and help patients in
                emergency conditions inside and outside the hospital.
              </p>

              <p class="ratkankir">
                The BLS Sriwijaya platform, which was developed using
                technologies such as Visual Studio Code, Trello, Adobe
                Photoshop, Figma, Draw.io, Miro, and Laravel Framework, has
                services to register, login, visit the course page, class page,
                exam page, and home page. Testing shows that this website
                prototype has a very high level of feasibility and usability,
                and provides a satisfying user experience.
              </p>

              <p class="ratkankir">
                Not only that, the team has a development plan that includes
                expanding the website&apos;s functions, improving the midwifery
                module, establishing a BLS forum, developing a mobile
                application, and various additional features such as live
                practice videos and award certificates. They also plan to
                develop a mobile application called &quot;My BLS Sriwijaya&quot; to make
                it more accessible to users.
              </p>

              {/* Konten lain */}

              <p>
                Source :{" "}
                <Link href="https://www.itb.ac.id/berita/kolaborasi-membawa-kemenangan-tim-itb-dan-unsri-raih-juara-3-aiseef-2024-dengan-platform-media-pembelajaran/60519" legacyBehavior>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Click Here
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CompNews6;
