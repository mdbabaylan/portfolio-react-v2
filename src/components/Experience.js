import ExperienceCard from "./ExperienceCard.js"

import hr from "../assets/curve-hr.svg"

function calculateYearAndMonthDiff(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);

    var yearDiff = end.getFullYear() - start.getFullYear();
    var monthDiff = end.getMonth() - start.getMonth();

    var yearWord = yearDiff > 1 ? "years" : "year";
    var monthWord = monthDiff > 1 ? "months" : "month";
    //years if more than 1, year if 0-1 year work xp


    //return yearDiff * 12 + monthDiff;
    //ty chatGPT

    return yearDiff > 0 ? `${yearDiff} ${yearWord} and ${monthDiff} ${monthWord}` : `${monthDiff} ${monthWord}`
}

console.log(calculateYearAndMonthDiff(new Date('2018-01-01'), new Date('2018-04-01')));

export default function Experience(){
    //implement own Javascript logic, (use GPT to compute for months gap, then implement own logic, if months >= 12, display yrs as well)
    return (
        <div id="experience" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work Experiences</h1>
            <p className="font-light text-gray-400">Github repo and live demos included</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
            <ExperienceCard skills_used="Vue, Visualforce, Salesforce Apex, HTML, CSS, JS, Customer Support" job_title="Frontend Developer" company_name="Archintel" durationFrom="2023-10-23 " durationTo=""/>
            <ExperienceCard skills_used="Customer Service, Technical Support, Cashier, Driver, Manager" job_title="Family Business Associate" company_name="Barly Pharmacy"  durationFrom="2021-12-01" durationTo="2023-10-23"/>
            <ExperienceCard skills_used="React JS, Lumen, CodeIgniter, MySQL, Javascript, Git, SSH" job_title="Software Engineer 3" company_name="Cloud Panda PH" durationFrom="2020-08-01" durationTo="2021-12-21"/>
            <ExperienceCard skills_used=".NET Core, Troubleshooting, MySQL, Customer support" job_title="System Analyst" company_name="PSBank Official"  durationFrom="2019-11-01" durationTo="2020-07-01"/>
            <ExperienceCard skills_used="C, Unit Testing, Microsoft Word and Excel" job_title="Design Engineer Trainee" company_name="Tsukiden Global Solutions Inc"durationFrom="2018-08-01" durationTo="2019-03-01" />
            <ExperienceCard skills_used="HTML, CSS, Javascript, MSSQL, Crystal Reports, Photoshop designing" job_title="Computer Programmer" company_name="Helix Software Technologies" durationFrom="2018-07-01 " durationTo="2018-11-01"/>
            <ExperienceCard skills_used="HTML, CSS, Javascript" job_title="Intern Back End Developer" company_name="AND Digital" durationFrom="2018-01-01" durationTo="2018-04-01"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
