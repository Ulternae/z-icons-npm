import React from 'react';

export const LanCommentsAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312-32c39.8 0 72 32.2 72 72v192c0 39.8-32.2 72-72 72H208l-83.4 75.8c-2.9 2.7-6.8 4.2-10.8 4.2H112c-8.8 0-16-7.2-16-16v-64H72c-39.8 0-72-32.2-72-72V40C0 .2 32.2-32 72-32zM192 392v-8.6l34.6-31.4H312c66.3 0 120-53.7 120-120V128h72c39.8 0 72 32.2 72 72v192c0 39.8-32.2 72-72 72h-24v64c0 8.8-7.2 16-16 16h-1.8c-4 0-7.8-1.5-10.8-4.2L368 464H264c-39.8 0-72-32.2-72-72"})
);

export default LanCommentsAltSolid;
