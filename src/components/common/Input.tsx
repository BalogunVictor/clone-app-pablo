import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

// w-full h-8  border-solid border-2 border-black mt-2  pl-2

const inputStyles = cva(
  'w-full block text-white placeholder:text-white appearance-none tracking-normal font-normal leading-loose px-3 text-sm',
  {
    defaultVariants: {
      error: false,
      intent: 'normal',
      size: 'md',
    },
    variants: {
      error: {
        true: '!border-rose-500',
      },
      intent: {
        fill: 'bg-gray-100 border-gray-200 focus:border-brand-textInput',
        normal: 'bg-blueDark opacity-65 focus:!outline-none',
      },
      size: {
        lg: 'h-16',
        md: 'h-12',
        sm: 'h-10',
      },
    },
  }
);

export type InputProps = Omit<VariantProps<typeof inputStyles>, 'error'> & {
  label?: string;
  loading?: boolean;
  error?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  addon?: ReactNode;
  isLoading?: boolean;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      intent,
      size,
      rightIcon,
      addon,
      className,
      leftIcon,
      isLoading,
      ...rest
    },
    ref
  ) => {
    return (
      <label className={classNames('group block', className)}>
        {label && (
          <p className="mb-2 block text-lg font-medium leading-6 text-black">
            {label}
          </p>
        )}
        <div className="relative rounded-md">
          {leftIcon && (
            <div className="text-brand-textBlack pointer-events-none absolute inset-y-0 left-0 flex  items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={classNames(
              inputStyles({ error: !!error, intent, size }),
              {
                'pl-8': leftIcon,
                'pr-8': rightIcon,
              }
            )}
            {...rest}
          />

          {rightIcon && (
            <div className="text-brand-textBlack absolute inset-y-0 right-0 z-20 flex  items-center justify-center">
              {rightIcon}
            </div>
          )}

          {isLoading && (
            <div className="text-brand-textBlack absolute inset-y-0 right-0 z-20 mr-3 flex  items-center justify-center">
              <div className="border-t-brand-blue h-4 w-4 animate-spin rounded-full border-2" />
            </div>
          )}
        </div>

        {error && (
          <p className="mt-2 flex items-center gap-x-1 text-sm text-rose-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            {error}
          </p>
        )}
        {addon && (
          <div className="mt-2 h-0 overflow-hidden opacity-0 transition-all duration-100 group-focus-within:h-max group-focus-within:opacity-100">
            {addon}
          </div>
        )}
      </label>
    );
  }
);

Input.displayName = 'Input';
