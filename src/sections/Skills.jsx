import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../common/SkillList';
import { useTheme } from '../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className="flex flex-col text-center">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>

      <div className="flex justify-evenly flex-wrap gap-y-10 max-w-[26ch] self-center md:max-w-full md:gap-x-8 mt-10">
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="Next.js" />

      </div>

      <hr className="w-[100px] md:w-[300px] h-px bg-[var(--text-color)] my-8 mx-auto border-0" />

      <div className="flex justify-evenly flex-wrap gap-y-10 max-w-[26ch] self-center md:max-w-full md:gap-x-8">
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>

      <hr className="w-[100px] md:w-[300px] h-px bg-[var(--text-color)] my-8 mx-auto border-0" />

      <div className="flex justify-evenly flex-wrap gap-y-10 max-w-[26ch] self-center md:max-w-full md:gap-x-8">
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Mongoose" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
      </div>
    </section>
  );
}

export default Skills;