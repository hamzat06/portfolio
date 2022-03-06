// import LinkIcon from "../assets/icons/link.svg";
import Jukeboys from "../assets/images/jukeboys.png";
import Natterbase from "../assets/images/natterbase.png";
import Zeedas from "../assets/images/zeedas.png";
import Mydelta from "../assets/images/mydelta.png";
import Realty from "../assets/images/realty.png";

export const Work = () => {
    return (
        <section className="py-20">
            <div>
                <h2 className="text-center text-xl font-bold mb-10">
                    Most Recent Projects
                </h2>
                <div className="grid grid-cols-2 gap-5">
                    <a
                        href="/"
                        className="shadow-md rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                        <img alt="" src={Jukeboys} />
                    </a>
                    <a
                        href="/"
                        className="shadow-md rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                        <img alt="" src={Zeedas} />
                    </a>
                    <a
                        href="/"
                        className="shadow-md rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                        <div>
                            <img alt="" src={Natterbase} />
                        </div>
                    </a>
                    <a
                        href="/"
                        className="shadow-md rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                        <div>
                            <img alt="" src={Realty} />
                        </div>
                    </a>
                    <a
                        href="/"
                        className="shadow-md rounded cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                    >
                        <div>
                            <img alt="" src={Mydelta} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
