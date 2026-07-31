import React from 'react';

export const LanPersonDiggingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 40a56 56 0 1 1 112 0 56 56 0 1 1-112 0M10.5 181.3c5.9-11.9 20.3-16.7 32.2-10.7l31.8 15.9 11.9-19.8c17.4-29 49.1-46.6 82.7-46.6 42.7 0 81 28.2 92.8 69.6l30.2 105.6 106.1 53 15.5-25.8c15.5-25.9 53.1-25.9 68.6 0l77.3 128.9c16 26.7-3.2 60.6-34.3 60.6H370.6c-31.1 0-50.3-33.9-34.3-60.6l37.1-61.9L21.2 213.4c-11.9-5.9-16.7-20.3-10.7-32.2zm223.4 84.9-18.1-63.3c-5.8-20.4-25-34.8-46.7-34.8-17 0-33 9-41.6 23.3l-10 16.7 116.3 58.2zM91.3 314.8l120 64c7.8 4.2 12.7 12.3 12.7 21.2v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-73.6l-83-44.3-46.5 126.2c-4.6 12.4-18.4 18.8-30.8 14.2s-18.8-18.4-14.2-30.8l56-152c2.4-6.5 7.5-11.7 14-14.1s13.7-2 19.8 1.3zM448 358.6 384.8 464h126.4z"})
);

export default LanPersonDiggingRegular;
