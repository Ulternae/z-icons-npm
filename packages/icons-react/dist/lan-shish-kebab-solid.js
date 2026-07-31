import React from 'react';

export const LanShishKebabSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M438.6 73.4c-12.5-12.5-32.8-12.5-45.3 0-11.5 11.5-12.4 29.7-2.7 42.2 11.1 14.2 13.3 37.7-3 53.9L346.1 211l-45.3-45.3 28.4-28.4c-17-35.7-10.8-79.7 18.8-109.3 37.5-37.5 98.3-37.5 135.8 0 31.4 31.4 36.5 79.2 15.3 115.9-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c7.1-12.2 5.3-28.2-5.1-38.6zM61.8 405l45.3 45.3-52.4 52.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3zm182.5-250.7 113.4 113.4c15.6 15.6 15.6 40.9 0 56.6l-25.4 25.4c-15.6 15.6-40.9 15.6-56.6 0L162.3 236.3c-15.6-15.6-15.6-40.9 0-56.6l25.4-25.4c15.6-15.6 40.9-15.6 56.6 0m-168.6 112c15.6-15.6 40.9-15.6 56.6 0l113.4 113.4c15.6 15.6 15.6 40.9 0 56.6l-25.4 25.4c-15.6 15.6-40.9 15.6-56.6 0L50.3 348.3c-15.6-15.6-15.6-40.9 0-56.6z"})
);

export default LanShishKebabSolid;
