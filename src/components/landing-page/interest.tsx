import {
  Center,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';

import useSound from 'use-sound';

import { Children } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { BREAKPOINTS } from '@/lib/const';
import { FadeUpAni } from '../animation/fade-up';

const TechStack = [
  'TypeScript',
  'Next.js',
  'React',
  'Mantine',
  'Google Cloud',
  'TRPC',
  'Prisma',
  'Drizzle',
  'Planetscale',
];

const Interests = ['Startups', 'Listening Piano', 'Sky', 'Nature'];

export const LandingInterest = () => {
  const [play, { stop }] = useSound('/ping.mp3', { volume: 0.5 });

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
            top: '30%',
            left: '3%',
            zIndex: 5,
            mixBlendMode: 'difference',
          }}
          src="/pur-flower.jpg"
          w={BigMd ? 400 : 300}
        />

        <Group justify="space-between" w="100%">
          <Stack>
            <Title size={rem(BigMd ? 200 : 140)} lh={1}>
              Interest
            </Title>

            <Text size="xl">Scroll down human being</Text>
          </Stack>

          <Title size={rem(BigMd ? 30 : 25)} maw={500} lh={1.2}>
            From bud to bloom, a splash of bright, 🌿
            <br />
            Petals unfurl, a fragrant sight. 🦋
            <br />
            Beauty for bees, a colorful treat, 🌺
            <br />
            Nature&apos;s own work of art, complete. 🍃
          </Title>
        </Group>
      </Center>
      <SimpleGrid
        mih="100vh"
        cols={{ base: 1, md: 2 }}
        spacing={{ base: 150, md: 'xs' }}
      >
        <Stack>
          <Text size="xl">
            Few technologies I&apos;ve been working with recently
          </Text>

          <Stack gap={0}>
            {Children.toArray(
              TechStack.map((tech) => (
                <FadeUpAni>
                  <Stack
                    className="on-hover-white"
                    pt="lg"
                    onMouseEnter={() => play()}
                    onMouseLeave={() => stop()}
                  >
                    <Title tt="uppercase" ml="xs">
                      {tech}
                    </Title>

                    <Divider color="white" />
                  </Stack>
                </FadeUpAni>
              ))
            )}
          </Stack>
        </Stack>

        <Stack>
          <Text size="xl">Interests</Text>

          <Stack gap={0}>
            {Children.toArray(
              Interests.map((tech) => (
                <FadeUpAni>
                  <Stack
                    className="on-hover-green"
                    pt="lg"
                    onMouseEnter={() => play()}
                    onMouseLeave={() => stop()}
                  >
                    <Title tt="uppercase" ml="xs">
                      {tech}
                    </Title>

                    <Divider color="white" />
                  </Stack>
                </FadeUpAni>
              ))
            )}
          </Stack>
        </Stack>
      </SimpleGrid>
    </>
  );
};
