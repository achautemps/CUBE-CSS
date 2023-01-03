import React, { Children } from 'react';

const Header = ({}: React.PropsWithChildren & { className?: string }) => null;
const Body = ({}: React.PropsWithChildren & { className?: string }) => null;
const Footer = ({}: React.PropsWithChildren & { className?: string }) => null;

function DefaultLayout({ children }: React.PropsWithChildren) {
  let childrenArray = Children.toArray(children) as React.ReactElement[];

  const header = childrenArray.find((el) => el.type === Header);
  const body = childrenArray.find((el) => el.type === Body);
  const footer = childrenArray.find((el) => el.type === Footer);

  return (
    <main className="flow">
      {header && (
        <header className={header.props.className}>
          {header.props.children}
        </header>
      )}
      {body && (
        <article className={body.props.className}>
          {body.props.children}
        </article>
      )}
      {footer && <footer> {footer.props.children}</footer>}
    </main>
  );
}

DefaultLayout.Header = Header;
DefaultLayout.Body = Body;
DefaultLayout.Footer = Footer;

export default DefaultLayout;
