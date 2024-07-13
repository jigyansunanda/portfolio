import {
    programmingLanguages,
    frameworksAndLibraries,
    database,
    cloudServies,
} from "../types/Constant.types.ts";

import {Skills} from "../components/Skills";

export const Techstack = () => {
    return (
        <section id="tech-stack" className="content-section">
            <h1>Tech-stack</h1>
            <div>
                <p className="skill-section">Programming Languages:</p>
                <Skills skills={programmingLanguages} />
                <br />
                <p className="skill-section">Frameworks and Libraries:</p>
                <Skills skills={frameworksAndLibraries} />
                <br />
                <p className="skill-section">Database:</p>
                <Skills skills={database} />
                <br />
                <p className="skill-section">Cloud Services:</p>
                <Skills skills={cloudServies} />
            </div>
        </section>
    );
};
