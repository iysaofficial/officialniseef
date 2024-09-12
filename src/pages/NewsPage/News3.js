import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import data
const Gambar = "/assets/images/News/MAN1Malang.WebP";

const CompNews3 = () => {
  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
          <PageTitleNews
            motherMenu="Media Coverage"
            activeMenu="MAN 1 Malang City Wins Gold Medal at AISEF Southeast Asia
              Event"
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
                MAN 1 Malang City Wins Gold Medal at AISEF Southeast Asia Event
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
                Friday, February 10, 2023, the Faculty of Engineering,
                Diponegoro University collaborated with the Indonesian Young
                Scientist Association (IYSA) in organizing an event titled ASEAN
                Innovative Science Environmental and Entrepreneur Fair (AISEEF)
                2023. The grand event that brought together various young
                researchers from several countries officially began with an
                opening ceremony held at the Engineering Hall, 5th Floor Dean
                Building of the Faculty of Engineering. In the ceremony, several
                important figures were present both offline and online to give
                remarks to the participants who participated in the event which
                this year is in its fourth year of implementation. The
                participants not only came from Indonesia, but also from other
                countries such as India, Thailand, South Korea, Iran, Malaysia,
                Vietnam, the United States, Bulgaria, Pakistan, Bangladesh, the
                Philippines, Kazakhstan, North Macedonia, and Turkey.A total of
                368 participants from 15 countries participated in this year&apos;s
                AISEEF.
              </p>

              <p class="ratkankir">
                The event began with singing the song Indonesia Raya, then
                continued with several speeches. The first speech came from the
                chairman of the Indonesian Young Scientist Association (IYSA),
                Deni Irawan, M.Pd. In his speech, he expressed his gratitude to
                various parties who have supported the implementation of AISEEF
                2023, especially the Faculty of Engineering, Diponegoro
                University, who have provided a lot of assistance for the smooth
                running of the event. In addition, he welcomed participants who
                participated both offline and online in the event which first
                started in 2020.
              </p>

              <p class="ratkankir">
                The second speech was delivered by the chairman of the Indian
                Innovators Association (IIA), Raman Teja Venigalla. In his
                offline speech, Raman Teja expressed his gratitude to IYSA and
                the Faculty of Engineering, Diponegoro University for inviting
                young researchers, especially those from India, to actively
                participate in the AISEEF 2023 event. For him, the AISEEF event
                can be a place for young researchers to develop themselves and
                share knowledge with fellow young researchers so that new useful
                innovations can be created.
              </p>

              <p class="ratkankir">
                The next speech was delivered by the Dean of the Faculty of
                Engineering, Diponegoro University, Prof. Ir. M. Agung Wibowo,
                M.M, M.Sc, Ph.D. In his speech, he welcomed the participants who
                had come all the way from various directions to Semarang City.
                He said that the Faculty of Engineering is very proud of the
                implementation of AISEEF 2023. He hopes that the participants
                can show their research results and get the best in this event.
              </p>

              <p class="ratkankir">
                The event then continued with the beating of the gong as an
                official sign of the opening of the AISEEF 2023 event. Prof.
                Dr.nat.tech. Siswo Sumardiono, ST, MT, Vice Dean of Academic and
                Student Affairs of the Faculty of Engineering, Diponegoro
                University, became the gong beater with IYSA chairman Deni
                Irawan, M.Pd. In the opening ceremony, not only contained
                remarks, but there were also several performances. The first
                performance came from SMA Negeri 3 Semarang who sang a song from
                Raisa and Isyana Sarasvati entitled &quot;Anganku Anganmu&quot;. The
                performance was enough to amaze many participants who were
                present at the time. After the performance, the event continued
                with the introduction of the AISEEF 2023 Jury and remarks from
                the chairman of the AISEEF 2023 Jury, Dr. Soehardjoepri, M.Si.
              </p>

              <p class="ratkankir">
                After the presentation about the Jury, the event continued with
                a performance from SMA Negeri 1 Semarang who sang a song from
                Chrisye and Waldjinah entitled &quot;Kala Cinta Menggoda&quot;. After the
                participants were satisfied to enjoy these performances, the
                opening ceremony was officially closed with the reading of the
                rules that apply during AISEEF 2023. AISEEF 2023 will last for 5
                days starting from February 10-14, 2023 at the Faculty of
                Engineering, Diponegoro University. The exhibition will take
                place from February 11-12, 2023 at the Diponegoro University
                Shared Parking Building. Meanwhile, the closing ceremony will be
                held at the Engineering Hall of the Faculty of Engineering on
                February 14, 2023.
              </p>
              <p>
                Source :
                <Link
                  href="https://jatim.kemenag.go.id/berita/520459/jatim.kemenag.go.id"
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

export default CompNews3;
