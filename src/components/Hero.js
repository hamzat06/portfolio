import { Typewriter } from "react-simple-typewriter";
import Terminal from "../assets/icons/terminal.svg";
import DocumentDownload from "../assets/icons/document-download2.svg";

export const Hero = () => {
    return (
        <section className="py-20">
            <div className="flex justify-between">
                <h1 className="text-4xl">
                    Hello, I am <br />
                    <span className="text-blue-400">
                        <Typewriter
                            words={[
                                "Hamzat Ajanaku",
                                "A Full-stack Software Developer"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={500}
                        />
                    </span>
                </h1>

                <img alt="" src={Terminal} className="w-32 h-32" />
            </div>
            <div className="flex justify-end">
                <a href="#" className="flex hover:bg-gray-200 p-2">
                    <img
                        alt=""
                        src={DocumentDownload}
                        className="w-6 h-6 mr-1"
                    />
                    View Resume
                </a>
            </div>
        </section>
    );
};
