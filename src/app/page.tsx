import Header from "@/Components/Header";
import { links } from "@/utils/route";
export default function Home() {
  // const navLinks: links = ["resume", "contact", "projects"];

  return (
    <main className="">
      <Header navLinks={links} />
    </main>
  );
}
