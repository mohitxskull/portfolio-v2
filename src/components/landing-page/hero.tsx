import { BREAKPOINTS, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import { Center, Stack, Text, Title, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FadeUpAni } from '../animation/fade-up';

export const LandingHero = () => {
  const BigSM = useMediaQuery(`(min-width: ${BREAKPOINTS.SM})`);

  return (
    <>
      <Stack>
        <Center mih="90vh">
          <Stack align="center">
            <FadeUpAni>
              <Title
                size={rem(BigSM ? 250 : 130)}
                lh={0.8}
                c={PRIMARY_COLOR_MANTINE}
              >
                Mohit
              </Title>
            </FadeUpAni>

            <FadeUpAni>
              <Title>X</Title>
            </FadeUpAni>
            <FadeUpAni>
              <Title
                size={rem(BigSM ? 250 : 130)}
                lh={0.8}
                c={PRIMARY_COLOR_MANTINE}
              >
                Skull
              </Title>
            </FadeUpAni>

            <FadeUpAni>
              <Text size={rem(BigSM ? 30 : 18)} ta="center">
                Full Stack Developer Who Loves To Build Stuff.
              </Text>
            </FadeUpAni>
          </Stack>
        </Center>

        <FadeUpAni>
          <Text size="md" ta="center">
            Scroll down human being
          </Text>
        </FadeUpAni>
      </Stack>
    </>
  );
};
