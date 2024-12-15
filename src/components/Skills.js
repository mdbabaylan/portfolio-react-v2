import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import hr from "../assets/curve-hr.svg"
import react from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import js from "../assets/skills/javascript.svg"
import html from "../assets/skills/HTML5.svg"
import css from "../assets/skills/css.svg"
import mongodb from "../assets/skills/mongodb.svg"
import mysql from "../assets/skills/mysql.svg"
import aws from "../assets/skills/aws.svg"
import csharp from "../assets/skills/csharp.svg"
import java from "../assets/skills/java.svg"
import photoshop from "../assets/skills/photoshop.svg"
import nextjs from "../assets/skills/nextjs.svg"
import php from "../assets/skills/php.svg"
import vue from "../assets/skills/icons8-vue-js.svg"
import salesforce from "../assets/skills/icons8-salesforce.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are the skills I currently have:</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Salesforce Apex & Visualforce" experience="1 year" img={salesforce} />
                <SkillCard name="Vue JS" experience="1 year" img={vue} />
                <SkillCard name="React JS" experience="1 year" img={react} />
                <SkillCard name="Next JS" experience="3 months" img={nextjs} />
                <SkillCard name="Express JS" experience="3 months" img={express} />
                <SkillCard name="Git" experience="2 year" img={git} />
                <SkillCard name="Javascript" experience="3 years" img={js} />
                {/* <SkillCard name="Solidity" experience="5 months" img={solidity} /> */}
                <SkillCard name="HTML" experience="3 years" img={html} />
                <SkillCard name="CSS" experience="3 years" img={css} />
                <SkillCard name="Lumen (PHP)" experience="2 years" img={php} />
                <SkillCard name="Mongo DB" experience="3 months" img={mongodb} />
                <SkillCard name="MYSQL" experience="1 year" img={mysql} />
                <SkillCard name="AWS / GCP / Digital Ocean" experience="2 months" img={aws} />
                <SkillCard name="C#" experience="1 year" img={csharp} />
                <SkillCard name="Java" experience="1 year" img={java} />
                <SkillCard name="Photoshop" experience="2 years" img={photoshop} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />

        </div>
    )
}