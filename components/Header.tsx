import Link from 'next/link';

export default function Header({
  className = "transparent scroll-light",
}: {
  className?: string;
}) {
  const isLightHeader = className.includes('header-light');

  return (
    <header className={className} data-base-class={className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link href="/">
                    <img className="logo-main logo" src="/images/logo-white.webp" alt="" />
                    <img className="logo-scroll logo-2" src="/images/logo-black.webp" alt="" />
                    <img className="logo-mobile" src={isLightHeader ? "/images/logo-black.webp" : "/images/logo-white.webp"} alt="" />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">Home</Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/">Service</Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/dentists">Dentists</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link className="menu-item" href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="https://portal.cleartrackings.com/doctor" className="btn-main fx-slide"><span>Sign Up</span></Link>
                  <span id="menu-btn"></span>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
