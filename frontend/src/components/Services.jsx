import styled from "styled-components";
import device from "./responsive";
const Services = () => {
  return (
    <Section id="services">

      <Container>

        <Header>
          <Ornament>✦ ✦ ✦</Ornament>
          <Title>Our Services</Title>
          <Subtitle>
            Ancient wisdom for modern life — personalized guidance across all domains
          </Subtitle>
          <Ornament>✦ ✦ ✦</Ornament>
        </Header>

        <Grid>

          {/* CARD */}
          <Card>
            <Icon><i className="fas fa-star-of-david"></i></Icon>
            <h3>Janam Kundali</h3>
            <p>Detailed birth chart analysis revealing your personality and life path.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-heart"></i></Icon>
            <h3>Marriage & Matchmaking</h3>
            <p>Kundali Milan and compatibility analysis for a harmonious married life.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-chart-line"></i></Icon>
            <h3>Career & Finance</h3>
            <p>Planetary insights to guide career decisions and financial growth.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-home"></i></Icon>
            <h3>Vastu Shastra</h3>
            <p>Enhance your space with positive energy using Vastu principles.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-gem"></i></Icon>
            <h3>Gemstone Therapy</h3>
            <p>Strengthen planets with gemstones tailored to your horoscope.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-child"></i></Icon>
            <h3>Child Astrology</h3>
            <p>Understand your child’s nature and talents through astrology.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-pray"></i></Icon>
            <h3>Puja & Remedies</h3>
            <p>Customized rituals to bring peace and remove obstacles.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

          <Card>
            <Icon><i className="fas fa-globe-asia"></i></Icon>
            <h3>Online Consultation</h3>
            <p>Connect globally via video, phone, or chat for guidance.</p>
            {/* <Link href="#contact">Know More <i className="fas fa-arrow-right"></i></Link> */}
          </Card>

        </Grid>

      </Container>

    </Section>
  );
};

export default Services;

/* ===== STYLES ===== */

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    var(--maroon-deep),
    var(--maroon),
    var(--maroon-deep)
  );
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

const Title = styled.h1`
  font-family: 'Cinzel Decorative', serif;
  color: var(--gold-light);
`;

const Subtitle = styled.p`
  color: rgba(255,220,150,0.7);
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* CARD */

const Card = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(201,162,39,0.2);
  border-radius: 10px;
  padding: 35px 25px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,162,39,0.06), transparent);
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(201,162,39,0.5);
    box-shadow: 0 8px 30px rgba(201,162,39,0.3);
  }

  &:hover::before {
    opacity: 1;
  }

  h3 {
    font-family: 'Cinzel', serif;
    color: var(--gold-pale);
  }

  p {
    color: rgba(255,220,150,0.6);
    margin-bottom: 20px;
  }
`;

/* ICON */

const Icon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(201,162,39,0.2),
    rgba(201,162,39,0.05)
  );
  border: 1px solid rgba(201,162,39,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.4s;

  i {
    font-size: 1.5rem;
    color: var(--gold-light);
    transition: 0.4s;
  }

  ${Card}:hover & {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
  }

  ${Card}:hover i {
    color: var(--maroon-deep);
  }
`;

/* LINK */

// const Link = styled.a`
//   font-family: 'Cinzel', serif;
//   font-size: 0.75rem;
//   color: var(--gold);
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   transition: gap 0.3s;

//   &:hover {
//     gap: 10px;
//   }
// `;
