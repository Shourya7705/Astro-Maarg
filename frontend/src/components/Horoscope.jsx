import { useState } from "react";
import styled from "styled-components";
import device from "./responsive";

const zodiacData = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 – Apr 19" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 – May 20" },
  { name: "Gemini", symbol: "♊", dates: "May 21 – Jun 20" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 – Jul 22" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 – Aug 22" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 – Sep 22" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 – Oct 22" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 – Nov 21" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 – Dec 21" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 – Jan 19" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 – Feb 18" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 – Mar 20" }
];

const Horoscope = () => {
  const [active, setActive] = useState(null);

  const openModal = (zodiac) => {
    setActive({
      ...zodiac,
      text: "Today brings new opportunities. Stay confident and trust your instincts.",
      love: 4,
      career: 5,
      health: 3,
      color: "Red",
      number: 7
    });
  };

  const closeModal = () => setActive(null);

  const renderStars = (count) => "★".repeat(count);

  return (
    <>
      <Section>

        <Container>
          <Header>
            <Ornament>✦ ✦ ✦</Ornament>
            <Title>Daily Horoscope</Title>
            <Subtitle>
              Select your zodiac sign for today's cosmic forecast
            </Subtitle>
            <Ornament>✦ ✦ ✦</Ornament>
          </Header>

          <Grid>
            {zodiacData.map((z) => (
              <Card key={z.name} onClick={() => openModal(z)}>
                <Symbol>{z.symbol}</Symbol>
                <Name>{z.name}</Name>
                <Dates>{z.dates}</Dates>
              </Card>
            ))}
          </Grid>
        </Container>

      </Section>

      {/* MODAL */}
      <Overlay active={active}>
        <Modal>
          <Close onClick={closeModal}>✕</Close>

          <ModalSymbol>{active?.symbol}</ModalSymbol>
          <ModalTitle>{active?.name}</ModalTitle>
          <ModalDate>Today's Forecast</ModalDate>

          <ModalText>{active?.text}</ModalText>

          <Ratings>
            <RatingItem>
              <span>Love</span>
              <Stars>{active && renderStars(active.love)}</Stars>
            </RatingItem>
            <RatingItem>
              <span>Career</span>
              <Stars>{active && renderStars(active.career)}</Stars>
            </RatingItem>
            <RatingItem>
              <span>Health</span>
              <Stars>{active && renderStars(active.health)}</Stars>
            </RatingItem>
          </Ratings>

          <Lucky>
            <span className="label">Lucky Color:</span>
            <span className="val">{active?.color}</span>
            <span className="label">Lucky Number:</span>
            <span className="val">{active?.number}</span>
          </Lucky>

        </Modal>
      </Overlay>
    </>
  );
};

export default Horoscope;

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

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Ornament = styled.div`
  color:  var(--gold);
`;

const Title = styled.h1`
  font-family: 'Cinzel Decorative', serif;
  color: var(--maroon-deep);
`;

const Subtitle = styled.p`
  color: var(--text-mid);
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(92,10,20,0.15);
  border-radius: 10px;
  padding: 20px 12px;
  text-align: center;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    border-color: var(--maroon);
    background: var(--ivory-dark);
    transform: translateY(-4px);
  }
`;

const Symbol = styled.div`
  font-size: 2.2rem;
`;

const Name = styled.div`
  color: var(--text-mid);
`;

const Dates = styled.div`
  font-size: 0.68rem;
  color: var(--text-mid);
`;

/* MODAL */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center; 
  justify-content: center;
  opacity: ${(p) => (p.active ? 1 : 0)};
  pointer-events: ${(p) => (p.active ? "all" : "none")};
  transition: opacity 0.3s;
`;

const Modal = styled.div`
  background: linear-gradient(135deg, var(--maroon-deep) 0%, var(--maroon) 100%);
  border: 1px solid rgba(201,162,39,0.4); 
  border-radius: 16px;
  padding: 40px; 
  max-width: 480px; 
  width: 90%;
  text-align: center; 
  position: relative;
  transform: scale(0.85); 
  transition: transform 0.3s;
  box-shadow: 0 20px 80px rgba(0,0,0,0.6), var(--shadow-gold);

  ${Overlay}[active] & {
    transform: scale(1);
  }
`;

const Close = styled.button`
  position: absolute; 
  top: 16px;
  right: 16px;
  background: rgba(255,255,255,0.1); 
  border: none; 
  color: var(--gold-light);
  width: 32px; 
  height: 32px; 
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
`;

const ModalSymbol = styled.div`
  font-size: 4rem;
`;

const ModalTitle = styled.h3`
  color: var(--gold-light);
`;

const ModalDate = styled.p`
  font-size: 0.75rem;
`;

const ModalText = styled.p`
  color: var(--ivory);
`;

const Ratings = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RatingItem = styled.div`
  text-align: center;
  color: var(--gold-light);
`;

const Stars = styled.div`
  color: var(--gold-light);
`;

const Lucky = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  .label {
    color: rgba(255,200,100,0.6);
  }

  .val {
    color: var(--gold-light);
  }
`;