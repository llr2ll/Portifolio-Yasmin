import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { ILanguage } from "../../types";
import { useState } from "react";
import { certificates } from "./urls"
import "./certificates.css"

export function Certificates({ language }: ILanguage){
    let [ selectedCertificate, setSelectedCertificate ] = useState<number>(0)
    let Title = ["Certificates", "Certificados", "Certificados"]

    function handleNavigation(value: number){
        if(value < 0 || value > certificates.length - 1) return

        setSelectedCertificate(value)
    }

    return <section id="certificates" className="fade">
        <h1>{Title[language]}</h1>
        <div>
            <div className="central-certificate">
                <MdArrowBackIosNew className="arrow-left" color="var(--secundary-color)" onClick={() => handleNavigation(selectedCertificate - 1)}/>
                <img src={certificates && certificates[selectedCertificate]}/>
                <MdArrowForwardIos className="arrow-right" color="var(--secundary-color)" onClick={() => handleNavigation(selectedCertificate + 1)}/>
            </div>
            <div className="side-certificate">
                {certificates?.map((item: string, index: any) => 
                    <img className={ selectedCertificate === index ? "pulse-border" : ""} 
                         style={{ border: selectedCertificate === index ? "3px solid rgb(82, 188, 250)" : "none" }} 
                         onClick={() => setSelectedCertificate(index)}
                         src={item}/>
                )}
            </div>
        </div>
    </section>
}