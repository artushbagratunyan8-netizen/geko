import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

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

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  return (
    <div>
      <h1>{course.title}</h1>

      <h2>Teacher: {course.teacher}</h2>

      <p>ID: {course.id}</p>
    </div>
  );
}

export default CourseDetails;