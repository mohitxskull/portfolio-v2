import '@/styles/globals.css';
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { DARK, PRIMARY_COLOR, PRIMARY_SHADE } from '@/lib/const';
import Head from 'next/head';
import { MetaTagsComp } from '@/components/indie/meta-tags';
import { Archivo } from 'next/font/google';

const archivo = Archivo({ subsets: ['latin'], weight: '400' });

const theme = createTheme({
  primaryColor: PRIMARY_COLOR,
  primaryShade: PRIMARY_SHADE,

  fontFamily: archivo.style.fontFamily,

  fontFamilyMonospace: 'Geakosa',
  headings: {
    fontFamily: 'Geakosa',
    fontWeight: 'normal',
  },

  black: DARK,

  defaultRadius: 0,

  colors: {
    grape: [
      '#f4ecff',
      '#e3d4fa',
      '#c4a6f3',
      '#a475ed',
      '#884be7',
      '#7631e4',
      '#6e23e4',
      '#5d18cb',
      '#5214b6',
      '#460da0',
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

      <MantineProvider theme={theme} defaultColorScheme="dark">
        <div className="noise" />

        <Component {...pageProps} />

        {/* <div className={CursorVariant} style={{ left: mouseX, top: mouseY }} /> */}
      </MantineProvider>
    </>
  );
}
