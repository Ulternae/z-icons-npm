import React from 'react';

export const LanNfcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm40 96h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V136c0-13.3-10.7-24-24-24H240c-13.3 0-24 10.7-24 24v72.7c-22.7 3.8-40 23.6-40 47.3 0 26.5 21.5 48 48 48s48-21.5 48-48c0-23.8-17.3-43.5-40-47.3V136c0-4.4 3.6-8 8-8h104c4.4 0 8 3.6 8 8v240c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8m120 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanNfcThin;
