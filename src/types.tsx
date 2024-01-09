import { ReactElement } from "react"
import { IParticlesProps } from "@tsparticles/react";

export interface ISkill {
    Title: ITitle,
    Data:  IFramework[],
}

export interface IFramework{
    name:        string,
    Level:       string,
    icon:        ReactElement<any, any>,
    link:        string,
    percentage:  number,
}

interface ITitle {
    language:   string[],
    color:      string
}

export interface ILanguage {
    language:       number,
    setLanguage?:   Function
}

export type IBackGroundRef = React.MutableRefObject<IParticlesProps>