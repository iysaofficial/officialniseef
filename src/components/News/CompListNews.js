import Image from 'next/image';
import Link from 'next/link';

// Import Gambar
const Gambar1 = '/assets/images/News/PenelitiMuda.Webp';
const Gambar2 = '/assets/images/News/MHSUnimed.WebP';
const Gambar3 = '/assets/images/News/MAN1Malang.WebP';
const Gambar4 = '/assets/images/News/UNEJ.WebP';
const Gambar5 = '/assets/images/News/PelajarLamongan.WebP';
const Gambar6 = '/assets/images/News/et.png';
const Gambar7 = '/assets/images/News/Onsoed.webp';
const Gambar8 = '/assets/images/News/smpn1cilacap.jpg';
const Gambar9 = '/assets/images/News/yo.jpeg';

const CompListNews = () => {
  return (
    <>
      {/* <h1 className="text-center mt-2 fw-bold">NEWS 2024</h1> */}
      <div className="container mt-4">
        <div className="row">
          {/* list 1 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar6}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News6">
                    ITB and Unsri Team Take 3rd Place at AISEEF 2024 with Learning Media Platform
                  </Link>
                </h5>
                <p className="card-text">
                  The Bandung Institute of Technology (ITB) team, in collaboration with Sriwijaya University (UNSRI), won a bronze medal in the ASEAN Innovative Science, Environmental, And Entrepreneur Fair (AISEEF) 2024...
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News6">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* list 1 akhir */}

          {/* List 2 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar7}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 2"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News7">
                    Unsoed delegates win four medals at the AISEEF 2024 event
                  </Link>
                </h5>
                <p className="card-text">
                  Universitas Jenderal Soedirman (Unsoed) Purwokerto again incised brilliant achievements in the international arena through its participation in the Asean Innovative Science Environmental and Entrepreneur Fair (AISEEF) 2024...
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News7">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 2 akhir */}

          {/* List 3 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar8}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 3"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News8">
                    SMP Negeri 1 Cilacap wins silver medal in event AISEEF Year 2024
                  </Link>
                </h5>
                <p className="card-text">
                  SMP Negeri 1 Cilacap donated the Silver Medal for Indonesia. The SMP Negeri 1 Cilacap team consisting of Talitha Qonita Rahman, Athifa Hapsari Anugrah Mulia, Callysta Rahma Putri, Chintya Ayu Maheswari, and Maqrifatika Puspa Hanum...
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News8">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 3 akhir */}

          {/* List 4 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar9}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 4"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News9">
                    FT Undip and IYSA Successfully Hold the 5th AISEEF
                  </Link>
                </h5>
                <p className="card-text">
                  The 5th Asean Innovative Science Environmental And Entrepreneur Fair (AISEEF) 5th was successfully held at Prof. Sudarto Building, S.H., Undip Tembalang campus, Semarang...
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News9">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 4 akhir */}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {/* list 1 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar1}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News1">
                    368 YOUNG RESEARCHERS FROM 15 COUNTRIES SHOW OFF AT AISEEF 2023
                  </Link>
                </h5>
                <p className="card-text">
                  Friday, February 10, 2023, the Faculty of Engineering, Diponegoro University collaborated with the Indonesian Young Scientist Association (IYSA) in organizing an event titled ASEAN Innovative Science Environmental and Entrepreneur Fair (AISEEF) 2023.
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News1">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* list 1 akhir */}

          {/* List 2 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar2}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 2"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News2">
                    UNIMED Students Win Silver Medals at AISEEF 2023
                  </Link>
                </h5>
                <p className="card-text">
                  The Medan State University (UNIMED) student team won a silver medal at the 2023 ASEAN Innovative Science Environmental and Entrepreneur Fair (AISEEF) competition.
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News2">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 2 akhir */}

          {/* List 3 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar3}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 3"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News3">
                    MAN 1 Malang City Wins Gold Medal at AISEF Southeast Asia Event
                  </Link>
                </h5>
                <p className="card-text">
                  In the framework of the Southeast Asian Level AISEF KTI and Entrepreneur Competition held at BG Junetion Surabaya. The KTI Competition Team (Scientific Writing Competition) and MAN 1 Entrepreneur Malang City received a Gold Medal.
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News3">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 3 akhir */}

          {/* List 4 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar4}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 4"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News4">
                    UNEJ WINS SILVER MEDAL AT AISEEF 2023
                  </Link>
                </h5>
                <p className="card-text">
                  Jember University won the silver medal in the competition. The team represented by students achieved this in the AISEEF 2023 event.
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News4">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* List 4 akhir */}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {/* list 1 awal */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <Image
                src={Gambar5}
                className="card-img-top img-fluid p-2"
                alt="Gambar Berita 1"
                width={200}
                height={100}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href="/NewsPage/News5">
                    LAMONGAN STUDENT WINS 2 GOLD MEDALS AT INTERNATIONAL EVENT
                  </Link>
                </h5>
                <p className="card-text">
                  The students of Lamongan won 2 gold medals at an international event. This achievement was won through a team representing the country at the AISEEF 2023 event.
                </p>
                <h1 className="btn-primary btn">
                  <Link href="/NewsPage/News5">Read more</Link>
                </h1>
              </div>
            </div>
          </div>
          {/* list 1 akhir */}
        </div>
      </div>
    </>
  );
};

export default CompListNews;
