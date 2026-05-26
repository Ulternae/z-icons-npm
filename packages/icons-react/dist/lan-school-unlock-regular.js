import React from 'react';

export const LanSchoolUnlockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M302.9 13.2c-8.7-6.9-21-6.9-29.7 0L127.7 128H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h305.3c-.9-5.2-1.3-10.6-1.3-16.1V464h-16v-80c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v80H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h72c5.4 0 10.6-1.8 14.9-5.2L288 62.6l137.1 108.2c4.2 3.3 9.5 5.2 14.9 5.2h72c1.4 0 2.8.2 4.1.5 3.9-.4 7.9-.5 11.9-.5 16.8 0 32.9 3.3 47.6 9.2C572.2 153.1 545 128 512 128h-63.7L302.8 13.2zM160 400v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16m-16-112c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm144-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128m272 48h48c-.1-44.1-35.8-79.9-80-79.9s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96v-47.9c0-17.7 14.3-32 32-32 17.6 0 31.9 14.3 32 31.9"})
);

export default LanSchoolUnlockRegular;
