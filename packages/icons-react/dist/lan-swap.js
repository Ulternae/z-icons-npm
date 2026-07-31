import React from 'react';

export const LanSwap = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M28.4 160H80v208c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-44.2 35.8-80 80-80s80 35.8 80 80v208h-51.6c-15.7 0-28.4 12.9-28.4 28.8 0 7.6 3 15 8.3 20.4l70.7 71.7c9.4 9.5 24.6 9.5 33.9 0l70.7-71.7c5.3-5.4 8.3-12.7 8.3-20.4 0-15.9-12.7-28.8-28.4-28.8h-51.6V144c0-61.9-50.1-112-112-112S272 82.1 272 144v224c0 44.2-35.8 80-80 80s-80-35.8-80-80V160h51.6c15.7 0 28.4-12.9 28.4-28.8 0-7.6-3-15-8.3-20.4L113 39.1c-9.4-9.5-24.6-9.5-33.9 0L8.3 110.8C3 116.2 0 123.5 0 131.2 0 147.1 12.7 160 28.4 160M480 384h59.7L480 444.5 420.3 384zM96 67.5l59.7 60.5H36.3z"})
);

export default LanSwap;
