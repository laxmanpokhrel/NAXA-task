import { useEffect } from "react"
import { GiCancel } from "react-icons/gi"
export default ({ title, message }) => {
    useEffect(() => {

    })
    return <>
        <div className="fixed top-1 right-1 w-[25%] h-16 p-2 border shadow-md">
            <div className="cover w-full h-full flex ">
                <div className="message border  border-red-600 flex-1 flex flex-col justify-center items-start text-lg font-bold">
                    {title ? <h2>{title}</h2> : <h2>Alert!</h2>}
                    {message ? <h4 className="text-sm">{message}</h4> : <></>}
                </div>
                <div className="close-icon"><GiCancel size={30} /></div>
            </div>
        </div>
    </>
}