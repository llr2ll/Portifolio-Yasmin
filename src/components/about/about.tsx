import { CodeBlock, dracula } from 'react-code-blocks';
import { ILanguage } from '../../types';

export function About({ language }: ILanguage){
    let Text = [
        `I'm Raphael Sanseverino, and I'm delighted to have you explore my portfolio. <br/>
            As a passionate developer, I strive to bring creativity and functionality to every project I undertake. <br/>
            Whether it's crafting engaging web experiences or diving into the intricacies of code, <br/>
            I am committed to pushing boundaries and delivering quality results. <br/>
            Join me on this journey through my work, and let's create something profitable together!`, 

        `Meu nome é Raphael Sanseverino e estou muito feliz por você explorar meu portfólio. <br/>
            Como um desenvolvedor apaixonado, me esforço para trazer criatividade e funcionalidade a cada projeto que realizo. <br/>
            Seja criando experiências web envolventes ou mergulhando nas complexidades do código, <br/>
            Estou empenhado em ultrapassar limites e entregar resultados de qualidade. <br/>
            Junte-se a mim nesta jornada pelo meu trabalho e vamos criar algo rentável juntos!`, 

        `Soy Raphael Sanseverino y estoy encantado de que explores mi portafolio. <br/>
            Como desarrollador apasionado, me esfuerzo por aportar creatividad y funcionalidad a cada proyecto que emprendo. <br/>
            Ya sea creando experiencias web atractivas o profundizando en las complejidades del código, <br/>
            Estoy comprometido a superar los límites y ofrecer resultados de calidad. <br/>
            ¡Únase a mí en este viaje a través de mi trabajo y creemos algo rentable juntos!`
    ]

    let Title = ["Hello there!", "Olá!", "¡Hola!"]

    let code = `function Greetings(){
    return <section>
        <h1>${Title[language]}</h1>
        <p>
            ${Text[language]}
        </p>
    </section>    
}`

    return <section className='fade' style={{opacity: 0, padding: "0px 5% 5%"}}>
        <CodeBlock text={code} customStyle={{ background: "rgb(40, 42, 54, 0.7)", borderRadius: "20px"}} language={"javascript"} showLineNumbers={true} theme={dracula}/>
    </section>
}