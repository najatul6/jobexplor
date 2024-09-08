import { FaDollarSign, FaMapLocation } from "react-icons/fa6";

const JobsCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    phone,
    email,
    address,
  } = job;
  return (
    <div className="border px-3 py-5 rounded-xl">
      <div className="w-40">
        <img src={logo} alt={company_name} className="w-full" />
      </div>
      <div>
        <h2>{job_title}</h2>
        <h6>{company_name}</h6>
      </div>
      <div className="flex justify-start gap-6 items-center">
        <h5 className="text-xl font-bold text-blue-600 border-blue-600 bg-transparent border-2 rounded-xl py-2 px-3">
          {remote_or_onsite}
        </h5>
        <h5 className="text-xl font-bold text-blue-600 border-blue-600 bg-transparent border-2 rounded-xl py-2 px-3">
          {job_type}
        </h5>
      </div>
      <div className="flex justify-start gap-5 items-center">
        <p className="flex gap-1 justify-center items-center"><FaMapLocation/> {location}</p>
        <p className="flex gap-1 justify-center items-center"><FaDollarSign/> {salary}</p>
      </div>
      <button className="btn bg-blue-600 text-white hover:bg-blue-950 outline-none border-0 text-xl capitalize">View Details</button>
    </div>
  );
};

export default JobsCard;
