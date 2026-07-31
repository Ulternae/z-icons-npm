import React from 'react';

export const LanRouteInterstate = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M54 63.9c59.3 21.8 141.9 11.9 202.3-28.3 60.4 40.2 143 50.1 202.3 28.3 3.3 34.5 5.1 66.4 5.1 96.1H48.5c.2-29.8 2.2-61.8 5.5-96.1M49 192h414c-2.3 44.8-9.9 84.2-24.8 119.4-27.8 66-82.2 119.8-182.3 167.1-101.5-43.3-155.8-96.9-183.1-163.7-14.8-36.1-22-76.7-23.9-122.8zM270.4 6.4c-8.4-5.9-19.7-5.9-28.1 0C186.6 45.5 107.5 53 57.8 30.9 43.6 24.6 25 33 23.2 50.6 12.3 158.8 12.1 250.5 43.4 326.9c31.7 77.4 94.5 136.7 203.5 182.5 6.2 2.6 13.4 2.5 19.5-.4 106.7-49.8 169.3-109 201.4-185.2 31.8-75.4 32.7-165 21.8-273.2-1.8-17.6-20.4-26.1-34.6-19.7C405.3 53 326.2 45.5 270.5 6.4z"})
);

export default LanRouteInterstate;
