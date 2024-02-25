import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import home from "@/assets/home.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16  lg:h-[100%] font-dmsans bg-black text-white py-10 max-xxsm:py-5 md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 max-lg:w-[90%] fle  items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 pt-60 max-sm:pt-28  max-md:w-[100%] max-md:pt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"whileInView
            ="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <div className="flex flex-col">
                  <span className="text-[5vw] max-lg:w-[] max-xxsm:text-[9vw] max-sm:text-[8vw]">make your</span>
                  <span className="text-[6vw] font-bold max-sm:text-[10vw] max-xxsm:text-[10vw]">Body Shape</span>
                </div>
              </div>
            </div>

            <p className="mt-8 max-xsm:mt-4 text-sm ">
            Being physically active can improve your brain health,
             help manage weight, reduce the risk of disease, strengthen
              bones and muscles, and improve your ability to do everyday activities. Adults who si
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm  border max-md:text-[12px] px-10 max-xxsm:px-4 py-2 rounded-md hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5  justify-center md:z-10
              md:ml-40 md:mt-16 pt-5 max-xxsm:pt-2  md:justify-items-end"
        >
         <img src={home}/>
        </div>
      </motion.div>

      
    </section>
  );
};

export default Home;