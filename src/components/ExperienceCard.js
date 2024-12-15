export default function ExperienceCard(props) {
    const calculateDuration = (start, end) => {
        const startDate = new Date(start);
        const endDate = end ? new Date(end) : new Date(); // If no end date, assume "Present"

        let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        const years = Math.floor(months / 12);
        months %= 12;

        return years > 0
            ? `${years} yr${years > 1 ? 's' : ''} ${months} mo`
            : `${months} mo`;
    };

    const durationText = props.durationFrom 
        ? calculateDuration(props.durationFrom, props.durationTo) 
        : null;

    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.job_title}</h1>
                {props.company_name && <p className="font-light md:text-lg">{props.company_name}</p>}
                {durationText && <p className="font-light md:text-md">{durationText}</p>}
                {durationText && <p className="font-light md:text-sm">{props.durationFrom} - {props.durationTo || "Present"}</p>}
                <p className="font-light md:text-sm text-gray-400">{props.skills_used}</p>
            </div>
        </div>
    );
}
