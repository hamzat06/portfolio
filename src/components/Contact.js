import LinkIcon from "../assets/icons/link.svg";

export const Contact = () => {
    return (
        <section className="py-20">
            <div>
                <h2 className="text-center font-semibold text-xl mb-10">
                    How to reach me
                </h2>

                <form className="mb-5 container max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full mb-5"
                    />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full mb-5"
                    />
                    <textarea
                        placeholder="Enter your message"
                        className="block w-full mb-5"
                        rows="3"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-5 py-3 bg-black text-white w-full"
                    >
                        Submit
                    </button>
                </form>

                <div className="flex justify-center space-x-5">
                    <a href="/" className="flex hover:bg-gray-200 p-2">
                        Github
                        <img alt="" src={LinkIcon} className="w-6 h-6 ml-1" />
                    </a>
                    <a href="/" className="flex hover:bg-gray-200 p-2">
                        LinkedIn
                        <img alt="" src={LinkIcon} className="w-6 h-6 ml-1" />
                    </a>
                    <a href="/" className="flex hover:bg-gray-200 p-2">
                        Instagram
                        <img alt="" src={LinkIcon} className="w-6 h-6 ml-1" />
                    </a>
                    <a href="/" className="flex hover:bg-gray-200 p-2">
                        Facebook
                        <img alt="" src={LinkIcon} className="w-6 h-6 ml-1" />
                    </a>
                </div>
            </div>
        </section>
    );
};
