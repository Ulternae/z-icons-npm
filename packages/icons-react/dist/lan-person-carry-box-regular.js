import React from 'react';

export const LanPersonCarryBoxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 24A56 56 0 1 0 8 24a56 56 0 1 0 112 0m-55.6 88C28.8 112 0 140.8 0 176.4V272c0 27.7 13 53.8 35.2 70.4L112 400c10.1 7.6 16 19.4 16 32v88c0 13.3 10.7 24 24 24s24-10.7 24-24v-88c0-27.7-13-53.8-35.2-70.4L128 352v-97.9c16.5 21.2 42.1 33.9 69.4 33.9H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v111.6c-12.3-1.7-23.2-9-29.4-20l-42.1-74.8C109.1 124.5 87.6 112 64.4 112M0 520c0 13.3 10.7 24 24 24s24-10.7 24-24V409l-37-29.6c-3.9-3.1-7.6-6.4-11-9.9zm80-344v144l-20.3-20.3C52.2 292.2 48 282 48 271.4V176c0-8.8 7.2-16 16-16s16 7.2 16 16m160 64v-96h96v96z"})
);

export default LanPersonCarryBoxRegular;
