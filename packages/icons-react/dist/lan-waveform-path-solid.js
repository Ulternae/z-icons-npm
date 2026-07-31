import React from 'react';

export const LanWaveformPathSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 4c15.5 0 28 12.5 28 28v448c0 15.5-12.5 28-28 28s-28-12.5-28-28V32c0-15.5 12.5-28 28-28m192 64c15.5 0 28 12.5 28 28v320c0 15.5-12.5 28-28 28s-28-12.5-28-28V96c0-15.5 12.5-28 28-28m-288 32c15.5 0 28 12.5 28 28v256c0 15.5-12.5 28-28 28s-28-12.5-28-28V128c0-15.5 12.5-28 28-28m192 32c15.5 0 28 12.5 28 28v192c0 15.5-12.5 28-28 28s-28-12.5-28-28V160c0-15.5 12.5-28 28-28M48 196c15.5 0 28 12.5 28 28v64c0 15.5-12.5 28-28 28s-28-12.5-28-28v-64c0-15.5 12.5-28 28-28m480 0c15.5 0 28 12.5 28 28v64c0 15.5-12.5 28-28 28s-28-12.5-28-28v-64c0-15.5 12.5-28 28-28"})
);

export default LanWaveformPathSolid;
