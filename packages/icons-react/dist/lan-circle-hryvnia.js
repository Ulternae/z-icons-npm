import React from 'react';

export const LanCircleHryvnia = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16.3-393.6-82.2 9.7c-8.8 1-15.1 9-14 17.8s9 15.1 17.8 14l82.2-9.7c19.1-2.3 36 12.7 36 32 0 10.2-4.8 19.7-12.9 25.8H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-13.4c3.5-8 5.4-16.8 5.4-25.8 0-38.4-33.5-68.3-71.7-63.8M260.8 272H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h13.5c-3.6 8.1-5.5 16.9-5.5 26 0 38.4 33.2 68.3 71.4 64.2l98.3-10.3c8.8-.9 15.2-8.8 14.2-17.6s-8.8-15.2-17.6-14.2L236 362.4c-19.3 2-36-13.1-36-32.4 0-10.3 4.8-19.9 12.9-26h139c8.8 0 16-7.2 16-16s-7.2-16-16-16h-91.2z"})
);

export default LanCircleHryvnia;
