const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-[faf8ff]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="">
            <img
              src="./../../../assets/images/user.png"
              className="max-w-lg "
            />
          </div>
          <div className="basis-1/2">
            <h1 className="text-5xl font-bold leading-[60px]">
              One Step Closer To Your{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
