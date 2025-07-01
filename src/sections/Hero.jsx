import heroImg from '../assets/Sohail_image.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import twitterLight from '../assets/twitter-light.svg';
import twitterDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import CV from '../assets/cv.pdf';
import { useTheme } from '../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center gap-8 h-screen min-h-[500px] px-4 md:flex-row-reverse md:justify-evenly md:gap-12"
    >
      <div className="relative p-2">
        <img
          src={heroImg}
          className="max-w-[150px] md:max-w-[240px] xl:max-w-[250px] rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          alt="Profile picture of Sohail Khan"
        />
        <img
          className="absolute -top-4 -right-4 w-6 cursor-pointer"
          src={themeIcon}
          alt="Toggle theme"
          onClick={toggleTheme}
        />
      </div>

      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-wide">
          Sohail
          <br />
          Khan
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 font-semibold">
          Web Developer
        </h2>

        <div className="flex gap-6 justify-center">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter icon"
              className="w-[30px] hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://github.com/sideguy" target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              alt="Github icon"
              className="w-[30px] hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://www.linkedin.com/in/sohailkhan2001/" target="_blank" rel="noreferrer">
            <img
              src={linkedinIcon}
              alt="Linkedin icon"
              className="w-[30px] hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>

        <p className="max-w-[26ch] text-gray-700 dark:text-gray-300 leading-relaxed text-base">
          With a passion for developing modern web apps for commercial businesses.
        </p>

        <a href={CV} download>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105 active:translate-y-1 active:shadow-sm">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
