import React from 'react';

export const LanEnvelopeCircleUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M125.4 64C91.5 64 64 91.5 64 125.4c0 .9 0 1.7.1 2.6H64v256c0 35.3 28.7 64 64 64h193.4c-6.9-15.1-11.9-31.2-14.8-48H128c-8.8 0-16-7.2-16-16V192.3l154.8 117.4c12.5 9.5 26.8 15.2 41.6 17.1 3.7-16.8 9.5-32.8 17.3-47.6-10.3 1.5-21.1-1.1-29.9-7.7L117.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7 0-7.4 6-13.4 13.4-13.4H512c8.8 0 16 7.2 16 16v50.7c16.8 2.8 32.9 7.8 48 14.8v-65.4c0-35.3-28.7-64-64-64zM640 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-66.3 80.7C553.5 468.1 526.2 480 496 480s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7M448 336a48 48 0 1 1 96 0 48 48 0 1 1-96 0"})
);

export default LanEnvelopeCircleUserRegular;
