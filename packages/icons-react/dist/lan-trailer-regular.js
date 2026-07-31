import React from 'react';

export const LanTrailerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 80c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h60.1c16.1-19.5 40.6-32 67.9-32s51.7 12.5 67.9 32H480c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zm231.9 336h-16.3c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 5.5-.7 10.9-2 16h74c13.3 0 24 10.7 24 24s-10.7 24-24 24zM384 152c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24zm-216-24c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m96 24c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24zm-40 312a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTrailerRegular;
