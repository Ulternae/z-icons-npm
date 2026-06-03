import React from 'react';

export const LanHouseLaptopRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -15.975 640 559.975',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M239.4-9.3c9.3-8.9 24-8.9 33.3 0l216 208c9.5 9.2 9.8 24.4.6 33.9s-24.4 9.8-33.9.6L256 41.3 112 180v204c0 8.8 7.2 16 16 16h112v48H128c-35.3 0-64-28.7-64-64V226.2l-7.4 7.1c-9.5 9.2-24.7 8.9-33.9-.6s-8.9-24.7.6-33.9l216-208zM304 216v40c-23.7 0-44.4 12.9-55.4 32H232c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24m32 136v144h192V352zm-48-16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h36c6.6 0 12 5.4 12 12 0 19.9-16.1 36-36 36H276c-19.9 0-36-16.1-36-36 0-6.6 5.4-12 12-12h36z"})
);

export default LanHouseLaptopRegular;
