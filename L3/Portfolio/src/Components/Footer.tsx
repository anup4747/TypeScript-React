import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Footer: React.FC = () => {
  return (
    <div className="App">
      <footer className="flex flex-col justify-center items-center px-20 py-14 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[232px]">
          <div className="flex flex-row gap-8 justify-center">
            <a
              href="https://github.com/anup4747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/anup-tarwade-2218962b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://x.com/anup23257"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="mailto:anupdtarwade@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>

          <div className="mt-7 text-sm text-center text-slate-800 max-md:mr-1.5">
          <p>&copy; 2024 Anup. All rights reserved.</p>  <p>"Stay positive, work hard, make it happen!"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
