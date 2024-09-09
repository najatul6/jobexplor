import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-base-200 text-base-content p-10">
      <div className="footer max-w-7xl mx-auto">
        <aside>
          <h2 className="text-3xl uppercase font-bold">Job Explore</h2>
          <p>
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <div className="grid grid-flow-col gap-4">
            <Link to="" className="p-3 bg-gray-400 rounded-full text-white btn">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link to="" className="p-3 bg-gray-400 rounded-full text-white btn">
              <FaTwitter className="text-xl" />
            </Link>
            <Link to="" className="p-3 bg-gray-400 rounded-full text-white btn">
              <FaInstagram className="text-xl" />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
