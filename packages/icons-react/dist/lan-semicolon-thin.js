import React from 'react';

export const LanSemicolonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48.4 128a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-16 222.4c0 8.5-2.4 16.9-6.8 24.2L69.4 486.2c-3.7 6.1-10.3 9.8-17.5 9.8-12.7 0-22.4-11.5-20.1-24.1l23.4-130.8C59 319.7 77.7 304 99.5 304c24.8 0 45 20.1 45 45v1.5zm16 0v-1.5c0-33.7-27.3-61-61-61-29.5 0-54.8 21.2-60 50.2l-23.3 131C12.1 491.4 29.3 512 52 512c12.7 0 24.5-6.6 31.1-17.4L151.3 383c6-9.8 9.2-21.1 9.2-32.6z"})
);

export default LanSemicolonThin;
