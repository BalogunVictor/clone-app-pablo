"use client";

import classNames from "classnames";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useRef,
} from "react";

export type CodeInputProps = {
  addon?: ReactNode;
  value?: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "type" | "hidden" | "value" | "ref"
>;

export function CodeInput({
  className,
  maxLength = 6,
  value,
  ...rest
}: CodeInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <label className={classNames("group relative", className)} htmlFor="hhh">
      <div className="relative z-20 mx-auto flex  gap-4" onClick={handleFocus}>
        {Array.from({ length: maxLength }, (_, index) => index + 1).map(
          (_, idx) => (
            <div
              key={idx}
              className={classNames(
                "group-focus-within:hover:border-brand-blue flex aspect-square w-full flex-1 items-center justify-center rounded border",
                {
                  "group-focus-within:border-brand-blue": Boolean(
                    value?.split("")[idx],
                  ),
                },
              )}
            >
              {value?.split("")[idx]}
            </div>
          ),
        )}
      </div>
      <input
        {...rest}
        ref={inputRef}
        className="h-0 max-h-0 w-0 max-w-0"
        maxLength={maxLength}
        value={value}
      />
    </label>
  );
}
