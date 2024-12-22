import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@namanbarkiya",
    icon: Icons.gitHub,
    link: "https://github.com/maulikb",
  },
  {
    name: "LinkedIn",
    username: "Maulik Beladiya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/maulikbeladiya",
  },
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "maulikbeladiya01",
    icon: Icons.gmail,
    link: "mailto:maulikbeladiya@gmail.com",
  },
];
