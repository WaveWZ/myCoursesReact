import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading]= useState(true);

  const deleteCourse = (id) =>{
    const afterDeletedCourses = courses.filter((course)=> course.id !== id);
    setCourses(afterDeletedCourses);
  };


  const fetchCourses = async () =>{
    setLoading(true);
    try{
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false); // İşim bitti, veriyi apiden çektim o yüzden loading ekranı durdu.
    }
    catch(error){
      setLoading(false); // Hata mesajı alana kadar loading ekranı duracak , gelince loading ekranı gidecek.
    }

  }
useEffect(() => {

  fetchCourses();
}, [])


  return (
      <div className='App'>
        {loading ? (
          <Loading/>
        ) : (
        <>
          {courses.length === 0 ? (
          <div className='refreshDiv'>
            <h2>You have deleted all of the courses!</h2>
            <button className="cardDeleteBtn" onClick={()=>{fetchCourses()}}>Refresh</button>
          </div>
        ) : (<Courses courses={courses} removeCourse={deleteCourse}/>
        )}
        </>
        )}
        <Courses courses={courses}/>
      </div>
  );
}

export default App;
