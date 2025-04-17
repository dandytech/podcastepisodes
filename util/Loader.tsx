import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Loader = styled(BiLoaderAlt)`
  width: 4.4rem;
  height: 4.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default Loader;
