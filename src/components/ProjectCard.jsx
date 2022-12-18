
export default ({ project }) => {
    return (<>
        <div className="project-card  w-full min-h-[70vh] hover:shadow-xl hover:-translate-y-[2%] transition-all duration-900 ease-in-out">
            <div className="cover w-full h-full flex flex-col">
                <div className="project-info p-6 flex flex-col gap-4 bg-[#184ADD] text-white flex-1">
                    <h2 className="text-2xl px-2">{project?.title}</h2>
                    <p>{project?.subtitle}</p>
                    <div className="cilent-info flex w-full">
                        <div className="client flex-1 text-sm">
                            <h4 className="text-[#FFDA41]">Client</h4>
                            <p>{project?.clients}</p>
                        </div>
                        <div className="duration flex-1 text-sm">
                            <h4 className="text-[#FFDA41]">Time Duration</h4>
                            <p>{project?.start_date} - {project?.end_date}</p>
                        </div>
                    </div>
                </div>
                <div className="thumbnail w-full flex-1">
                    <div className="img-cover w-[100%] h-[100%]">
                        <img src={project?.photo} alt="company logo" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}