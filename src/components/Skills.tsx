import "../styles/skill.css";
import {SkillsList} from "../types/Skill.types";

export const Skills = ({skills}: SkillsList) => {
    return (
        <div className="skills-container">
            {skills.map((skill: string, index: number) => (
                <code key={index}>{skill}</code>
            ))}
        </div>
    );
};
