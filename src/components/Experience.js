import ExperienceCard from "./ExperienceCard.js"

import hr from "../assets/curve-hr.svg"

export default function Experience(){
    //implement own Javascript logic, (use GPT to compute for months gap, then implement own logic, if months >= 12, display yrs as well)
    return (
        <div id="experience" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experiences</h1>
            <p className="font-light text-gray-400">Github repo and live demos included</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <ExperienceCard job_title="Intern Back End Developer" company_name="AND Digital" duration="Jan 2018 - Apr 2018"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
