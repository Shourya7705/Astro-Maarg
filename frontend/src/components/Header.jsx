import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assests/logo.jpeg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper scrolled={scrolled}>
      <Inner>
        <LogoArea>
          <LogoSymbol><img src={logo} alt="astro" style={{ width: "50px", height: "50px", objectFit: "cover",borderRadius: "50%" ,marginTop: "10px"}}/></LogoSymbol>

          <LogoText>
            <LogoMain>Astro Maarg</LogoMain>
            <LogoSub></LogoSub>
          </LogoText>
        </LogoArea>

        {/* NAV */}
<Nav menuOpen={menuOpen}>
  <NavLink href="#home" onClick={() => setMenuOpen(false)}>Home</NavLink>
  <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
  <NavLink href="#services" onClick={() => setMenuOpen(false)}>Services</NavLink>
  <NavLink href="#media" onClick={() => setMenuOpen(false)}>Media</NavLink>
  <NavLink href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>
  <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
  <NavCTA href="#contact" onClick={() => setMenuOpen(false)}>Book Consultation</NavCTA>
</Nav>
    <Hamburger
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
      </Inner>
    </Wrapper>
  );
};

export default Header;

/* ===== STYLES ===== */

const Wrapper = styled.header`
  position: fixed;
  top: ${(p) => (p.scrolled ? "0" : "30px")}; /* 🔥 moves up when scrolled */
  width: 100%;
  left: 0;
  background: rgba(58,5,9,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(201,162,39,0.3);
  z-index: 1000;
  transition: top 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(p) =>
    p.scrolled ? "0 10px 30px rgba(0,0,0,0.4)" : "none"};

  background: ${(p) =>
  p.scrolled ? "rgba(58,5,9,0.98)" : "rgba(58,5,9,0.85)"};
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;



/* ===== LOGO STYLES ===== */

const glowPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(240,192,74,0.6);
  }
  50% {
    text-shadow: 
      0 0 25px rgba(240,192,74,1),
      0 0 50px rgba(240,192,74,0.4);
  }
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoSymbol = styled.div`
  font-size: 1.8rem;
  color: var(--gold-light);
  text-shadow: 0 0 20px rgba(240,192,74,0.8);
  animation: ${glowPulse} 3s ease-in-out infinite;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const LogoMain = styled.span`
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gold-light);
  letter-spacing: 0.05em;
`;

const LogoSub = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  color: rgba(255,220,120,0.7);
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;



/* ===== NAV ===== */

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (max-width: 768px) {
  display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};

  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  background: var(--maroon-deep);
  padding: 20px;
  gap: 10px;

  border-top: 1px solid var(--gold);

  z-index: 999;
}
`;

const NavLink = styled.a`
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255,230,150,0.85);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 3px;
  letter-spacing: 0.08em;
  transition: all 0.3s;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    right: 50%;
    height: 1px;
    background: var(--gold-light);
    transition: all 0.3s;
  }

  &:hover {
    color: var(--gold-light);
  }

  &:hover::after {
    left: 12px;
    right: 12px;
  }
`;

const NavCTA = styled.a`
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
  color: var(--maroon-deep);
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: all 0.3s;
  box-shadow: 0 2px 15px rgba(201,162,39,0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 25px rgba(201,162,39,0.6);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    background: var(--gold-light);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;