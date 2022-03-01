import Globe from "../assets/icons/globe.svg";
import Mobile from "../assets/icons/mobile.svg";
import Search from "../assets/icons/search.svg";

export const Services = () => {
    return (
        <section className="py-20">
            <h3 className="text-center mb-5 text-xl">What I Do</h3>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer">
                    <img
                        alt=""
                        src={Globe}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Website & Web App Development</p>
                </div>
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer">
                    <img
                        alt=""
                        src={Mobile}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Mobile App Development</p>
                </div>
                <div className="p-3 text-center hover:bg-gray-200 rounded cursor-pointer">
                    <img
                        alt=""
                        src={Search}
                        className="w-20 h-20 mb-5 mx-auto"
                    />
                    <p>Search Engine Optimization</p>
                </div>
            </div>
        </section>
    );
};
