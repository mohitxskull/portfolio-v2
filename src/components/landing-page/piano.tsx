import { ICON_SIZE } from '@/lib/const';
import { ActionIcon, Center, Group, Image, Stack, Title } from '@mantine/core';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
import { useEffect } from 'react';

import useSound from 'use-sound';

export const LandingPiano = () => {
  const [play, { sound, pause }] = useSound('/moon.mp4', {
    volume: 0.1,
    interrupt: true,
    soundEnabled: true,
  });

  useEffect(() => {
    if (sound) {
      sound.load();
      sound.loop(true);
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sound]);

  return (
    <>
      <Center mih="100vh">
        <Group>
          <Stack>
            <Title maw={200}>
              {' '}
              Moonlight Sonata 1st Movement by Ludwig van Beethoven 🎹
            </Title>
            <ActionIcon
              style={{
                cursor: 'none',
              }}
              loading={sound?.state() === 'loading'}
              onClick={sound?.playing() ? () => pause() : () => play()}
            >
              {sound?.playing() ? (
                <IconPlayerPause size={ICON_SIZE.SM} />
              ) : (
                <IconPlayerPlay size={ICON_SIZE.SM} />
              )}
            </ActionIcon>
          </Stack>

          <Image
            style={{
              mixBlendMode: 'difference',
            }}
            src="/moon-a.jpg"
            w={200}
          />
        </Group>
      </Center>
    </>
  );
};
