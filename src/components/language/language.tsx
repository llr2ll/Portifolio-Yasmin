import { useEffect, useState } from "react"
import { ILanguage } from "../../types"
import us from "../../assets/us.svg"
import br from "../../assets/br.svg"
import es from "../../assets/es.svg"
import "./language.css"

export function Language({ language, setLanguage }: ILanguage){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

        return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    }, []);

    return <section className="language-switch fade">
        <div onClick={() => setLanguage && setLanguage(0)}>
            <img src={us}/>
            <p style={{ color: language === 0 ? "var(--secundary-color)" : "var(--main-color)" }}>ENG</p>  
        </div>
    
        {windowWidth > 450 && "|"}

        <div onClick={() => setLanguage && setLanguage(1)}>
            <img src={br}/>
            <p style={{ color: language === 1 ? "var(--secundary-color)" : "var(--main-color)" }}>PT</p>    
        </div>
    
        {windowWidth > 450 && "|"}

        <div onClick={() => setLanguage && setLanguage(2)}>
            <img src={es}/>
            <p style={{ color: language === 2 ? "var(--secundary-color)" : "var(--main-color)" }}>ES</p>   
        </div>
    </section>
}