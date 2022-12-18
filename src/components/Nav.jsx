import logo from "../assets/logo.png"
import { AiOutlineMenu } from "react-icons/ai"
import LetsTalkBtn from "./LetsTalkBtn"

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
                    <ul className="w-full h-full flex justify-center items-start gap-6 px-[5px] lg:hidden">
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