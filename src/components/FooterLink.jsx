function FooterLink({ iconImg, text, link }) {
  return (
    <a
      href={link}
      className="flex items-center text-sm hover:underline hover:text-amber-300 active:text-amber-500"
    >
      <div className="flex justify-center w-4 mr-1.5">
        <img src={iconImg} alt="" className="flex h-4" />
      </div>
      <span>{text}</span>
    </a>
  );
}

export default FooterLink;
