import styled from "styled-components";
import device from "./responsive";

const Awards = () => {
  return (
    <Strip>
      <Inner>
        <Item>
          <i className="fas fa-star"></i>
          <span>Specialist In Horoscope Analysis</span>
        </Item>

        <Item>
          <i className="fas fa-medal"></i>
          <span>Expert In Jyotish Guidance</span>
        </Item>

        <Item>
          <i className="fas fa-award"></i>
          <span>Excellence in Vedic Science</span>
        </Item>

        <Item>
          <i className="fas fa-crown"></i>
          <span>National Astrology Counsellor</span>
        </Item>
      </Inner>
    </Strip>
  );
};

export default Awards;

/* ===== STYLES ===== */

const Strip = styled.div`
  background: linear-gradient(
    135deg,
    var(--maroon-deep) 0%,
    var(--maroon) 50%,
    var(--maroon-deep) 100%
  );
  border-top: 1px solid rgba(201,162,39,0.3);
  border-bottom: 1px solid rgba(201,162,39,0.3);
  padding: 18px 0;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.mobile} {
    gap: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gold-light);
  letter-spacing: 0.06em;

  i {
    color: var(--gold);
    font-size: 1.1rem;
  }
`;