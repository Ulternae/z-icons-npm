import React from 'react';

export const LanTentArrowsDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m177.5 121-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24s24 10.7 24 24v86.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm256 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24s24 10.7 24 24v86.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64zm-201 279V230l-125.6 76.3-20 157.7h145.5zm48-126.3L344.4 464H426l-19.9-157.5-125.6-75.4zM37.1 476l23.2-183.4c1.2-9.7 6.8-18.3 15.1-23.3L238.8 170c10.2-6.2 22.9-6.2 33.1-.1l165.5 99.4c8.4 5 14 13.7 15.3 23.4L475.9 476c2.4 19.1-12.5 36-31.7 36H68.8c-19.3 0-34.2-16.9-31.7-36"})
);

export default LanTentArrowsDownRegular;
