import { FONT_FAMILY, ICON_SIZE, PRIMARY_COLOR_MANTINE } from '@/lib/const';
import { ActionIcon, Center, Divider, Group, Stack, Text } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import { TextWithClipboard } from '../indie/text-clipboard';
import { FadeUpAni } from '../animation/fade-up';

export const LandingContact = () => (
  <>
    <Center mih="100vh">
      <Stack maw={550} w="100%">
        <FadeUpAni>
          <TextWithClipboard
            data="mohitxskull@gmail.com"
            dataName="email"
            props={{
              size: 'xl',
              ta: 'center',
              fw: 'bold',
              ff: FONT_FAMILY.CONDOR,
            }}
          >
            mohitxskull@gmail.com
          </TextWithClipboard>
        </FadeUpAni>

        <FadeUpAni>
          <Divider w="100%" color={PRIMARY_COLOR_MANTINE} />
        </FadeUpAni>

        <FadeUpAni>
          <Group justify="space-between">
            <Text size="lg" fw="bold" ff={FONT_FAMILY.CONDOR}>
              Built By Skull
            </Text>

            <Group>
              <ActionIcon
                variant="transparent"
                component={Link}
                href="https://github.com/mohitxskull"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub size={ICON_SIZE.LG} />
              </ActionIcon>

              <ActionIcon
                variant="transparent"
                component={Link}
                href="https://www.linkedin.com/in/mohitxskull/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin size={ICON_SIZE.LG} />
              </ActionIcon>
            </Group>
          </Group>
        </FadeUpAni>
      </Stack>
    </Center>
  </>
);
