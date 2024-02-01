function Title({ title1, title2 }) {
  return (
    <h1 className="font-bold text-base sm:text-lg ">
      <span className="mr-5 sm:mr-10">{title1}</span>
      <span>{title2}</span>
    </h1>
  );
}

export default Title;
