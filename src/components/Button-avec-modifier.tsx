import { PropsWithChildren } from 'react';
{
  /* <button className="button button--secondary button--tiny" > */
}

const Button = ({
  variant = 'primary',
  size = 'default',
  children,
}: PropsWithChildren<{ variant?: string; size?: string }>) => (
  
  <button
    className={`button ${variant === 'primary' ? 'button--primary' : 'button--secondary'} ${size === 'default' ? 'button--default' : 'button--tiny'}`}
  >
    {children}
  </button>
);
export default Button;
