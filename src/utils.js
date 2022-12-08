import RockIcon from "./assets/img/icon-rock.svg";
import PaperIcon from "./assets/img/icon-paper.svg";
import ScissorsIcon from "./assets/img/icon-scissors.svg";

export const OPTIONS = [
  {
    name: "Paper",
    icon: PaperIcon,
    borderGradient:
      "linear-gradient(to bottom, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
    afterTop: "40px",
    afterLeft: "110px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
  },
  {
    name: "Scissors",
    icon: ScissorsIcon,
    borderGradient:
      "linear-gradient(to bottom, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
    right: "0",
    afterTop: "125px",
    afterRight: "65px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
    afterTransform: "rotate(-60deg)",
  },
  {
    name: "Rock",
    icon: RockIcon,
    borderGradient:
      "linear-gradient(to bottom, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
    top: "150px",
    left: "90px",
    afterTop: "115px",
    afterLeft: "65px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
    afterTransform: "rotate(60deg)",
  },
];
