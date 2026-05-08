import styled from "styled-components";
import device from "./responsive";
const Testimonials = () => {
  return (
    <Section id="testimonials">

     

      <Container>

        <Header>
          <Ornament>✦ ✦ ✦</Ornament>
          <Title>Client Testimonials</Title>
          <Subtitle>
            Real stories, real transformations — lives touched by cosmic guidance
          </Subtitle>
          <Ornament>✦ ✦ ✦</Ornament>
        </Header>

        <Grid>

          <Card>
            <Stars>★★★★★</Stars>
            <Text>
              "Shastri Ji's predictions about my career were so accurate it left me speechless..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Ramesh Gupta</Name>
                <Place>Mumbai, Maharashtra</Place>
              </div>
            </Author>
          </Card>

          <Card featured>
            <Stars>★★★★★</Stars>
            <Text>
              "I was going through a very difficult phase in my marriage..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Priya Sharma</Name>
                <Place>New Delhi</Place>
              </div>
            </Author>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Text>
              "As a skeptic, I never believed in astrology..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Arvind Mehta</Name>
                <Place>Ahmedabad, Gujarat</Place>
              </div>
            </Author>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Text>
              "I consulted Shastri Ji from the USA..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Kavya Nair</Name>
                <Place>California, USA</Place>
              </div>
            </Author>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Text>
              "The Vastu consultation transformed our home..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Sunita & Rakesh Jain</Name>
                <Place>Jaipur, Rajasthan</Place>
              </div>
            </Author>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Text>
              "My daughter was suffering from repeated marriage proposals..."
            </Text>
            <Author>
              <Avatar><i className="fas fa-user"></i></Avatar>
              <div>
                <Name>Lakshmi Venkataraman</Name>
                <Place>Chennai, Tamil Nadu</Place>
              </div>
            </Author>
          </Card>

        </Grid>

      </Container>

    </Section>
  );
};

export default Testimonials;

/* ===== STYLES ===== */

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    #150205,
    var(--maroon),
    #150205
  );
  position: relative;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 30px;
`;

/* DECOR */

const DecorTop = styled.div`
  width: 100%;
  height: 60px;
  background: var(--maroon-deep);
`;

const DecorBottom = styled(DecorTop)`
  transform: scaleY(-1);
`;

/* HEADER */

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Ornament = styled.div`
  color: var(--gold);
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', serif;
  color: var(--ivory);
`;

const Subtitle = styled.p`
  color: rgba(255,220,150,0.75);
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;


  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* CARD */

const Card = styled.div`
  background: ${(p) =>
    p.featured
      ? "rgba(201,162,39,0.06)"
      : "rgba(255,255,255,0.05)"};

  border: 1px solid
    ${(p) =>
      p.featured
        ? "rgba(201,162,39,0.5)"
        : "rgba(201,162,39,0.15)"};

  border-radius: 12px;
  padding: 30px;
  transition: 0.4s;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(201,162,39,0.4);
  }
`;

/* CONTENT */

const Stars = styled.div`
  color: var(--gold);
  font-size: 1.1rem;
  margin-bottom: 15px;
  letter-spacing: 3px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: rgba(255,235,200,0.85);
  line-height: 1.75;
  margin-bottom: 20px;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--maroon-mid),
    var(--maroon-deep)
  );
  border: 1px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: var(--gold-light);
    font-size: 1.2rem;
  }
`;

const Name = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gold-light);
`;

const Place = styled.div`
  font-size: 0.8rem;
  color: rgba(255,200,100,0.5);
`;