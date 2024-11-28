import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const About = () => {
  return (
    <div>
      <h2>About page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati
        labore ea facilis iste soluta minima laudantium quibusdam illum, totam
        delectus error assumenda ut amet vel tempora quisquam fugit? Excepturi!
      </p>
      <nav>
        <NavLink to="company">Company</NavLink>
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="job">Job</NavLink>
      </nav>
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default About;
