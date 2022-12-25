import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  SlideLayout,
} from 'spectacle';
import logo from './logo.svg';

import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import './App.css';
import { trygTheme } from './theme';
import Counter from './components/Counter';
import Title from "./slides/Title";
import Agenda from "./slides/Agenda";
import { TrygSlide } from './components/TrygSlide';


const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
  colors: {
    secondary: trygTheme.black
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
    <Box padding="0 1em">
    </Box>
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
      <FullScreen color={trygTheme.brand}/>
    </Box>
    <Box padding="1em">
      <AnimatedProgress color={trygTheme.brand}/>
    </Box>
  </FlexBox>
  </>
);

function App() {
  return (
    <Deck template={template}   suppressBackdropFallback={true} theme={theme} >
      {/* Title Slide */}
      <TrygSlide backgroundColor="white">
        <Title />
      </TrygSlide>

      {/* Agenda Slide */}
      <TrygSlide title="Today's Menu">
       <Agenda  />
      </TrygSlide>

      {/* Slide -1 */}
      <TrygSlide title="OWASP Top Ten">
        <Agenda />
      </TrygSlide>
      <TrygSlide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
      </TrygSlide>
      
      <TrygSlide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="white"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
      </TrygSlide>
      
      <TrygSlide>
      <CodePane language="tsx" highlightRanges={[1, 3]} >{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </TrygSlide>
      <Slide>
        <CodePane language="javascript" theme={tomorrow} highlightRanges={[1, 3]}>
          {`
      const App = () => (
        <Provider value={client}>
          <Todos />
        </Provider>
      );
      `}
        </CodePane>
      </Slide>
    </Deck>
  );
}

export default App;



