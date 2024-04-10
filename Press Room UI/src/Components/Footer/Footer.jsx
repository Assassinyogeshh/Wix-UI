import React from "react";
import img6 from "../../assets/IMG6.jpg";
const Footer = () => {
  const productFeatures = [
    " Temolates",
    " Expiore",
    " Website Buildor",
    " Web Access bility",
    " Wix Pisvaround",
    " thy Sites",
    " Wix SEC",
    " Leoo water",
    " Creste a bios",
    " Ochine Storel",
    " Wix bookings",
    "Apo Market",
    "Domains",
    "Mus test tal",
    "Web Hostrol",
    "Coveloders",
    "Enterprion",
    "Emai Marketing",
    "Wette Peston",
    "Processional Tool",
  ];

  const companyLinks = [
    "  About Wix",
    "   Press Room",
    "Invoster Rontiore",
    "   Wix Jobs",
    "Desian Assets",
    "Terms Of Use",
    "App Market Terms",
    "Privacy Poicy",
    "Privacy and Security Hub",
    "Accessibility Statement",
    " Abuse",
    "    Affiliates",
    "Wix Capital",
    "Updates & Releases",
    "  Contact Us",
    "Patent Notice",
    "Sitemap",
  ];

  const communityLinks = [
    "Wix Disco",
    "Wix Marketplace",
    "Student Websites",
    "Wix Encouraged",
    "Para Comunidades",
  ];
  const supportLinks = [
    "   SUPPORT",
    "  support Center",
    " Getting started Guide",
    "  Wir Learni",
    "    Status Paad",
  ];

  return (
    <>
      <div className=" mt-[0.5rem] flex justify-center items-center w-full">
        <div className="grid grid-cols-4 h-auto lg:grid-cols-5  w-full gap-5 xs:gap-[1.5rem]">
          <ul className="flex w-full flex-col">
            <h5 className="lg:text-[21px] sm:text-[18px]  xs:text-[14px] text-[9px] font-[400] uppercase mb-2 ">
              Products
            </h5>
            {productFeatures.map((product, index) => (
              <li
                className="lg:text-[17px]  sm:text-[15px] xs:text-[12px] text-[8px] font-[400] p-[1.2px]"
                key={index}
              >
                {product}
              </li>
            ))}
          </ul>
          <ul>
            <h5 className="lg:text-[21px] sm:text-[18px]  xs:text-[14px] text-[9px] font-[400] uppercase mb-2">
              company
            </h5>

            {companyLinks.map((company, index) => (
              <li
                className="lg:text-[17px]  sm:text-[15px]   xs:text-[12px]  text-[8px] font-[400] p-[1.2px]"
                key={index}
              >
                {company}
              </li>
            ))}
          </ul>
          <ul>
            <h5 className="lg:text-[21px] sm:text-[18px]  xs:text-[14px] text-[9px] font-[400] uppercase mb-2 ">
              community
            </h5>

            {communityLinks.map((community, index) => (
              <li
                className="lg:text-[17px]  sm:text-[15px] ]  xs:text-[12px]  text-[8px] font-[400] p-[1.2px]"
                key={index}
              >
                {community}
              </li>
            ))}
          </ul>
          <ul>
            <h5 className="lg:text-[21px] sm:text-[18px]  xs:text-[14px] text-[9px] font-[400] uppercase mb-2">
              support
            </h5>

            {supportLinks.map((support, index) => (
              <li
                className="lg:text-[17px]  sm:text-[15px]   xs:text-[12px]  text-[8px] font-[400] p-[1.2px]"
                key={index}
              >
                {support}
              </li>
            ))}
          </ul>
          <span className=" lg:h-1 lg:col-span-1 lg:p-0 w-full grid col-span-4 p-2">
            <h5 className="lg:text-[21px] sm:text-[18px]  xs:text-[14px] text-[9px] font-[400] uppercase mb-2 ">
              Wix
            </h5>

            <p className="lg:text-[17px] sm:text-[18px] xs:text-[12px] text-[8px] w-full font-[400]">
              complete solution from ontorprise- grade infrastructure and
              business eatures to advanced SEo andi marketino looks-enacting sen
              one tol create and grow online. © 2006-2022. Wix.com, Inc
            </p>
            <img
              src={img6}
              className="lg:w-[80%] lg:h-[80%] xs:w-[35%] w-[40%] h-[100%] mt-1 xs:h-[50%] cursor-pointer"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
