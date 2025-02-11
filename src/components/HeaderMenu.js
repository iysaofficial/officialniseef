import Link from "next/link";

const HeaderMenu = () => {
  return (
    <>
      <ul className="nav navbar-nav">
        <li>
          <Link href="/" rel="noreferrer noopener" className="dez-page">
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/Faq" rel="noreferrer noopener" className="dez-page">
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/file/d/1a8sTUM0plBNMsq8BkNGA00_MARh_r5Fi/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="dez-page"
          >
            Guide Book
          </Link>
        </li>
        <li>
          <Link
            href="https://drive.google.com/drive/folders/1ircNMSRvFbZS3L2SEG-xtW79uLZd3QwI?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="dez-page"
          >
            Sertifikat Supervisor 2025
          </Link>
        </li>

        {/* <li>
          <Link href="/LoW/lowtahun">
            List Of Winners
          </Link>
        </li> */}
        {/* <li>
          <Link href="#">
            Curation <i className="fa fa-chevron-down"></i>{' '}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1rD-txCe9HIgiw52Vm5Zq1uFfxTuNm0Yx?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Curation 2024
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1z0Iabx2X9TJ3tNm5ejm2ALEDykX0_Aip?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Curation 2023
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1yYtOcWtTBfM1ICxLSjKWtb0VdcyK4trk?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Curation 2022
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1cBMZXryRSq5QrVDx3B0_UqU_QaKVvdMR?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Curation 2021
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/Faq" rel="noreferrer noopener" className="dez-page">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/Contact" rel="noreferrer noopener" className="dez-page">
            Kontak
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;
