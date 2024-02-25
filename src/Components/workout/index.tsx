import {  UserData } from "@/shared/types"
import { motion } from "framer-motion"

type Data = {
    users: UserData[]
    
}

const Workout = ({users}: Data) => {
  return (
    <section id="workoutprograms" className=" text-white pt-20 max-sm:pt-10 bg-black ">
        <h1 className="mx-auto z-20 max-sm:text-[20px] w-[90%] flex font-dmsans font-bold text-[30px] justify-start md:flex md:h-5/6">
            Free Workout Program
        </h1>

        <motion.div 
        className="mx-auto w-[90%] max-lg:w-[95%] flex  font-dmsans md:flex"
        
       // onViewportEnter={() => setSelectedPage(SelectedPage.WorkoutPrograms)}
        >
    <motion.div className="flex justify-evenly max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 w-[100%]"
        initial="hidden"whileInView
        ="visible"
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
    >
        {users.map((user) => (
            <div className="my-4 mx-2 relative">
                <img src={user.img} className="max-w-[200px w-full" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 whitespace-nowrap">
                    <span className="inline-block max-xxsm:text-[15px] max-sm:text-[20px] transform -rotate-90 font-bold text-[30px]">{user.text}</span>
                </p>
                <button className=" absolute border justify-center flex py-2 w-[80%] max-md:w-[70%] max-xxsm:text-[12px] max-xsm:py-1 px-3 max-sm:px-2 text-[13px] font-normal rounded-md border-white bottom-4 left-1/2 transform -translate-x-1/2  text-white z-10">
                    {user.button}
                </button>
            </div>
        ))}
    </motion.div>


         </motion.div>
    </section>
  )
}

export default Workout