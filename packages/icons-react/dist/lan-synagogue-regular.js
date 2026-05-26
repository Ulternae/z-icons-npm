import React from 'react';

export const LanSynagogueRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 16c-44.2 0-80 35.8-80 80v352c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V96c0-44.2-35.8-80-80-80s-80 35.8-80 80v10.8L299.7 51.1c-7.2-4-16.1-4-23.3 0L176 106.8V96c0-44.2-35.8-80-80-80m32 112H64V96c0-17.7 14.3-32 32-32s32 14.3 32 32zm-64 48h64v288H80c-8.8 0-16-7.2-16-16zm112-14.3 112-62.2 112 62.2V464h-48v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64v64h-48zM448 176h64v272c0 8.8-7.2 16-16 16h-48zm64-48h-64V96c0-17.7 14.3-32 32-32s32 14.3 32 32zM288 232a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanSynagogueRegular;
