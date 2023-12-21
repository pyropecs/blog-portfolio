import Link from "next/link";
import { generateRandomId } from "@/lib/randomid";
type navBarProps = {
  routeLinks: {
    title: string;
    link: string;
  }[];
};

export default function NavBar({ routeLinks }: navBarProps) {
  return (
    <>
      {routeLinks.map((routeLink) => {
        return (
          <Link
            href={`${routeLink.link}`}
            className="capitalize p-3 m-3 hover:bg-gray-900"
            key={generateRandomId()}
          >
            {routeLink.title}
          </Link>
        );
      })}
    </>
  );
}
