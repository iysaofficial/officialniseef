import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import data
const Gambar = "/assets/images/News/yoo.png";

const CompNews9 = () => {
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
                FT Undip and IYSA Successfully Hold the 5th AISEEF
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
                The 5th Asean Innovative Science Environmental And Entrepreneur
                Fair (AISEEF) was successfully held at Prof. Sudarto Building,
                S.H., Undip Tembalang campus, Semarang (5/2). AISEEF is one of
                the annual events of the Indonesian Young Scientist Association
                (IYSA) in collaboration with the Faculty of Engineering,
                Diponegoro University (Undip). The 2024 AISEEF was attended by
                447 teams from 17 countries, including United Arab Emirates,
                Kazakhstan, Romania, Iran, Greece, Turkey, Macedonia, Portugal,
                United States, South Korea, China, Thailand, Singapore, Hong
                Kong, Philippines, Malaysia, and Indonesia.
              </p>

              <p class="ratkankir">
                All participants who competed were divided into 152 teams
                offline and 295 teams online. Including one of them is a joint
                student participant from Diponegoro University who collaborated
                with Andalas University. The five of them are friends since high
                school, namely Almas Fauziyah (Chemical Engineering FT Undip
                Batch 2022); Muhammad Imam Muzaki (Biotechnology FSM Undip Batch
                2022); Rafi Maulana, M. Nandito Al Habsy and Reza Ramadhana from
                the Faculty of Medicine UNAND Batch 2022 won the Gold Award and
                Special Award in the form of free registration to take part in
                the next IYSA event at the International Commission Young
                Romania in the Social Science category with the GE UDIN (Early
                Childhood Educational Game) project as a healthy clean-life
                behavior education and preventive of COVID 19 dangers in early
                childhood.
              </p>

              <p class="ratkankir">
                &quot;Alhamdulillah, I am very grateful and happy because of the
                cooperation factor between different universities, precisely
                involving 2 universities so that bilateral relations are
                established which makes an achievement in winning 2 nominations.
                Especially very happy to be able to come to Undip with a warm
                welcome that is totality and we as students from Andalas
                University really appreciate Undip&apos;s friends apart from
                being a team and also as the organizer of AISEEF, &apos;impressed
                Nandito.
              </p>

              <p class="ratkankir">
                &quot;We hope that after receiving the Special Award for free
                registration to the International Commission Young Romania,
                there will be optimization of GE UDIN by continuing to establish
                bilateral relationships between universities where previously
                from one university to another. bilateral relationship between
                universities where previously from one school, especially
                because it was the first time working together to participate in
                the competition, then exchange information or more precisely
                exchange knowledge, &quot;he added. While compactly exclaiming
                jargon as a closing statement, &quot;Guardians: From Us To The
                Next Generation&quot;.
              </p>

              <p class="ratkankir">
                This special AISEEF 2024 event was also attended by participants
                from Thailand. The first AISEEF was held in 2020 in Surabaya
                offline and was attended by approximately 200 teams. In the
                second year, AISEEF was forced to be held online due to the
                pandemic that hit the world. Entering the 3rd year (2022) until
                now in 2024 the AISEEF event can be held in a hybrid manner.
              </p>

              <p class="ratkankir">
                The series of AISEEF events began on February 2 with an opening
                ceremony followed by judging for participants who participated
                in the online competition, then on the second day (3/2) an
                offline competition judging session was held. On the 3rd day
                there were 3 activities carried out, namely Excursion or
                educational tour, Inventors Talk, and also the announcement of
                winners for participants who passed the online competition.
                During the educational tour session, the participants from
                Thailand were invited to visit several tourist attractions in
                Semarang, including Semarang Celosia Flower Park, Sam Poo Kong
                Temple, Lawang Sewu, and ended with buying souvenirs at the 52
                Semarang Center for Souvenirs.
              </p>
              <p class="ratkankir">
                The closing ceremony of AISEEF was an announcement session of
                the winners for offline participants, where a variety of prizes
                have been prepared in addition to Gold, Silver, and Bronze
                medals including Special Award from IYSA, NWERA Association
                Romania, and Doza Skreja Macedonia, awards for teams that make
                the best poster, best work, best presentation, and best booth.
                Not to forget the IYSA Semi Grand Award where teams who get this
                award will be rewarded with free registration to participate in
                the next IYSA event, and two main prizes, namely the IYSA Grand
                Prize and the IYSA Grand Award.
              </p>
              <p class="ratkankir">
                IYSA Grand Prize award winners at AISEEF 2024 are: MTs Negeri 1
                Sidoarjo who received Rp. 750,000 in cash; SMP Negeri 3 Denpasar
                received Rp. 1,000,000 in cash; SMA Negeri 2 Palangka Raya/CBSO
                also received Rp. 1,500,000 in cash. Meanwhile, the top award at
                this event, the IYSA Grand Award was given to SMP SAINS
                AL-QUR&apos;AN WAHID HASYIM YOGYAKARTA where they received a Fully
                Funded prize to participate in the 2024 WYIIA event (terms and
                conditions apply). (DHW-Humas)
              </p>
              <p>
                Source :
                <Link
                  href="https://www.undip.ac.id/post/33493/ft-undip-dan-iysa-sukses-gelar-aiseef-ke-5.html"
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
export default CompNews9;
