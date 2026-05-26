import React from 'react';

export const LanRadioAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M506.1-16.3c4.3-1.2 6.8-5.6 5.6-9.8s-5.6-6.8-9.8-5.6L53 91.4c-26.4 7.2-46 28.7-51.4 54.7-1 4.5-1.5 9.1-1.5 13.9L0 416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H96.6zM16 160.8c0-3.8.4-7.6 1.1-11.2C21.9 128.1 41 112 64 112h384c26.5 0 48 21.5 48 48v32H16zm0 47.2h480v208c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm352 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 144a80 80 0 1 0 0-160 80 80 0 1 0 0 160M80 304a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanRadioAltThin;
