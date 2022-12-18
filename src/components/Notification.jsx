import { useEffect, useState } from "react"
import { GiCancel } from "react-icons/gi"
export default ({ title, message }) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
        const timer = setTimeout(() => setIsVisible(false), 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [title, message])
    return <>
        {isVisible ? <div className="fixed top-1 right-1 w-[25%] h-16 p-2 border z-10 bg-white shadow-xl">
            <div className="cover w-full h-full flex ">
                <div className="message flex-1 flex flex-col justify-center items-start text-lg font-bold">
                    {title ? <h2>{title}</h2> : <h2>Alert!</h2>}
                    {message ? <h4 className="text-sm">{message}</h4> : null}
                </div>
                <div className="close-icon cursor-pointer" onClick={() => setIsVisible(false)}><GiCancel size={20} /></div>
            </div>
        </div> : null}
    </>
}