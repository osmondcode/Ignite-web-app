import { Logo } from "./SVG";

export default function Preloader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-[5px] bg-[var(--dark)] fixed top-0 left-0 z-50 text-white">
      <div className="text-[26px] font-bold flex items-center gap-[15px]">
        <Logo />
        <h1 className="text-pull-up">
          IGNITE
          <span className="text-[var(--light)] text-[40px] ml-1 text-pull-up">
            .
          </span>
        </h1>
      </div>

      <div className="sm:w-[400px] xs:w-[350px] w-[80%] bg-gray-400 overflow-hidden rounded-[20px]">
        <div className="progress-bar h-[4px] rounded-[20px] bg-[var(--light)]"></div>
      </div>
    </div>
  );
}
