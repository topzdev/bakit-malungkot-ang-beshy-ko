import classNames from "classnames";
import React from "react";

type Props = {
  variant: "filled" | "text";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const buttonVariant = {
  filled: {
    default: "bg-purple-500 text-white px-5 py-2.5 rounded-xl",
    disabled: "opacity-50 cursor-default",
    hover: "hover:bg-purple-600 cursor-pointer",
  },
  text: {
    default: "text-gray-500 font-semibold px-5 py-2.5 rounded-xl",
    disabled: "opacity-50 cursor-default",
    hover: "hover:bg-gray-500/10 cursor-pointer",
  },
};

const Button = ({ className, children, ...props }: Props) => {
  const buttonStyle = buttonVariant[props.variant];

  return (
    <button
      {...props}
      className={classNames(
        className,
        buttonStyle.default,
        props.disabled ? buttonStyle.disabled : buttonStyle.hover
      )}
    >
      {children}
    </button>
  );
};

export default Button;
