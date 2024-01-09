import LightParticlesConfig from "../light-particles.json";
import DarkParticlesConfig from "../dark-particles.json";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import "./theme.css"

export function Theme({ setBgConfig }: any){
    const [ theme, setTheme ] = useState<string>("dark")
    const root = document.documentElement;

    function changeTheme(theme: string){

        if (theme === 'light') {
            setBgConfig(LightParticlesConfig)

            root.style.setProperty('--main-bg-color', 'white');
            root.style.setProperty('--main-color', 'rgba(0, 0, 0)');
            root.style.setProperty('--secundary-color', '#9e11d5');
            root.style.setProperty('--tertiary-color', 'rgb(82, 188, 250)');
            root.style.setProperty('--pulse-blue', 'rgb(82, 188, 250)');
            root.style.setProperty('--pulse-blue-shadow', 'rgb(108, 161, 197)');
            root.style.setProperty('--pulse-purple', 'rgb(234, 0, 255)');
            root.style.setProperty('--pulse-purple-shadow', 'rgb(183, 0, 255)');
            root.style.setProperty('--blur-bg', 'rgba (0 0 0 0.3)');
            root.style.setProperty('--card-bg', 'rgba(0, 0, 0, 0.622)');
            root.style.setProperty('--card-hover-bg', 'rgba(0, 0, 0, 0.096)');
        } else {
            setBgConfig(DarkParticlesConfig)

            root.style.setProperty('--main-bg-color', '#02021a');
            root.style.setProperty('--main-color', 'white');
            root.style.setProperty('--secundary-color', 'rgb(0, 255, 255)');
            root.style.setProperty('--tertiary-color', 'rgb(234, 0, 255)');
            root.style.setProperty('--pulse-blue', 'rgb(82, 188, 250');
            root.style.setProperty('--pulse-blue-shadow', 'rgb(108, 161, 197)');
            root.style.setProperty('--pulse-purple', 'rgb(234, 0, 255)');
            root.style.setProperty('--pulse-purple-shadow', 'rgb(183, 0, 255)');
            root.style.setProperty('--blur-bg', 'rgba (0 0 0 0.3)');
            root.style.setProperty('--card-bg', 'rgba(0, 0, 0, 0.622)');
            root.style.setProperty('--card-hover-bg', 'rgba(255, 255, 255, 0.096)');
        }

        setTheme(theme)
    }

    return <section className="theme-switch fade">
        <BsFillMoonStarsFill className="theme-icon" onClick={() => changeTheme("dark")} color={theme === "dark" ? "var(--secundary-color)" : "var(--main-color)" }/> 
    |
        <FaSun className="theme-icon" onClick={() => changeTheme("light")} color={theme === "light" ? "var(--secundary-color)" : "var(--main-color)" }/>
    </section>
}