import React from 'react';

export const LanMarsStrokeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 24c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9L409.9 136l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23-27.7 27.7C370.7 227.1 384 264 384 303.9c0 97.2-78.8 176-176 176S32 401.2 32 304s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L342 136l-23-23c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23L430 48h-54.1c-13.3 0-24-10.7-24-24zM208 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256"})
);

export default LanMarsStrokeRegular;
