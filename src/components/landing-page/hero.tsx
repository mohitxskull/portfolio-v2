import { BREAKPOINTS } from '@/lib/const';
import { Center, Image, Stack, Title, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { FadeUpAni } from '../animation/fade-up';

export const LandingHero = () => {
  const BigMd = useMediaQuery(`(min-width: ${BREAKPOINTS.MD})`);

  return (
    <>
      <Center
        h="100vh"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 5,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference',
          }}
          src="/skull.jpg"
          w={400}
        />
        <Stack align="center">
          <FadeUpAni>
            <Title size={rem(BigMd ? 500 : 250)} lh={0.8}>
              Skull
            </Title>
          </FadeUpAni>

          <FadeUpAni delay={1}>
            <Title size={rem(30)} ta="center">
              Full Stack Developer Who Loves To Build Stuff.
            </Title>
          </FadeUpAni>
        </Stack>
      </Center>
    </>
  );
};
