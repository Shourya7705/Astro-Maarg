import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import device from "./responsive";  

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    consultationType: "",
    message: "",
    });
    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post(
        "https://astro-maarg.onrender.com/api/consultations",
        formData
        );

        console.log(res.data);

        setSubmitted(true);

        setFormData({
        fullName: "",
        phone: "",
        email: "",
        dob: "",
        birthTime: "",
        birthPlace: "",
        consultationType: "",
        message: "",
        });
        setTimeout(() => {
      setSubmitted(false);
    }, 4000);
    } catch (error) {
        console.log(error);
    }
    };

    return (
        <Section id="contact">

            <Container>

                <Header>
                    <Ornament>✦ ✦ ✦</Ornament>
                    <Title>Book a Consultation</Title>
                    <Subtitle>
                        Take the first step towards cosmic clarity and life transformation
                    </Subtitle>
                    <Ornament>✦ ✦ ✦</Ornament>
                </Header>

                <Grid>

                    <Info>
                        <h3>Reach Us</h3>

                        <Item>
                            <i className="fas fa-phone"></i>
                            <div>
                                <strong>Phone</strong><br />
                                +91 98765 43210<br />
                                +91 87654 32109
                            </div>
                        </Item>

                        <Item>
                            <i className="fas fa-envelope"></i>
                            <div>
                                <strong>Email</strong><br />
                                info@astromaarg.com<br />
                                consult@astromaarg.com
                            </div>
                        </Item>

                        <Item>
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Office</strong><br />
                                22, Jyotish Marg, Dashashwamedh Ghat<br />
                                Varanasi, Uttar Pradesh – 221001
                            </div>
                        </Item>

                        <Item>
                            <i className="fas fa-clock"></i>
                            <div>
                                <strong>Consultation Hours</strong><br />
                                Mon – Sat: 9:00 AM – 7:00 PM<br />
                                Sunday: 10:00 AM – 2:00 PM
                            </div>
                        </Item>

                        <Socials>
                            <a href="#home"><i className="fab fa-youtube"></i></a>
                            <a href="#home"><i className="fab fa-facebook-f"></i></a>
                            <a href="#home"><i className="fab fa-instagram"></i></a>
                            <a href="#home"><i className="fab fa-whatsapp"></i></a>
                            <a href="#home"><i className="fab fa-twitter"></i></a>
                        </Socials>
                    </Info>

                    {/* FORM */}
                    <FormArea>

                        <Form className="contact-form" onSubmit={handleSubmit}>

                            <Row>
                                <Group>
                                    <label>Full Name </label>
                                    <input type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your Full Name"
                                        required />
                                </Group>
                                <Group>
                                    <label>Phone Number </label>
                                    <input type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone Number"
                                        required />
                                </Group>
                            </Row>

                            <Row>
                                <Group>
                                    <label>Email Address</label>
                                    <input type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email address" />
                                </Group>
                                <Group>
                                    <label>Date of Birth *</label>
                                    <input type="date" 
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required />
                                </Group>
                            </Row>

                            <Row>
                                <Group>
                                    <label>Time of Birth</label>
                                    <input type="time"
                                        name="birthTime"
                                        value={formData.birthTime}
                                        onChange={handleChange} />
                                </Group>
                                <Group>
                                    <label>Place of Birth</label>
                                    <input type="text"
                                        name="birthPlace"
                                        value={formData.birthPlace}
                                        onChange={handleChange}
                                        placeholder="Your place of birth" />
                                </Group>
                            </Row>

                            <Group full>
                                <label>Consultation Type </label>
                                <select name="consultationType"
                                    value={formData.consultationType}
                                    onChange={handleChange}
                                    required>
                                    <option value="">Select a service</option>
                                    <option>Janam Kundali Analysis</option>
                                    <option>Marriage & Matchmaking</option>
                                    <option>Career & Finance</option>
                                    <option>Vastu Shastra</option>
                                    <option>Gemstone Therapy</option>
                                    <option>Child Astrology</option>
                                    <option>Puja & Remedies</option>
                                    <option>Other</option>
                                </select>
                            </Group>

                            <Group full>
                                <label>Your Question / Message</label>
                                <textarea name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Enter your question or message here..."></textarea>
                            </Group>

                            <SubmitBtn type="submit">
                                Submit Consultation Request ✦
                            </SubmitBtn>

                            {submitted && (
                                <Success>
                                    <i className="fas fa-check-circle"></i>
                                    <p>
                                        Thank you! We will contact you within 24 hours.
                                    </p>
                                </Success>
                            )}

                        </Form>

                    </FormArea>

                </Grid>

            </Container>

        </Section>
    );
};

export default Contact;

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
  color: var(--gold);
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', serif;
  color: var(--maroon-deep);
`;

const Subtitle = styled.p`
  color: var(--text-mid);
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

/* INFO */

const Info = styled.div`
  h3 {
    font-family: 'Cinzel', serif;
    margin-bottom: 30px;
  }
`;

const Item = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 25px;

  i {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(var(--maroon), var(--maroon-deep));
    color: var(--gold-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(var(--maroon), var(--maroon-deep));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold-light);
  }
`;

/* FORM */

const FormArea = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${({ full }) => full && "grid-column: span 2;"}

  input, select, textarea {
    padding: 12px;
    border: 1px solid rgba(92,10,20,0.2);
    border-radius: 6px;
  }
`;

const SubmitBtn = styled.button`
  padding: 16px;
  background: linear-gradient(var(--gold), var(--gold-light));
  border: none;
  cursor: pointer;
`;

const Success = styled.div`
  display: flex;
  gap: 10px;
  background: rgba(0,150,70,0.1);
  padding: 15px;
  border-radius: 8px;
`;
