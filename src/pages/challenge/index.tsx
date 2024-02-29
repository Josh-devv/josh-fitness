import Navbar from "@/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { CaroItems, CaroItems1, CaroItems2 } from "@/shared/data";
import lin from "@/assets/line.png"
import vid1 from "@/assets/vid1.png"

type Params = {
    id: string;
}

const Challenge = () => {
    const { id } = useParams<Params>();
    const [top, setTop] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY !== 0) setTop(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Find the corresponding challenge item based on the id
    const findChallengeItemById = (id: string) => {
        const allChallenges = [...CaroItems, ...CaroItems1, ...CaroItems2];
        return allChallenges.find(item => String(item.id) === id);
    };

    const challengeItem = id ? findChallengeItemById(id) : undefined;

    if (!challengeItem) {
        return <div>No challenge found for this ID</div>;
    }
    return (
        <div className="bg-black h-[100vh] max-sm:h-[100%]">
            <Navbar top={top} />
            <section className="pt-28 flex justify-center text-white font-dmsans w-[100%]">
                <div className="w-[90%] max-lg:w-[90%] max-md:justify-between max-sm:flex-col flex">
                    <div className="w-[40%] max-sm:w-[100%] max-sm:justify-between max-md:w-[30%] max-sm:flex">
                        <img src={challengeItem.img} className="rounded-3xl w-[250px] max-md:w-[200px]  max-sm:w-[40%]" />
                        <span className="w-[100%] max-sm:w-[58%] self-end ">
                            <p className="text-[20px]  font-bold">Motiation</p>
                            <p className="w-[70%] max-sm:text-[12px] max-lg:w-[100%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit temporibus nostrum esse sed aspernatur?</p>
                        </span>
                    </div>
                    <div className="w-[60%] max-sm:w-[100%] max-sm:pb-40 max-lg:w-[70%] max-md:w-[65%] max-sm:pt-10">
                        <p className="text-[25px] max-lg:text-[22px] max-sm:text-[20px]">2023 Get Abs Challenge</p>
                        <motion.div className="w-[100%] rounded-3xl bg-gray-800 px-2 py-1 flex flex-col justify-center">
                            <div className="flex w-[100%] ">
                                <motion.div
                                    className="flex w-[100%] justify-evenly "
                                    initial="hidden" whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 1</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 2</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 3</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 4</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 5</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 6</p>
                                    <p className="bg-white max-sm:text-[10px] max-sm:font-bold text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px] py-2 text-black">Day 7</p>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div>
                            <div className="bg-gray-800 mt-2 h-[100%] rounded-3xl ">
                                <p className="p-3 text-[25px] font-bold max-sm:text-[20px]">Day 1's Workout</p>
                                <div className="flex justify-evenly w-[]">
                                    <img src={lin} className="w-[15px] h-[250px] max-sm:w-[12px]" />
                                    <div className="w-[90%]">
                                        <div className="flex py-3">
                                            <img src={vid1} className="w-[150px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                                <p className="font-bold">5mins warm up</p>
                                                <p className="w-[70%] max-md:w-[95%] max-sm:text-[10px] max-md:text-[13px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </span>
                                        </div>
                                        <div className="flex py-3">
                                            <img src={vid1} className="w-[150px] max-md:w-[150px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                                <p className="font-bold">5mins warm up</p>
                                                <p className="w-[70%] max-md:w-[95%] max-md:text-[13px] max-sm:text-[10px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </span>
                                        </div>
                                        <div className="flex py-3">
                                            <img src={vid1} className="w-[150px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                                <p className="font-bold">5mins warm up</p>
                                                <p className="w-[70%] max-md:w-[95%] max-sm:text-[10px] max-md:text-[13px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Challenge;
