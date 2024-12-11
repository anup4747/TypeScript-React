import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Footer: React.FC = () => {
  return (
    <div className="">
     <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0820f99421e22aa3917c11f20d1b35fbe1fa97cbfd06acb68dc7a83c06481c41?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83"
          alt="Featured"
          className="object-contain self-stretch mt-8 w-full aspect-[1000] stroke-[1px] stroke-neutral-200 max-md:max-w-full"
        />
      <footer className="flex flex-col justify-center items-center px-20 py-14 mt-10 w-full dark:bg-black navbarlight max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[232px]">
          <div className="flex flex-row gap-8 justify-center">
            <a
              href="https://github.com/anup4747"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/anup-tarwade-2218962b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://x.com/anup23257"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="mailto:anupdtarwade@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white hover:text-gray-600"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>

          <div className="mt-7 text-sm text-center dark:text-white max-md:mr-1.5">
          <p className="dark:text-white">&copy; 2024 Anup. All rights reserved.</p>  <p>"Stay positive, work hard, make it happen!"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
