import React from 'react';

export const LanTentThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M42.8 208.5 19.6 446.4c-.9 9.4 6.5 17.6 15.9 17.6h212.7V57.7c-3.6.8-7.1 2.2-10.3 4.3L64.7 172.7c-12.4 7.9-20.5 21.1-21.9 35.8M264.2 58.2v179.4L412.5 464h64.4c9.5 0 16.8-8.2 15.9-17.6l-23.2-237.7c-1.4-14.7-9.6-28-22.1-35.9L272.3 61.9c-2.6-1.6-5.3-2.8-8.1-3.7m0 208.6V464h129.2zM3.7 444.9l23.2-238c1.9-19.5 12.7-37.1 29.2-47.7L229.3 48.5c15.7-10 35.8-10.1 51.5-.1l175.3 110.9c16.7 10.6 27.5 28.2 29.5 47.8l23.2 237.8c1.8 18.8-12.9 35.1-31.8 35.1H35.5c-18.9 0-33.7-16.3-31.8-35.1"})
);

export default LanTentThin;
