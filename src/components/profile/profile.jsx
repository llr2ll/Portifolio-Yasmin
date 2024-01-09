import { FaNode, FaAngular, FaReact, FaVuejs } from 'react-icons/fa';
import { SiElectron, SiJavascript } from 'react-icons/si';
import img from '../../assets/profile.jpeg';
import { GrMysql } from 'react-icons/gr';
import { TbSql } from "react-icons/tb";
import "./profile.css"

export function Profile(){
    return <section id="home" className="container home-container">
        <div className="logo"> 
        {/*  */}
            <div className="hover-show active showspin">
                <span className='circle fade-out'><FaReact/></span>
                <span className='circle fade-out'><FaNode/></span>
                <span className='circle fade-out'><SiJavascript/></span>
                <span className='circle fade-out'><SiElectron/></span>
                <span className='circle fade-out'><TbSql/></span>
                <span className='circle fade-out'><FaVuejs/></span>
                <span className='circle fade-out'><FaAngular/></span>
                <span className='circle fade-out'><GrMysql/></span>
            </div>
            <img src={img} className='pulse-border-profile'/>
        </div>
    </section>
}