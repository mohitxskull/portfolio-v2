import { BREAKPOINTS, PRIMARY_COLOR_MANTINE, PRIMARY_SHADE } from '@/lib/const';
import {
  Box,
  MantineColor,
  MantineStyleProp,
  Space,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { FadeUpAni } from '../animation/fade-up';

const HighText = (props: {
  children: React.ReactNode;
  c?: MantineColor;
  style?: MantineStyleProp;
  href?: string;
}) => {
  const mainComp = (
    <Text inherit span c={props.c} style={props.style}>
      {props.children}
    </Text>
  );

  if (props.href) {
    return <Link href={props.href}>{mainComp}</Link>;
  }

  return mainComp;
};

export const LandingAbout = () => {
  const BigMd = useMediaQuery(`(min-width: ${BREAKPOINTS.MD})`);

  return (
    <>
      <Box>
        <FadeUpAni>
          <Title size={rem(BigMd ? 95 : 55)} lh={1.2}>
            Hi, I&apos;m{' '}
            <HighText c={PRIMARY_COLOR_MANTINE}>Mohit Meena</HighText> aka{' '}
            <HighText c={PRIMARY_COLOR_MANTINE}>Skull</HighText> 🗿
          </Title>
        </FadeUpAni>

        <Space h="120" />

        <FadeUpAni delay={1}>
          <Title size={rem(BigMd ? 95 : 55)} lh={1.2}>
            I am a full-stack developer with{' '}
            <HighText c={`red.${PRIMARY_SHADE}`}>3+ years</HighText> of
            experience building innovative and user-friendly 💎 web
            applications.
          </Title>
        </FadeUpAni>
      </Box>
    </>
  );
};
