import React from 'react';

export const LanUserMdChatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 48c0-12.6 2.4-24.7 6.9-35.7C262.2 4.4 243.6 0 224 0 153.3 0 96 57.3 96 128s57.3 128 128 128c33.8 0 64.5-13.1 87.4-34.5-13.1-9.6-23.7-22.4-30.5-37.2-14.5 14.6-34.6 23.7-56.8 23.7-44.2 0-80-35.8-80-80s35.8-80 80-80c18 0 34.6 6 48 16V48zM168 422.4V368h96v41c-21.2 9.3-36 30.4-36 55v24c0 11 9 20 20 20s20-9 20-20v-24c0-11 9-20 20-20s20 9 20 20v24c0 11 9 20 20 20s20-9 20-20v-24c0-24.6-14.8-45.7-36-55v-36.7c50.7 14 88 60.5 88 115.7 0 13.3 10.7 24 24 24s24-10.7 24-24c0-92.8-75.2-168-168-168H168C75.2 320 0 395.2 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24c0-49.2 29.6-91.5 72-110v44.4c-14.3 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.8-9.7-33.3-24-41.6M320 48v96c0 26.5 21.5 48 48 48h16v41.4c0 14.3 17.2 21.4 27.3 11.3L464 192h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48"})
);

export default LanUserMdChatRegular;
