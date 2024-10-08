import { twMerge } from "tailwind-merge";

interface GradientProps {
    children: React.ReactNode;
    className?: string;
}

const Gradient: React.FC<GradientProps> = ({ children, className }) => {
  return (
    <div className={twMerge("relative overflow-x-hidden", className)}>
        <div className="z-10">
            {children}
        </div>
        <div className="-z-10 absolute bg-primary/40 w-[450px] h-[450px] rounded-full
        blur-[50px]
        top-[100px] -right-[250px]" />
        <div className="-z-10 absolute bg-primary/40 w-[250px] h-[250px] rounded-full
        blur-[50px]
        top-[200px] right-[150px]" />
        <div className="-z-10 absolute bg-primary/40 w-[275px] h-[275px] rounded-full
        blur-[50px]
        top-[300px] right-[325px]" />
        <div className="-z-10 absolute bg-primary/40 w-[275px] h-[275px] rounded-full
        blur-[50px]
        top-[225px] right-[475px]" />
    </div>
  )
}

export default Gradient