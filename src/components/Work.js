import LinkIcon from "../assets/icons/link.svg";

export const Work = () => {
    return (
        <section className="py-20">
            <div>
                <h2 className="text-center text-xl font-bold mb-10">
                    Most Recent Projects
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    <a href="/">
                        <div className="flex">
                            <h3>Jukeboys NFT</h3>
                            <img alt="" src={LinkIcon} className="ml-1 w-16" />
                        </div>
                    </a>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </section>
    );
};
