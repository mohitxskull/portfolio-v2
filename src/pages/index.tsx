import { LandingAbout } from '@/components/landing-page/about';
import { LandingContact } from '@/components/landing-page/contact';
import { LandingHero } from '@/components/landing-page/hero';
import { LandingInterest } from '@/components/landing-page/interest';
import { LandingSkills } from '@/components/landing-page/skills';
import { LandingWork } from '@/components/landing-page/work';
import { BACKGROUND } from '@/lib/const';

import { Container, Stack } from '@mantine/core';
import { ScrollerMotion } from 'scroller-motion';

export default function Home() {
  return (
    <>
      <ScrollerMotion
        style={{
          backgroundColor: BACKGROUND,
        }}
        scale={4}
      >
        <Container size="1800px">
          <Stack>
            <LandingHero />

            {/* <LandingPiano /> */}
            <LandingAbout />
            <LandingWork />
            <LandingSkills />
            <LandingInterest />
            <LandingContact />
          </Stack>
        </Container>
      </ScrollerMotion>
    </>
  );
}
