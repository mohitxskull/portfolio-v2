import { FONT_FAMILY } from '@/lib/const';
import {
  Center,
  MantineColor,
  MantineStyleProp,
  SimpleGrid,
  Text,
  rem,
} from '@mantine/core';
import Link from 'next/link';

const HighText = (props: {
  children: React.ReactNode;
  c?: MantineColor;
  style?: MantineStyleProp;
  href?: string;
}) => {
  const mainComp = (
    <Text
      inherit
      span
      c={props.c}
      style={props.style}
      ff={FONT_FAMILY.LARKEN_B}
    >
      {props.children}
    </Text>
  );

  if (props.href) {
    return <Link href={props.href}>{mainComp}</Link>;
  }

  return mainComp;
};

export const LandingAbout = () => (
  <>
    <Center mih="100vh">
      <SimpleGrid maw={1000}>
        <Text size="xl">Little about me</Text>

        <Text ff={FONT_FAMILY.CONDOR} fw="bold" size={rem(35)} lh={1.1}>
          As a <HighText>Full Stack Developer</HighText>, I have worked on a
          variety of projects, scaling from small to large. I have a keen
          interest in <HighText>Web Development</HighText> and{' '}
          <HighText>Startups</HighText>. I am always looking for new
          opportunities to learn and grow.
        </Text>
      </SimpleGrid>
    </Center>
  </>
);
