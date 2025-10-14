export const Button = ({
  id,
  label,
  leftIcon,
  rightIcon,
  className,
}: {
  id: string;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer rounded-full bg-tertiary px-7 py-3 text-black ${className}`}
    >
      {leftIcon && leftIcon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase">
        <div>{label}</div>
      </span>
      {rightIcon && rightIcon}
    </button>
  );
};
