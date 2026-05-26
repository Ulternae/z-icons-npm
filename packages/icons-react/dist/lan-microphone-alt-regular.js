import React from 'react';

export const LanMicrophoneAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 96c0-26.5-21.5-48-48-48s-48 21.5-48 48v128c0 26.5 21.5 48 48 48s48-21.5 48-48h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24v-32h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24zM192 0c53 0 96 43 96 96v128c0 53-43 96-96 96s-96-43-96-96V96c0-53 43-96 96-96M24 160c13.3 0 24 10.7 24 24v40c0 79.5 64.5 144 144 144s144-64.5 144-144v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 97.9-73.3 178.7-168 190.5V464h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-49.5C73.3 402.7 0 321.9 0 224v-40c0-13.3 10.7-24 24-24"})
);

export default LanMicrophoneAltRegular;
