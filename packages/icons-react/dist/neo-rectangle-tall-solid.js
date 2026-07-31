import React from 'react';

export const NeoRectangleTallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -56 392 672.15',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M196-56c-35.6 0-65.9 1.7-91.2 7.2C79.2-43.3 57-33.6 39.7-16.3s-27 39.5-32.5 65.1C1.7 74.1 0 104.4 0 140v280c0 35.6 1.7 65.9 7.2 91.2 5.5 25.6 15.2 47.8 32.5 65.1s39.5 27 65.1 32.5c45.4 9.8 137 9.8 182.4 0 25.6-5.5 47.8-15.2 65.1-32.5s27-39.5 32.5-65.1c5.5-25.3 7.2-55.7 7.2-91.2V140c0-35.6-1.7-65.9-7.2-91.2-5.5-25.6-15.2-47.8-32.5-65.1s-39.5-27-65.1-32.5C261.9-54.3 231.6-56 196-56"})
);

export default NeoRectangleTallSolid;
