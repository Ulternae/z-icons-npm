import React from 'react';

export const LanMicrophoneCircleAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208-112c0-26.5 21.5-48 48-48s48 21.5 48 48h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-72 64c13.3 0 24 10.7 24 24v8c0 53 43 96 96 96s96-43 96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 71.4-51.9 130.6-120 142v18c0 13.3-10.7 24-24 24s-24-10.7-24-24v-18c-68.1-11.4-120-70.7-120-142v-8c0-13.3 10.7-24 24-24"})
);

export default LanMicrophoneCircleAltRegular;
