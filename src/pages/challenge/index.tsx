import Navbar from "@/navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { CaroItems, CaroItems1, CaroItems2, Day, Workout, Contents } from "@/shared/data";
import lin from "@/assets/line.png"
import vid1 from "@/assets/vid1.png"
import CustomizedAccordions from "@/Components/accordion";
import Contact from "@/Components/contact";

type Params = {
    id: string;
}

const Challenge = () => {
    const { id } = useParams<Params>();
    const [activeDay, setActiveDay] = useState(0);
  
    const [top, setTop] = useState<boolean>(true)

  
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

    const handleDayClick = (index: number) => {
        setActiveDay(index);
    };


    return (
        <div className="bg-black h-[100%] max-sm:h-[100%]">
            <Navbar top={top} />
            <section className="pt-28 flex justify-center text-white font-dmsans w-[100%]">
                <div className="w-[85%] max-lg:w-[90%] max-md:justify-between max-sm:flex-col flex">
                    <div className="w-[40%] max-sm:w-[100%] max-sm:justify-between max-md:w-[30%] max-sm:flex">
                        <img src={challengeItem.img} className="rounded-3xl w-[80%] max-md:w-[200px]  max-sm:w-[40%]" />
                        <span className="w-[100%] max-sm:w-[58%] self-end ">
                            <p className="text-[20px]  font-bold max-sm:text-[20px]">Motivation</p>
                            <p className="w-[80%] max-xxsm:text-[10px] text-[13px] max-sm:text-[12px] max-lg:w-[100%]">
                            A colorful protein-packed power bowl filled with flavorful,
                             meaty grilled satay tofu and an array of vibrant veggies on a
                              bed of fluffy quinoa. Completed with a healthy and delicious 
                            satay dipping sauce and crushed roasted peanuts. Delicious!
                       </p> </span>
                    </div>
                    <div className="w-[90%] max-sm:w-[100%]  max-lg:w-[70%] max-md:w-[65%] max-sm:pt-7">
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
                                    }}>
                                        {
                                            Day.map((day, index) => (
                                                <p key={day.id} 
                                                onClick={() => handleDayClick(index)}
                                                className={`bg-white max-sm:text-[10px] max-sm:font-bold 
                                                text-center rounded-2xl max-md:w-[50px] text-[12px] w-[70px]
                                                 py-2 text-black  ${index === activeDay ? 'bg-gray-400' : ''}`}>
                                                    {day.days}
                                                </p>
                                            ))
                                        }
                                </motion.div>
                            </div>
                        </motion.div>
                        <div>
                            <div className="bg-gray-800 mt-2 h-[100%] rounded-3xl ">
                                <p className="p-3 text-[25px] font-bold max-sm:text-[20px]">{Workout[activeDay].workout}</p>
                                <motion.div className="flex justify-evenly w-[]">
                                    <img src={lin} className="w-[15px] max-xxsm:w-[10px] max-xxsm:h-[180px] h-[250px] max-sm:w-[12px]" />
                                    <motion.div 
                                    className="w-[90%]"
                                    initial="hidden" whileInView="visible"
                                    viewport={{ once: false, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    
                                        <div className="flex py-3 max-xxsm:py-1">
                                            <img src={vid1} className="w-[150px] max-xxsm:w-[80px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                                <p className="font-bold max-xxsm:text-[12px]">{Contents[activeDay].time1}</p>
                                                <p className="w-[70%] max-md:w-[95%] max-sm:text-[10px] max-md:text-[13px]">{Contents[activeDay].title1}</p>
                                            </span>
                                        </div>
                                        <div className="flex py-3 max-xxsm:py-1">
                                            <img src={vid1} className="w-[150px] max-xxsm:w-[80px] max-md:w-[150px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                            <p className="font-bold max-xxsm:text-[12px]">{Contents[activeDay].time1}</p>
                                                <p className="w-[70%] max-md:w-[95%] max-sm:text-[10px] max-md:text-[13px]">{Contents[activeDay].title1}</p>
                                            </span>
                                        </div>
                                        <div className="flex py-3 max-xxsm:pb-2 max-xxsm:py-1">
                                            <img src={vid1} className="w-[150px] max-xxsm:w-[80px] max-sm:w-[150px]" />
                                            <span className="pl-3">
                                            <p className="font-bold max-xxsm:text-[12px]">{Contents[activeDay].time1}</p>
                                                <p className="w-[70%] max-md:w-[95%] max-sm:text-[10px] max-md:text-[13px]">{Contents[activeDay].title1}</p>
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         <section className="w-[100%] mt-16 max-sm:mt-10 flex justify-center">
            <CustomizedAccordions />
         </section>
           
        <section>
            <Contact />
        </section>
        </div>
    );
};

export default Challenge;
