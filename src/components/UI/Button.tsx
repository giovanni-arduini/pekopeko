interface Props {
  children: React.ReactNode;
  textOnly: boolean;
  className: string[];
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  children,
  textOnly = false,
  className = "",
  type = "button",
  onClick,
}) => {
  const classes = `${textOnly ? "text-only" : ""} ${className}`.trim();

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
