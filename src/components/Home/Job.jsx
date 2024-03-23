const Job = ({ job }) => {
  const {
    id,
    company_name,
    job_title,
    logo,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;
  //   console.log(job);
  return (
    <div>
      <div className="text-[#757575] font-semibold border p-8 space-y-3 rounded-lg">
        <div>
          <img src={logo} alt="" />
        </div>
        <h3 className="text-[#474747] font-bold text-2xl">{job_title}</h3>
        <p className=" text-lg">{company_name}</p>
        <div className="gap-5 flex">
          <span className="text-[#7E90FE] border-2 rounded border-[#7E90FE] px-4 py-2">
            {remote_or_onsite}
          </span>
          <span className="text-[#7E90FE] border-2 rounded border-[#7E90FE] px-4 py-2">
            {job_type}
          </span>
        </div>
        <div>
          <span>{location}</span>
          <span> Salary: {salary}</span>
        </div>
        <button className="bg-[#7E90FE] text-white btn">View Details</button>
      </div>
    </div>
  );
};

export default Job;
