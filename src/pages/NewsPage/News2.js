import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitleNews from "@/components/PageTitleNews";
// Import data
const Gambar = "/assets/images/News/MHSUnimed.WebP";

const CompNews2 = () => {
  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
          <PageTitleNews
            motherMenu="Media Coverage"
            activeMenu="UNIMED Students Win Silver Medals at AISEEF 2023"
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
                UNIMED Students Win Silver Medals at AISEEF 2023
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
                The Medan State University (UNIMED) student team won a silver
                medal at the 2023 ASEAN Innovative Science Environmental and
                Entrepreneur Fair (AISEEF) competition. This competition is
                organized by the Indonesian Young Scientist Association (IYSA)
                in collaboration with the Faculty of Engineering, Diponegoro
                University which will be held online on February 10, 2023.
              </p>

              <p class="ratkankir">
                The team guided by Dr. Sri Adelila Sari, S.Pd., M.Si consisted
                of five UNIMED students, namely Elva Damayanti Lubis (Chemistry
                Education), Yulia Ayu Utami Tarigan (Mathematics Education),
                Muhammad Azwardi Nasution (Mathematics Education), Hamdi Armanda
                Damanik (Economic Education) and Dhival Hazri (English Language
                Education) who won a Silver medal in the field of
                Entrepreneurship with the product title &quot;Innovation of Chewing
                Habit Through Kinang Extract Gum&quot;.In this competition, UNIMED
                teams competed with participants from various universities in
                ASEAN. The achievements achieved by UNIMED at this event are
                proof that the quality of education at UNIMED is increasing and
                able to compete at national and international levels.
              </p>

              <p class="ratkankir">
                Unimed Rector Prof. Syamsul Gultom congratulated UNIMED students
                who won at the prestigious international event, &quot;We leaders
                heard the good news is a matter of pride, because this victory
                proves that UNIMED students have high competence so that they
                can compete and win in the international event. Of course, this
                cannot be separated from the guidance of the lecturers, the
                ability of lecturers to teach and guide the five students is
                also a factor in winning cooperation or good relations between
                lecturers and students is needed so that strong chemistry is
                formed between lecturers and students so that these students can
                achieve achievements&quot; said the Rector.
              </p>

              <p class="ratkankir">
                He continued the Rector said that UNIMED is committed to
                continuing to support the development of student creativity and
                innovation, as well as providing full support for activities
                that support the development of student potential in various
                fields. Hopefully the achievements achieved by UNIMED students
                in this competition can be an inspiration for other students to
                continue to excel and produce innovative and useful works for
                society. (Unimed Public Relations/zr)
              </p>
              <p>
                Source :
                <Link
                  href="https://www.unimed.ac.id/2023/02/17/mahasiswa-unimed-raih-medali-perak-pada-aiseef-2023/"
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
export default CompNews2;
