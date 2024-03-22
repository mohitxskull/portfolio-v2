import { Center, Modal, Title } from '@mantine/core';

interface NoMobileModalProps {
  open: boolean;
}

export const NoMobileModal = (props: NoMobileModalProps) => (
  <Modal
    opened={props.open}
    onClose={() => undefined}
    withCloseButton={false}
    fullScreen
    transitionProps={{
      transition: 'fade',
      duration: 300,
      timingFunction: 'linear',
    }}
    p={0}
    styles={{
      body: {
        padding: 0,
      },
    }}
  >
    <Center h="100vh">
      <Title>Use your tablet or desktop to view this website. 📱</Title>
    </Center>
  </Modal>
);
