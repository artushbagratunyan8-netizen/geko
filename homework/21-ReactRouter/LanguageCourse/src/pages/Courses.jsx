import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React Course",
      teacher: "John",
    },

    {
      id: 2,
      title: "JavaScript Course",
      teacher: "Anna",
    },

    {
      id: 3,
      title: "Node.js Course",
      teacher: "Mike",
    },
  ];

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          teacher={course.teacher}
        />
      ))}
    </div>
  );
}

export default Courses;