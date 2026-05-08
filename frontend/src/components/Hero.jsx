import styled, { keyframes } from "styled-components";
import device from "./responsive";

const Hero = () => {
  return (
    <Section id="home">

      <HeroOverlay />
      <MandalaBg />

      <Content>
        <Title>
Pt. Sharvi <br />
          <TitleGold>Shastri ji</TitleGold>
        </Title>

        <Tagline>
          India's Most Revered Vedic Astrologer & Spiritual Guide
        </Tagline>

        <Desc>
          Illuminate your path with the ancient wisdom of Jyotisha Shastra.
          Trusted by millions across India and the world.
        </Desc>

        <Stats>
          <Stat>
            <StatNum>5+</StatNum>
            <StatLabel>Years Experience</StatLabel>
          </Stat>

          <Divider>✦</Divider>

          <Stat>
            <StatNum>200+</StatNum>
            <StatLabel>Happy Clients</StatLabel>
          </Stat>

          <Divider>✦</Divider>

          <Stat>
            <StatNum>50+</StatNum>
            <StatLabel>Awards Won</StatLabel>
          </Stat>

          <Divider>✦</Divider>

          <Stat>
            <StatNum>30+</StatNum>
            <StatLabel>Countries Served</StatLabel>
          </Stat>
        </Stats>

        <Buttons>
          <PrimaryBtn href="#contact">Consult Now</PrimaryBtn>
          <SecondaryBtn href="#services">Explore Services</SecondaryBtn>
        </Buttons>
      </Content>

      <ImageArea>
        <Frame>
          <ImagePlaceholder>
            <Silhouette>👤</Silhouette>
            <FrameGlow />
            <Ring1 />
            <Ring2 />
            <Ring3 />
          </ImagePlaceholder>
        </Frame>
      </ImageArea>


    </Section>
  );
};

export default Hero;

/* ================= STYLES ================= */

/* Animations */

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const mandalaSpin = keyframes`
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
`;

const glowSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ringPulse = keyframes`
  0%,100% { opacity: 0.2; transform: translate(-50%,-50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%,-50%) scale(1.02); }
`;

const scrollDot = keyframes`
  0% { top: 6px; opacity: 1; }
  100% { top: 22px; opacity: 0; }
`;

const bounce = keyframes`
  0%,100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`;

/* Layout */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 160px 30px 80px;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(135deg, rgba(58,5,9,0.92), rgba(92,10,20,0.85), rgba(58,5,9,0.95)),
    radial-gradient(ellipse at 70% 50%, rgba(201,162,39,0.15), transparent 60%);
  @media ${device.mobile} {
    padding: 70px 0;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;
`;

const MandalaBg = styled.div`
  position: absolute;
  right: -100px;
  top: 50%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(201,162,39,0.08), transparent);
  animation: ${mandalaSpin} 30s linear infinite;
`;

/* Content */

const Content = styled.div`
  max-width: 600px;
  z-index: 1;
  animation: ${fadeInUp} 1s ease both;
`;

const Badge = styled.div`
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  color: var(--gold-light);
  border: 1px solid var(--gold);
  padding: 6px 18px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--ivory);
`;

const TitleGold = styled.span`
  color: var(--gold-light);
  text-shadow: 0 0 30px rgba(240,192,74,0.5);
`;

const Tagline = styled.p`
  font-family: 'Cinzel', serif;
  color: var(--gold-pale);
`;

const Desc = styled.p`
  color: rgba(255,235,200,0.8);
  margin-bottom: 30px;
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNum = styled.span`
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.8rem;
  color: var(--gold-light);
`;

const StatLabel = styled.span`
  font-size: 0.72rem;
  color: var(--gold-light);
`;

const Divider = styled.div`
  color: var(--gold);
`;

/* Buttons */

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const PrimaryBtn = styled.a`
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  padding: 14px 32px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--maroon-deep);
`;

const SecondaryBtn = styled.a`
  border: 1px solid var(--gold);
  padding: 13px 30px;
  color: var(--gold-light);
  text-decoration: none;
`;

/* Image Area */

const ImageArea = styled.div`
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  @media ${device.laptop} {
    display: none;
  }
`;

const Frame = styled.div`
  display: flex;
`;

const ImagePlaceholder = styled.div`
  width: 280px;
  height: 380px;
  border-radius: 50% 50% 40% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Silhouette = styled.div`
  font-size: 6rem;
  opacity: 0.2;
`;

const FrameGlow = styled.div`
  position: absolute;
  inset: -2px;
  animation: ${glowSpin} 8s linear infinite;
`;

const Ring1 = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  animation: ${ringPulse} 4s infinite;
`;

const Ring2 = styled(Ring1)`
  width: 380px;
  height: 380px;
  animation-delay: 1s;
`;

const Ring3 = styled(Ring1)`
  width: 440px;
  height: 440px;
  animation-delay: 2s;
`;

/* Scroll Indicator */

const ScrollDown = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  animation: ${bounce} 2s infinite;

  span {
    display: block;
    width: 24px;
    height: 40px;
    border: 2px solid rgba(201,162,39,0.5);
    border-radius: 12px;
    position: relative;
  }

  span::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 8px;
    background: var(--gold-light);
    left: 50%;
    transform: translateX(-50%);
    animation: ${scrollDot} 2s infinite;
  }
`;