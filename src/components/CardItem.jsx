function CardItem({ children, icon: Icon, title }) {
  return (
    <div className="flex items-baseline text-sm md:text-base font-semibold">
      <div className="flex items-center">
        <div className="w-5 mr-2 sm:w-5">
          <Icon />
        </div>
        <div className="flex items-baseline">
          <div className="mr-5">{title}</div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default CardItem;
