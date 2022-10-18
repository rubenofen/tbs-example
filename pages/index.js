import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Splash() {
  return (
    <Wrapper>
      <AppName>coach meet</AppName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppName = styled.span`
  color: #00b6ef;
  font-size: 32px;
`;
