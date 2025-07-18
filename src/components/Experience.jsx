import { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

function Experience() {

  const exp = [
    {
        img:"./image/exp1.png",
        des:`We are proud to have provided scholarships to outstanding students 
        across the country. Through our scholarship program, we aim to support 
        underprivileged learners who demonstrate strong academic performance, 
        leadership potential, and a passion for education. Many of our recipients 
        have gone on to attend top universities and make a difference in their communities.`
    },
    {
        img:"./image/exp2.png",
        des:`Our clothes giveaway initiative was created to help families in need 
        during the colder seasons and times of crisis. With the help of generous 
        donors and volunteers, we've distributed hundreds of warm clothing items, 
        including jackets, shoes, and school uniforms. It’s more than just a gift — 
        it’s a message of care and dignity for every recipient.`
    },
    {
        img:"./image/exp3.png",
        des:`To appreciate our loyal community, we launched a special program offering 
        free online courses to our top fans. These courses cover a wide range of 
        valuable skills, from digital marketing and coding to language learning and 
        personal development. This initiative is our way of saying thank you while 
        empowering fans to keep growing and achieving their goals`
    }
  ];

  const [curindex,setcurindex] = useState(0);

  const prev = () =>{
    setcurindex((i)=>
        i === 0 ? exp.length - 1: i - 1
    )
  }

  const next = () =>{
    setcurindex((i)=>
        i === exp.length - 1 ? 0 : i + 1
    )
  }

  return (
    <div className="w-full mt-10 bg-blue-950">
        <div className="w-[95%] sm:w-[80%]  py-6 mx-auto">
            <div className="flex justify-between items-center">

                <h1 className="text-lg sm:text-3xl font-bold text-white">Our Experience</h1>
                <div>
                    <button onClick={prev} className=' rounded-full text-4xl text-white '>
                        <IoMdArrowDropleft/>
                    </button>
                    <button onClick={next} className=' rounded-full text-4xl text-white'>
                        <IoMdArrowDropright/>
                    </button>
                </div>
            </div>

            <div className='my-5 lg:mt-10'> 

                <div className='lg:flex items-center transition'>
                    <div className='w-full h-[220px] md:h-[300px] lg:w-[40%] bg-gray-300 overflow-hidden shadow-lg rounded-lg border-5 border-gray-300' >
                        <img src={exp[curindex].img} alt="" className='w-full object-cover h-full'/>
                    </div>  
                    <div className='py-4 lg:w-[60%] px-5'>
                        <p className='text-sm sm:text-xl font-medium text-gray-300 lg:pr-[150px] lg:pl-[50px]'>
                           {exp[curindex].des}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Experience
    