import Globe from "../assets/icons/globe.svg";
import Mobile from "../assets/icons/mobile.svg";
import Search from "../assets/icons/search.svg";
import { Typewriter } from "react-simple-typewriter";

export const Services = () => {
    return (
        <section className="py-20">
            <h3 className="text-center mb-10 text-xl font-semibold">
                What I Do
            </h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
                    <img
                        alt=""
                        src={Globe}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Website & Web App Development</p>
                    <span className="text-blue-400">
                        <Typewriter
                            words={["React.js", "Vue.js", "Ruby on Rails"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={500}
                        />
                    </span>
                </div>
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
                    <img
                        alt=""
                        src={Mobile}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Mobile App Development</p>
                    <span className="text-blue-400">
                        <Typewriter
                            words={["React Native", "Ionic-Vue"]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={500}
                        />
                    </span>
                </div>
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
                    <img
                        alt=""
                        src={Search}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Search Engine Optimization</p>
                    <span className="text-blue-400">
                        <Typewriter
                            words={["S.E.O."]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={500}
                        />
                    </span>
                </div>
            </div>
        </section>
    );
};
