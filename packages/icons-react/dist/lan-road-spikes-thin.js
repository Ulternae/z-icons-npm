import React from 'react';

export const LanRoadSpikesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M580.2 336c12.8 0 20.4-14.2 13.3-24.9L464 116.8V336zM448 256V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.8-26.6 49.8H64V116.8c0-15.8 20.5-22 29.3-8.9l98.7 148V116.7c0-15.8 20.5-22 29.3-8.9l98.7 148V116.6c0-15.8 20.5-22 29.3-8.9zm0 28.8-112-168V336h112zM320 336v-51.2l-112-168V336zM80 116.8V336h112v-51.2zM0 440c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"})
);

export default LanRoadSpikesThin;
