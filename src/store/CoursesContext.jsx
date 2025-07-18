import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const CourseContext = createContext();

export const CourseProvider = ({children})=>{
    const [course,setCourse] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{

        const fetchApi = async () =>{
            try{
                setLoading(true)
                const res = await axios.get('https://e-learning-data-json.onrender.com/courses')
                // console.log(res.data);
                setCourse(res.data);
            }catch(e){
                console.error("Fetch API is:",e.message);
            }finally{
                setLoading(false)
            }
        }

        fetchApi();

    },[]);

    return(
        <CourseContext.Provider value={{course,loading}}>
            {children}
        </CourseContext.Provider>
    )
}

// custom hook
export const useCourse = () => useContext(CourseContext);