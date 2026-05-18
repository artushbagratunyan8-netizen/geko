import { Link } from "react-router-dom";

function CourseCard({ title, teacher, id }) {
  return (
    <div>
      <h2>{title}</h2>

      <p>Teacher: {teacher}</p>

      <Link to={`/courses/${id}`}>
        View Details
      </Link>

      <hr />
    </div>
  );
}

export default CourseCard;