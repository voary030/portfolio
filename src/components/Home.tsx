import { Container, Mail } from "lucide-react";
import React from "react";

const Home = () => {
    return (
        <div
            className="border flex flex-col-reverse 
    md:flex-row justify-center items-center md:my-32 my-10"
        >
            <div className="flex flex-col">
                <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour <br/> 
                    je suis {" "} <span className="text-accent">Voarydev</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                Je suis un developpeur fullstack <br/>
                avec 5 ans d'experience, utilisant React <br/>
                et Node.js. Contactez-moi si vous avez besoin de mes services.
                </p>
                <a href="#" className="btn btn-lg btn-accent md:w-fit">
                    <Mail className="w-5 h-5"/>
                    Contactez-moi
                </a>
            </div>
            <div className="md:ml-60">
                <img className="w-50 h-50 object-cover border-8 border-accent shadow-xl md:w-96 md:h-96"
                style={{
                    borderRadius: "57% 43% 54% 46% / 48% 73% 27% 52% "
                }} 
                src="src/assets/img.png" alt="" />
            </div>
        </div>
    );
};

export default Home;
