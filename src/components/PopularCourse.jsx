import { IoCalendar, IoStar } from "react-icons/io5"
import { useCourse } from "../store/CoursesContext"


function PopularCourse() {

  const {course,loading} = useCourse();

  return (
    <div className="w-full lg:py-">
        <div className="w-[95%] sm:w-[80%] pt-10 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-3xl font-bold">Top-Rated Courses</h1>
            <button className="text-sm bg-blue-950 px-4 py-2 rounded-3xl 
                    text-white hover:bg-blue-900 transition-all">
              View More
            </button>
          </div>

          {/* card */}
          <div className="mt-10 lg:mt-5 flex justify-between flex-wrap gap-3 xl:gap-5">
            {/* loop card from course */}
            {
              course.map((v,i)=>{
                return(
                  <div key={i || v.id} className="w-full sm:w-[49%] lg:w-[32%] rounded-lg overflow-hidden shadow-lg">
                      <div className="w-full h-[220px] bg-gray-300">
                        <img src={v.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 ">
                          <h2 className="text-2xl font-bold mb-2 line-clamp-1">{v.title}</h2>
                          <div className="flex justify-between items-center  border-b border-gray-300 pb-2">
                            <div className="flex items-center">
                              <IoCalendar/>
                              <p className="ms-1 text-gray-500">{v.duration}</p>
                            </div>
                            <p className="text-blue-900 font-bold text-xl">
                                ${v.price}
                            </p>
                          </div>
                          <div className="flex justify-between items-center  pb-2 mt-3">
                            <div className="flex items-center">
                              <IoStar className="text-amber-500"/>
                              <p className="ms-1 text-gray-500">{v.rating} rating</p>
                            </div>
                            <button className="text-sm font-bold border border-blue-950 px-4 py-1 rounded-3xl 
                                    text-blue-950 hover:bg-blue-900 hover:text-white transition-all ">
                              View  
                            </button>
                          </div>
                      </div>
                  </div>
                )
              })
            }   
          </div>

        </div>
    </div>
  )
}

export default PopularCourse
