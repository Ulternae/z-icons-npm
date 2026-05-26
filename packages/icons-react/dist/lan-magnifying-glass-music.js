import React from 'react';

export const LanMagnifyingGlassMusic = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 384c51.7 0 99-18.8 135.3-50l141.4 141.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.3 50-83.6 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m64-304h-24c-13.3 0-24 10.7-24 24v72c-9.4-5.1-20.3-8-32-8-35.3 0-64 26.9-64 60s28.7 60 64 60 64-26.9 64-60c0-1.4 0-2.7-.1-4.1l.1.1V144h16c8.8 0 16-7.2 16-16s-7.2-16-16-16m-80 176c-19.6 0-32-14.5-32-28s12.4-28 32-28 32 14.5 32 28-12.4 28-32 28"})
);

export default LanMagnifyingGlassMusic;
