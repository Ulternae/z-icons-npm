import React from 'react';

export const LanToolboxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8m-56 8v40H99.9C87.2 96 75 101.1 66 110.1l-51.9 51.8c-9 9-14.1 21.2-14.1 33.9V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V195.9c0-12.7-5.1-24.9-14.1-33.9L446 110.1c-9-9-21.2-14.1-33.9-14.1H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56M48 320h88v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h144v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16h88v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm0-48v-76.1L99.9 144h312.2l51.9 51.9V272h-88v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v16H184v-16c0-13.3-10.7-24-24-24s-24 10.7-24 24v16z"})
);

export default LanToolboxRegular;
