import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from "../store/actions"
import Notification from "../components/Notification"
import Nav from "../components/Nav"

export default () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProjects())
    }, [])

    const { status, list } = useSelector(state => state.project)
    const projectCatagories = ["Key Highlights", "Web GIS And Data Visualization", "Training & Capacity Building", "Surveying And GIS Mapping", "Disaster Risk Resilience", "Software & Application Development", "Innovation In Land Reform And Management", "Open Data Initiatives", "E-Governance", "Frontier Technologies"]
    return (
        <>
            <Notification title={status} />
            <div className="bg-[#f4f4f4]">
                <div className="w-screen bg-[#f4f4f4]">
                    <div className="cover">
                        <div className="top flex justify-center bg-yellow-500">
                            <div className="cover w-4/5 group  text-sm flex justify-center items-center">
                                <p className="underline text-black group-hover:text-blue-900">
                                    We have been working on several voluntary initiatives during the COVID-19 pandemic. Check them out
                                </p>
                                <span className="text-4xl p-0 leading-3 outline-none  normal-case hidden group-hover:inline-block  group-hover:text-blue-900">&rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="w-screen min-h-[60vh] bg-transparent relative flex flex-col bg-white ">
                    <Nav />
                    <div className="banner-title flex-1 w-full min-h-[80%]  flex justify-center items-center -mb-10">
                        <div className="cover flex flex-col gap-4">
                            <div className="portfolio w-full  text-sm text-center uppercase text-[#ffab00]">portfolio</div>
                            <div className="tagline w-full  text-6xl text-center md:text-5xl">Diverse, <p className="text-[#124af4] inline-block">Impactful,</p> and Reliable</div>
                        </div>
                    </div>
                </section>
                <section className="projects w-full min-h-screen flex flex-col justify-center items-center boder bg-white pb-4">
                    <div className="cover w-[85%] h-full  flex flex-col gap-4">
                        <div className="menu min-h-[13rem] flex justify-center w-full relative ">
                            <div className="cover min-h-[10rem] shadow-xl w-4/5 absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[45%] md:-translate-y-[30%] grid grid-cols-5 grid-rows-2 gap-2 px-8 py-2 bg-white text-gray-400">
                                {projectCatagories?.map((cat, index) => <div key={index} className="hover:bg-[#ffab00] flex justify-center items-center p-2 cursor-pointer group"><div className="cover group-hover:text-[#05f] w-full">{cat}</div></div>)}
                            </div>
                        </div>
                        <div className="content w-full  min-h-[85%]">
                            <div className="cover w-full h-full grid grid-cols-2 gap-14 md:grid-cols-1 ">
                                {list?.map((project, index) => index < 10 ? < ProjectCard key={index} project={project} /> : null)}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}