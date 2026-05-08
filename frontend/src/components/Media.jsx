import styled from "styled-components";
import device from "./responsive";
const Media = () => {
  return (
    <Section id="media">

      <Container>

        <Header>
          <Ornament>✦ ✦ ✦</Ornament>
          <Title>Media Presence</Title>
          <Subtitle>Trusted by India's leading media houses</Subtitle>
          <Ornament>✦ ✦ ✦</Ornament>
        </Header>

        {/* LOGOS */}
        <Logos>

          <Logo>
            <i className="fas fa-tv"></i>
            <span>Zee TV</span>
          </Logo>

          <Logo>
            <i className="fas fa-broadcast-tower"></i>
            <span>Aaj Tak</span>
          </Logo>

          <Logo>
            <i className="fas fa-tv"></i>
            <span>Star Plus</span>
          </Logo>

          <Logo>
            <i className="fas fa-newspaper"></i>
            <span>Times of India</span>
          </Logo>

          <Logo>
            <i className="fas fa-tv"></i>
            <span>NDTV</span>
          </Logo>

          <Logo>
            <i className="fas fa-broadcast-tower"></i>
            <span>India TV</span>
          </Logo>

          <Logo>
            <i className="fas fa-newspaper"></i>
            <span>Hindustan Times</span>
          </Logo>

          <Logo>
            <i className="fas fa-tv"></i>
            <span>Colors TV</span>
          </Logo>

        </Logos>

        {/* VIDEOS */}
        <Videos>

          <VideoCard>
            <VideoThumb>
              <i className="fas fa-play-circle"></i>
              <span>Zee TV Interview – Future Predictions 2024</span>
            </VideoThumb>
          </VideoCard>

          <VideoCard>
            <VideoThumb>
              <i className="fas fa-play-circle"></i>
              <span>Aaj Tak Panel – India's Political Astrology</span>
            </VideoThumb>
          </VideoCard>

          <VideoCard>
            <VideoThumb>
              <i className="fas fa-play-circle"></i>
              <span>Star Plus – Celebrity Kundali Reading Special</span>
            </VideoThumb>
          </VideoCard>

        </Videos>

      </Container>

    </Section>
  );
};

export default Media;

/* ===== STYLES ===== */

const Section = styled.section`
  padding: 100px 0;
  background: var(--ivory);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 30px;
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
  color: var(--maroon-deep);
`;

const Subtitle = styled.p`
  color: var(--text-mid);
`;

/* LOGOS */

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 120px;
  padding: 20px;
  border: 1px solid rgba(92,10,20,0.15);
  border-radius: 10px;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  color: var(--text-mid);
  transition: all 0.3s;

  i {
    font-size: 2rem;
    color: var(--maroon);
  }

  &:hover {
    border-color: var(--maroon);
    background: var(--ivory-dark);
    transform: translateY(-4px);
  }
`;

/* VIDEOS */

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const VideoThumb = styled.div`
  height: 200px;
  background: linear-gradient(
    135deg,
    var(--maroon-deep),
    var(--maroon)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  i {
    font-size: 3rem;
    color: var(--gold);
    transition: transform 0.3s;
  }

  span {
    font-family: 'Cinzel', serif;
    font-size: 0.82rem;
    color: rgba(255,220,150,0.8);
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover i {
    transform: scale(1.2);
  }
`;