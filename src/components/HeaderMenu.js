import Link from 'next/link';

const HeaderMenu = () => {
  return (
    <>
      <ul className="nav navbar-nav">
        {/* <li>
          <Link href="/">
            <span className="ti-home"></span> Home{' '}
          </Link>
        </li> */}
        <li>
          <Link href="/" rel="noreferrer noopener" className="dez-page">
            Utama
          </Link>
        </li>

        {/* <li>
          <Link href="/LoW/lowtahun">
            List Of Winners
          </Link>
        </li> */}

        {/* PRESS RELEASE */}
        {/* <li>
          <Link href="#">
            Media Coverage <i className="fa fa-chevron-down"></i>
            {''}
          </Link>
          <ul className="sub-menu left">
            <li>
              <Link href="/NewsPage/PageNews" rel="noreferrer" className="dez-page">
                News
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1rJEyYNhte35EajnhJWDQOAeUP7iA93B6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="dez-page"
              >
                Press Release 2024
              </a>
              <a
                href="https://drive.google.com/file/d/1UdQv8-5s3M6Z-tNXfZAmS-jWoFuSM_sH/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="dez-page"
              >
                Press Release 2023
              </a>
            </li>
          </ul>
        </li> */}

        {/* PAGES */}
        <li>
          <a
            href="https://drive.google.com/file/d/1Us15HwkNMaQxWyuC0FKeSDGjIUGuERrd/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="dez-page"
          >
            Buku Panduan
          </a>
        </li>
        <li>
          {/* <Link href="#">
            About AISEEF <i className="fa fa-chevron-down"></i>{' '}
          </Link> */}
          {/* className="sub-menu left" */}
        </li>

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
        {/* <li>
          <Link href="#">
            Gallery <i className="fa fa-chevron-down"></i>{' '}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1teW8XhtTbXdt6RcmL_KNF6hPEj6SMI_A?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Gallery 2024
              </a>
              <a
                href="https://drive.google.com/drive/folders/16SdwoM54Utvjr6nt48UC50JJ0yyQ9Dt8?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Gallery 2023
              </a>
              <a
                href="https://drive.google.com/drive/folders/1hpa_1iZgTi6rI7HgaKgifHPZQeWlmLtg?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Gallery 2022
              </a>
              <a
                href="https://drive.google.com/drive/folders/1ioojq_xO1Xq7T04UI9KAr8N46HP6NaHN?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Gallery 2021
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li>
          <Link href="#">
            Certificate <i className="fa fa-chevron-down"></i>{' '}
          </Link>
          <ul className="sub-menu left">
            <li>
              <a
                href="https://drive.google.com/drive/folders/1E8v96STiwpVEdVei7z2RBh7DoLdjAs0R?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="dez-page"
              >
                Certificate Supervisor 2024
              </a>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/Contact" rel="noreferrer noopener" className="dez-page">
            Kontak
          </Link>
        </li>
      </ul>
      {/* <li> */}
      {/* <a
          href="https://drive.google.com/drive/folders/12UFs2SrShkCtkI1JY5dW8XUiR2TT-c18?usp=share_link"
        >
          Certificate Supervisor
        </a>
      </li> */}
    </>
  );
};

export default HeaderMenu;
