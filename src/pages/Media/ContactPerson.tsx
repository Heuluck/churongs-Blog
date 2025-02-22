import React from "react";
import { CPProps } from "../../types/props";
import { faWindows } from "@fortawesome/free-brands-svg-icons";


const CP: React.FC<CPProps> = (props) => {
    const {
        name,
        qq,
        msg,
        time,
        className,
        isSelector,
        url} = props

    return (
        <div onClick={
            () => {
                if (url) {
                    window.open(url, "_blank")
                }
            }
        } className={"flex h-16 items-center p-2 " + (className ? className : "") + (isSelector ? "bg-indigo-500 bg-clip-padding" : "bg-transparent hover:bg-[#393939]")}>
            <div className={"avatar size-9"}>
                <img className={"rounded-full"} src={`https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`}
                     alt=""/>
            </div>
            <div className={"m-2 flex-1"}>
                <p className={"font-light text-[.9em]"}>
                    {name}
                </p>
                <p className={"font-light text-[.5em]"}>
                    {msg || "[动画表情]"}
                </p>
            </div>
            <div className={"-translate-y-2 text-[.4em] font-thin mr-2"}>
                {time || url ? "友链" : "昨天"}
            </div>
        </div>
    )
}

export default CP;