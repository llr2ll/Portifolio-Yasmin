import { IFramework, ILanguage, ISkill } from '../../types';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SkillsJson } from "./skill";
import "./skills.css"

export function Skills({ language }: ILanguage) {
    let Title = ["Skills", "Habilidades", "Habilidades"]

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "var(--card-bg)",
        padding: theme.spacing(1),
        color: "var(--card-color)",
        boxShadow: "none"
    }));

    return <section id='skills' className='fade'>
        <div className='skills'>
            <h1>{Title[language]}</h1>
            <div className='pulse-border'>
                {SkillsJson.map((categories: ISkill, index: number) =>
                    <div className='skills-container' key={index}>
                        <div>
                            <h1 style={{color: categories.Title.color}}>{categories.Title.language[language]}</h1>
                        </div>
                        <Grid container spacing={2} justifyContent="center">
                            {categories.Data.map((framework: IFramework, index: number) => (
                                <Grid className='skills-container-grid' item xs={6} md={4} lg={3} key={index} sx={{ padding: "15px" }}>
                                    <Item className='skills-item-box' sx={{ borderRadius: "20px" }} onClick={() => window.open(framework.link, "_blank")}>
                                        <Item className='skills-item' sx={{ background: "transparent" }}>{framework.icon}</Item>
                                        <Item sx={{ wordWrap: "break-word", background: "transparent" }}>{framework.name}</Item> 
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </div>
        </div>
    </section>
}