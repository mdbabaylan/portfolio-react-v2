
export default function ExperienceCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.job_title}</h1>
                {props.company_name ? (<p className="font-light md:text-lg">{props.company_name}</p>) : (<></>)}
                {props.duration ? (<p className="font-light md:text-md">{props.duration}</p>) : (<></>)}
                <p className="font-light text-gray-400">{props.skills_used}</p>

            </div>
        </div>
    )
}
