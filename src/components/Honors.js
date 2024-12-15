import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="projects" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Personal Projects</h1>
            <p className="font-light text-gray-400">Github repo and live demos included</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Vue 3 Pourover calculator" github_repo="https://github.com/mdbabaylan/pourover-mini-calc" 
                live_demo_url="https://mdb-pourovercalc.surge.sh/" desc="Used Vue3 to create a tool for calculating personal brewing ratios and pour-over amounts. Origami / Torch" />

                <HonorCard name="Gymbrah weight tracker (Backend)" github_repo="https://github.com/mdbabaylan/express-js-gymbrah" 
                live_demo_url="" desc="Previously deployed on AWS EC2 during a free trial, later deactivated." />

                <HonorCard name="Barly Real Estate" github_repo="https://github.com/mdbabaylan/marky-real-estate-website" 
                live_demo_url="https://marky-real-estate-website.vercel.app/" desc="Developed a concept website for my mom's real rental business, using it as a training project to explore Next.js and Vercel." />

                <HonorCard 
                  name="Gymbrah Weight Tracker (Frontend)" 
                  github_repo="https://github.com/mdbabaylan/gymbrah-tracker/tree/master" 
                  live_demo_url="http://mdbabaylan-gymbrah.surge.sh" 
                  desc="A simple app for tracking weight logs and progress. Backend is deactivated, so some functionality is limited." 
                />

                <HonorCard 
                  name="Portfolio v1" 
                  github_repo="https://github.com/mdbabaylan/mdbabaylan.github.io" 
                  live_demo_url="https://mdbabaylan.github.io" 
                  desc="Built from scratch using HTML, CSS, and JavaScript in 2020. Outdated and no longer maintained." 
                />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
