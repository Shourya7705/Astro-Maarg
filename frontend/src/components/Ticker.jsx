import styled, { keyframes } from "styled-components";

const Ticker = () => {
 

  return (
    <Wrapper>
      <Track>
         <span>🌟 Consult India's Most Trusted Astrologer &nbsp;|&nbsp; 🏆 Padma Shri Awardee &nbsp;|&nbsp; ✨ 25+ Years of Experience &nbsp;|&nbsp; 🔮 10 Lakh+ Satisfied Clients &nbsp;|&nbsp; 🌟 Featured on Zee TV, Star Plus, Aaj Tak &nbsp;|&nbsp; 📞 Call Now: +91 98765 43210 &nbsp;|&nbsp; 🌟 Consult India's Most Trusted Astrologer &nbsp;|&nbsp; 🏆 Padma Shri Awardee &nbsp;|&nbsp; ✨ 25+ Years of Experience &nbsp;|&nbsp; 🔮 10 Lakh+ Satisfied Clients &nbsp;</span>
      </Track>
    </Wrapper>
  );
};

export default Ticker;

/* ===== STYLES ===== */

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Wrapper = styled.div`
  background: var(--maroon-deep);
  border-bottom: 1px solid var(--gold);
  overflow: hidden;
  white-space: nowrap;
  padding: 8px 0;
`;

const Track = styled.div`
  display:  inline-block;
  animation: ${scroll} 35s linear infinite;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  color: var(--gold-light);
  letter-spacing: 0.05em;
  width: 100%;
`;

