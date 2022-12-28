import { FlexBox, Heading } from 'spectacle';
import TinySlider from 'tiny-slider-react';
import TabbedSlider from '../components/Shared/TabbedSlider';

import TText from '../components/Shared/TText';

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  loop: false,
  items: 1,
  gutter: 5,
  responsive: {
    420: {
      items: 2,
    },
  },
};

const imgs = [
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
  'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
];

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
      <TabbedSlider />
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
