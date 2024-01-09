import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import { memo } from 'react';
import "./background.css"

export const Background = memo(({ bgConfig }: any) => {
    const [ init, setInit ] = useState(false)

    useEffect(() => {
        initParticlesEngine(async engine => await loadFull(engine))
        .then(() => setInit(true))
    }, []);

    return <section>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        {init && <Particles options={bgConfig}/>}
    </section>
})

//