import { Center, Divider, Stack, Text, Title, rem } from '@mantine/core';

import { Children } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { BREAKPOINTS, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import { FadeUpAni } from '../animation/fade-up';

const Interests = ['Startups', 'Listening Piano', 'Sky', 'Nature'];

export const LandingInterest = () => {
  const BigSm = useMediaQuery(`(min-width: ${BREAKPOINTS.SM})`);

  return (
    <>
      <Center mih="100vh">
        <Stack>
          <Title size={rem(BigSm ? 200 : 100)} lh={1} c={PRIMARY_COLOR_MANTINE}>
            Interest
          </Title>

          <Text size="xl">Scroll down human being</Text>
        </Stack>
      </Center>
      <Stack gap={0}>
        {Children.toArray(
          Interests.map((tech) => (
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
    </>
  );
};
