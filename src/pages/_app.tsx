import '@/styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { FONT_FAMILY, PRIMARY_COLOR, PRIMARY_SHADE } from '@/lib/const';
import Head from 'next/head';
import { MetaTagsComp } from '@/components/indie/meta-tags';
import { Notifications } from '@mantine/notifications';

const theme = createTheme({
  primaryColor: PRIMARY_COLOR,
  primaryShade: PRIMARY_SHADE,

  fontFamily: FONT_FAMILY.LARKEN,

  fontFamilyMonospace: FONT_FAMILY.CONDOR,
  headings: {
    fontFamily: FONT_FAMILY.LARKEN_B,
  },

  defaultRadius: 0,

  colors: {
    orange: [
      '#fff0e5',
      '#fde0d2',
      '#f4bfa7',
      '#ec9c78',
      '#e57e50',
      '#e16b36',
      '#e06228',
      '#c8511b',
      '#b24715',
      '#9c3b0d',
    ],
  },
});

export default function App({ Component, pageProps }: AppProps) {
  // const { x: mouseX, y: mouseY } = useMouse();

  // const CursorVariant = useAtomValue(CursorAtom);

  return (
    <>
      <Head>
        <title>Skull</title>

        <MetaTagsComp
          title="Mohitxskull"
          description="Code with clarity, speak with precision"
          url="https://mohitxskull.dev"
          image="https://mohitxskull.dev/banner.png"
          twitterHandle="@mohitxskull"
          siteName="Mohitxskull"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <MantineProvider theme={theme} defaultColorScheme="light">
        {/* <div className="noise" /> */}

        <Notifications />

        <Component {...pageProps} />

        {/* <div className={CursorVariant} style={{ left: mouseX, top: mouseY }} /> */}
      </MantineProvider>
    </>
  );
}
