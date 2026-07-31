import React from 'react';

export const LanDittoRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 104c0-13.3 10.7-24 24-24s24 10.7 24 24c0 2.9-.1 4.7-.4 6.1L72 252 48.4 110.1c-.2-1.4-.4-3.2-.4-6.1m24-72C32.2 32 0 64.2 0 104c0 3.9.1 8.8 1 14l24.4 146.5C29.2 287.3 48.9 304 72 304s42.8-16.7 46.6-39.5L143 118c.9-5.3 1-10.2 1-14 0-39.8-32.2-72-72-72m152 72c0-13.3 10.7-24 24-24s24 10.7 24 24c0 2.9-.1 4.7-.4 6.1L248 252l-23.6-141.9c-.2-1.4-.4-3.2-.4-6.1m24-72c-39.8 0-72 32.2-72 72 0 3.9.1 8.8 1 14l24.4 146.5c3.8 22.8 23.5 39.5 46.6 39.5s42.8-16.7 46.6-39.5L319 118c.9-5.3 1-10.2 1-14 0-39.8-32.2-72-72-72"})
);

export default LanDittoRegular;
