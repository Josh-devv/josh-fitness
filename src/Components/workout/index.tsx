import { UserData } from "@/shared/types"

type Data = {
    users: UserData[]

}

const Workout = ({users}: Data) => {
  return (
    <section id="about" className=" text-white pt-20 bg-black">
        <h1 className="mx-auto w-5/6 flex font-dmsans font-bold text-[30px] justify-start md:flex md:h-5/6">
            Free Workout Program
        </h1>

        <div className="mx-auto  w-5/6 flex font-dmsans  md:flex ">
            <div className="max-md:grid max-md:grid-cols-2">
                {
                users.map((user) => (
                    <div>
                <img src={user.img} alt=""/>
                <p>{user.text}</p>
                <button>{user.id}</button>
            </div> 
                ))
            }
            </div>
            
           
        </div>
    </section>
  )
}

export default Workout