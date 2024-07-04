const Separator = () => {
  return (
    <div className="flex justify-center items-center pt-3 pb-2">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-3 h-3 bg-blue-200 rounded-full mx-1"
        ></div>
      ))}
    </div>
  );
};

export default Separator;