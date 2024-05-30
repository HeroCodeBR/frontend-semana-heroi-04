import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, ...rest }: Props, ref) => {
    return (
      <input
        ref={ref}
        className="w-full border-2 border-gray-200 rounded-md p-2 outline-none my-2"
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);
