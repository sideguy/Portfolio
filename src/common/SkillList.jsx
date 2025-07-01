function SkillList({ src, skill }) {
  return (
    <span className="flex items-center gap-2">
      <img src={src} alt="" className="w-5 h-5 object-contain" />
      <p className="text-base md:text-lg">{skill}</p>
    </span>
  );
}

export default SkillList;
