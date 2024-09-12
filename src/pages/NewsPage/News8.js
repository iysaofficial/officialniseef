import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import data
const Gambar = "/assets/images/News/smpn1cilacap.jpg";

const CompNews8 = () => {
  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
          <PageTitleNews
            motherMenu="Media Coverage"
            activeMenu="This Lamongan Student Wins Silver Medal at the
              International Science Innovation Event"
          />
        </div>
      </div>
      <section class="News-detail">
        <div class="container">
          <div class="row">
            <div
              class="berita col-lg-9 mx-auto col-md-11 col-12 my-5 pt-3"
              data-aos="fade-up"
            >
              <h3 class="mb-3 text-center text-capitalize">
                SMP Negeri 1 Cilacap wins silver medal in 2024 AISEEF event
              </h3>

              <div class="full-image text-center mb-5" data-aos="zoom-in">
                <Image
                  src={Gambar}
                  class="img-fluid"
                  alt="GAGAL"
                  width={600}
                  height={100}
                />
              </div>

              <p class="ratkankir">
                AISEEF (ASEAN Innovative Science Enviromental and Entrepreneur
                Fair) is an international competition organized by Diponegoro
                University (UNDIP) in collaboration with the Indonesian Young
                Scientist Association (IYSA). The 2024 competition was the 5th
                AISEEF event which took place in a hybrid manner on February
                2-5, 2024 in Semarang, Central Java. AISEEF was attended by 457
                teams from 17 countries, namely Indonesia, USA, Thailand,
                Turkey, United Arab Emirates, Malaysia, Philippines, Kazakhstan,
                Iran, China, Romania, Singapore, Korea, Greece, Mecedonia,
                Portugal and Hong Kong.
              </p>

              <p class="ratkankir">
                In this prestigious event, SMP Negeri 1 Cilacap donated a Silver
                Medal for Indonesia. The SMP Negeri 1 Cilacap team consisting of
                Talitha Qonita Rahman, Athifa Hapsari Anugrah Mulia, Callysta
                Rahma Putri, Chintya Ayu Maheswari, and Maqrifatika Puspa Hanum
                raised the research title &quot;The Impact of Teluk Penyu Beach
                Reclamation on The Level of Damage to Benteng Pendem&quot; which
                presents research results on the impact of Teluk Penyu Beach
                reclamation on the level of damage to the Benteng Pendem site.
              </p>

              <p class="ratkankir">
                The Youth Scientific Group (KIR) of SMP Negeri 1 Cilacap
                explained that the reclamation of Penyu Bay Beach has led to the
                phenomenon of illegal settlers who deliberately damaged the
                Pendem Fort building for the sake of making their homes. The
                Head of SMP Negeri 1 Cilacap, Kasidin, S.Pd. was proud that his
                students won the prestigious international award.
              </p>

              <p class="ratkankir">
              &quot;Alhamdulillah, this is an extraordinary achievement for Cilacap
                Regency. congratulations and success to the children of SMP
                Negeri 1 Cilacap who have brought the name of the school to the
                international level,&quot; he said. Kasidin added that all of these
                achievements cannot be separated from the support of all
                teachers and employees at SMP Negeri 1 Cilacap and the prayers
                of all the people of Cilacap Regency and are expected to
                motivate children in Cilacap to excel.
              </p>

              <p>
                Source :
                <Link
                  href="https://cilacapkab.go.id/v3/smp-negeri-1-cilacap-raih-medali-perak-dalam-ajang-aiseef-tahun-2024/"
                  legacyBehavior
                >
                  <a target="_blank" rel="noreferrer noopener">
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
export default CompNews8;
