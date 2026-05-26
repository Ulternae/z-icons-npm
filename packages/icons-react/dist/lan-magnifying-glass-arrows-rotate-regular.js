import React from 'react';

export const LanMagnifyingGlassArrowsRotateRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48c39.6 0 75.9 14.4 103.8 38.2L279 119c-6.9 6.9-8.9 17.2-5.2 26.2S286.3 160 296 160h96c13.3 0 24-10.7 24-24V40c0-9.7-5.8-18.5-14.8-22.2S381.9 16.2 375 23l-29.2 29.2C309.1 19.7 260.8 0 208 0 108.6 0 25.6 69.7 4.9 162.8c-2.9 12.9 5.3 25.8 18.2 28.6 1.4.3 2.7.5 4.1.5h2.3c10.6-.4 19.9-7.9 22.3-18.7C67.7 101.6 131.6 48 208 48m178 176c-10.4.7-19.4 8.1-21.8 18.8C348.3 314.5 284.4 368 208 368c-39.6 0-75.9-14.4-103.8-38.2L137 297c6.9-6.9 8.9-17.2 5.2-26.2S129.7 256 120 256H24c-13.3 0-24 10.7-24 24v96c0 9.7 5.8 18.5 14.8 22.2s19.3 1.6 26.2-5.2l29.2-29.2c36.7 32.5 85 52.2 137.8 52.2 48.8 0 93.7-16.8 129.1-44.9L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-133.8-134c19.2-24.2 33.1-52.8 40-84 2.9-12.9-5.3-25.8-18.2-28.6-1.2-.3-2.4-.4-3.6-.5h-3.2z"})
);

export default LanMagnifyingGlassArrowsRotateRegular;
