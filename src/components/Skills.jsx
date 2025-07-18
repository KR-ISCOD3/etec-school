import { FaBook, FaUserTie } from "react-icons/fa"
import { GrStatusGood } from "react-icons/gr"
import { ImPriceTag } from "react-icons/im"


function Skills() {
  return (
    <div className="w-full py-20 mx-auto bg-blue-950">
      <div className="w-[95%] sm:w-[80%] lg:flex items-center justify-between mx-auto">
          <div className="w-full h-[220px] sm:h-[450px] lg:w-[50%] mt-6 border-4 border-gray-200 rounded-lg overflow-hidden shadow-md shadow-gray-800">
            <iframe
                className="w-full h-full object-cover mb-0"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fkroitchetlaor%2Fposts%2Fpfbid0ddWXy1KwkKspuKycBy9VqbCCCrdZh5uktMGmpGPq7hAdBcCsKMAcwq45bDKKQKnGl&show_text=false"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="lg:w-[45%] ">
            <h1 className="text-3xl font-bold py-4 text-white my-5 lg:text-5xl">What Learners Trust SkillNest</h1>
            <div className="flex items-center my-4 lg:my-3">
                <GrStatusGood className="text-8xl lg:text-6xl text-white"/>
                <div className="pl-4">
                    <h1 className="text-2xl font-medium text-white">Best Quality</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus ipsam labore itaque, saepe ipsum?</p>
                </div>
            </div>
            <div className="flex items-center my-4 lg:my-3">
                <FaUserTie className="text-8xl lg:text-6xl text-white"/>
                <div className="pl-4">
                    <h1 className="text-2xl font-medium text-white">Friendly Instructor</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus ipsam labore itaque, saepe ipsum?</p>
                </div>
            </div>
            <div className="flex items-center my-4 lg:my-3">
                <ImPriceTag className="text-8xl lg:text-6xl text-white"/>
                <div className="pl-4">
                    <h1 className="text-2xl font-medium text-white">Good Price</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus ipsam labore itaque, saepe ipsum?</p>
                </div>
            </div>
            <div className="flex items-center my-4 lg:my-3">
                <FaBook className="text-8xl lg:text-6xl text-white"/>
                <div className="pl-4">
                    <h1 className="text-2xl font-medium text-white">Many Course</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus ipsam labore itaque, saepe ipsum?</p>
                </div>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Skills
