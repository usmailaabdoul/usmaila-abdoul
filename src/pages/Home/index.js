import styled from 'styled-components';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { IoIosLaptop, IoLogoGithub, IoLogoTwitter, IoLogoGoogle, IoLogoLinkedin, IoIosPerson } from 'react-icons/io';
import Me from '../../assets/me.png';

import { SliderProjects } from '../../components';

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1.5fr 2fr;
  grid-row-gap: 20px;
  background: #e8ecef;
`;

const GridElt = styled.div`
  /* border: 1px solid #ddd; */
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;

  .item-1 {
    grid-column-start: 2;
    grid-column-end: 6;
  }

  .item-2 {
    grid-column-start: 6;
    grid-column-end: 9;
  }

  .item-3 {
    grid-column-start: 9;
    grid-column-end: 12;
  }

  .explore {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 78px;
      padding: 0;
      margin: 0;
      font-family: 'open sans';
      line-height: 1em;
      color: #262626;
    }

    h2 {
      font-size: 30px;
      color: #262626;
      padding: 0;
      margin: 0;
      margin-bottom: 5px;
      font-family: 'open sans';
    }
  }

  .greetings {
    position: relative;
    .greeting1,
    .greeting2 {
      position: absolute;
      height: 200px;
      width: 200px;
      background: #262626;
      border-radius: 50%;
      right: 50%;
      top: 50%;
      transform: translate(30%, -50%);
    }

    .greeting2 {
      background: #fcfbfb;
      text-align: center;
      transform: translate(70%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color:  #262626;
    }
  }

  .about {
    display: grid;
    /* flex-direction: column; */
    align-content: center;
    padding: 0 30px;
    color:  #262626;
    font-family: 'open sans';
    font-size: 15px;

    .cta_btn {
      margin-top: 30px;
      display: flex;
      align-items: center;

      button {
        border: none;
        background: transparent;
        text-decoration: none;
        color: #262626;
        font-weight: 600;
        font-size: 16px;
        font-family: 'open sans';
        padding: 0;

        :after {
          display:block;
          content: '';
          border-bottom: solid 2px #4653ed;  
          transform: scaleX(0);  
          transition: transform 250ms ease-in-out;
          transform-origin:  0% 50%;
        }

        :hover {
          cursor: pointer;
          :after { transform: scaleX(1); }
        }
      }

      svg {
        margin-left: 10px;
      }
    }
  }

  .projects {
    padding-top: 10px;
    font-family: 'open sans';

    .socials {
      background: #fcfbfb;
      width: 80%;
      margin-top: 20px;
      border-radius: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 85px;
    }
  }

  .experiences {
    padding-bottom: 50px;
    position: relative;

    .icon {
      background: #fcfbfb;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      position: absolute;
      z-index: 2;
      top: 40%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.3);

      svg {
        height: 50px;
        width: 50px;
      }
    }

    .experience {
      top: 60%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      height: 180px;
      width: 80%;
      border-radius: 40px;
      background: #4653ed;
      
      .title {
        font-family: 'open sans';
        /* line-height: 1em; */
        color: #fcfbfb;
        font-size: 16px;
        font-weight: 600;
        padding: 0 20px;
        padding-top: 80px;
        padding-bottom: 7px;
      }

      .subtile {
        font-family: 'open sans';
        color: #e8ecef;
        font-size: 22px;
        font-weight: 400;
        padding: 0 20px;
      }
    }
  }

  .profile {
    padding-top: 10px;
    font-family: 'open sans';
    display: flex; 
    align-items: center;
    flex-direction: column;

    .profileContainer {
      background: #b8b8b8;
      border-radius: 45px;
      margin-bottom: 20px;
      height: 290px;
      width: 60%;
      background-image: url(${Me});
      background-size: 230px 230px;
      background-repeat: no-repeat;
      background-position-x: 40px;
      background-position-y: bottom;

      .title {
        padding: 20px;
        font-family: 'open sans';
        color: #262626;
        font-weight: 700;
      }
    }

    .cta-btns {
      display: flex;
      width: 60%;
      align-items: center;
      .bg-btn {
        flex: 2;
        border: none;
        background: #4653ed;
        color: #fcfbfb;
        font-size: 14px;
        font-weight: 700;
        padding: 12px 20px;
        border-radius: 50px;
        font-family: 'open sans';
        margin-left: 10px;
        height: 50px;

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const SmBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: #4653ed;
  background: #262626;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #fff;
    width: 20px;
    height: 20px;
  }
`;

const Home = () => {
  return (
    <MainContainer>
      <Layout>
        <GridElt className="item-1 explore">
          <h2>Hello, I'm</h2>
          <h1>Usmaila Abdoul</h1>
        </GridElt>
        <GridElt className="item-2 greetings">
          <div className="greeting1"></div>
          <div className="greeting2">الله أكبر</div>
        </GridElt>
        <GridElt className="item-3 about">
          <div className="">
            I am a Front End developer with 2+ years
            of experience developing web and
            mobile applications and services.
            I have experience with <strong>React</strong>, <strong>React Native</strong>,
            <strong> Node.js</strong>, and <strong>Express</strong>. Also
            experienced with <strong>HTML/CSS</strong>,
            <strong>JavaScript</strong>, and <strong>TypeScript</strong>.
            Experienced in creating unit and
            end-to-end tests. Comfortable
            working in a Agile/scrum
            environment.</div>

          <div className="cta_btn">
            <button>Read More</button><IoArrowForwardCircleOutline size={20} />
          </div>
        </GridElt>
      </Layout>
      <Layout>
        <GridElt className="item-1 projects">
          <SliderProjects />
          <div className="socials">
            <SmBtn><IoLogoGithub /></SmBtn>
            <SmBtn><IoLogoTwitter /></SmBtn>
            <SmBtn><IoLogoGoogle /></SmBtn>
            <SmBtn><IoLogoLinkedin /></SmBtn>
            <SmBtn><IoIosPerson /></SmBtn>
          </div>
        </GridElt>
        <GridElt className="item-2 experiences">
          <div className="icon">
            <IoIosLaptop />
          </div>
          <div className="experience">
            <div className="title">Gitstart - 1.5 years</div>
            <div className="subtile">TS, React Native, React</div>
          </div>
        </GridElt>
        <GridElt className="item-3 profile">
          <div className="profileContainer">
            <div className="title">Checkout my Profile or Connect with me!</div>
          </div>
          <div className="cta-btns">
            <SmBtn className="sm-btn"><IoLogoGithub /></SmBtn>
            <button className="bg-btn">Get In Touch</button>
          </div>
        </GridElt>
      </Layout>
    </MainContainer>
  )
}

export default Home
