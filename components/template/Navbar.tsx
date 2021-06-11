import React from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiBlogger, mdiBriefcase, mdiHome } from "@mdi/js";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  children?;
  className?: string;
  props?;
}

const Navbar = () => {
  const { pathname } = useRouter();
  const MyLink = ({ href, children, className, ...props }: LinkProps) => {
    return (
      <Link href={href}>
        <a
          className={`text-white p-2 flex rounded-md transition-colors hover:bg-primary-light focus:bg-primary-light space-x-2 ${
            pathname === href ? "text-secondary" : ""
          } ${className}`}
          {...props}
          href={href}
        >
          {children}
        </a>
      </Link>
    );
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-2">
      {pathname}
      <MyLink href="/">
        <Icon path={mdiHome} size={1} /> Home
      </MyLink>
      <MyLink href="/blog">
        <Icon path={mdiBlogger} size={1} /> Blog
      </MyLink>
      <MyLink href="/projects">
        <Icon path={mdiBriefcase} size={1} /> Projects
      </MyLink>
    </div>
  );
};

export default Navbar;
