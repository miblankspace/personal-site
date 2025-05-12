interface ToggleProps {
  option1: string;
  option2: string;
  isOption1: boolean;
  setIsOption1: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle({
  option1,
  option2,
  isOption1,
  setIsOption1,
}: ToggleProps) {
  return (
    <div className="relative inline-flex items-center cursor-pointer mb-5">
      <span
        className={`text-sm font-medium ${
          isOption1 ? "text-[var(--secondary)]" : "text-[var(--primary)]"
        }`}
        onClick={() => setIsOption1(true)}
      >
        {option1}
      </span>
      <div
        onClick={() => setIsOption1(!isOption1)}
        className="w-7 h-4 bg-[var(--tertiary)] rounded-full shadow-md relative mx-2 flex items-center"
      >
        <div
          className={`w-3 h-3 bg-[var(--secondary)] rounded-full absolute ${
            isOption1 ? "left-0" : "left-4"
          }`}
        ></div>
      </div>
      <span
        className={`text-sm font-medium ${
          !isOption1 ? "text-[var(--secondary)]" : "text-[var(--primary)]"
        }`}
        onClick={() => setIsOption1(false)}
      >
        {option2}
      </span>
    </div>
  );
}
