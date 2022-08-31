import React from "react";
import TextStyle from "../../shared/TextStyle";
import "./styles.css";

function Team() {
  return (
    <div className="team-container">
      <div className="team-group">
        <div className="team-card">
          <div className="team-text-wrapper">
            <TextStyle
              text="فريقـنا"
              coloredIndices={[0]}
              style={{ color: "#4F4F4F" }}
            />
            <p className="team-desc">
              في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات
              قادمة
            </p>
            <p className="team-desc">
              يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا
            </p>
          </div>
        </div>
        <div className="team-img-wrapper">
          <img src="/images/team.png" alt="team" className="team-img" />
        </div>
      </div>
    </div>
  );
}

export default Team;
