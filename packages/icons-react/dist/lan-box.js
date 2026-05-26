import React from 'react';

export const LanBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V160h384zM39.3 128l47.6-66.6c6-8.4 15.7-13.4 26-13.4H208v80zm200.7 0V48h95.1c10.3 0 20 5 26 13.4l47.6 66.6zM11.9 111.3C4.2 122.2 0 135.2 0 148.5V416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V148.5c0-13.3-4.2-26.3-11.9-37.2l-49-68.5c-12-16.8-31.4-26.8-52-26.8H112.9c-20.6 0-40 10-52 26.8z"})
);

export default LanBox;
