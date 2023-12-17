function CardItem({ children, icon: Icon, title }) {
  return (
    <div className="flex items-baseline sm:text-lg lg:text-2xl font-semibold">
      <div className="flex items-center">
        <div className="w-5 mr-2 sm:w-6">
          <Icon />
        </div>
        <div className="flex items-baseline">
          <div className="mr-5">{title}</div>
          <div className="flex items-baseline">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
