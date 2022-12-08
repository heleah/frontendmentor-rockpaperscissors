import RockIcon from "./assets/img/icon-rock.svg";
import PaperIcon from "./assets/img/icon-paper.svg";
import ScissorsIcon from "./assets/img/icon-scissors.svg";

export const OPTIONS_COLORED = [
  {
    name: "Paper",
    icon: PaperIcon,
    dimensions: "100px",
    background: "#e4e4e4",
    beforeDimensions: "130px",
    beforeBackground:
      "linear-gradient(to bottom, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)",
    afterRight: "-65px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
  },
  {
    name: "Scissors",
    icon: ScissorsIcon,
    dimensions: "100px",
    background: "#e4e4e4",
    beforeDimensions: "130px",
    beforeBackground:
      "linear-gradient(to bottom, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)",
    right: "0",
    afterBottom: "-35px",
    afterRight: "65px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
    afterTransform: "rotate(-60deg)",
  },
  {
    name: "Rock",
    icon: RockIcon,
    dimensions: "100px",
    background: "#e4e4e4",
    beforeDimensions: "130px",
    beforeBackground:
      "linear-gradient(to bottom, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
    top: "150px",
    left: "90px",
    afterTop: "-35px",
    afterLeft: "-25px",
    afterHeight: "15px",
    afterWidth: "55px",
    afterBackground: "hsl(237, 49%, 15%)",
    afterTransform: "rotate(60deg)",
  },
];
