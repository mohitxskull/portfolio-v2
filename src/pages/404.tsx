import { Center, Stack, Text, Title } from '@mantine/core';

export default function FourZeroFour() {
  return (
    <>
      <Center h="100vh">
        <Stack maw={400}>
          <Title ta="center">404</Title>

          <Text ta="center" size="sm">
            Page not found
          </Text>
        </Stack>
      </Center>
    </>
  );
}
