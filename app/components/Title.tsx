import { twMerge } from "tailwind-merge";


interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <div className="w-full flex flex-row justify-start items-center gap-x-8">
      <h3 className={twMerge("whitespace-nowrap dynamic-subheading font-bold text-gray-400", className)}>
        {children}
      </h3>
      <div className="h-[1px] w-full bg-gray-300 max-w-[60%]"></div>
    </div>
  );
};

export default Title;
