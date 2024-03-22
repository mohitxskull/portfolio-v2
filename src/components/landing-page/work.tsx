import { ICON_SIZE, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import {
  ActionIcon,
  Center,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Children } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeUpAni } from '../animation/fade-up';

const Work = [
  {
    title: 'Hidden Mail',
    description: 'A minimalistic 1SecMail client.',
    link: 'https://hm.mohitxskull.dev',
    category: 'Web Development',
  },
  {
    title: 'Blank',
    description: 'Simple unsplash client.',
    link: 'https://blank.mohitxskull.dev',
    category: 'Web Development',
  },
  {
    title: 'XScale',
    description: 'XScale Agency website.',
    link: 'https://xscale.agency',
    category: 'Web Development',
  },
  {
    title: 'Country API',
    description: 'A simple country API.',
    link: 'https://country-api-self.vercel.app/',
    category: 'Full Stack Development',
  },
  {
    title: 'Eternal Heroes Foundation',
    description: 'EHF NGO website.',
    link: 'https://ehfoundation.in/',
    category: 'Full Stack Development',
  },
  {
    title: 'WEB3 Images',
    description:
      'An simple api to upload images and resize them using web3.storage and sharp.',
    link: 'https://github.com/mohitxskull/web3-images',
    category: 'Backend Development',
  },
];

const WorkCard = (props: {
  title: string;
  description: string;
  link: string;
  category: string;
  index: number;
}) => (
  <FadeUpAni delay={props.index / 2}>
    <Paper
      bg="transparent"
      p="md"
      component={Link}
      href={props.link}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stack>
        <Group justify="space-between">
          <Text size="md">{props.category}</Text>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <ActionIcon>
              <IconArrowUpRight size={ICON_SIZE.SM} />
            </ActionIcon>
          </motion.div>
        </Group>

        <Divider color={PRIMARY_COLOR_MANTINE} />

        <Title size={rem(50)}>{props.title}</Title>

        <Text size="md">{props.description}</Text>
      </Stack>
    </Paper>
  </FadeUpAni>
);

export const LandingWork = () => (
  <>
    <Center h="100vh">
      <Stack>
        <Title size={rem(150)} lh={1}>
          Work
        </Title>
        <Divider color="white" />
        <Divider color={PRIMARY_COLOR_MANTINE} />
        <Divider color="white" />
        <Divider color={PRIMARY_COLOR_MANTINE} />
        <Divider color="white" />
      </Stack>
    </Center>
    <SimpleGrid mih="100vh" cols={{ base: 1, md: 2 }}>
      {Children.toArray(
        Work.map((work, workIndex) => (
          <WorkCard
            title={work.title}
            description={work.description}
            link={work.link}
            category={work.category}
            index={workIndex}
          />
        ))
      )}
    </SimpleGrid>
  </>
);
