import React from "react";
import "./styles.css";

const socials = [
  { id: 1, img: "/images/twt.png" },
  { id: 2, img: "/images/in.png" },
];
const pages = [
  { id: 1, value: "للشركات" },
  { id: 2, value: "للباحثين" },
  { id: 3, value: "بيانات التواصل" },
  { id: 4, value: "تواصل معنا" },
];
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="fr-col">
          {socials.map((social) => (
            <img
              key={social.id}
              src={social.img}
              alt="social"
              className="social"
            />
          ))}
        </div>
        <div className="sc-col">
          {pages.map((page) => (
            <h4 key={page.id} className="pages">
              {page.value}{" "}
            </h4>
          ))}
        </div>
        <div className="thd-col">
          <img src="/images/logo.svg" alt="logo" className="footer-logo" />
          <p className="address">
            واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
          </p>
          <p className="address">Trustline - جميع الحقوق محفوظة 2022 </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
