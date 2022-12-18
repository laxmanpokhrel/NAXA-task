import logo from "../assets/logo.png"
import Footer from "../components/Footer"
import LetsTalkBtn from "../components/LetsTalkBtn"
export default () => {
    const projectCatagories = ["Key Highlights", "Web GIS And Data Visualization", "Training & Capacity Building", "Surveying And GIS Mapping", "Disaster Risk Resilience", "Software & Application Development", "Innovation In Land Reform And Management", "Open Data Initiatives", "E-Governance", "Frontier Technologies"]
    return (
        <>
            <div className="bg-[#f4f4f4]">
                <div className="w-screen bg-[#f4f4f4]">
                    <div className="cover">
                        <div className="top flex justify-center bg-yellow-500">
                            <div className="cover w-4/5 group  text-lg flex justify-center items-center transition-all duration-700 ease-in">
                                <p className="underline text-black group-hover:text-blue-900">
                                    We have been working on several voluntary initiatives during the COVID-19 pandemic. Check them out </p>
                                <span className="text-4xl p-0 leading-3 outline-none  normal-case hidden group-hover:inline-block  group-hover:text-blue-900">&rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="w-screen h-[60vh] bg-transparent relative bg-white">
                    <nav className="w-full h-[20%] ">
                        <div className="cover flex justify-between items-center">
                            <div className="logo  object-fill w-[20%]  flex justify-center items-center">
                                <div className="img-cover w-[40%] h-[40%]">
                                    <img src={logo} alt="company logo" />
                                </div>
                            </div>
                            <div className="nav-links w-[50%] h-full ">
                                <ul className="w-full  h-full flex justify-center items-start gap-6 px-[5px]">
                                    <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out">
                                        <small>Services</small>
                                        <small className="group-hover:hidden text-lg">&#9662;</small>
                                        <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                                    </li>
                                    <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out">
                                        <small>Portfolio</small>
                                        <small className="group-hover:hidden text-lg">&#9662;</small>
                                        <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                                    </li>
                                    <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out">
                                        <small>Company</small>
                                        <small className="group-hover:hidden text-lg">&#9662;</small>
                                        <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                                    </li>
                                    <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out">
                                        <small>Events & Media</small>
                                        <small className="group-hover:hidden text-lg">&#9662;</small>
                                        <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                                    </li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                            <div className="action-btn w-[20%] flex-1 h-full flex justify-center items-center ">
                                <LetsTalkBtn/>
                            </div>
                        </div>
                    </nav>
                    <div className="banner-title w-full h-[80%] flex justify-center items-center -mb-10">
                        <div className="cover flex flex-col gap-4">
                            <div className="portfolio w-full  text-sm text-center uppercase text-[#ffab00]">portfolio</div>
                            <div className="tagline w-full  text-6xl text-center">Diverse, <p className="text-[#124af4] inline-block">Impactful,</p> and Reliable</div>
                        </div>
                    </div>

                </section>
                <section className="projects w-full h-screen flex justify-center items-center border bg-white">
                    <div className="cover w-[85%] h-full border">
                        <div className="menu h-[15%] flex justify-center w-full relative border">
                            <div className="cover h-[10rem] shadow-xl w-4/5 absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] grid grid-cols-5 grid-rows-2 gap-2 px-8 py-2 bg-white text-gray-400">
                                {projectCatagories?.map((cat, index) => <div key={index} className="hover:bg-[#ffab00] flex justify-center items-center p-2 cursor-pointer group"><div className="cover group-hover:text-[#05f] w-full">{cat}</div></div>)}
                            </div>
                        </div>
                        <div className="content w-full border border-red-500">
                            <div className="cover w-full h-full grid grid-cols-2 gap-2">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}