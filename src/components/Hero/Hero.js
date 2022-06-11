import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
Welcome to <br />
My projects portfolio
  </SectionTitle>
  <SectionText>Proven Problem solver ready to start a career in Web and Software Development.
      </SectionText>
      <Button onClick={() => window.open('mailto:mitch.hall@artificerdevsolutions.com')}>Contact Me</Button>
</LeftSection>
</Section>
);

export default Hero;