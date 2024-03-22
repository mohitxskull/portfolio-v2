import { BREAKPOINTS, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import { Center, Stack, Text, Title, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FadeUpAni } from '../animation/fade-up';

export const LandingHero = () => {
  const BigSM = useMediaQuery(`(min-width: ${BREAKPOINTS.SM})`);

  return (
    <>
      <Center h="100vh">
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

          <FadeUpAni delay={2}>
            <Title>X</Title>
          </FadeUpAni>
          <FadeUpAni delay={3}>
            <Title
              size={rem(BigSM ? 250 : 130)}
              lh={0.8}
              c={PRIMARY_COLOR_MANTINE}
            >
              Skull
            </Title>
          </FadeUpAni>

          <FadeUpAni delay={4}>
            <Text size={rem(BigSM ? 30 : 18)} ta="center">
              Full Stack Developer Who Loves To Build Stuff.
            </Text>
          </FadeUpAni>
        </Stack>
      </Center>
    </>
  );
};
