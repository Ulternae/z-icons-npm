import React from 'react';

export const LanArrowAltCircleUp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-84.7-272 84.7-84.7 84.7 84.7H304c-8.8 0-16 7.2-16 16v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88c0-8.8-7.2-16-16-16zm205.7-9L273 127c-9.4-9.4-24.6-9.4-33.9 0L135 231c-6.9 6.9-8.9 17.2-5.2 26.2S142.3 272 152 272h40v72c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-72h40c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2"})
);

export default LanArrowAltCircleUp;
