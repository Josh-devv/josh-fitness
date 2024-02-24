import { UserData } from "@/shared/types"

type Data = {
    users: UserData[]

}

const Workout = ({users}: Data) => {
  return (
    <section id="about" className=" text-white pt-20 max-sm:pt-10 bg-black ">
        <h1 className="mx-auto z-20 max-sm:text-[20px] w-[90%] flex font-dmsans font-bold text-[30px] justify-start md:flex md:h-5/6">
            Free Workout Program
        </h1>

        <div className="mx-auto w-[90%] max-lg:w-[95%] flex  font-dmsans md:flex ">
    <div className="flex justify-evenly max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2 w-[100%]">
        {users.map((user) => (
            <div className="my-4 mx-2 relative">
                <img src={user.img} className="max-w-[200px w-full" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 whitespace-nowrap">
                    <span className="inline-block max-sm:text-[15px] transform -rotate-90 font-bold text-[30px]">{user.text}</span>
                </p>
                <button className=" absolute border justify-center flex py-2 w-[80%] max-md:w-[70%] px-3 max-sm:px-2 text-[13px] font-normal rounded-md border-white bottom-4 left-1/2 transform -translate-x-1/2  text-white z-10">
                    {user.button}
                </button>
            </div>
        ))}
    </div>


         </div>
    </section>
  )
}

export default Workout