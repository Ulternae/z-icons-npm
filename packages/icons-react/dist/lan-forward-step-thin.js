import React from 'react';

export const LanForwardStepThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M376 32c-4.4 0-8 3.6-8 8v199.7l-26-17.1-280-184c-12.3-8.1-28-8.8-41-1.8S0 57.3 0 72v368c0 14.7 8.1 28.2 21 35.2s28.7 6.3 41-1.8l280-184 26-17.1V472c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m-12.3 224-30.5 20.1-280 184c-7.4 4.8-16.8 5.3-24.6 1.1S16 448.8 16 440V72c0-8.8 4.8-16.9 12.6-21.1s17.2-3.8 24.6 1.1l280 184 30.5 20.1z"})
);

export default LanForwardStepThin;
