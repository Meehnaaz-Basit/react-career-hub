import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("./../../../public/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleShowButton = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="font-bold text-3xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 my-10">
        {jobs.slice(0, showAll ? jobs.length : 4).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleShowButton}
          className="bg-[#7E90FE] text-white btn"
        >
          {showAll ? "Show Less Jobs" : "Show All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
