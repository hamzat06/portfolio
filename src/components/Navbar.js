import Cube from "../assets/icons/cube.svg";
import DocumentDownload from "../assets/icons/document-download2.svg";
import DotsHorizontal from "../assets/icons/dots-horizontal.svg";

export const Navbar = ({ toggleNav }) => {
    return (
        <nav>
            <div className="px-5 py-3 flex justify-between">
                <a href="/" className="flex p-1 hover:bg-gray-200 rounded">
                    <img src={Cube} alt="logo" className="w-6 h-6 mr-1" />
                    <span className="text-lg">H-Codes</span>
                </a>
                <ul className="flex md:space-x-1 text-sm">
                    <li>
                        <a
                            href="/"
                            className="p-2 hover:bg-gray-200 rounded flex"
                        >
                            <img
                                src={DocumentDownload}
                                alt="logo"
                                className="w-5 h-5 mr-1"
                            />
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="p-2 hover:bg-gray-200 rounded flex"
                            onClick={() => toggleNav(event)}
                        >
                            <img
                                src={DotsHorizontal}
                                alt="logo"
                                className="w-6 h-6 mr-1"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
