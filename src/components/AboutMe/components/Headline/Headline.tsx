import React from "react";
import LightBulbImg from "@/assets/light.svg";
import Image from "next/image";
import { SplitText } from "./components/SplittText";

export const Headline: React.FC = () => {
  return (
    <div className="titles-container pb-[-10]">
      <Image src={LightBulbImg} className="lightning" alt="lightning" />
      <div className="titles">
        <div className="name">
          <SplitText copy="Lowe Löwing" role="heading" animationDelay={0} />
        </div>
        <div className="job-title">
          <SplitText copy="Web Developer" role="heading" animationDelay={1.2} />
        </div>
        <p className="description">
          I am a fullstack web developer based in Stockholm, Sweden. With a passion for building engaging and
          user-friendly web applications I strive to create high-quality, functional, and visually appealing digital
          solutions that meet the needs of businesses and users.
        </p>
      </div>
    </div>
  );
};
