import "../styles/box.css";

export const Education = () => {
    return (
        <div>
            <section id="education" className="content-section">
                <h1>Education</h1>
                <section className="col">
                    <div className="contents">
                        <div className="box">
                            <p className="institute">IIT Delhi</p>
                            <p className="duration">2017 - 2021</p>
                            <p className="degree">Bachelor's in Technology</p>
                            <p className="specialization">
                                Textiles and Fibre Engineering
                            </p>
                        </div>

                        <div className="box">
                            <p className="institute">
                                Naidu +2 Science College
                            </p>
                            <p className="duration">2014 - 2016</p>
                            <p className="degree">Higher Secondary Education</p>
                            <p className="specialization">
                                Science (Information Technology)
                            </p>
                        </div>

                        <div className="box">
                            <p className="institute">Kalinga Vidyapitha</p>
                            <p className="duration">2011 - 2014</p>
                            <p className="degree">Secondary Education</p>
                            <p className="specialization">Basic Science</p>
                        </div>

                        <div className="box">
                            <p className="institute">Rtapalli Vidyapitha</p>
                            <p className="duration">2010 - 2011</p>
                            <p className="degree">Secondary Education</p>
                            <p className="specialization">Basic Science</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};
