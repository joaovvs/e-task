import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2.4rem;
  padding: 1.6rem 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 3.2rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg{
    font-size: 4rem;
    color: ${({theme})=> theme.COLORS.BLUE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    display: block;
  }
`;