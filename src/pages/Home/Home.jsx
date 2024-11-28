import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Practice Home";
  }, []);
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
};

export default Home;
