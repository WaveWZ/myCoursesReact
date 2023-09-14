import Course from "./Course";

function Courses({courses, removeCourse}) {
    console.log({courses});
    return <div className="courseMainDiv">
        <div>
            <h2>My Courses</h2>
        </div>
        <div className="">
            {
                courses.map((course)=>{
                    return (
                        <Course key={course.id} {...course}  removeOneCourse={removeCourse}/> // ...course diye geçtiğimiz için (spread operatörü ile), objeye içerideki dosyadan direk ismiyle ulaşabiliriz.
                    )
                })
            }
        </div>
    </div>;

};
export default Courses;