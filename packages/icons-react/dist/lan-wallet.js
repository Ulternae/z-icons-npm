import React from 'react';

export const LanWallet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 32C35.8 32 0 67.8 0 112v256c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V176c0-44.2-35.8-80-80-80H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h384c8.8 0 16-7.2 16-16s-7.2-16-16-16zm304 264a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanWallet;
