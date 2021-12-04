import axios from "axios";
import { useState, useEffect} from "react";
import CardLayout from "./CardLayout";
import Search from '../Search/SearchBar';
import '../Staff.css'



function Card(){
    
    //initialize the use case to empty
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        console.log("use effect hook executed");
        axios
        .get('http://localhost:4500/crm/course')
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setCourses(response.data)
        })
        /*setTimeout(()=>{
            fetchStaffList();
        },5000)*/
        
    },[])

    const filterPosts = (courses, query) => {
        if (!query) {
            return courses;
        }

        return courses.filter((course) => {
            const courseName = course.course_name;
            return courseName.includes(query);
        });
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(courses, searchQuery);

    return (<>
        
        <div >
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            
            <ul>
                {filteredPosts.map(course =>

                    <li key={course.id}>
                        <CardLayout details={course} />
                    </li>

                )}
            </ul>
        </div>

    </>
    );
}
export default Card;