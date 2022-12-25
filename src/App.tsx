import {
  FlexBox,
  Heading,
  FullScreen,
  AnimatedProgress,
  Deck,
  Box,
  Image,
  SlideLayout,
} from 'spectacle';

import './App.css';
import logo from './logo.svg';
import pollution from './images/prototypicpollution.png';
import { trygTheme } from './theme';
import Title from './slides/Title';
import Agenda from './slides/Agenda';
import OWASP from './slides/OWASP';
import OWASP2 from './slides/OWASP-2';

import { TrygSlide } from './components/TrygSlide';
import Solution1 from './components/Examples/CodeExample1/Solution1';
import TitleComponent from './components/Examples/CodeExample1/TitleComponent';
import TitleComponentCode from './components/Examples/CodeExample1/TitleComponentCode';

const theme = {
  fonts: {
    header:
      '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    secondary: trygTheme.black,
  },
};

const template = () => (
  <>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      top={0}
      width={1}
    >
      <Box padding="0 1em"></Box>
      <Box padding="1em">
        <Image src={logo} className="App-logo" alt="logo" />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={trygTheme.brand} />
      </Box>
      <Box padding="1em">
        <AnimatedProgress color={trygTheme.brand} />
      </Box>
    </FlexBox>
  </>
);

function App() {
  return (
    <Deck
      template={template}
      suppressBackdropFallback={true}
      theme={theme}
    >
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <Title />
      </TrygSlide>

      {/* Agenda Slide 2 */}
      <TrygSlide title="Today's Menu">
        <Agenda />
      </TrygSlide>

      {/* Slide -3 */}
      <TrygSlide
        title="OWASP Top Ten 1/2"
        readMoreLink="https://owasp.org/www-project-top-ten/"
      >
        <OWASP />
      </TrygSlide>

      {/* Slide -4 */}
      <TrygSlide
        title="OWASP Top Ten 2/2"
        readMoreLink="https://owasp.org/www-project-top-ten/"
      >
        <OWASP2 />
      </TrygSlide>

      {/* Slide -5 */}
      <SlideLayout.Quote
        attribution="CSS/JSX"
        backgroundColor="white"
        attributionProps={{
          fontSize: '2rem',
          color: 'red',
        }}
        quoteProps={{ fontSize: '6rem', color: 'red' }}
      >
        DOM Cross-Site Scripting
      </SlideLayout.Quote>

      {/* Slide -6 */}
      <SlideLayout.TwoColumn
        left={<TitleComponentCode />}
        right={<TitleComponent />}
        backgroundColor="white"
      ></SlideLayout.TwoColumn>

      {/* Slide -7 */}
      <TrygSlide title="Prevention">
        <Solution1 />
      </TrygSlide>

      <SlideLayout.BigFact backgroundColor="white">
        <Heading>Prototype pollution</Heading>
        <Image src={pollution} />
      </SlideLayout.BigFact>
    </Deck>
  );
}

export default App;
