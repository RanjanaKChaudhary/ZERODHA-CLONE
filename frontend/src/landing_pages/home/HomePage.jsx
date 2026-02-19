import Awards from "./Awards";
import Stats from "./Stats";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function HomePage(){
    return(
        <div>
            
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </div>

    );
};