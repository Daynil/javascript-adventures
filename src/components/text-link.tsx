import { Link } from 'gatsby';
import React from 'react';

type Props = React.PropsWithRef<JSX.IntrinsicElements['a']>;

export default function TextLink({
  href,
  target,
  rel,
  children,
  ...delegated
}: Props) {
  const external = href.match(/(^http|^mailto)/i);
  const internalImage = href.match(/(^\/static\/)/i);

  // Open external links and internal images in a new tab
  // If we use Gatsby's link for an internal image, it breaks
  if (typeof target === 'undefined')
    target = external || internalImage ? '_blank' : '_self';

  // External links should have noopener for security
  // Prevents the new page from being able to access to window.opener
  if (external) rel = 'noopener';

  return external || internalImage ? (
    <a href={href} rel={rel} target={target} {...delegated}>
      {children}
    </a>
  ) : (
    <Link to={href}>{children}</Link>
  );
}
