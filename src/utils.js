import RockIcon from "./assets/img/icon-rock.svg";
import PaperIcon from "./assets/img/icon-paper.svg";
import ScissorsIcon from "./assets/img/icon-scissors.svg";

export const OPTIONS = [
  {
    name: "Paper",
    icon: PaperIcon,
    gradient0: "hsl(230, 89%, 62%)",
    gradient100: "hsl(230, 89%, 65%)",
    afterRight: "-65px",
  },
  {
    name: "Scissors",
    icon: ScissorsIcon,
    gradient0: "hsl(39, 89%, 49%)",
    gradient100: "hsl(40, 84%, 53%)",
    right: "0",
    afterBottom: "-35px",
    afterRight: "65px",
    afterTransform: "rotate(-60deg)",
  },
  {
    name: "Rock",
    icon: RockIcon,
    gradient0: "hsl(349, 71%, 52%)",
    gradient100: "hsl(349, 70%, 56%)",
    top: "150px",
    left: "90px",
    afterTop: "-35px",
    afterLeft: "-25px",
    afterTransform: "rotate(60deg)",
  },
];
