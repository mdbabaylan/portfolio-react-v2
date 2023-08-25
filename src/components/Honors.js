import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Personal Projects</h1>
            <p className="font-light text-gray-400">Github repo and live demos included</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Gymbrah weight tracker (Backend)" github_repo="https://github.com/mdbabaylan/express-js-gymbrah" live_demo_url="" desc="Deployed previously on AWS ECB and DigitalOcean droplets, currently in GCP VM, maximizing the free credits" />
                <HonorCard name="Barly Real Estate" github_repo="https://github.com/mdbabaylan/marky-real-estate-website" live_demo_url="https://marky-real-estate-website.vercel.app/" desc="Simple website to get online exposure with my parents' small rental units in the province. Next JS and Vercel" />
                <HonorCard name="Gymbrah weight tracker (Frontend)" github_repo="https://github.com/mdbabaylan/gymbrah-tracker/tree/master" live_demo_url="http://mdbabaylan-gymbrah.surge.sh" desc="Web app to log weight and monitor your progress, React JS Front End (AWS S3)" />
                <HonorCard name="Portfolio v1" github_repo="https://github.com/mdbabaylan/mdbabaylan.github.io" live_demo_url="https://mdbabaylan.github.io" desc="Created using HTML, CSS and Javascript without templates back in 2020" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
