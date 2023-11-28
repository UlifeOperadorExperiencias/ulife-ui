import Link from 'next/link';
import { usePathname } from 'next/navigation';

export { NavLink };

interface propTypes {
  href: string;
  exact?: boolean;
  children?: any;
  className?: string;
  disable?: boolean;
}

function NavLink({
  href,
  exact = false,
  disable = false,
  children,
  ...props
}: propTypes) {
  const pathname = usePathname();

  const isActive = pathname === href ? true : false;

  if (isActive) {
    props.className += ' bg-lightblue text-white';
  } else {
    props.className += ' text-gray-300';
  }

  return (
    <a href={disable ? '#' : href[0]}>
      <div {...props}>{children}</div>
    </a>
  );
}
