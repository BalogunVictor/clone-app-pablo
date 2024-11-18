import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
};

export function FullPageSpinner({ className }: Props) {
  return (
    <section
      className={classNames(
        className,
        "flex h-[700px] max-h-full items-center justify-center",
      )}
    >
      <div className="border-t-brand-blue h-10 w-10 animate-spin rounded-full border-2" />
    </section>
  );
}
