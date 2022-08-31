import React from "react";
import TextStyle from "../../shared/TextStyle";
import "./styles.css";

const cards = [
  {
    id: 1,
    value:
      "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان",
    img: "/images/1.png",
  },
  {
    id: 2,
    value:
      "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان",
    img: "/images/2.png",
  },
  {
    id: 3,
    value:
      "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان",
    img: "/images/3.png",
  },
  {
    id: 4,
    value:
      "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان",
    img: "/images/4.png",
  },
  {
    id: 5,
    value:
      "مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان",
    img: "/images/5.png",
  },
];

function Solutions() {
  return (
    <div className="sol-container">
      <div className="sol-card">
        <div className="sol-card-content">
          <div className="sol-text-wrapper">
            <TextStyle
              text="الخدمات والحلول"
              coloredIndices={[0]}
              style={{ color: "#000000" }}
            />
            <h6 className="sol-desc">
              نقدم خدمات وحلول احترافية في مجال الأمن السيبراني
            </h6>
          </div>
          {cards.map((card) => (
            <div key={card.id} className="sol-card-sm">
              <div className="sol-card-sm-text">
                <p className="card-info">{card.value}</p>
              </div>
              <div className="sol-card-sm-img">
                <img src={card.img} alt="sol" className="sol-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
