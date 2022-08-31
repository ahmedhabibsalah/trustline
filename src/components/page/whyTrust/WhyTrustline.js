import React from "react";
import TextStyle from "../../shared/TextStyle";
import "./styles.css";

function WhyTrustline() {
  return (
    <div className="why-container">
      <div className="why-text-wrapper">
        <TextStyle
          text="لماذا ترست لاين؟"
          coloredIndices={[0]}
          style={{ color: "#ffffff" }}
        />
        <h6 className="why-description">
          نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى لرفع
          مستوى الأمن في جميع الكيانات والمؤسسات
        </h6>
      </div>
      <div className="cards-container">
        <div className="first-col">
          <div className="large-card">
            <div className="text-wrapper">
              <h2 className="large-card-title">نقدم خدمات فعالة</h2>
              <h6 className="large-card-description">
                {" "}
                نسعى لتقليل المخاطر على مستوى المؤسسات
              </h6>
            </div>
            <div style={{ borderRadius: "4px" }}>
              <img
                src="/images/large-card-1.png"
                alt="first"
                className="large-card-image"
              />
            </div>
          </div>
          <div className="small-card">
            <div style={{ alignSelf: "start" }}>
              <img
                src="/images/shield-1.png"
                alt="shield"
                className="shield-fr"
              />
            </div>
            <h2 className="small-card-title">
              نتقدم بخطوة على التهديدات السيبرانية ونقاط الضعف
            </h2>
          </div>
        </div>
        <div className="second-col">
          <div className="small-card-sc">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                zIndex: 1,
                marginRight: "40px",
              }}
            >
              <h2 className="small-card-title-sc">
                نوفر مستوى عالي من الحماية
              </h2>
              <h3 className="small-card-sc-desc">
                تعرف أكثر على دورنا في توفير الحماية
              </h3>
            </div>
            <div
              style={{ position: "absolute", right: "10px", opacity: "0.3" }}
            >
              <img
                src="/images/shield-2.png"
                alt="shield"
                className="shield-sc"
              />
            </div>
          </div>
          <div className="large-card-sc">
            <div>
              <img
                src="/images/programs.png"
                alt="second"
                className="large-card-image-sc"
              />
            </div>
            <div className="text-wrapper-sc">
              <h2 className="large-card-title-sc">
                نكون الشريك الموثوق لعملائنا
              </h2>
              <h6 className="large-card-description-sc">
                {" "}
                نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTrustline;
