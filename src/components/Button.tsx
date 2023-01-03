import { PropsWithChildren } from 'react';

const Button = ({
  variant = 'primary',
  size = 'default',
  children,
}: PropsWithChildren<{ variant?: string; size?: string }>) => (
  <button className="button" data-size={size} data-variant={variant}>
    {children}
  </button>
);
export default Button;
