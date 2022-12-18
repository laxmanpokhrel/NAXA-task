import logo from "../assets/logo.png"
import { AiOutlineMenu } from "react-icons/ai"
import LetsTalkBtn from "./LetsTalkBtn"
import { CiBeerMugFull } from "react-icons/ci"

export default () => {
    return (<>
        <nav className="w-full min-h-[30%]">
            <div className="cover flex justify-between items-center">
                <div className="logo  object-fill w-[20%]  flex justify-center items-center">
                    <div className="img-cover w-[40%] h-[40%]">
                        <img src={logo} alt="company logo" />
                    </div>
                </div>
                <div className="nav-links w-[50%] h-full flex justify-center items-center">
                    <ul className="w-full h-full flex justify-center items-center gap-6 px-[5px] lg:hidden">
                        <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out p-1 relative group">
                            <small>Services</small>
                        </li>
                        <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out group relative">
                            <small>Portfolio</small>
                            <small className="group-hover:hidden text-lg">&#9662;</small>
                            <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                            <div className="drop-list absolute top-[90%] left-0 min-w-[115%] hidden hover:flex group-hover:flex pt-4 ">
                                <div className="cover w-full h-full flex flex-col border rounded-md">
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">General</p></div></a>
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">International</p></div></a>

                                </div>
                            </div>
                        </li>
                        <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out group relative">
                            <small>Company</small>
                            <small className="group-hover:hidden text-lg">&#9662;</small>
                            <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                            <div className="drop-list absolute top-[90%] left-0 min-w-[13rem]  hidden hover:flex group-hover:flex pt-4 ">
                                <div className="cover w-full h-full flex flex-col border rounded-md">
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">About Us</p></div></a>
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">Team</p></div></a>
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">Work with us</p></div></a>
                                </div>
                            </div>
                        </li>
                        <li className="group flex gap-1 text-xl transition-all duration-2000 ease-in-out group relative">
                            <small>Events & Media</small>
                            <small className="group-hover:hidden text-lg">&#9662;</small>
                            <small className="group-hover:inline-block text-lg hidden">&#9652;</small>
                            <div className="drop-list absolute top-[90%] left-0 min-w-[115%]  hidden hover:flex group-hover:flex pt-4 ">
                                <div className="cover w-full h-full flex flex-col border rounded-md">
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">Event</p></div></a>
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">Media</p></div></a>
                                    <a href="#"><div className="item px-2 py-2 hover:bg-yellow-400 cursor-pointer flex gap-2 justify-center items-center transition-colors duration-300 ease-in"><CiBeerMugFull /><p className="flex-1">Publication</p></div></a>
                                </div>
                            </div>
                        </li>
                        <li>Blogs</li>
                    </ul>
                    <div className="menu-btn text-[#ffab00] cursor-pointer p-1 hidden lg:flex">
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
                <div className="action-btn w-[20%] flex-1 h-full flex justify-center items-center ">
                    <LetsTalkBtn />
                </div>
            </div>
        </nav>
    </>)
}