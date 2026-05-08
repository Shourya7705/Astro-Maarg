import styled from "styled-components";
import device from "./responsive";
const About = () => {
  return (
    <Section id="about">

      <DecorTop />

      <Container>

        <Header>
          <Ornament>✦ ✦ ✦</Ornament>
          <Title>About Shastri Ji</Title>
          <Ornament>✦ ✦ ✦</Ornament>
        </Header>

        <Grid>

          {/* LEFT SIDE */}
          <ImageCol>

            <ImgFrame>
              <ImgPlaceholder>
                <i className="fas fa-user-tie"></i>
              </ImgPlaceholder>

              <Badge>
                <i className="fas fa-star"></i>
                <span>Verified Expert</span>
              </Badge>
            </ImgFrame>

            <Quote>
              <i className="fas fa-quote-left"></i>
              <p>"The stars guide, but your karma defines your destiny."</p>
              <span>— Pt. Sharvi Shastri Ji</span>
            </Quote>

          </ImageCol>

          {/* RIGHT SIDE */}
          <ContentCol>

            <Tag>Master of Vedic Astrology</Tag>

            <Heading>
              A Beacon of Cosmic Wisdom for Over Two Decades
            </Heading>

            <p>
              Pandit Raghavendra Shastri Ji is one of India's most celebrated astrologers,
              blessed with a deep understanding of the Vedic sciences.
            </p>

            <p>
              His holistic approach combines traditional astrology, numerology,
              vastu shastra, and gemstone therapy.
            </p>
<br />
            <Features>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>PhD in Jyotish Shastra (BHU)</span>
              </Feature>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>Gold Medalist, All India Astrology Congress</span>
              </Feature>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>Advisor to 3 State Governments</span>
              </Feature>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>Author of 12 Bestselling Books</span>
              </Feature>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>Regular TV Panelist</span>
              </Feature>

              <Feature>
                <i className="fas fa-check-circle"></i>
                <span>Padma Shri Awardee</span>
              </Feature>

            </Features>

            <CTA href="#contact">Schedule a Consultation</CTA>

          </ContentCol>

        </Grid>

      </Container>

      <DecorBottom />

    </Section>
  );
};

export default About;

/* ===== STYLES ===== */

const Section = styled.section`
  background: var(--ivory);
  padding: 100px 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
`;

/* HEADER */

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Ornament = styled.div`
  color: var(--gold);
  letter-spacing: 0.3em;
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', serif;
  font-size: 2.5rem;
  color: var(--maroon-deep);
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 70px;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* LEFT */

const ImageCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImgFrame = styled.div`
  position: relative;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--maroon), var(--maroon-deep));
  padding: 3px;
`;

const ImgPlaceholder = styled.div`
  height: 450px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 10rem;
    opacity: 0.2;
  }
`;

const Badge = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: var(--gold);
  padding: 8px 16px;
  border-radius: 30px;
  display: flex;
  gap: 6px;
`;

const Quote = styled.div`
  background: linear-gradient(135deg, var(--maroon-deep), var(--maroon));
  padding: 25px;
  border-left: 3px solid var(--gold);

  i {
    color: var(--gold);
  }

  p {
    color: white;
  }
  span{
    color: var(--gold);
  }
`;

/* RIGHT */

const ContentCol = styled.div`
  padding-top: 20px;
`;

const Tag = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold);
  display: inline-block;
  padding: 5px 16px;
  border-radius: 30px; 
  margin-bottom: 15px;
  background: rgba(201,162,39,0.08);
`;

const Heading = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  color: var(--maroon-deep);
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Feature = styled.div`
  display: flex;
  gap: 12px;

  i {
    color: var(--gold);
  }
`;

const CTA = styled.a`
  display: inline-block;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
  color: var(--maroon-deep);
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: all 0.3s;
  box-shadow: 0 2px 15px rgba(201,162,39,0.4);
  margin-top: 25px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 25px rgba(201,162,39,0.6);
  }
`;

/* DECOR */

const DecorTop = styled.div`
  height: 60px;
`;

const DecorBottom = styled(DecorTop)`
  transform: scaleY(-1);
`;