import styled from "styled-components";

export default function BlueLine({ option }) {
  return <Line option={option} />;
}

const Line = styled.span`
  position: absolute;
  top: ${(props) => props.option.afterTop || null};
  bottom: ${(props) => props.option.afterBottom || null};
  right: ${(props) => props.option.afterRight || null};
  left: ${(props) => props.option.afterLeft || null};
  height: 15px;
  width: 55px;
  background: hsl(237, 49%, 15%);
  transform: ${(props) => props.option.afterTransform || null};
  z-index: -15;

  @media only screen and (min-width: 769px) {
    top: ${(props) => props.option.deskTop || null};
    right: ${(props) => props.option.deskRight || null};
    left: ${(props) => props.option.deskLeft || null};
    width: 85px;
  }
`;
