import PC from "../assets/icons/pc.svg";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
    return (
        <section className="py-20">
            <div>
                <h2 className="text-xl text-center mb-10 font-semibold">
                    About Me
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-4xl mt-5">
                            {"I am a software developer "}
                            <span className="text-blue-400">
                                <Typewriter
                                    words={[
                                        "with 3 years of professional experience.",
                                        "that loves to satisfy clients."
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={500}
                                />
                            </span>
                        </h3>
                    </div>
                    <div>
                        <img alt="" src={PC} className="w-64 h-64 ml-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};
