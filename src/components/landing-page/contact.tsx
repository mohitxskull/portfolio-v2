import { ICON_SIZE, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import { ActionIcon, Center, Divider, Group, Stack, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import { TextWithClipboard } from '../indie/text-clipboard';
import { FadeUpAni } from '../animation/fade-up';

export const LandingContact = () => (
  <>
    <Center mih="100vh" bg={PRIMARY_COLOR_MANTINE}>
      <Stack maw={550} w="100%">
        <FadeUpAni>
          <TextWithClipboard
            data="mohitxskull@gmail.com"
            dataName="email"
            props={{ size: 'xl', ta: 'center', fw: 'bold' }}
          >
            mohitxskull@gmail.com
          </TextWithClipboard>
        </FadeUpAni>

        <FadeUpAni delay={1}>
          <Divider w="100%" color="white" />
        </FadeUpAni>

        <FadeUpAni delay={2}>
          <Group justify="space-between">
            <Text size="lg" fw="bold">
              Design & Built By Skull
            </Text>

            <Group>
              <ActionIcon
                component={Link}
                href="https://github.com/mohitxskull"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub size={ICON_SIZE.LG} />
              </ActionIcon>
            </Group>
          </Group>
        </FadeUpAni>
      </Stack>
    </Center>
  </>
);
