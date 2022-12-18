import LetsTalkBtn from "./LetsTalkBtn"
import logo from "../assets/logo.png"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
export default () => {
    return (
        <footer className="h-[55vh] w-full flex justify-center mt-40 bg-white">
            <div className="cover w-[85%] flex flex-col gap-4">
                <div className="collaboration-card w-full  h-1/2 border flex justify-center relative -translate-y-[50%]" style={{ background: "linear-gradient(90deg, #0055FF 0%, #07188E 100%)" }}>
                    {/* image here with absolute position */}
                    <div className=" flex flex-col gap-6 justify-center items-center text-white">
                        <div className="flex justify-center w-full heading text-6xl center"> <h1>Seeking <span className="text-[#ffdc1c]">Collaboration</span>?</h1></div>
                        <div className="flex justify-center w-full desc"><p className="w-3/5 text-center">We constantly look forward to exploring ideas, collaborations, and technical innovations. If you want to partner with us, we are just an email away.</p></div>
                        <div className="flex justify-center w-full btn"><LetsTalkBtn /></div>
                    </div>
                    {/* image here with absolute position */}
                </div>

                <div className="content w-full h-1/2">
                    <div className="cover flex gap-4 ">
                        <div className="company-info w-[30%]">
                            <div className="logo">
                                <div className="img-cover w-[40%] h-[40%]">
                                    <img src={logo} alt="company logo" />
                                </div>
                            </div>
                            <div className="info flex flex-col gap-1">
                                <h3 className="text-lg">ABC Pvt Ltd.</h3>
                                <p className="text-sm text-[#7f7f7f]">Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</p>
                                <a className="text-sm text-[#7f7f7f] hover:text-[#ffd240]" href="#">14516543</a>
                                <a className="text-sm text-[#7f7f7f] underline hover:text-[#ffd240]" href="#">info@naxa.com.np</a>
                                <div className="social-icons flex gap-2 text-[#FFB406]">
                                    <a href="#"><FaFacebookF size={15} /></a>
                                    <a href="#"><FaLinkedinIn size={15} /></a>
                                    <a href="#"><FaTwitter size={15} /></a>
                                    <a href="#"><FaInstagram size={15} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="services w-[30%] flex flex-col gap-2">
                            <h3 className="font-bold">Services</h3>
                            <div className="links flex flex-col gap-1">
                                <div className="link hover:text-[#ffd240] font-bold"><a href="#">Portfolio</a></div>
                            </div>
                        </div>
                        <div className="company w-[30%] flex flex-col gap-2">
                            <h3 className="font-bold">Company</h3>
                            <div className="links flex flex-col gap-1">
                                <div className="link text-[#7f7f7f] hover:text-[#ffd240]"><a href="#">About Us</a></div>
                                <div className="link  text-[#7f7f7f] hover:text-[#ffd240]"><a href="#">Work with us</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}