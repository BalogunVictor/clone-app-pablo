import classNames from "classnames";
import React, { DetailedHTMLProps } from "react";

type WrapperProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export function Wrapper({ className, ...rest }: WrapperProps) {
  return (
    <section
      className={classNames(
        "mx-auto max-w-[1440px] px-4 sm:px-6 xl:px-8",
        className,
      )}
      {...rest}
    />
  );
}
