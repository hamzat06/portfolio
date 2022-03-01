import { Component } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Footer } from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false
        };
    }

    render() {
        const toggleNav = (event) => {
            event.target.preventDefault();
            this.setState({ navToggle: !this.state.navToggle });
            alert(this.state.navToggle);
        };

        return (
            <div>
                <Navbar toggleNav={toggleNav} />
                <div className="container max-w-2xl p-5">
                    <Hero />
                    <Services />
                    <About />
                    <Work />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
