import Image from "next/image";
import styled from "styled-components";

const HomeSection = styled.div`
  height: 100vh;
  min-height: 500px;
  background-image: url("/assets/images/bg2021.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeSectionInnerContainer = styled.div`
  display: flex;

  & img {
    width: 100%;
    max-width: 350px;
    min-height: 80px;
    height: auto;
  }
`;

export default function Home() {
  return (
    <>
      <HomeSection>
        <HomeSectionInnerContainer>
          <Image
            src="/assets/images/logo2021.svg"
            alt="trade.io"
            width={355}
            height={80}
          />
        </HomeSectionInnerContainer>
      </HomeSection>
    </>
  );
}
