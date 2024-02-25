import cont from "@/assets/cont.png"

const Contact = () => {
  return (
    <section id="" className="w-[100%] pt-20 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
        <div className="text-[25px] w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
            <p className="w-[90%] self-start max-sm:text-[20px] pb-6 max-xxsm:text-[20px]">///Contact Us</p>
            <p className="font-normal w-[70%] max-sm:w-[90%] pb-5 text-[15px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, laudantium numquam asperiores minima sit minus totam suscipit quam ab vero!
            </p>
        </div>
        <div></div>

        <div className="flex w-[90%] justify-between">
         
        <div className="w-[100%]">
          <form>
            <div className="mb-4">
              
              <input type="text" id="name" name="name" placeholder="Enter your name" className="border-gray-300 max-md:w-[100%] max-lg:w-[350px] w-[500px] bg-black border p-6 max-sm:p-2 rounded-full" />
            </div>

            <div className="mb-4">
              <input type="email" id="email" name="email" placeholder="xyz@gmail.com" className="border-gray-300 max-md:w-[100%]  max-lg:w-[350px] w-[500px] bg-black border p-6 max-sm:p-2 rounded-full" />
            </div>

            <div className="mb-4">
              
              <textarea id="message" name="message" placeholder="Enter your message"  className="border-gray-300 max-md:w-[100%]  max-lg:w-[350px] w-[500px] bg-black border p-6 max-sm:p-2 rounded-3xl"></textarea>
            </div>

            <button type="submit" className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>

        <div className="w-[50%] max-md:hidden">
          <img src={cont}/>
        </div>
          
        </div>
    </section>
  )
}

export default Contact