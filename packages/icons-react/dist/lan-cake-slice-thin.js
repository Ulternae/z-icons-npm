import React from 'react';

export const LanCakeSliceThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M294.3 51.3c2.8-2.1 6.2-3.3 9.7-3.3 79.5 0 192 69.9 192 208H26.6zM16 272h480v80H16zm480 96v48c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-48zM304 32c-7 0-13.9 2.3-19.4 6.6l-272 208C4.6 252.6 0 262 0 272v144c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V256c0-148.3-121.1-224-208-224"})
);

export default LanCakeSliceThin;
