import sitesJSON from "@/sites.json";
interface navRoutesType {
  [key: string]: {
    title: string;
    link: string;
  };
}
type linksType = {
  title: string;
  link: string;
};
const navRoutes: navRoutesType = sitesJSON.routes;
export const links: linksType[] = [];
for (let route in navRoutes) {
  const routeDes: linksType = navRoutes[route];
  links.push(routeDes);
}
