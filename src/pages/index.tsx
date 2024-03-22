import { LandingAbout } from '@/components/landing-page/about';
import { LandingContact } from '@/components/landing-page/contact';
import { LandingHero } from '@/components/landing-page/hero';
import { LandingInterest } from '@/components/landing-page/interest';
import { LandingWork } from '@/components/landing-page/work';

import { DARK } from '@/lib/const';
import { Container, Stack } from '@mantine/core';
import { ScrollerMotion } from 'scroller-motion';

export default function Home() {
  return (
    <>
      <ScrollerMotion
        style={{
          backgroundColor: DARK,
        }}
        // make it slow
        spring={{
          stiffness: 70,
          damping: 20,
        }}
      >
        <Container size="1800px">
          <Stack>
            <LandingHero />

            {/* <LandingPiano /> */}
            <LandingAbout />
            <LandingWork />
            <LandingInterest />
            <LandingContact />
          </Stack>
        </Container>
      </ScrollerMotion>
    </>
  );
}
