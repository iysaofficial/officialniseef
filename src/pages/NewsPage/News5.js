import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import data
const Gambar = "/assets/images/News/PelajarLamongan.WebP";

const CompNews5 = () => {
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
                This Lamongan Student Wins Silver Medal at the International
                Science Innovation Event
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
                Having successfully won a gold medal at the Organization For
                Creativity Innovation and Invention Promotion (OCIIP) World IP
                Fair 2021 in Nigeria, this Lamongan student has excelled again.
                This time, he won the Silver Medal at the 2022 Asian Innovative
                Science Environmental and Entrepreneur Fair (AISEEF).
              </p>

              <p class="ratkankir">
                The student with a myriad of achievements is Mohammad Haryo
                Mukti Wibowo, a grade VIII student of SMP Negeri 2 Lamongan who
                succeeded in eliminating 508 participants from 22 countries
                through the scientific work of teenagers LaDoS Edible Drinking
                Straw. Ryo, as this smart student is usually called, won a
                Silver Medal at the 2022 Asian Innovative Science Environmental
                and Entrepreneur Fair (AISEEF) event held by the Faculty of
                Engineering, Diponegoro University, Semarang.
              </p>

              <p class="ratkankir">
                &quot;This event is held online and offline. The selection was
                carried out step by step from February 2 to 5,&quot; Mohammad
                Haryo Mukti Wibowo told reporters on Thursday (10/2/2022). Ryo
                revealed that he could win the Silver Medal at the international
                event by utilizing Sea Wine or Latoh and Dragon Fruit Skin.
                These two ingredients, he uses as an environmentally friendly
                drink straw.
              </p>

              <p class="ratkankir">
                &quot;This idea came about because of the amount of plastic
                waste that makes the environment damaged. Plastic waste is
                difficult to decompose in a short time, while organic waste such
                as dragon fruit skin is also rarely used optimally,&quot;said
                Ryo. Reflecting on this, said Ryo, Team Sneda Innovation Club
                (SIC) then tried to provide a solution by making environmentally
                friendly straws that can be eaten or decomposed in the short
                term. Sea grapes, according to Ryo, are used as straw coatings
                so that they are not quickly damaged when exposed to water or
                used for drinking.
              </p>

              <p class="ratkankir">
                &quot;Sea grapes have a function as a flavor neutralizer and
                also as a straw coating to make it more durable,&quot; said Ryo.
                What Ryo achieved also received appreciation from his school.
                The Principal of SMPN 2 Lamongan Yayuk Setia Rahayu admitted
                that he was proud of Ryo who for the second time succeeded in
                making the school, Lamongan and the nation proud. For Ryo&apos;s
                achievements, Yayuk hopes that this can make more enthusiasm for
                the school in improving coaching in the field of Olympiades and
                Youth Scientific Work.
              </p>

              <p class="ratkankir">
                &quot;Great, congratulations to Mas Ryo for the second time to
                make Indonesia and Lamongan proud, especially SMPN 2 Lamongan in
                the international event,&quot; said Yayuk proudly. Yayuk hopes that
                what Ryo has done will be an example and example for other
                students to excel more. In addition, continued Yayuk, Ryo&apos;s
                achievement can be a trigger for schools to be even more active
                in educating students. &quot;Hopefully more students will follow in
                Mas Ryo&apos;s footsteps to win the Championship. The point doesn&apos;t
                stop at just one student. And we will stop at nothing to keep
                achieving,&quot; he concluded.
              </p>
              <p>
                Source :
                <Link
                  href="https://www.detik.com/jatim/jatim-moncer/d-5936894/pelajar-lamongan-ini-raih-silver-medal-di-ajang-inovasi-sains-internasional"
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

export default CompNews5;
