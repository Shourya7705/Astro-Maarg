import styled from "styled-components";
import logo from "../assests/logo.jpeg";
import device from "./responsive";

const Footer = () => {
    return (
        <Wrapper>

            <Container>

                <Top>

                    {/* BRAND */}
                    <Brand>
                        <LogoArea>
                            <LogoSymbol><img src={logo} alt="astro" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", marginTop: "10px" }} /></LogoSymbol>

                            <LogoText>
                                <LogoMain>Astro Maarg</LogoMain>
                                <LogoSub></LogoSub>
                            </LogoText>
                        </LogoArea>
                        <p>
                            Guiding souls with the timeless light of Vedic astrology.
                            Your journey to cosmic clarity begins here.
                        </p>

                        <Socials>
                            <a href="#home"><i className="fab fa-youtube"></i></a>
                            <a href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a href="#home"><i className="fab fa-instagram"></i></a>
                            <a href="#home"><i className="fab fa-whatsapp"></i></a>
                        </Socials>
                    </Brand>

                    {/* QUICK LINKS */}
                    <Links>
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contact">Contact</a>
                    </Links>

                    {/* SERVICES */}
                    <Links>
                        <h4>Services</h4>
                        <a href="#services">Janam Kundali</a>
                        <a href="#services">Marriage & Matchmaking</a>
                        <a href="#services">Career & Finance</a>
                        <a href="#services">Vastu Shastra</a>
                        <a href="#services">Gemstone Therapy</a>
                        <a href="#services">Online Consultation</a>
                    </Links>

                    {/* CONTACT */}
                    <Links>
                        <h4>Contact</h4>
                        <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                        <p><i className="fas fa-envelope"></i> info@astromaarg.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> Varanasi, UP, India</p>
                    </Links>

                </Top>

                {/* BOTTOM */}
                <Bottom>
                    <p>
                        © 2024 Astro Maarg. All Rights Reserved. Designed with ✦ and cosmic energy.
                    </p>

                    <BottomLinks>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Disclaimer</a>
                    </BottomLinks>
                </Bottom>

            </Container>

        </Wrapper>
    );
};

export default Footer;

/* ===== STYLES ===== */

const Wrapper = styled.footer`
  background: var(--maroon-deep);
  padding: 80px 0 0;
  border-top: 1px solid rgba(201,162,39,0.3);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 30px;
`;

/* TOP */

const Top = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(201,162,39,0.15);

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

/* BRAND */

const Brand = styled.div`
  p {
    font-size: 0.95rem;
    color: rgba(255,220,150,0.6);
    line-height: 1.7;
    margin: 15px 0 25px;
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

const Socials = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(201,162,39,0.1);
    border: 1px solid rgba(201,162,39,0.25);
    color: var(--gold-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    background: var(--gold);
    color: var(--maroon-deep);
  }
`;

/* LINKS */

const Links = styled.div`
  h4 {
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    color: var(--gold-light);
    margin-bottom: 20px;
  }

  a, p {
    display: block;
    font-size: 0.9rem;
    color: rgba(255,220,150,0.55);
    margin-bottom: 10px;
    text-decoration: none;
  }

  a:hover {
    color: var(--gold-light);
  }

  i {
    margin-right: 8px;
    color: var(--gold);
  }
`;

/* BOTTOM */

const Bottom = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(255,200,100,0.4);
  flex-wrap: wrap;
  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 0.8rem;
    color: rgba(255,200,100,0.4);
    text-decoration: none;
  }

  a:hover {
    color: var(--gold-light);
  }
`;
