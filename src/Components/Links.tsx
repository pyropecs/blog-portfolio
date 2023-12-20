import Link from "next/link";

type navBarProps = {
  routeLinks: string[];
};

export default function NavBar({ routeLinks }: navBarProps) {
  return (
    <>
      {routeLinks.map((link) => {
        return (
          <Link href={`/${link}`} className="capitalize">
            {link}
          </Link>
        );
      })}
    </>
  );
}
