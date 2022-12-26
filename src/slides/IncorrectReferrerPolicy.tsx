import { Box, FlexBox, Heading, Text } from 'spectacle';
import TText from '../components/Shared/TText';

const IncorrectReferrerPolicy = () => {
  return (
    <FlexBox
      justifyContent="flext-start"
      flexDirection="column"
    >
      <Heading fontSize="30px">
        Incorrect Referrer Policy
      </Heading>
      <TText>
        When opening a link in a new tab with{' '}
        <kbd>target="_blank"</kbd>, unless otherwise
        specified, the target is passed some information
        about the originating webpage.{' '}
      </TText>
    </FlexBox>
  );
};

export default IncorrectReferrerPolicy;

export const IRFRight = () => {
  return (
    <FlexBox fontSize="30px">
      <iframe
        src="https://codesandbox.io/embed/securitytalk-incorrect-refeerer-policy-demo-oytsg4?fontsize=14&hidenavigation=1&theme=dark"
        //   style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="SecurityTalk-incorrect-Refeerer-policy-demo"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        style={{
          width: '100%',
          height: '700px',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      ></iframe>
    </FlexBox>
  );
};
