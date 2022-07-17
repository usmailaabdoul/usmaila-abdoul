import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  align-items: center;
  background: #e8ecef;
`;

const LogoElt = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;

  /* img {
    width: 100px;
  } */
  display: flex;
  align-items: center;
  /* color : rgb(18, 148, 210); */
  color: #4653ed;
  font-size: 14px;
  font-weight: 500;

  span {
    padding: 0 5px;
    font-size: 20px;
    margin-top: -5px;
    color: rgb(235, 91, 210);
  }
`;

const NavElts = styled.div`  
  grid-column: span 6;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;

  /* .home {
    grid-column-start: 2;
  } */
`;

const CtaBtn = styled.div`
  grid-column: span 3;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-column-gap: 20px;

  grid-column-start: 10;
  grid-column-end: 12;
`;

const Btn = styled.button`
  grid-column-start: 2;
  /* grid-column-end: 2; */

  border: none;
  background: #4653ed;
  color: #fcfbfb;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: 50px;
  font-family: 'open sans';

  :hover {
    cursor: pointer;
  }
`;

const NavButton = styled.button`
  border: none;
  background: transparent;
  color: #262626;
  font-weight: 500;
  font-size: 16px;
  font-family: 'open sans';
  
  &&.home {
    color: #4653ed;
    font-weight: 600;
    position: relative;
    padding: 4px;

    ::after {
      content: '';
      position: absolute;
      background: #4653ed;
      width: 20%;
      height: 3px;
      bottom: 0;
      left: 50%;
      right: 50%;
      transform: translate(-50%, 50%);
      border-radius: 10px
    }
  }

  :hover {
    cursor: pointer;
  }
`;

const Nav = () => {
  return (
    <MainContainer>
      <LogoElt>
        {/* <img src={Logo} alt="logo" /> */}
        <span>{`{`}</span>
        <div>Usmaila - Abdoul</div>
        <span>{`}`}</span>
      </LogoElt>
      <NavElts>
        <NavButton className="home">Home</NavButton>
        <NavButton>Projects</NavButton>
        <NavButton>About me</NavButton>
      </NavElts>
      <CtaBtn>
        <Btn>Contact Us</Btn>
      </CtaBtn>
    </MainContainer>
  )
}

export default Nav
