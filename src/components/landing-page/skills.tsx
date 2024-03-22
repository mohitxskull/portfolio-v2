import {
  Center,
  Divider,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';

import { Children } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { BREAKPOINTS, PRIMARY_COLOR_MANTINE } from '@/lib/const';
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

export const LandingSkills = () => {
  const BigMd = useMediaQuery(`(min-width: ${BREAKPOINTS.MD})`);

  return (
    <>
      <Center mih="100vh">
        <Stack>
          <Title size={rem(BigMd ? 200 : 140)} lh={1} c={PRIMARY_COLOR_MANTINE}>
            Skills
          </Title>
        </Stack>
      </Center>
      <Stack>
        <Text size="xl">
          Few technologies I&apos;ve been working with recently
        </Text>

        <Stack gap={0}>
          {Children.toArray(
            TechStack.map((tech) => (
              <FadeUpAni>
                <Stack pt="lg">
                  <Title tt="uppercase" ml="xs">
                    {tech}
                  </Title>

                  <Divider color={PRIMARY_COLOR_MANTINE} />
                </Stack>
              </FadeUpAni>
            ))
          )}
        </Stack>
      </Stack>
    </>
  );
};
