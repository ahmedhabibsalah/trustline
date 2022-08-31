import React from "react";
import TextStyle from "../../shared/TextStyle";
import "./styles.css";

const news = [
  {
    id: 1,
    title:
      "الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية",
    desc: "شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة تظهر الإحصاءات",
    img: "/images/news-1.png",
  },
  {
    id: 2,
    title: "لماذا يعتبر أمان التطبيق مهمًا للأعمال؟",
    desc: "تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة لسوء الحظ ، بينما التطبيق",
    img: "/images/news-2.png",
  },
  {
    id: 3,
    title: "حشد الأمن - هل هو بديل للاختراق؟",
    desc: "نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات",
    img: "/images/news-3.png",
  },
];

function News() {
  return (
    <div className="news-container">
      <div className="news-content">
        <TextStyle
          text="الأخبار"
          coloredIndices={[0]}
          style={{ color: "#FFFFFF" }}
        />
        <div className="content-container">
          {news.map((single) => (
            <div className="news-card" key={single.id}>
              <div className="news-text-wrapper">
                <h3 className="news-title">{single.title} </h3>
                <p className="news-desc">{single.desc}</p>
                <p className="news-btn">← اقرأ المقال </p>
              </div>
              <img src={single.img} alt="news" className="news-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
