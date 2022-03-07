import LinkIcon from "../assets/icons/link.svg";

export const Contact = () => {
    return (
        <section className="py-20">
            <div>
                <h2 className="text-center font-semibold text-xl mb-10">
                    How to reach me
                </h2>

                <form className="mb-5 container max-w-lg">
                    <div className="mb-5">
                        <label className="text-gray-500">Email</label>
                        <input
                            type="email"
                            placeholder="johndoe@email.com"
                            className="block w-full mt-1"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="text-gray-500">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="block w-full mt-1"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="text-gray-500">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="block w-full mt-1"
                            rows="3"
                        ></textarea>
                    </div>

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
